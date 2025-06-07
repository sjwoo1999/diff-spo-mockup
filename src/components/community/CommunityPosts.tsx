// src/components/community/CommunityPosts.tsx
import React from 'react';
import { CommunityPost } from '@/types';

interface CommunityPostsProps {
    posts: CommunityPost[];
}

const CommunityPosts: React.FC<CommunityPostsProps> = ({ posts }) => {
    return (
        <div className="space-y-4"> {/* 각 게시글 사이에 간격 추가 */}
            {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-4 sm:p-5"> {/* 패딩 반응형 조절 */}
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                            {post.category}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm">{post.createdAt.split(' ')[0]}</span> {/* 날짜만 표시 */}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-2">{post.content}</p> {/* 2줄 이상이면 잘라내기 */}
                    <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm">
                        <span>작성자: {post.author}</span>
                        <span>댓글: {post.comments}</span>
                    </div>
                    {post.externalLink && (
                        <a href={post.externalLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm mt-3 block">
                            원문 보기
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommunityPosts;