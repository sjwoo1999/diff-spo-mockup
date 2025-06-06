// src/components/community/CommunityPage.tsx
import React, { useCallback } from 'react';
import { Database } from '@/types';
import PageHeader from '@/components/common/PageHeader';

interface CommunityPageProps {
    database: Database;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ database }) => {
    const renderCommunityPosts = useCallback(() => {
        return database.community.map((post, index) => (
            <div
                key={post.id}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100 transform hover:scale-[1.01] transition duration-300 interactive-card active:scale-99 animate-pop-in"
                style={{ animationDelay: `${index * 0.1}s` }}
            >
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    post.category === '정보' ? 'bg-blue-100 text-blue-600' :
                    post.category === '모임' ? 'bg-emerald-100 text-emerald-600' :
                    'bg-purple-100 text-purple-600'
                }`}>
                    {post.category}
                </span>
                <h3 className="font-bold text-lg mt-2 text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{post.author} <span className="mx-1">•</span> 댓글 {post.comments}</p>
            </div>
        ));
    }, [database.community]);

    return (
        <section id="page-community" className="page active p-4">
            <PageHeader
                title="커뮤니티"
                description="다양한 정보를 나누고, 함께 운동할 메이트를 찾아보세요. SPIN의 커뮤니티는 언제나 새로운 도전으로 가득 차 있습니다."
            />
            <div id="community-posts" className="space-y-4 mt-6">
                {renderCommunityPosts()}
            </div>
        </section>
    );
};

export default CommunityPage;