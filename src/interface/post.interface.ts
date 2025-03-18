export interface IPost {
  id: number;
  content: string;
  mediaType?: 'image' | 'video' | 'text';
  mediaUrl?: string;
  author: {
    id: number;
    name: string;
    avatar: string;
    role: string;
  };
  createdAt: string;
  likes: number;
  comments: IComment[];
  isLiked?: boolean;
}

export interface IComment {
  id: number;
  content: string;
  author: {
    id: number;
    name: string;
    avatar: string;
    role: string;
  };
  createdAt: string;
  likes: number;
  isLiked?: boolean;
} 