"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { User } from '@/interface/chat.interface';
import GroupMembersModal from './GroupMembersModal';
import GroupInfoModal from './GroupInfoModal';
import EditGroupModal from './EditGroupModal';


interface ChatHeaderProps {
  chatInfo: {
    name: string;
    image: string;
    isSingle: boolean;
    description?: string;
    participants?: User[];
    isCompanyWide?: boolean;
    admins?: string[];
    icon?: string;
  };
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ chatInfo }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.chat);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  // Check if current user is admin of this group
  const isAdmin = !chatInfo.isSingle && chatInfo.admins?.includes(currentUser?.id || '');
  
  // Toggle dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="chatbox__chatting-top">
      <div className="chatbox__header">
        <div className="chatting__user">
          <div className="chatting__user-thumb" style={{ aspectRatio: '1/1' }}>
            <Image 
              src={chatInfo.image} 
              width={100} 
              height={100} 
              alt={chatInfo.name} 
              className="object-cover w-full h-full"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <div className="chatting__user-content">
            <h5 className="chatting__user-info">{chatInfo.name}</h5>
            {!chatInfo.isSingle && (
              <p className="text-sm text-gray-500">
                {chatInfo.isCompanyWide ? 'Company-wide group' : `${chatInfo.participants?.length || 0} members`}
              </p>
            )}
          </div>
        </div>
        <div className="chatbox__header-notification relative">
          {!chatInfo.isSingle && (
            <button onClick={() => setShowInfoModal(true)} className="mr-3">
              <i className="fa-light fa-info-circle"></i>
            </button>
          )}
          
          {!chatInfo.isSingle && isAdmin && !chatInfo.isCompanyWide && (
            <>
              <button onClick={toggleMenu} className="mr-3">
                <i className="fa-light fa-ellipsis-vertical"></i>
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button 
                    onClick={() => { setShowMembersModal(true); setIsMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Manage Members
                  </button>
                  <button 
                    onClick={() => { setShowEditModal(true); setIsMenuOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Edit Group
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Group Info Modal */}
      {showInfoModal && (
        <GroupInfoModal 
          chatInfo={chatInfo}
          onClose={() => setShowInfoModal(false)} 
        />
      )}
      
      {/* Group Members Modal */}
      {showMembersModal && (
        <GroupMembersModal 
          chatInfo={chatInfo}
          onClose={() => setShowMembersModal(false)} 
        />
      )}
      
      {/* Edit Group Modal */}
      {showEditModal && (
        <EditGroupModal 
          chatInfo={chatInfo}
          onClose={() => setShowEditModal(false)} 
        />
      )}
    </div>
  );
};

export default ChatHeader; 