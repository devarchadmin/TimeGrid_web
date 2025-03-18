"use client";
import Breadcrumb from "@/common/Breadcrumb/breadcrumb";
import React, { useState } from "react";
import postsData from "@/data/posts/posts-data";
import { IComment, IPost } from "@/interface/post.interface";
import CreatePostForm from "./CreatePostForm";
import PostCard from "./PostCard";

const SocialFeedMainArea = () => {
  const [posts, setPosts] = useState<IPost[]>(postsData);

  // Handler for creating a new post
  const handleCreatePost = (newPost: IPost) => {
    setPosts([newPost, ...posts]);
  };

  // Handler for liking a post
  const handleLikePost = (postId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      })
    );
  };

  // Handler for commenting on a post
  const handleAddComment = (postId: number, comment: IComment) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, comment],
          };
        }
        return post;
      })
    );
  };

  // Handler for liking a comment
  const handleLikeComment = (postId: number, commentId: number) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                  isLiked: !comment.isLiked,
                };
              }
              return comment;
            }),
          };
        }
        return post;
      })
    );
  };

  // Handler for delete a post
  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Handler for editing a post
  const handleEditPost = (updatedPost: IPost) => {
    setPosts(
      posts.map((post) => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      })
    );
  };

  return (
    <>
      <div className="app__slide-wrapper">
        <Breadcrumb breadTitle="Social Feed" subTitle="Home" subtitleLink="/" />
        
        <div className="flex justify-center">
          <div className="w-full lg:w-[40%] max-w-3xl">
            {/* Create Post Form */}
            <div className="bg-white dark:bg-card-dark rounded-xl shadow-md mb-6">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-dark dark:text-white-dark">Create Post</h3>
                <CreatePostForm onCreatePost={handleCreatePost} />
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={handleLikePost}
                  onComment={handleAddComment}
                  onLikeComment={handleLikeComment}
                  onDelete={handleDeletePost}
                  onEdit={handleEditPost}
                />
              ))}

              {posts.length === 0 && (
                <div className="bg-white dark:bg-card-dark rounded-xl shadow-md p-10 text-center">
                  <p className="text-lg text-medium dark:text-light">No posts yet. Be the first to share something!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialFeedMainArea; 