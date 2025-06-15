'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { database } from '@/data/database';
import { CommunityPost } from '@/types';
import BottomNav from '@/components/common/BottomNav';

const CommunityPostPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const post = database.community.find((p) => p.id === id) as CommunityPost | undefined;

  const [likes, setLikes] = useState(post?.likes ?? 0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
    }
  };

  if (!post) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-600">
        <p>해당 게시글을 찾을 수 없습니다.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-neutral-light rounded hover:bg-neutral"
        >
          뒤로 가기
        </button>
      </main>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center bg-black">
      <div className="relative w-full max-w-xl min-h-screen flex flex-col bg-white">
        <main className="flex-1 flex flex-col w-full max-w-xl mx-auto bg-white p-6 pb-24">
          <button
            onClick={() => router.back()}
            className="text-sm text-primary mb-4 hover:underline"
          >
            ← 커뮤니티 목록으로
          </button>

          <div className="bg-card rounded-card shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full
                  ${
                    post.category === '후기' ? 'text-primary bg-primary/10' :
                    post.category === '질문' ? 'text-blue-600 bg-blue-100' :
                    post.category === '정보' ? 'text-green-600 bg-green-100' :
                    'text-gray-700 bg-secondary'
                  }`}
              >
                {post.category}
              </span>
              <span className="text-gray-600 text-xs">{post.createdAt.split(' ')[0]}</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h1>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-700">
                💜 {likes}명이 이 글에 공감했어요
              </span>
              <button
                onClick={handleLike}
                disabled={liked}
                className={`text-sm ${
                  liked
                    ? 'text-gray-400 cursor-default'
                    : 'text-primary hover:underline'
                }`}
              >
                {liked ? '공감 완료' : '공감하기'}
              </button>
            </div>

            <p className="text-gray-800 text-base mb-6 whitespace-pre-line">
              {post.content}
            </p>

            {post.externalLink && (
              <a
                href={post.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm block mb-6"
              >
                원문 보기
              </a>
            )}

            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                댓글 ({post.comments.length})
              </h2>
              {post.comments.length === 0 ? (
                <p className="text-gray-500 text-sm">댓글이 없습니다.</p>
              ) : (
                <ul className="space-y-3">
                  {post.comments.map((comment) => (
                    <li
                      key={comment.id}
                      className="bg-secondary rounded px-3 py-2 text-sm"
                    >
                      <div className="flex justify-between mb-1 text-gray-600">
                        <span className="font-semibold text-gray-900">{comment.author}</span>
                        <span className="text-xs text-gray-500">
                          {comment.createdAt.split(' ')[0]}
                        </span>
                      </div>
                      <p className="text-gray-800">{comment.content}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>
        <BottomNav activePage="community" setActivePage={() => {}} />
      </div>
    </div>
  );
};

export default CommunityPostPage;
