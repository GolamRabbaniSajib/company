import PageIttle from '@/components/PageItile/PageIttle';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="w-full">
            <PageIttle pageTitle={'Privacy Policy'} pageSubTitle={'Privacy Policy'} />
            <div className="w-11/12 md:w-4/5 mx-auto mt-8 text-gray-700 animate__animated animate__fadeIn">
                <p className="mb-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
                    At ByteonSoft, your privacy matters to us. This Privacy Policy explains how we handle your personal information when you use our services or visit our website.
                </p>

                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mt-6 mb-3 text-[var(--color-primary)]">
                    1. Information We Collect:
                </h3>
                <p className="pl-5 mb-3 text-base sm:text-lg">
                    <strong>A. Personal Information:</strong> We may collect information like your name, email address, and phone number when you interact with us.
                </p>
                <p className="pl-5 mb-3 text-base sm:text-lg">
                    <strong>B. Usage Data:</strong> We gather data on how you use our website, including your IP address and the pages you visit.
                </p>

                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mt-6 mb-3 text-[var(--color-primary)]">
                    2. How We Use Your Information:
                </h3>
                <p className="pl-5 mb-3 text-base sm:text-lg">
                    We use your information to:
                </p>
                <ul className="pl-8 mb-4 list-disc text-base sm:text-lg">
                    <li>A. Provide and improve our services.</li>
                    <li>B. Communicate with you about updates and promotions.</li>
                    <li>C. Analyze how our website is used to enhance user experience.</li>
                </ul>

                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mt-6 mb-3 text-[var(--color-primary)]">
                    3. Sharing Your Information:
                </h3>
                <p className="pl-5 mb-3 text-base sm:text-lg">
                    We won’t sell or share your personal information with others, except:
                </p>
                <ul className="pl-8 mb-4 list-disc text-base sm:text-lg">
                    <li>A. With your consent.</li>
                    <li>B. To comply with legal requirements.</li>
                    <li>C. To protect our rights and property.</li>
                </ul>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-primary)] mt-6 mb-3">
                    4. Security of Your Information:
                </h3>
                <p className="mb-4 text-base sm:text-lg">
                    We take steps to protect your information but remember, no method of online transmission is completely secure.
                </p>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-primary)] mt-6 mb-3">
                    5. Your Rights:
                </h3>
                <p className="mb-4 text-base sm:text-lg">
                    You have the right to access, correct, or delete your personal information. Just contact us to make a request.
                </p>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-primary)] mt-6 mb-3">
                    6. Changes to This Privacy Policy:
                </h3>
                <p className="mb-4 text-base sm:text-lg">
                    We may update this policy occasionally. Any changes will be posted here.
                </p>

                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-primary)] mt-6 mb-3">
                    7. Contact Us:
                </h3>
                <p className="mb-4 text-base sm:text-lg">
                    If you have any questions, feel free to reach us at -{' '}
                    <a href="mailto:byteonsoft@gmail.com" className="text-[var(--color-primary)] hover:underline">
                        byteonsoft@gmail.com
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
