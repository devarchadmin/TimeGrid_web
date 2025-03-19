"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { CompanyChat, DirectChat, GroupChat, Message } from '@/interface/chat.interface';
import ChattingFooter from './ChattingFooter';
import { format } from 'date-fns';
import ChatHeader from './ChatHeader';

const ChatWindow = () => {
  const dispatch = useDispatch();
  const { chats, activeChat, users, currentUser } = useSelector((state: RootState) => state.chat);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Find the active chat
  const activeChatData = chats.find(chat => chat.id === activeChat);

  // Group messages by date
  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [date: string]: Message[] } = {};

    messages.forEach(message => {
      const date = new Date(message.timestamp).toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });

    return Object.entries(groups).map(([date, messages]) => ({
      date,
      messages
    }));
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChatData?.messages]);

  // Get chat info
  const getChatInfo = () => {
    if (!activeChatData) return null;

    if (activeChatData.type === 'direct') {
      const otherParticipant = activeChatData.participants.find(p => p.id !== currentUser?.id);
      return {
        name: otherParticipant?.name || 'Unknown',
        image: otherParticipant?.avatar || '',
        isSingle: true
      };
    } else {
      return {
        name: activeChatData.name,
        image: activeChatData.icon || './assets/images/logo/GW-Fav.svg',
        isSingle: false,
        description: activeChatData.description,
        participants: activeChatData.participants,
        isCompanyWide: 'isCompanyWide' in activeChatData ? activeChatData.isCompanyWide : false,
        admins: activeChatData.admins
      };
    }
  };

  const chatInfo = getChatInfo();
  const messageGroups = activeChatData ? groupMessagesByDate(activeChatData.messages) : [];

  // Format the time
  const formatTime = (timestamp: string) => {
    return format(new Date(timestamp), 'HH:mm');
  };

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return format(date, 'MMMM dd, yyyy');
    }
  };

  // Find user by ID
  const findUser = (userId: string) => {
    return users.find(user => user.id === userId);
  };

  if (!activeChatData || !chatInfo) {
    return (
      <div className="chatbox__chatting-wrapper flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl text-gray-500 mb-2">No chat selected</h3>
          <p className="text-gray-400">Select a chat from the sidebar to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="chatbox__chatting-wrapper">
      <ChatHeader chatInfo={chatInfo} />
      <div className="chatbox__chatting-body p-4 overflow-y-auto max-h-[calc(100vh-250px)]">
        {messageGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <div className="chat__message-item is-time">
              <span>{formatDate(group.date)}</span>
            </div>

            {group.messages.map((message, messageIndex) => {
              const isCurrentUser = message.sender === currentUser?.id;
              const sender = findUser(message.sender);

              return (
                <div
                  key={message.id}
                  className={`chat__message-item ${isCurrentUser ? 'is-right' : ''} mt-5`}
                >
                  {message.attachments && message.attachments.length > 0 && (
                    <div className="chat__message-item-pdf flex items-end gap-2">
                      {!isCurrentUser && (
                        <div className="w-8 h-8 rounded-full overflow-hidden hidden sm:block" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={sender?.avatar || './assets/images/logo/GW-Fav.svg'}
                            width={32}
                            height={32}
                            alt={sender?.name || 'Unknown'}
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <Image
                          src={message.attachments[0].preview || message.attachments[0].url}
                          width={100}
                          height={100}
                          className="w-full rounded-lg rounded-b-none"
                          priority
                          alt={message.attachments[0].name}
                        />
                        <div className="chat__message-title">
                          <p>{message.attachments[0].name}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {message.attachments && message.attachments.length === 0 && (
                    <div className="flex items-end gap-2">
                      {!isCurrentUser && (
                        <div className="w-8 h-8 rounded-full overflow-hidden hidden sm:block" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={sender?.avatar || './assets/images/logo/GW-Fav.svg'}
                            width={32}
                            height={32}
                            alt={sender?.name || 'Unknown'}
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="chat__message-title">
                        <p>{message.content}</p>
                        <span className="message-time">{formatTime(message.timestamp)}</span>
                      </div>

                      {isCurrentUser && (
                        <div className="w-8 h-8 rounded-full overflow-hidden hidden sm:block" style={{ aspectRatio: '1/1' }}>
                          <Image
                            src={currentUser?.avatar || './assets/images/logo/GW-Fav.svg'}
                            width={32}
                            height={32}
                            alt={currentUser?.name || 'You'}
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>)}
                </div>
              );
            })}
          </React.Fragment>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChattingFooter chatId={activeChatData.id} />
    </div>
  );
};

export default ChatWindow; 