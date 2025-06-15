import React from "react";
import ProfileSection from "./ProfileSection";
import StatsSection from "./StatsSection";
import ReportSection from "./ReportSection";
import FavoritesSection from "./FavoritesSection";
import ActivitySection from "./ActivitySection";

interface MypagePageContentProps {
  user: any;
}

const MypagePageContent: React.FC<MypagePageContentProps> = ({ user }) => {
  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <div className="w-full max-w-xl mx-auto px-4 pt-6">
        <ProfileSection user={user} />
        <StatsSection stats={user.stats} />
        <ReportSection reports={user.reports} />
        <FavoritesSection favorites={user.favorites} />
        <ActivitySection activities={user.activities} />
      </div>
    </div>
  );
};

export default MypagePageContent; 