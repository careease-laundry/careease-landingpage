'use client';

import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-primary-600">CareEase</Link>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <Link href="/#features" className="text-gray-700 hover:text-primary-600 transition">Features</Link>
                            <Link href="/#how-it-works" className="text-gray-700 hover:text-primary-600 transition">How It Works</Link>
                            <Link href="/#pricing" className="text-gray-700 hover:text-primary-600 transition">Pricing</Link>
                            <Link href="/#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</Link>
                        </div>
                        <div>
                            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to CareEase. By accessing or using our website and mobile applications, you agree to be bound by these Terms of Service.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Services</h2>
                        <p className="mb-4">
                            CareEase provides laundry and dry cleaning pickup and delivery services. We connect users with professional laundry service providers.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
                        <p className="mb-4">
                            You are responsible for ensuring that all items given for laundry service are suitable for washing. We are not responsible for damage to items that are not suitable for the selected service.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Pricing and Payment</h2>
                        <p className="mb-4">
                            Prices are listed in the app and are subject to change. Payment is required upon delivery or as per the subscription plan selected.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cancellation and Refunds</h2>
                        <p className="mb-4">
                            Cancellations made after pickup may incur a fee. Refunds are handled on a case-by-case basis.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at support@careease.com.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">CareEase</h3>
                            <p className="text-gray-400">Premium laundry service delivered to your door in Australia.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-white transition">Wash & Fold</Link></li>
                                <li><Link href="#" className="hover:text-white transition">Dry Cleaning</Link></li>
                                <li><Link href="#" className="hover:text-white transition">Ironing</Link></li>
                                <li><Link href="#" className="hover:text-white transition">Subscription Plans</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                                <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
                                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                                <li><Link href="#" className="hover:text-white transition">FAQs</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 CareEase. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
