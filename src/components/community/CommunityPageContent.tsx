// src/components/community/CommunityPageContent.tsx
import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import CommunityPosts from '@/components/community/CommunityPosts';
import { CommunityPost } from '@/types';

interface CommunityPageContentProps {
    posts: CommunityPost[];
}

const CommunityPageContent: React.FC<CommunityPageContentProps> = ({ posts }) => {
    const commonPadding = 'p-4 sm:p-6 md:p-8';

    return (
        <div className={`page active ${commonPadding} overflow-y-auto`}>
            <PageHeader
                title="커뮤니티"
                description="SPIN 회원들과 소통하고 정보를 공유하며 새로운 경험을 나누세요!"
            />
            <div className="mt-6">
                <CommunityPosts posts={posts} />
            </div>
        </div>
    );
};

export default CommunityPageContent;
