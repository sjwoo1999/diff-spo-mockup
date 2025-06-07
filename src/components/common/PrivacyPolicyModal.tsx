// src/components/common/PrivacyPolicyModal.tsx
'use client';

import React from 'react';
import { IoCloseSharp } from 'react-icons/io5'; // 닫기 아이콘 임포트

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void; // onClose 함수는 모달을 닫을 때 사용됨
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
            onClick={onClose} // ✨ 오버레이 클릭 시 모달 닫기
        >
            <div
                className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 이벤트 버블링 방지
            >
                <button
                    onClick={onClose} // ✨ 닫기 버튼 클릭 시 모달 닫기
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
                    aria-label="모달 닫기"
                >
                    <IoCloseSharp />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">개인정보 처리방침</h2>
                <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                    <p>
                        SPIN (이하 &quot;회사&quot; 또는 &quot;SPIN&quot;)은(는) 「개인정보보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립&middot;공개합니다.
                    </p>
                    <p>
                        본 개인정보 처리방침은 2025년 5월 27일부터 적용됩니다.
                    </p>

                    <h3>제1조(개인정보의 처리 목적)</h3>
                    <p>SPIN은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                    <ol className="list-decimal list-inside pl-4 space-y-1">
                        <li>서비스 제공</li>
                        <li>회원 관리</li>
                        <li>마케팅 및 광고</li>
                        <li>고충 처리</li>
                    </ol>

                    <h3>제2조(개인정보의 처리 및 보유 기간)</h3>
                    <p>
                        ① SPIN은(는) 법령에 따른 개인정보 보유&middot;이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유&middot;이용기간 내에서 개인정보를 처리&middot;보유합니다.
                    </p>
                    <p>
                        ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                        <ul className="list-disc list-inside pl-4 space-y-1">
                            <li>서비스 제공: 서비스 종료 시까지</li>
                            <li>회원 관리: 회원 탈퇴 시까지</li>
                            <li>마케팅 및 광고: 동의 철회 시까지</li>
                        </ul>
                    </p>

                    <h3>제3조(정보주체와 법정대리인의 권리&middot;의무 및 그 행사방법)</h3>
                    <p>
                        ① 정보주체는 SPIN에 대해 언제든지 개인정보 열람&middot;정정&middot;삭제&middot;처리정지 요구 등의 권리를 행사할 수 있습니다.
                    </p>
                    <p>
                        ② 제1항에 따른 권리 행사는 SPIN에 대해 「개인정보보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, SPIN은(는) 이에 대해 지체 없이 조치하겠습니다.
                    </p>
                    <p>
                        ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 「개인정보보호법」 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                    </p>
                    <p>
                        ④ 개인정보 열람 및 처리정지 요구는 「개인정보보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.
                    </p>
                    <p>
                        ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
                    </p>
                    <p>
                        ⑥ SPIN은(는) 정보주체 권리에 따른 열람의 요구, 정정&middot;삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
                    </p>

                    {/* 나머지 내용은 여기에 계속 추가 */}
                    <p>
                        본 개인정보 처리방침에 대한 자세한 내용은 회사 웹사이트에서 확인하실 수 있습니다.
                        <br/>
                        <a href="#" className="text-blue-600 hover:underline">회사 웹사이트 링크</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;