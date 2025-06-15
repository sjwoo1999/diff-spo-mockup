import React from "react";
import { User } from "@/types";
import ProfileSection from "./ProfileSection";
import StatsSection from "./StatsSection";
import ReportSection from "./ReportSection";
import FavoritesSection from "./FavoritesSection";
import ActivitySection from "./ActivitySection";

interface MypagePageContentProps {
  user: User;
}

const MypagePageContent: React.FC<MypagePageContentProps> = ({ user }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileSection user={user} />
      <StatsSection user={user} />
      <ReportSection user={user} />
      <FavoritesSection user={user} />
      <ActivitySection user={user} />
    </div>
  );
};

export default MypagePageContent; 