"use client";
import { IPost } from "@/interface/post.interface";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CreatePostFormProps {
  onCreatePost: (post: IPost) => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({ onCreatePost }) => {
  const [content, setContent] = useState("");
  const [mediaType, setMediaType] = useState<"text" | "image" | "video">("text");
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaPreview, setMediaPreview] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded && formRef.current && !formRef.current.contains(event.target as Node)) {
        if (content.trim() === '' && !mediaPreview) {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, content, mediaPreview]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    const newPost: IPost = {
      id: Date.now(),
      content,
      ...(mediaType !== "text" && { mediaType, mediaUrl: mediaPreview }),
      author: {
        id: 1, // Assume this is the current admin user
        name: "Admin User",
        avatar: "https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg",
        role: "Administrator"
      },
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: [],
      isLiked: false
    };
    
    onCreatePost(newPost);
    setContent("");
    setMediaType("text");
    setMediaUrl("");
    setMediaPreview("");
    setIsExpanded(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Create a preview URL
    const url = URL.createObjectURL(file);
    setMediaPreview(url);
    setIsExpanded(true);
    
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

  const expandTextarea = () => {
    setIsExpanded(true);
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className="relative" ref={formRef}>
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative flex-shrink-0">
          <Image
            src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg"
            alt="Admin User"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        
        {!isExpanded ? (
          <div 
            onClick={expandTextarea}
            className="flex-grow bg-bgLightest dark:bg-bgBody-dark rounded-full py-2.5 px-4 cursor-text text-body dark:text-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            What&apos;s on your mind?
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-grow">
            <textarea
              ref={textareaRef}
              className="form-control py-3 px-4 border-none transition-all duration-300 focus:ring-0 focus:outline-0 rounded-lg bg-transparent w-full resize-none text-medium dark:text-light"
              placeholder="What&apos;s on your mind?"
              rows={isExpanded ? 4 : 1}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            
            {/* Media Preview */}
            {mediaPreview && (
              <div className="relative mt-2 rounded-lg overflow-hidden border border-borderLightest dark:border-border">
                {mediaType === "image" ? (
                  <Image 
                    src={mediaPreview} 
                    alt="Upload preview"
                    width={600}
                    height={300}
                    className="w-full max-h-[300px] object-contain bg-bgLightest dark:bg-bgBody-dark rounded-md"
                  />
                ) : mediaType === "video" ? (
                  <video 
                    src={mediaPreview} 
                    controls 
                    className="w-full max-h-[300px] object-contain bg-bgLightest dark:bg-bgBody-dark rounded-md"
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
            
            <div className="flex flex-col mt-4">
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
              
              <button 
                type="submit" 
                className={`w-full py-2 px-4 rounded-lg font-medium ${
                  content.trim() 
                    ? 'bg-primary text-white hover:bg-opacity-90' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700'
                } transition-colors`}
                disabled={!content.trim()}
              >
                Post
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreatePostForm; 