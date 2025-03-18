"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { deleteGroup, editGroup } from '@/redux/features/chatSlice';

interface EditGroupModalProps {
  chatInfo: {
    name: string;
    description?: string;
  };
  onClose: () => void;
}

const EditGroupModal: React.FC<EditGroupModalProps> = ({ chatInfo, onClose }) => {
  const dispatch = useDispatch();
  const { activeChat } = useSelector((state: RootState) => state.chat);
  
  const [groupName, setGroupName] = useState(chatInfo.name);
  const [groupDescription, setGroupDescription] = useState(chatInfo.description || '');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (groupName.trim() === '') {
      return;
    }
    
    dispatch(editGroup({
      chatId: activeChat || '',
      name: groupName.trim(),
      description: groupDescription.trim()
    }));
    
    onClose();
  };
  
  // Handle group deletion
  const handleDeleteGroup = () => {
    dispatch(deleteGroup({
      chatId: activeChat || ''
    }));
    
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {!showDeleteConfirm ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Edit Group</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <i className="fa-light fa-times"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
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
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Description (Optional)</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={3}
                  value={groupDescription}
                  onChange={(e) => setGroupDescription(e.target.value)}
                ></textarea>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  Delete Group
                </button>
                
                <div className="flex space-x-2">
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
                    disabled={groupName.trim() === ''}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-red-500">Delete Group</h2>
              <button onClick={() => setShowDeleteConfirm(false)} className="text-gray-500 hover:text-gray-700">
                <i className="fa-light fa-times"></i>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="mb-4">
                Are you sure you want to delete <strong>{chatInfo.name}</strong>? This action cannot be undone.
              </p>
              <p className="text-sm text-gray-500">
                All conversations in this group will be permanently deleted.
              </p>
            </div>
            
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={handleDeleteGroup}
              >
                Delete Group
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditGroupModal; 