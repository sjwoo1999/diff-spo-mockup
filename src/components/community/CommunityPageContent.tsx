import React, { useState } from 'react';
import PageHeader from '@/components/common/PageHeader';
import CommunityPosts from './CommunityPosts';
import { CommunityPostWithLikes } from '@/types'; // 변경된 타입 import

interface CommunityPageContentProps {
  posts: CommunityPostWithLikes[];
}

const CommunityPageContent: React.FC<CommunityPageContentProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<'전체' | '후기' | '질문' | '정보'>('전체');

  const filteredPosts =
    selectedCategory === '전체'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const categoryList = ['전체', '후기', '질문', '정보'];

  return (
    <div className="space-y-6 px-4 sm:px-6 md:px-8">
      <br/>
      <PageHeader
        title="커뮤니티"
        description="SPIN 회원들과 소통하고 정보를 공유하며 새로운 경험을 나누세요!"
        titleColor="text-white"
        descriptionColor="text-white/80"
      />


      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2">
        {categoryList.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as any)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-all
              ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 게시글 리스트 */}
      <CommunityPosts posts={filteredPosts} />
    </div>
  );
};

export default CommunityPageContent;
