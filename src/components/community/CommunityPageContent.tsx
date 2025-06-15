'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import { CommunityPost } from '@/types';
import CommunityPosts from './CommunityPosts';

interface CommunityPageContentProps {
  posts: CommunityPost[];
}

const CommunityPageContent: React.FC<CommunityPageContentProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<'전체' | '후기' | '질문' | '정보'>('전체');

  const filteredPosts =
    selectedCategory === '전체'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const categoryList: Array<'전체' | '후기' | '질문' | '정보'> = ['전체', '후기', '질문', '정보'];

  return (
    <div className="w-full bg-white">
      <div className="space-y-6 px-4 w-full max-w-xl mx-auto pt-6 text-gray-900">
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categoryList.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all
                ${
                  selectedCategory === category
                    ? 'bg-primary text-white border-primary'
                    : 'bg-card text-black border-muted hover:bg-secondary'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 게시글 리스트 */}
        <CommunityPosts posts={filteredPosts} />

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-700 text-sm py-12">
            해당 카테고리에 게시글이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default CommunityPageContent;
