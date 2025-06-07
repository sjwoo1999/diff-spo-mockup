// src/app/privacy-policy/page.tsx
'use client';

import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">개인정보 처리방침</h1>
                <p className="text-gray-700 text-lg mb-4">
                    SPIN은 사용자 여러분의 개인정보를 소중하게 생각하며,
                    관련 법규를 준수하여 개인정보를 보호하고 있습니다.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    본 개인정보 처리방침은 SPIN이 개인정보를 수집, 이용, 보관, 파기하는 과정에서
                    준수해야 할 사항들을 규정합니다. 서비스 이용을 위해 제공되는 개인정보는
                    오직 서비스 제공 목적을 위해서만 사용되며, 동의 없이 제3자에게 제공되지 않습니다.
                    보다 자세한 내용은 아래에서 확인하실 수 있습니다.
                </p>
                {/* 실제 개인정보 처리방침 내용을 여기에 추가합니다. */}
                <div className="mt-8 text-left text-gray-600 text-sm space-y-2">
                    <h2 className="font-semibold text-gray-800">1. 개인정보의 수집 및 이용 목적</h2>
                    <p>SPIN은 서비스 제공 및 개선, 맞춤형 콘텐츠 제공, 이용자 식별 등을 위해 최소한의 개인정보를 수집합니다.</p>
                    <h2 className="font-semibold text-gray-800">2. 수집하는 개인정보의 항목</h2>
                    <p>회원가입 시 이름, 이메일, 전화번호 등을 수집할 수 있으며, 서비스 이용 과정에서 선호도 정보 등이 추가로 수집될 수 있습니다.</p>
                    <h2 className="font-semibold text-gray-800">3. 개인정보의 보유 및 이용 기간</h2>
                    <p>원칙적으로 개인정보 수집 및 이용 목적 달성 시, 또는 회원 탈퇴 시 지체없이 파기합니다. 다만, 관계 법령에 따라 보관할 필요가 있는 경우 해당 기간 동안 보관합니다.</p>
                    <h2 className="font-semibold text-gray-800">4. 개인정보의 파기 절차 및 방법</h2>
                    <p>전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이 문서에 기록된 개인정보는 분쇄하거나 소각하여 파기합니다.</p>
                    <h2 className="font-semibold text-gray-800">5. 개인정보보호책임자</h2>
                    <p>SPIN은 개인정보 처리에 관한 업무를 총괄하고 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 다음과 같이 개인정보보호책임자를 지정하고 있습니다.</p>
                    <p className="mt-2">책임자: [담당자 이름]<br/>연락처: [연락처]</p>
                </div>
                <button
                    className="mt-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
                    onClick={() => window.history.back()} // 뒤로 가기 버튼
                >
                    뒤로 가기
                </button>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;