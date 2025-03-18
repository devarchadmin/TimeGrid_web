"use client";
import { IComment } from "@/interface/post.interface";
import React from "react";
import Image from "next/image";

interface CommentListProps {
  comments: IComment[];
  onLikeComment: (commentId: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onLikeComment }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    
    if (diffMinutes < 1) {
      return 'Just now';
    } else if (diffMinutes < 60) {
      return `${diffMinutes}m`;
    } else if (diffHours < 24) {
      return `${diffHours}h`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="flex group">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2 relative flex-shrink-0">
            <Image
              src={comment.author.avatar}
              alt={comment.author.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-grow">
            <div className="inline-block bg-bgLightest dark:bg-bgBody-dark rounded-2xl px-4 py-2 max-w-[95%]">
              <div className="flex flex-col">
                <h5 className="font-medium text-dark dark:text-white-dark text-sm">
                  {comment.author.name}
                  <span className="ml-1 text-xs font-normal text-body dark:text-light">
                    {comment.author.role}
                  </span>
                </h5>
                <p className="text-sm text-medium dark:text-light">{comment.content}</p>
              </div>
            </div>
            
            <div className="flex items-center mt-1 pl-3 text-xs text-body dark:text-light">
              <span>{formatDate(comment.createdAt)}</span>
            </div>
          </div>
        </div>
      ))}
      
      {comments.length === 0 && (
        <p className="text-center text-body dark:text-light py-2 text-sm italic">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
};

export default CommentList; 