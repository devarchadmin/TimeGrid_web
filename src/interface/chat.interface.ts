export interface User {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'employee';
  avatar: string;
  position?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  lastSeen?: string;
}

export interface Message {
  id: string;
  sender: string; // User ID
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  type: 'image' | 'document' | 'audio' | 'video';
  url: string;
  name: string;
  size?: string;
  preview?: string;
}

export interface Chat {
  id: string;
  messages: Message[];
  lastMessage?: Message;
  updatedAt: string;
}

export interface DirectChat extends Chat {
  type: 'direct';
  participants: User[];
}

export interface GroupChat extends Chat {
  type: 'group';
  name: string;
  description?: string;
  icon?: string;
  participants: User[];
  createdBy: string; // User ID
  createdAt: string;
  admins: string[]; // User IDs with admin privileges
}

export interface CompanyChat extends GroupChat {
  isCompanyWide: true;
}

export interface ChatState {
  chats: (DirectChat | GroupChat | CompanyChat)[];
  activeChat: string | null;
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
} 