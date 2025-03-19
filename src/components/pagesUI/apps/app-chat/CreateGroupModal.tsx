"use client";
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { createGroup } from '@/redux/features/chatSlice';
import Image from 'next/image';

interface CreateGroupModalProps {
  onClose: () => void;
}

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { users, currentUser } = useSelector((state: RootState) => state.chat);
  
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [groupIcon, setGroupIcon] = useState<string>('./assets/images/logo/GW-Fav.svg');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Filter users (exclude current user and already in company chat)
  const availableUsers = users.filter(user => 
    user.id !== currentUser?.id && 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Toggle user selection
  const toggleUserSelection = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };
  
  // Handle image selection
  const handleImageSelect = () => {
    fileInputRef.current?.click();
  };
  
  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setGroupIcon(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (groupName.trim() === '' || selectedUsers.length === 0) {
      return;
    }
    
    dispatch(createGroup({
      name: groupName.trim(),
      description: groupDescription.trim(),
      participants: selectedUsers,
      icon: groupIcon
    }));
    
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Create New Group</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fa-light fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Group Icon */}
          <div className="mb-6 flex flex-col items-center">
            <div 
              className="w-24 h-24 rounded-full overflow-hidden mb-2 relative cursor-pointer" 
              onClick={handleImageSelect}
              style={{ aspectRatio: '1/1' }}
            >
              <Image 
                src={groupIcon} 
                fill
                alt="Group icon" 
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <i className="fa-light fa-camera text-white text-xl"></i>
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageChange}
            />
            <p className="text-sm text-gray-500">Click to upload a group icon</p>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Group Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description (Optional)</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2"
              rows={3}
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Add Members</label>
            <div className="border border-gray-300 rounded-md p-2">
              <div className="mb-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Search employees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="max-h-40 overflow-y-auto">
                {availableUsers.map(user => (
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
                      <div className="h-8 w-8 rounded-full overflow-hidden mr-2" style={{ aspectRatio: '1/1' }}>
                        <Image 
                          src={user.avatar} 
                          width={32} 
                          height={32} 
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
                
                {availableUsers.length === 0 && (
                  <div className="p-2 text-gray-500 text-center">No users found</div>
                )}
              </div>
            </div>
            
            {selectedUsers.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                {selectedUsers.length} members selected
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md"
              disabled={groupName.trim() === '' || selectedUsers.length === 0}
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroupModal; 