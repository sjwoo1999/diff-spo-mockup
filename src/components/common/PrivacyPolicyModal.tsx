'use client';

import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black/50 hover:text-black text-2xl"
          aria-label="모달 닫기"
        >
          <IoCloseSharp />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-black">개인정보 처리방침</h2>

        <div className="text-black/80 text-sm leading-relaxed space-y-4">
          <p>
            Diff-Spo(이하 &quot;서비스&quot;)는 이용자의 개인정보를 중요시하며,
            「개인정보 보호법」 등 관련 법령에 따라 이용자의 개인정보를 보호하고 있습니다.
            본 방침은 다음과 같은 내용을 담고 있습니다.
          </p>

          <div>
            <h3 className="font-semibold text-black">1. 수집하는 개인정보 항목</h3>
            <p>
              현재 Diff-Spo는 이용자의 개인정보를 직접 수집하지 않습니다.
              <br />
              단, 서비스 품질 개선 및 버그 추적 등을 위한 목적으로 서버 로그를 통해 일부 정보가 수집될 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">2. 개인정보 수집 및 이용 목적</h3>
            <p>
              수집된 정보는 서비스 품질 개선 및 버그 추적을 위해 사용됩니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">3. 개인정보 보유 및 이용 기간</h3>
            <p>
              서버 로그를 통해 수집된 정보는 서비스 종료 시까지 보관됩니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">4. 개인정보의 제3자 제공</h3>
            <p>현재 이용자의 개인정보를 외부에 제공하지 않습니다.</p>
          </div>

          <div>
            <h3 className="font-semibold text-black">5. 개인정보 처리 위탁</h3>
            <p>현재 제3자에게 개인정보 처리를 위탁하지 않습니다.</p>
          </div>

          <div>
            <h3 className="font-semibold text-black">6. 개인정보 보호를 위한 기술적·관리적 조치</h3>
            <p>
              개인정보를 직접 수집하지 않으므로 관련 조치는 제한적이나, 서버 보안 및 접근 제한 등을 통해 로그 정보의 안전성을 확보하고 있습니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">7. 정보주체의 권리와 행사 방법</h3>
            <p>
              이용자는 이메일 문의를 통해 본인의 정보 열람, 수정, 삭제 요청을 할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">8. 쿠키 사용 여부 및 관리 방법</h3>
            <p>현재 서비스에서는 쿠키를 사용하지 않습니다.</p>
          </div>

          <div>
            <h3 className="font-semibold text-black">9. 만 14세 미만 아동의 개인정보</h3>
            <p>
              현재 만 14세 미만 아동의 개인정보 수집에 대한 별도 절차는 마련되어 있지 않습니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">10. 개인정보 보호 책임자 및 문의처</h3>
            <p>
              개인정보 관련 문의는 이메일을 통해 접수하실 수 있으며, 관련된 책임자 정보는 추후 필요 시 명시될 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">11. 법적 근거 및 관할권</h3>
            <p>본 방침은 대한민국 「개인정보 보호법」을 준수합니다.</p>
          </div>

          <div>
            <h3 className="font-semibold text-black">12. 방침 변경에 대한 고지</h3>
            <p>
              본 개인정보처리방침은 변경될 수 있으며, 변경 시 서비스 내 공지사항을 통해 고지됩니다.
            </p>
          </div>

          <p className="text-right text-xs text-gray-500">시행일: 2025년 06월 10일</p>

          <p className="pt-2">
            <a href="#" className="text-primary hover:underline">자세한 내용은 회사 웹사이트에서 확인하실 수 있습니다.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
