import React from 'react';
import Link from 'next/link';
import { CommunityPost } from '@/types';

interface CommunityPostsProps {
    posts: CommunityPost[];
}

const CommunityPosts: React.FC<CommunityPostsProps> = ({ posts }) => {
    return (
        <div className="space-y-4"> {/* 각 게시글 사이에 간격 */}
            {posts.map((post) => (
                <Link
                    key={post.id}
                    href={`/community/${post.id}`}
                    className="block" // block 처리해주면 hover 영역 문제 없음
                >
                    <div
                        className="bg-white rounded-lg shadow-md p-4 sm:p-5 cursor-pointer hover:shadow-lg transition-all duration-200 border border-gray-100"
                    >
                        <div className="flex justify-between items-center mb-2">
                            {/* 카테고리 뱃지 */}
                            <span
                                className={`text-xs sm:text-sm font-semibold px-2 py-1 rounded-full
                                    ${
                                        post.category === '후기' ? 'text-orange-600 bg-orange-100' :
                                        post.category === '질문' ? 'text-blue-600 bg-blue-100' :
                                        post.category === '정보' ? 'text-green-600 bg-green-100' :
                                        'text-gray-600 bg-gray-100'
                                    }
                                `}
                            >
                                {post.category}
                            </span>

                            {/* 작성일 */}
                            <span className="text-gray-500 text-xs sm:text-sm">
                                {post.createdAt.split(' ')[0]}
                            </span>
                        </div>

                        {/* 제목 */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                            {post.title}
                        </h3>

                        {/* 본문 일부 */}
                        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                            {post.content}
                        </p>

                        {/* 작성자 + 댓글 수 */}
                        <div className="flex justify-between items-center text-gray-500 text-xs sm:text-sm mt-2">
                            <span>작성자: {post.author}</span>
                            <span>댓글: {post.comments.length}</span>
                        </div>

                        {/* 외부 링크 (있을 때만) */}
                        {post.externalLink && (
                            <a
                                href={post.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-sm mt-3 block"
                                onClick={(e) => e.stopPropagation()} // 링크 클릭 시 상위 링크 방지
                            >
                                원문 보기
                            </a>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CommunityPosts;
