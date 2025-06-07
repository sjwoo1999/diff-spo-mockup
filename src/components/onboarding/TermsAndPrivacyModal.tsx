// src/components/onboarding/TermsAndPrivacyModal.tsx (이전과 동일한 수정, 다시 확인)
import React from 'react';

interface TermsAndPrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsAndPrivacyModal: React.FC<TermsAndPrivacyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-xl">
                <h3 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-3'>
                    이용약관 및 개인정보 처리방침
                </h3>

                <div className="text-gray-700 text-sm leading-relaxed space-y-4">
                    <section>
                        <h4 className="font-semibold text-lg mb-2">1. 이용약관</h4>
                        <p>
                            본 서비스(이하 &quot;SPIN&quot;)는 사용자에게 맞춤형 스포츠 추천 및 관련 정보를 제공합니다. {/* ✨ "SPIN" 수정 */}
                            서비스 이용에 대한 모든 책임은 사용자에게 있으며, 회사는 서비스 제공의 안정성 및
                            정확성을 보장하기 위해 최선을 다합니다.
                            <br />
                            SPIN은 사용자의 건강 상태, 신체적 능력, 개인의 목표 등을 고려하여 스포츠 활동을
                            추천합니다. 하지만 모든 추천은 일반적인 정보에 기반하며, 개인의 특정 건강 상태나
                            의료적 조언을 대체할 수 없습니다. 따라서 사용자는 스포츠 활동 시작 전 반드시
                            의료 전문가와 상담해야 합니다.
                            <br />
                            서비스 내 모든 콘텐츠(텍스트, 이미지, 영상 등)의 저작권은 회사 또는 정당한 권리자에게
                            있으며, 무단 복제, 배포, 변경은 법적으로 금지됩니다.
                            <br />
                            사용자는 서비스 이용 시 타인의 권리를 침해하거나, 불법적인 활동을 할 수 없습니다.
                            회사는 사용자가 이용약관을 위반할 경우 서비스 이용을 제한하거나 중지할 수 있습니다.
                            <br />
                            이용약관은 서비스 개선 및 법률 변경에 따라 언제든지 변경될 수 있으며, 변경 사항은
                            서비스 내 공지사항을 통해 사용자에게 알립니다.
                        </p>
                    </section>

                    <section className="mt-6">
                        <h4 className="font-semibold text-lg mb-2">2. 개인정보 처리방침</h4>
                        <p>
                            SPIN은 사용자의 개인정보를 소중히 생각하며, 관련 법규를 준수하여 처리합니다.
                            <br />
                            수집하는 개인정보: 이메일, 닉네임, 온보딩 설문 응답 (운동 목적, 강도, 선호도 등)
                            <br />
                            수집 목적: 맞춤형 스포츠 추천 서비스 제공, 서비스 개선, 이벤트 안내
                            <br />
                            보유 및 이용 기간: 회원 탈퇴 시 또는 개인정보 수집 및 이용 목적 달성 시 즉시 파기.
                            단, 관련 법령에 의거하여 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보존합니다.
                            <br />
                            SPIN은 수집된 개인정보를 사용자의 동의 없이 제3자에게 제공하지 않습니다. 다만, 법률에
                            특별한 규정이 있는 경우, 또는 사용자의 동의를 받은 경우에는 예외로 합니다.
                            <br />
                            사용자는 언제든지 자신의 개인정보를 열람, 정정, 삭제 요청할 수 있으며, 개인정보 처리
                            방침에 대한 문의는 고객센터를 통해 할 수 있습니다.
                            <br />
                            회사는 개인정보 보호를 위해 기술적, 관리적 보호조치를 취하고 있으며, 개인정보 유출 및
                            오용을 방지하기 위해 최선을 다합니다.
                        </p>
                    </section>

                    <p className="mt-8 text-center text-gray-600">
                        본 약관에 동의하지 않을 경우 서비스 이용이 제한될 수 있습니다.
                    </p>
                </div>

                <div className="flex justify-end mt-8">
                    <button
                        onClick={onClose}
                        className="py-2 px-6 bg-red-600 text-white rounded-lg text-md font-semibold hover:bg-red-700 transition-colors"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsAndPrivacyModal;