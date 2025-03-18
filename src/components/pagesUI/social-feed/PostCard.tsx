"use client";
import { IComment, IPost } from "@/interface/post.interface";
import React, { useState } from "react";
import Image from "next/image";
import CommentList from "./CommentList";
import EditPostModal from "./EditPostModal";


interface PostCardProps {
  post: IPost;
  onLike: (postId: number) => void;
  onComment: (postId: number, comment: IComment) => void;
  onLikeComment: (postId: number, commentId: number) => void;
  onDelete: (postId: number) => void;
  onEdit: (post: IPost) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  onLike,
  onComment,
  onLikeComment,
  onDelete,
  onEdit,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: IComment = {
      id: Date.now(),
      content: commentText,
      author: {
        id: 1, // Assume this is the current admin user
        name: "Admin User",
        avatar: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg",
        role: "Administrator",
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      isLiked: false,
    };

    onComment(post.id, newComment);
    setCommentText("");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    
    if (diffMinutes < 1) {
      return 'Just now';
    } else if (diffMinutes < 60) {
      return `${diffMinutes}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div className="bg-white dark:bg-card-dark rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      {/* Post Header */}
      <div className="p-4 flex justify-between items-start">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative flex-shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h4 className="font-semibold text-dark dark:text-white-dark">
              {post.author.name}
            </h4>
            <div className="flex items-center text-xs text-body dark:text-light">
              <span>{post.author.role}</span>
              <span className="mx-1">•</span>
              <span>
                {formatDate(post.createdAt)}
              </span>
            </div>
          </div>
        </div>

        {/* Post Actions Dropdown */}
        <div className="relative">
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-medium dark:text-light hover:bg-bgLightest dark:hover:bg-bgBody-dark rounded-full transition-colors"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <i className="fa-solid fa-ellipsis text-xl"></i>
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-1 w-60 bg-white dark:bg-card-dark shadow-xl rounded-lg z-10 border border-borderLightest dark:border-border overflow-hidden">
              <ul>
                <li>
                  <button
                    className="w-full text-left px-4 py-3 text-medium dark:text-light hover:bg-bgLightest dark:hover:bg-bgBody-dark flex items-center transition-colors"
                    onClick={() => {
                      setShowEditModal(true);
                      setShowDropdown(false);
                    }}
                  >
                    <div className="w-9 h-9 rounded-full bg-bgLightest dark:bg-bgBody-dark flex items-center justify-center mr-2">
                      <i className="fa-regular fa-pen-to-square text-gray-600 dark:text-gray-300"></i>
                    </div>
                    <div>
                      <p className="font-medium !mb-0">Edit post</p>
                      <p className="text-xs text-body !mb-0">Edit the content of your post</p>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-3 text-medium dark:text-light hover:bg-bgLightest dark:hover:bg-bgBody-dark flex items-center transition-colors"
                    onClick={() => {
                      onDelete(post.id);
                      setShowDropdown(false);
                    }}
                  >
                    <div className="w-9 h-9 rounded-full bg-bgLightest dark:bg-bgBody-dark flex items-center justify-center mr-2">
                      <i className="fa-regular fa-trash-can text-danger"></i>
                    </div>
                    <div>
                      <p className="font-medium !mb-0">Delete post</p>
                      <p className="text-xs text-body !mb-0">Remove this post permanently</p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-medium dark:text-light mb-3 whitespace-pre-wrap">
          {post.content}
        </p>

        {/* Post Media */}
        {post.mediaType === "image" && post.mediaUrl && (
          <div className="mb-3 rounded-lg overflow-hidden border border-borderLightest dark:border-border">
            <Image
              src={post.mediaUrl}
              alt="Post image"
              width={800}
              height={500}
              className="w-full object-contain max-h-[500px]"
            />
          </div>
        )}

        {post.mediaType === "video" && post.mediaUrl && (
          <div className="mb-3 rounded-lg overflow-hidden border border-borderLightest dark:border-border">
            <video
              src={post.mediaUrl}
              controls
              className="w-full max-h-[500px]"
            />
          </div>
        )}

        {/* Post Interactions Stats */}
        {(post.likes > 0 || post.comments.length > 0) && (
          <div className="flex items-center justify-between py-2 mb-1 border-b border-borderLightest dark:border-border">
            {post.likes > 0 && (
              <div className="flex items-center text-body dark:text-light text-sm">
                <div className="w-5 h-5 rounded-full bg-danger flex items-center justify-center mr-1">
                  <i className="fa-solid fa-heart text-white text-xs"></i>
                </div>
                {post.likes}
              </div>
            )}
            
            {post.likes === 0 && <div></div>}
            
            {post.comments.length > 0 && (
              <div 
                className="text-sm text-body dark:text-light cursor-pointer hover:underline"
                onClick={() => setShowComments(!showComments)}
              >
                {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}
              </div>
            )}
          </div>
        )}

        {/* Post Actions */}
        <div className="flex py-1 mb-1">
          <button
            type="button"
            className={`flex-1 py-2 flex items-center justify-center rounded-lg hover:bg-bgLightest dark:hover:bg-bgBody-dark transition-colors ${
              post.isLiked ? "text-danger" : "text-medium dark:text-light"
            }`}
            onClick={() => onLike(post.id)}
          >
            <i
              className={`${
                post.isLiked ? "fa-solid" : "fa-regular"
              } fa-heart mr-2`}
            ></i>
            Like
          </button>
          <button
            type="button"
            className="flex-1 py-2 flex items-center justify-center rounded-lg text-medium dark:text-light hover:bg-bgLightest dark:hover:bg-bgBody-dark transition-colors"
            onClick={() => setShowComments(!showComments)}
          >
            <i className="fa-regular fa-comment mr-2"></i>
            Comment
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="pt-2 border-t border-borderLightest dark:border-border">
            <CommentList
              comments={post.comments}
              onLikeComment={(commentId: number) => onLikeComment(post.id, commentId)}
            />
            
            {/* Add Comment Form */}
            <form onSubmit={handleSubmitComment} className="mt-3 flex">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2 relative flex-shrink-0">
                <Image
                  src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg"
                  alt="Admin User"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex-grow relative">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="form-control py-2 px-4 border border-borderLightest dark:border-border transition-all duration-300 focus:ring-0 focus:outline-0 focus:border-primary rounded-full bg-bgLightest dark:bg-bgBody-dark w-full text-sm"
                />
                <button
                  type="submit"
                  disabled={!commentText.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary disabled:text-body disabled:cursor-not-allowed"
                >
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      
      {/* Edit Post Modal */}
      {showEditModal && (
        <EditPostModal
          post={post}
          onEdit={onEdit}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default PostCard; 