// src/app/terms-of-service/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TermsOfServicePage: React.FC = () => {
    const router = useRouter();
    const [agreed, setAgreed] = useState(false);

    const handleAgree = () => {
        localStorage.setItem('agreedToTerms', 'true');
        // ✨ 이제 Rewrites 규칙에 따라 /login/onboarding으로 이동합니다.
        router.replace('/login/onboarding');
    };

    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">이용약관</h1>
                <p className="text-gray-600 text-sm text-center mb-6">
                    SPIN 서비스를 이용하기 위해서는 약관에 동의해야 합니다.
                </p>

                <div className="h-64 overflow-y-auto border border-gray-200 p-4 rounded-md text-gray-700 text-sm leading-relaxed mb-4">
                    {/* ... (이용약관 내용) ... */}
                    <h2 className="font-semibold text-base mb-2">제 1조 (목적)</h2>
                    <p>본 약관은 SPIN 서비스(이하 &quot;서비스&quot;)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 2조 (정의)</h2>
                    <p>
                        ① &quot;서비스&quot;라 함은 회사가 제공하는 모든 SPIN 관련 서비스를 의미합니다.<br />
                        ② &quot;이용자&quot;라 함은 본 약관에 따라 서비스를 이용하는 회원을 의미합니다.<br />
                        ③ &quot;회원&quot;이라 함은 서비스를 이용하기 위해 회사와 이용계약을 체결한 자를 의미합니다.
                    </p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 3조 (약관의 효력 및 변경)</h2>
                    <p>
                        ① 본 약관은 서비스 웹사이트에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력이 발생합니다.<br />
                        ② 회사는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.<br />
                        ③ 변경된 약관은 공지 후 7일 이내에 효력이 발생하며, 이용자가 이의를 제기하지 않으면 동의한 것으로 간주됩니다.
                    </p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 4조 (서비스 이용)</h2>
                    <p>
                        ① 서비스는 연중무휴 1일 24시간 제공을 원칙으로 합니다.<br />
                        ② 회사는 서비스 제공을 위해 필요한 경우 점검 시간을 가질 수 있습니다.<br />
                        ③ 서비스 이용에 대한 자세한 사항은 서비스 안내 페이지를 참고하시기 바랍니다.
                    </p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 5조 (이용자의 의무)</h2>
                    <p>
                        ① 이용자는 서비스 이용에 필요한 정보를 정확하게 제공해야 합니다.<br />
                        ② 이용자는 관련 법령 및 본 약관을 준수해야 합니다.<br />
                        ③ 이용자는 타인의 권리를 침해하거나 불법적인 행위를 하지 않아야 합니다.
                    </p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 6조 (개인정보 보호)</h2>
                    <p>회사는 이용자의 개인정보를 관련 법령에 따라 보호합니다. 개인정보 보호에 대한 상세 내용은 &quot;개인정보 처리방침&quot;을 따릅니다.</p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 7조 (계약 해지 및 서비스 이용 제한)</h2>
                    <p>회사는 이용자가 본 약관을 위반하는 경우 서비스 이용을 제한하거나 계약을 해지할 수 있습니다.</p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 8조 (손해배상)</h2>
                    <p>이용자가 본 약관을 위반하여 회사에 손해를 입힌 경우, 이용자는 그 손해를 배상해야 합니다.</p>
                    <br />
                    <h2 className="font-semibold text-base mb-2">제 9조 (분쟁 해결)</h2>
                    <p>본 약관과 관련하여 분쟁이 발생할 경우, 회사의 본사 소재지를 관할하는 법원을 합의 관할 법원으로 합니다.</p>
                    <br />
                    <p className="text-gray-500 text-xs text-center">부칙: 이 약관은 2025년 6월 7일부터 시행됩니다.</p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <input
                        type="checkbox"
                        id="agreeTerms"
                        className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <label htmlFor="agreeTerms" className="text-gray-700 text-base font-medium">이용약관에 동의합니다.</label>
                </div>
                <button
                    onClick={handleAgree}
                    disabled={!agreed}
                    className={`w-full py-3 rounded-lg font-bold text-white transition-colors duration-300 shadow-md ${
                        agreed ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default TermsOfServicePage;