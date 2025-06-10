import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CommunityPost } from '@/types';

interface CommunityPostsProps {
    posts: CommunityPost[];
  }
  

const CommunityPosts: React.FC<CommunityPostsProps> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <p className="text-center text-gray-500 text-sm py-12">
        해당 카테고리에 게시글이 없습니다.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Link href={`/community/${post.id}`} key={post.id}>
          <div
            className="bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition cursor-pointer
              border border-gray-100"
          >
            {/* 상단 정보 */}
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/profiles/default_user.png"
                alt="작성자"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                <p className="text-xs text-gray-400">{post.createdAt.split(' ')[0]} · {post.category}</p>
              </div>
            </div>

            {/* 제목 & 내용 */}
            <h2 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-1 line-clamp-3">{post.content}</p>

            {/* 하단 정보 */}
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
              <span>❤️ {post.likes} 공감</span>
              <span>💬 {post.comments.length} 댓글</span>
            </div>
          </div>
          <br/>
        </Link>
      ))}
    </div>
  );
};

export default CommunityPosts;
