"use client";
import { IPost } from "@/interface/post.interface";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface EditPostModalProps {
  post: IPost;
  onEdit: (post: IPost) => void;
  onClose: () => void;
}

const EditPostModal: React.FC<EditPostModalProps> = ({
  post,
  onEdit,
  onClose,
}) => {
  const [content, setContent] = useState(post.content);
  const [mediaType, setMediaType] = useState<"image" | "video" | "text">(
    post.mediaType || "text"
  );
  const [mediaUrl, setMediaUrl] = useState(post.mediaUrl || "");
  const [mediaPreview, setMediaPreview] = useState(post.mediaUrl || "");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus textarea and adjust height when modal opens
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    const updatedPost: IPost = {
      ...post,
      content,
      mediaType,
      mediaUrl: mediaPreview,
    };
    
    onEdit(updatedPost);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Create a preview URL
    const url = URL.createObjectURL(file);
    setMediaPreview(url);
    
    // Determine media type
    if (file.type.startsWith("image/")) {
      setMediaType("image");
    } else if (file.type.startsWith("video/")) {
      setMediaType("video");
    }
  };

  const handleRemoveMedia = () => {
    setMediaType("text");
    setMediaUrl("");
    setMediaPreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle textarea auto-resize
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div
        ref={modalRef}
        className="bg-white dark:bg-card-dark rounded-xl shadow-lg w-full max-w-xl max-h-[90vh] overflow-hidden"
      >
        <div className="relative">
          <div className="flex justify-center items-center p-4 border-b border-borderLightest dark:border-border">
            <h3 className="text-xl font-semibold text-dark dark:text-white-dark text-center">
              Edit Post
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-3 w-8 h-8 flex items-center justify-center rounded-full bg-bgLightest dark:bg-bgBody-dark text-medium dark:text-light hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <i className="fa-regular fa-xmark text-xl"></i>
            </button>
          </div>

          <div className="p-4 flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h4 className="font-medium text-dark dark:text-white-dark">
                {post.author.name}
              </h4>
              <p className="text-xs text-body dark:text-light">
                {post.author.role}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-4 pb-4">
            <div className="relative mb-4">
              <textarea
                ref={textareaRef}
                className="form-control py-3 px-4 border-none transition-all duration-300 focus:ring-0 focus:outline-0 rounded-lg bg-transparent w-full resize-none min-h-[100px] text-medium dark:text-light text-lg"
                placeholder="What&apos;s on your mind?"
                value={content}
                onChange={handleTextareaChange}
                required
              />
            </div>

            {/* Media Preview */}
            {mediaPreview && (
              <div className="relative mt-2 rounded-lg overflow-hidden border border-borderLightest dark:border-border mb-4">
                {mediaType === "image" ? (
                  <Image
                    src={mediaPreview}
                    alt="Upload preview"
                    width={600}
                    height={300}
                    className="w-full max-h-[300px] object-contain"
                  />
                ) : mediaType === "video" ? (
                  <video
                    src={mediaPreview}
                    controls
                    className="w-full max-h-[300px]"
                  />
                ) : null}

                <button
                  type="button"
                  onClick={handleRemoveMedia}
                  className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow-md hover:bg-opacity-80 transition-colors"
                >
                  <i className="fa-regular fa-times text-sm"></i>
                </button>
              </div>
            )}

            <div className="p-3 border-t border-b border-borderLightest dark:border-border mb-3">
              <p className="text-sm font-medium text-medium dark:text-light mb-2">Add to your post</p>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="p-2 rounded-full hover:bg-bgLightest dark:hover:bg-bgBody-dark transition-colors text-[#45BD62]"
                  onClick={() => fileInputRef.current?.click()}
                  title="Photo"
                >
                  <i className="fa-regular fa-image text-xl"></i>
                </button>
                
                <button
                  type="button"
                  className="p-2 rounded-full hover:bg-bgLightest dark:hover:bg-bgBody-dark transition-colors text-[#F3425F]"
                  onClick={() => fileInputRef.current?.click()}
                  title="Video"
                >
                  <i className="fa-regular fa-video text-xl"></i>
                </button>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className={`w-full py-2.5 px-4 rounded-lg font-medium ${
                  content.trim() 
                    ? 'bg-primary text-white hover:bg-opacity-90' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700'
                } transition-colors`}
                disabled={!content.trim()}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;

 