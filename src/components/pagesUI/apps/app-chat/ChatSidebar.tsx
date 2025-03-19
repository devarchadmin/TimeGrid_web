"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { setActiveChat, startDirectChat } from '@/redux/features/chatSlice';
import { CompanyChat, DirectChat, GroupChat } from '@/interface/chat.interface';
import { formatDistanceToNow } from 'date-fns';
import CreateGroupModal from './CreateGroupModal';

const ChatSidebar = () => {
  const dispatch = useDispatch();
  const { chats, activeChat, currentUser, users } = useSelector((state: RootState) => state.chat);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);

  // Sort chats by updated time (most recent first)
  const sortedChats = [...chats].sort((a, b) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Filter chats based on search query
  const filteredChats = searchQuery.trim() === ''
    ? sortedChats
    : sortedChats.filter(chat => {
      if (chat.type === 'direct') {
        // Search in direct chats by other participant's name
        const otherParticipant = chat.participants.find(p => p.id !== currentUser?.id);
        return otherParticipant?.name.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        // Search in group chats by group name
        return chat.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
    });

  // Function to handle chat selection
  const handleChatSelect = (chatId: string) => {
    dispatch(setActiveChat(chatId));
  };

  // Function to get chat name and image
  const getChatInfo = (chat: DirectChat | GroupChat | CompanyChat) => {
    if (chat.type === 'direct') {
      const otherParticipant = chat.participants.find(p => p.id !== currentUser?.id);
      return {
        name: otherParticipant?.name || 'Unknown',
        image: otherParticipant?.avatar || './assets/images/logo/GW-Fav.svg',
        status: otherParticipant?.status || 'offline',
        position: otherParticipant?.position || ''
      };
    } else {
      return {
        name: chat.name,
        image: chat.icon || './assets/images/logo/GW-Fav.svg',
        status: 'group',
        position: chat.description || ''
      };
    }
  };

  // Function to search for users
  const handleSearchUser = () => {
    if (searchQuery.trim() === '') return;

    // Find the user by name or ID
    const foundUser = users.find(user =>
      user.id !== currentUser?.id &&
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.id.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (foundUser) {
      dispatch(startDirectChat({ userId: foundUser.id }));
      setSearchQuery('');
    }
  };

  // Function to render unread count
  const renderUnreadCount = (chat: DirectChat | GroupChat | CompanyChat) => {
    const unreadCount = chat.messages.filter(msg =>
      msg.sender !== currentUser?.id && !msg.read
    ).length;

    if (unreadCount > 0) {
      return (
        <span className="text__number active">{unreadCount}</span>
      );
    } else if (chat.lastMessage && chat.lastMessage.sender === currentUser?.id) {
      return (
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
      );
    }
    return null;
  };

  // Format timestamp for display
  const formatTime = (timestamp: string) => {
    try {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    } catch (e) {
      return '';
    }
  };

  return (
    <div className="chatbox__inbox-wrapper !rounded-lg">
      <div className="chatbox__inbox-inner !rounded-lg">
        {/* Current user profile */}
        <div className="chatbox__author-item is-active">
          <div className="chatbox__author-content">
            <div className="chatbox__author-thumb">
              <Image
                src={currentUser?.avatar || ''}
                width={100}
                height={100}
                className="object-cover w-full h-full"
                style={{ objectPosition: 'center' }}
                alt="Current user"
              />
            </div>

            <div className="chatbox__author-info">
              <h5>{currentUser?.name}</h5>
              <span>{currentUser?.position}</span>
            </div>
          </div>
          <button
            onClick={() => setShowCreateGroupModal(true)}
            className="chatbox__edit !bg-primary !text-white"
          >
            <i className="fa-light fa-plus"></i>
          </button>
        </div>

        {/* Search input */}
        <div className="chatbox__inbox-search">
          <form onSubmit={(e) => { e.preventDefault(); handleSearchUser(); }}>
            <div className="chatbox__inbox-input">
              <input
                type="search"
                placeholder="Search users or chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="chatbox__inbox-btn !mt-[2px]"
                type="submit"
              >
                <i className="icon-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Chat list */}
        <div className="h-full overflow-y-auto">
          {filteredChats.map((chat) => {
            const chatInfo = getChatInfo(chat);
            const lastMessage = chat.lastMessage ?
              (chat.lastMessage.content.length > 30
                ? chat.lastMessage.content.substring(0, 30) + '...'
                : chat.lastMessage.content)
              : '??';

            return (
              <div
                key={chat.id}
                className={`chatbox__author-item cursor-pointer transition-colors hover:bg-gray-100 px-3 py-1 rounded-md
                ${activeChat === chat.id ? 'bg-gray-200 hover:bg-gray-200' : ''}`}
                onClick={() => handleChatSelect(chat.id)}
              >
                <div className="chatbox__author-content">
                  <div className="chatbox__author-thumb">
                    <Image
                      src={chatInfo.image}
                      width={100}
                      height={100}
                      alt={chatInfo.name}
                      className="object-cover w-full h-full"
                      style={{ objectPosition: 'center', aspectRatio: '1/1' }}
                    />

                    {chatInfo.status === 'online' && (
                      <span className="status-badge status-online"></span>
                    )}
                    {chatInfo.status === 'busy' && (
                      <span className="status-badge status-busy"></span>
                    )}
                    {chatInfo.status === 'away' && (
                      <span className="status-badge status-away"></span>
                    )}
                  </div>
                  <div className="chatbox__author-info">
                    <h5 className="text-base font-medium">{chatInfo.name}</h5>
                    <p>{lastMessage}</p>
                  </div>
                </div>
                <div className="chatbox__notification">
                  <span className="time">{chat.lastMessage ? formatTime(chat.lastMessage.timestamp) : ''}</span>
                  {renderUnreadCount(chat)}
                </div>
              </div>
              
            );
          })}
        </div>
      </div>

      {/* Create Group Modal */}
      {showCreateGroupModal && (
        <CreateGroupModal onClose={() => setShowCreateGroupModal(false)} />
      )}
    </div>
  );
};

export default ChatSidebar; 