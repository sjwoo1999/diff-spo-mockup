'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TermsOfServicePage: React.FC = () => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    localStorage.setItem('agreedToTerms', 'true');
    router.replace('/onboarding');
  };

  return (
    <div className="w-full p-4 flex flex-col items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-black mb-4 text-center">이용약관</h1>
        <p className="text-gray-600 text-sm text-center mb-6">
          Diff-Spo 서비스를 이용하기 위해서는 약관에 동의해야 합니다.
        </p>

        <div className="h-[500px] overflow-y-auto border border-gray-200 p-4 rounded-md text-black text-sm leading-relaxed mb-4 space-y-4">
          <h2 className="font-semibold text-base">제1조. 정의</h2>
          <p>
            "회사"란 Diff-Spo라는 명칭으로 서비스를 제공하는 사업자를 말합니다.
            "서비스"란 회사가 운영하는 웹사이트 및 관련 콘텐츠 큐레이션 기능 전반을 의미합니다.
            "이용자"란 본 약관에 따라 서비스를 이용하는 자를 말합니다.
          </p>

          <h2 className="font-semibold text-base">제2조. 이용자 자격</h2>
          <p>
            서비스 이용에 연령 제한은 없으나, 법적 행위가 포함되는 기능이 향후 추가될 경우 관련 법령에 따라 연령 제한이 적용될 수 있습니다.
          </p>

          <h2 className="font-semibold text-base">제3조. 서비스의 제공 및 변경</h2>
          <p>
            회사는 이색 스포츠 관련 콘텐츠를 선별 및 제공하며, 콘텐츠는 회사가 직접 선정하거나 신뢰할 수 있는 외부 소스를 기반으로 합니다.
          </p>

          <h2 className="font-semibold text-base">제4조. 서비스 이용의 제한</h2>
          <p>
            회사는 다음 각 호에 해당하는 경우 사전 통지 없이 서비스 이용을 제한, 중단하거나 자격을 박탈할 수 있습니다: 
            불법 행위, 타인 권리 침해, 서비스 운영 방해 등
          </p>

          <h2 className="font-semibold text-base">제5조. 지적재산권</h2>
          <p>
            서비스에 포함된 모든 콘텐츠는 회사 또는 해당 저작권자의 자산이며, 무단 이용을 금합니다.
          </p>

          <h2 className="font-semibold text-base">제6조. 개인정보 보호</h2>
          <p>
            현재 회사는 개인정보를 수집하지 않으며, 향후 수집 시 별도 고지합니다.
          </p>

          <h2 className="font-semibold text-base">제7조. 제3자 서비스</h2>
          <p>
            현재 제3자 API 및 로그인은 사용되지 않으며, 추후 적용 시 별도 고지합니다.
          </p>

          <h2 className="font-semibold text-base">제8조. 책임의 제한</h2>
          <p>
            회사는 본 서비스를 "있는 그대로(as is)" 제공하며, 기술적 오류, 서비스 중단, 정보 유실 등에 대해서도 책임을 지지 않습니다.
          </p>

          <h2 className="font-semibold text-base">제9조. 사용자 콘텐츠</h2>
          <p>
            현재는 사용자 콘텐츠를 수집하지 않으며, 추후 도입 시 정책에 추가될 예정입니다.
          </p>

          <h2 className="font-semibold text-base">제10조. 약관의 변경</h2>
          <p>
            회사는 필요 시 본 약관을 변경할 수 있으며, 고지를 통해 안내합니다.
          </p>

          <h2 className="font-semibold text-base">제11조. 관할 및 준거법</h2>
          <p>
            본 약관은 대한민국 법률에 따르며, 분쟁은 서울중앙지방법원을 관할 법원으로 합니다.
          </p>

          <h2 className="font-semibold text-base">제12조. 기타 조항</h2>
          <p>
            본 약관 일부 조항이 무효되더라도 전체 효력에는 영향을 미치지 않습니다.
          </p>

          <p className="text-xs text-gray-500 text-center">시행일: 2025년 6월 10일</p>
        </div>

        <div className="flex items-center justify-center mb-6">
          <input
            type="checkbox"
            id="agreeTerms"
            className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agreeTerms" className="text-gray-700 text-base font-medium">
            이용약관에 동의합니다.
          </label>
        </div>

        <button
          onClick={handleAgree}
          disabled={!agreed}
          className={`w-full py-3 rounded-lg font-bold text-white transition-colors duration-300 shadow-md ${
            agreed ? 'bg-primary hover:bg-primary-dark' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
