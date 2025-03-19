"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addParticipants, makeAdmin, removeAdmin, removeParticipant } from '@/redux/features/chatSlice';
import Image from 'next/image';
import { User } from '@/interface/chat.interface';

interface GroupMembersModalProps {
  chatInfo: {
    name: string;
    participants?: User[];
    admins?: string[];
  };
  onClose: () => void;
}

const GroupMembersModal: React.FC<GroupMembersModalProps> = ({ chatInfo, onClose }) => {
  const dispatch = useDispatch();
  const { activeChat, users, currentUser } = useSelector((state: RootState) => state.chat);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddMembers, setShowAddMembers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  
  // Filter participants based on search
  const filteredParticipants = chatInfo.participants?.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];
  
  // Get non-members for adding to the group
  const nonMembers = users.filter(user => 
    !chatInfo.participants?.some(p => p.id === user.id) &&
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Toggle user selection for adding to group
  const toggleUserSelection = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };
  
  // Add selected users to the group
  const handleAddMembers = () => {
    if (selectedUsers.length === 0) return;
    
    dispatch(addParticipants({
      chatId: activeChat || '',
      userIds: selectedUsers
    }));
    
    setSelectedUsers([]);
    setShowAddMembers(false);
    setSearchQuery('');
  };
  
  // Remove participant from group
  const handleRemoveParticipant = (userId: string) => {
    if (userId === currentUser?.id) return; // Can't remove self
    
    dispatch(removeParticipant({
      chatId: activeChat || '',
      userId
    }));
  };
  
  // Make a user admin
  const handleMakeAdmin = (userId: string) => {
    dispatch(makeAdmin({
      chatId: activeChat || '',
      userId
    }));
  };
  
  // Remove admin status
  const handleRemoveAdmin = (userId: string) => {
    if (userId === currentUser?.id) return; // Can't remove own admin status
    
    dispatch(removeAdmin({
      chatId: activeChat || '',
      userId
    }));
  };
  
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {showAddMembers ? 'Add Members' : `${chatInfo.name} - Members`}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fa-light fa-times"></i>
          </button>
        </div>
        
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 pl-8"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-2 top-2.5 text-gray-400">
              <i className="fa-light fa-search"></i>
            </div>
          </div>
        </div>
        
        {!showAddMembers ? (
          <>
            <div className="max-h-64 overflow-y-auto mb-4">
              {filteredParticipants.map(user => {
                const isAdmin = chatInfo.admins?.includes(user.id) || false;
                const canManage = user.id !== currentUser?.id && (currentUser?.id && chatInfo.admins?.includes(currentUser.id));
                
                return (
                  <div key={user.id} className="flex items-center justify-between p-2 hover:bg-gray-100">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full overflow-hidden mr-3" style={{ aspectRatio: '1/1' }}>
                        <Image 
                          src={user.avatar} 
                          width={40} 
                          height={40} 
                          alt={user.name} 
                          className="object-cover w-full h-full"
                          style={{ objectPosition: 'center' }}
                        />
                      </div>
                      <div>
                        <div className="font-medium flex items-center">
                          {user.name}
                          {isAdmin && (
                            <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded">
                              Admin
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{user.position}</div>
                      </div>
                    </div>
                    
                    {canManage && (
                      <div className="flex space-x-2">
                        {!isAdmin ? (
                          <button 
                            onClick={() => handleMakeAdmin(user.id)}
                            className="text-primary text-sm hover:underline"
                          >
                            Make Admin
                          </button>
                        ) : (
                          <button 
                            onClick={() => handleRemoveAdmin(user.id)}
                            className="text-orange-500 text-sm hover:underline"
                          >
                            Remove Admin
                          </button>
                        )}
                        
                        <button 
                          onClick={() => handleRemoveParticipant(user.id)}
                          className="text-red-500 text-sm hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {filteredParticipants.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  No members found
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-primary text-white rounded-md"
                onClick={() => {
                  setShowAddMembers(true);
                  setSearchQuery('');
                }}
              >
                Add Members
              </button>
              
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="max-h-64 overflow-y-auto mb-4">
              {nonMembers.map(user => (
                <div 
                  key={user.id}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => toggleUserSelection(user.id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => {}}
                    className="mr-2"
                  />
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3" style={{ aspectRatio: '1/1' }}>
                      <Image 
                        src={user.avatar} 
                        width={40} 
                        height={40} 
                        alt={user.name} 
                        className="object-cover w-full h-full"
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.position}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {nonMembers.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  No users available to add
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md"
                onClick={() => {
                  setShowAddMembers(false);
                  setSelectedUsers([]);
                  setSearchQuery('');
                }}
              >
                Back
              </button>
              
              <button
                type="button"
                className="px-4 py-2 bg-primary text-white rounded-md"
                onClick={handleAddMembers}
                disabled={selectedUsers.length === 0}
              >
                Add Selected
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GroupMembersModal; 