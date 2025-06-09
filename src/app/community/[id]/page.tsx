'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { database } from '@/data/database';

const CommunityPostPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const post = database.community.find((p) => p.id === id);

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
          className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          뒤로 가기
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-[512px] mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="text-sm text-orange-600 mb-4 hover:underline"
      >
        ← 커뮤니티 목록으로
      </button>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        {/* 카테고리 + 날짜 */}
        <div className="flex justify-between items-center mb-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full
              ${
                post.category === '후기' ? 'text-orange-600 bg-orange-100' :
                post.category === '질문' ? 'text-blue-600 bg-blue-100' :
                post.category === '정보' ? 'text-green-600 bg-green-100' :
                'text-gray-600 bg-gray-100'
              }`}
          >
            {post.category}
          </span>
          <span className="text-gray-500 text-xs">{post.createdAt.split(' ')[0]}</span>
        </div>

        {/* 제목 */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h1>

        {/* 공감 영역 */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">
            ❤️ {likes}명이 이 글에 공감했어요
          </span>
          <button
            onClick={handleLike}
            disabled={liked}
            className={`text-sm ${
              liked
                ? 'text-gray-400 cursor-default'
                : 'text-orange-600 hover:underline'
            }`}
          >
            {liked ? '공감 완료' : '공감하기'}
          </button>
        </div>

        {/* 본문 전체 */}
        <p className="text-gray-700 text-base mb-6 whitespace-pre-line">
          {post.content}
        </p>

        {/* 외부 링크 */}
        {post.externalLink && (
          <a
            href={post.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm block mb-6"
          >
            원문 보기
          </a>
        )}

        {/* 댓글 */}
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            댓글 ({post.comments.length})
          </h2>
          {post.comments.length === 0 ? (
            <p className="text-gray-500 text-sm">댓글이 없습니다.</p>
          ) : (
            <ul className="space-y-3">
              {post.comments.map((comment) => (
                <li
                  key={comment.id}
                  className="bg-gray-50 rounded px-3 py-2 text-sm"
                >
                  <div className="flex justify-between mb-1 text-gray-600">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-xs">
                      {comment.createdAt.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default CommunityPostPage;
