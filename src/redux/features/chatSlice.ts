import { ChatState, CompanyChat, DirectChat, GroupChat, Message, User } from '@/interface/chat.interface';
import { allChats, currentUser, users } from '@/data/chat-data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: ChatState = {
  chats: allChats,
  activeChat: allChats[0].id,
  users: users,
  currentUser: currentUser,
  loading: false,
  error: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActiveChat: (state, action: PayloadAction<string>) => {
      state.activeChat = action.payload;
      
      // Mark all messages in this chat as read
      const chat = state.chats.find(chat => chat.id === action.payload);
      if (chat) {
        chat.messages = chat.messages.map(message => ({
          ...message,
          read: true
        }));
        
        if (chat.lastMessage) {
          chat.lastMessage.read = true;
        }
      }
    },
    
    sendMessage: (state, action: PayloadAction<{ chatId: string; content: string; attachments?: any[] }>) => {
      const { chatId, content, attachments = [] } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId);
      
      if (chat && state.currentUser) {
        const newMessage: Message = {
          id: uuidv4(),
          sender: state.currentUser.id,
          content,
          timestamp: new Date().toISOString(),
          read: true,
          attachments,
        };
        
        chat.messages.push(newMessage);
        chat.lastMessage = newMessage;
        chat.updatedAt = newMessage.timestamp;
      }
    },
    
    createGroup: (state, action: PayloadAction<{ name: string; description?: string; participants: string[]; icon?: string }>) => {
      const { name, description, participants, icon } = action.payload;
      
      if (state.currentUser) {
        const participantUsers = state.users.filter(user => 
          participants.includes(user.id) || user.id === state.currentUser?.id
        );
        
        const newGroup: GroupChat = {
          id: `group-${uuidv4()}`,
          type: 'group',
          name,
          description,
          icon: icon || './assets/images/logo/GW-Fav.svg',
          participants: participantUsers,
          createdBy: state.currentUser.id,
          createdAt: new Date().toISOString(),
          admins: [state.currentUser.id],
          messages: [],
          updatedAt: new Date().toISOString(),
        };
        
        state.chats.push(newGroup);
        state.activeChat = newGroup.id;
      }
    },
    
    editGroup: (state, action: PayloadAction<{ 
      chatId: string; 
      name?: string; 
      description?: string;
      icon?: string;
    }>) => {
      const { chatId, name, description, icon } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId) as GroupChat | undefined;
      
      if (chat && chat.type === 'group' && state.currentUser) {
        if (chat.admins.includes(state.currentUser.id)) {
          if (name) chat.name = name;
          if (description !== undefined) chat.description = description;
          if (icon) chat.icon = icon;
        }
      }
    },
    
    addParticipants: (state, action: PayloadAction<{ chatId: string; userIds: string[] }>) => {
      const { chatId, userIds } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId) as GroupChat | undefined;
      
      if (chat && chat.type === 'group' && state.currentUser) {
        if (chat.admins.includes(state.currentUser.id)) {
          const newParticipants = state.users.filter(user => 
            userIds.includes(user.id) && !chat.participants.some(p => p.id === user.id)
          );
          
          chat.participants = [...chat.participants, ...newParticipants];
        }
      }
    },
    
    removeParticipant: (state, action: PayloadAction<{ chatId: string; userId: string }>) => {
      const { chatId, userId } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId) as GroupChat | undefined;
      
      if (chat && chat.type === 'group' && state.currentUser) {
        // Can only remove if current user is admin
        if (chat.admins.includes(state.currentUser.id)) {
          // Cannot remove from company-wide chat
          if ('isCompanyWide' in chat && chat.isCompanyWide) {
            return;
          }
          
          chat.participants = chat.participants.filter(p => p.id !== userId);
          // Also remove from admins if they were an admin
          chat.admins = chat.admins.filter(id => id !== userId);
        }
      }
    },
    
    makeAdmin: (state, action: PayloadAction<{ chatId: string; userId: string }>) => {
      const { chatId, userId } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId) as GroupChat | undefined;
      
      if (chat && chat.type === 'group' && state.currentUser) {
        if (chat.admins.includes(state.currentUser.id) && 
            chat.participants.some(p => p.id === userId) &&
            !chat.admins.includes(userId)) {
          chat.admins.push(userId);
        }
      }
    },
    
    removeAdmin: (state, action: PayloadAction<{ chatId: string; userId: string }>) => {
      const { chatId, userId } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId) as GroupChat | undefined;
      
      if (chat && chat.type === 'group' && state.currentUser) {
        if (chat.admins.includes(state.currentUser.id) && userId !== state.currentUser.id) {
          chat.admins = chat.admins.filter(id => id !== userId);
        }
      }
    },
    
    deleteGroup: (state, action: PayloadAction<{ chatId: string }>) => {
      const { chatId } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId) as GroupChat | undefined;
      
      if (chat && chat.type === 'group' && state.currentUser) {
        // Only admins can delete groups
        if (chat.admins.includes(state.currentUser.id)) {
          // Cannot delete company-wide chat
          if ('isCompanyWide' in chat && chat.isCompanyWide) {
            return;
          }
          
          state.chats = state.chats.filter(c => c.id !== chatId);
          
          // Set active chat to company chat if we deleted the active chat
          if (state.activeChat === chatId) {
            const companyChat = state.chats.find(c => 
              c.type === 'group' && 'isCompanyWide' in c && c.isCompanyWide
            );
            state.activeChat = companyChat ? companyChat.id : state.chats[0].id;
          }
        }
      }
    },
    
    startDirectChat: (state, action: PayloadAction<{ userId: string }>) => {
      const { userId } = action.payload;
      
      if (state.currentUser) {
        // Check if chat already exists
        const existingChat = state.chats.find(chat => 
          chat.type === 'direct' && 
          chat.participants.some(p => p.id === userId) &&
          chat.participants.some(p => p.id === state.currentUser?.id)
        );
        
        if (existingChat) {
          state.activeChat = existingChat.id;
        } else {
          const user = state.users.find(user => user.id === userId);
          
          if (user) {
            const newDirectChat: DirectChat = {
              id: `direct-${uuidv4()}`,
              type: 'direct',
              participants: [state.currentUser, user],
              messages: [],
              updatedAt: new Date().toISOString(),
            };
            
            state.chats.push(newDirectChat);
            state.activeChat = newDirectChat.id;
          }
        }
      }
    },
  },
});

export const { 
  setActiveChat, 
  sendMessage, 
  createGroup, 
  editGroup, 
  addParticipants, 
  removeParticipant, 
  makeAdmin, 
  removeAdmin, 
  deleteGroup, 
  startDirectChat 
} = chatSlice.actions;

export default chatSlice.reducer; 