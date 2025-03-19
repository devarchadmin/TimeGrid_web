"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { User } from '@/interface/chat.interface';

interface GroupInfoModalProps {
  chatInfo: {
    name: string;
    description?: string;
    participants?: User[];
    admins?: string[];
    isCompanyWide?: boolean;
    image?: string;
  };
  onClose: () => void;
}

const GroupInfoModal: React.FC<GroupInfoModalProps> = ({ chatInfo, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter participants based on search
  const filteredParticipants = chatInfo.participants?.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{chatInfo.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fa-light fa-times"></i>
          </button>
        </div>
        
        {/* Group Icon */}
        <div className="mb-4 flex justify-center">
          <div className="w-20 h-20 rounded-full overflow-hidden" style={{ aspectRatio: '1/1' }}>
            <Image 
              src={chatInfo.image || './assets/images/logo/GW-Fav.svg'} 
              width={80} 
              height={80} 
              alt={chatInfo.name}
              className="object-cover w-full h-full"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
        
        {chatInfo.description && (
          <div className="mb-4 pb-4 border-b border-gray-200">
            <h3 className="text-sm font-medium mb-2 text-gray-500">Description</h3>
            <p>{chatInfo.description}</p>
          </div>
        )}
        
        <div className="mb-3">
          <h3 className="text-sm font-medium mb-2 text-gray-500">
            Members ({chatInfo.participants?.length || 0})
          </h3>
          
          <div className="relative mb-3">
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
          
          <div className="max-h-60 overflow-y-auto">
            {filteredParticipants.map(user => {
              const isAdmin = chatInfo.admins?.includes(user.id) || false;
              
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
                  
                  <div className="flex items-center">
                    {user.status && (
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        user.status === 'online' ? 'bg-green-500' : 
                        user.status === 'busy' ? 'bg-red-500' : 
                        user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                      }`}></span>
                    )}
                    <span className="text-xs text-gray-500">
                      {user.status === 'online' ? 'Online' : 
                       user.status === 'busy' ? 'Busy' : 
                       user.status === 'away' ? 'Away' : 'Offline'}
                    </span>
                  </div>
                </div>
              );
            })}
            
            {filteredParticipants.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                No members found
              </div>
            )}
          </div>
        </div>
        
        {chatInfo.isCompanyWide && (
          <div className="text-sm text-center text-gray-500 border-t border-gray-200 pt-3">
            This is a company-wide group. All employees are automatically members.
          </div>
        )}
        
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupInfoModal; 