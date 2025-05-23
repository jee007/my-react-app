import React from 'react';
    import { motion } from 'framer-motion';
    import { Shield, FileText } from 'lucide-react';

    const PrivacyPolicyPage = () => {
        const sectionVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
        };

        const itemVariants = {
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        };

        return (
            <div className="bg-neutral-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl"
                        initial="hidden"
                        animate="visible"
                        variants={sectionVariants}
                    >
                        <motion.div className="flex items-center mb-8" variants={itemVariants}>
                            <Shield className="w-10 h-10 mr-4 text-primary" />
                            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800">Privacy Policy</h1>
                        </motion.div>

                        <motion.section className="mb-8" variants={itemVariants}>
                            <h2 className="text-2xl font-semibold text-neutral-700 mb-3">1. Introduction</h2>
                            <p className="text-neutral-600 leading-relaxed">
                                Welcome to myTradeSolutions ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
                            </p>
                        </motion.section>

                        <motion.section className="mb-8" variants={itemVariants}>
                            <h2 className="text-2xl font-semibold text-neutral-700 mb-3">2. Information We Collect</h2>
                            <p className="text-neutral-600 leading-relaxed">
                                We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.
                            </p>
                        </motion.section>

                        <motion.section className="mb-8" variants={itemVariants}>
                            <h2 className="text-2xl font-semibold text-neutral-700 mb-3">3. How We Use Your Information</h2>
                            <p className="text-neutral-600 leading-relaxed">
                                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                        </motion.section>
                        
                        <motion.section className="mb-8" variants={itemVariants}>
                            <h2 className="text-2xl font-semibold text-neutral-700 mb-3">4. Will Your Information Be Shared?</h2>
                            <p className="text-neutral-600 leading-relaxed">
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                            </p>
                        </motion.section>

                        <motion.section className="mb-8" variants={itemVariants}>
                            <h2 className="text-2xl font-semibold text-neutral-700 mb-3">5. Disclaimer of Legal Verification</h2>
                            <div className="flex items-start p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                <FileText className="w-8 h-8 mr-3 text-amber-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-semibold text-amber-700 mb-1">Important Notice Regarding Service Scope</h3>
                                    <p className="text-amber-600 leading-relaxed text-sm">
                                        Our services are strictly limited to physical verification and inspection of goods, properties, or specified conditions as requested by the client. We do not provide any form of legal verification, nor do we authenticate legal documents or ownership. The reports, photographs, videos, and any other materials provided by myTradeSolutions are for informational purposes based on on-site physical observation only. These documents and findings are not to be construed as legal evidence, certificates of authenticity, or validation of legal standing. myTradeSolutions bears no responsibility for the legal interpretation or use of our verification reports and assumes no ownership or liability for the authentication of items or information beyond their physical state at the time of inspection.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section variants={itemVariants}>
                            <h2 className="text-2xl font-semibold text-neutral-700 mb-3">6. Contact Us</h2>
                            <p className="text-neutral-600 leading-relaxed">
                                If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@mytradesolutions.com" className="text-primary hover:underline">privacy@mytradesolutions.com</a>.
                            </p>
                        </motion.section>

                        <motion.p className="text-xs text-neutral-500 mt-10 text-center" variants={itemVariants}>
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        );
    };

    export default PrivacyPolicyPage;