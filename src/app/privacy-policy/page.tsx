'use client';

import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-black mb-6">개인정보 처리방침</h1>
        <p className="text-gray-700 text-base mb-4">
          Diff-Spo(이하 &quot;서비스&quot;)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령에 따라 이용자의 개인정보를 보호하고 있습니다.
        </p>

        <div className="mt-6 text-left text-gray-700 text-sm leading-relaxed space-y-4">
          <div>
            <h2 className="font-semibold text-black">1. 수집하는 개인정보 항목</h2>
            <p>현재 Diff-Spo는 이용자의 개인정보를 직접 수집하지 않습니다.<br />
            단, 서비스 품질 개선 및 버그 추적 등을 위한 목적으로 서버 로그를 통해 일부 정보가 수집될 수 있습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">2. 개인정보 수집 및 이용 목적</h2>
            <p>수집된 정보는 서비스 품질 개선 및 버그 추적을 위해 사용됩니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">3. 개인정보 보유 및 이용 기간</h2>
            <p>서버 로그를 통해 수집된 정보는 서비스 종료 시까지 보관됩니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">4. 개인정보의 제3자 제공</h2>
            <p>현재 이용자의 개인정보를 외부에 제공하지 않습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">5. 개인정보 처리 위탁</h2>
            <p>현재 제3자에게 개인정보 처리를 위탁하지 않습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">6. 개인정보 보호를 위한 기술적·관리적 조치</h2>
            <p>개인정보를 직접 수집하지 않으므로 관련 조치는 제한적이나, 서버 보안 및 접근 제한 등을 통해 로그 정보의 안전성을 확보하고 있습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">7. 정보주체의 권리와 행사 방법</h2>
            <p>이용자는 이메일 문의를 통해 본인의 정보 열람, 수정, 삭제 요청을 할 수 있습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">8. 쿠키 사용 여부 및 관리 방법</h2>
            <p>현재 서비스에서는 쿠키를 사용하지 않습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">9. 만 14세 미만 아동의 개인정보</h2>
            <p>현재 만 14세 미만 아동의 개인정보 수집에 대한 별도 절차는 마련되어 있지 않습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">10. 개인정보 보호 책임자 및 문의처</h2>
            <p>개인정보 관련 문의는 이메일을 통해 접수하실 수 있으며, 관련된 책임자 정보는 추후 필요 시 명시될 수 있습니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">11. 법적 근거 및 관할권</h2>
            <p>본 방침은 대한민국 「개인정보 보호법」을 준수합니다.</p>
          </div>

          <div>
            <h2 className="font-semibold text-black">12. 방침 변경에 대한 고지</h2>
            <p>본 개인정보처리방침은 변경될 수 있으며, 변경 시 서비스 내 공지사항을 통해 고지됩니다.</p>
          </div>

          <p className="text-gray-500 text-xs mt-4 text-right">
            시행일: 2025년 6월 10일
          </p>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-10 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition"
        >
          뒤로 가기
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
