'use client';

import Link from 'next/link';

export default function AboutUs() {
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

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About CareEase
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Revolutionizing laundry services in Australia with convenience, quality, and care.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At CareEase, our mission is to give you back your time. We understand that laundry is a chore that takes away from the moments that matter. That's why we've built a seamless platform connecting you with professional laundry services, ensuring your clothes are cared for and delivered fresh to your door.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Story</h3>
                            <p className="text-gray-600">
                                Founded in 2024, CareEase recognized the need for a reliable, on-demand laundry service in Australia. We started with a simple idea: make laundry easy, affordable, and accessible to everyone. Today, we serve thousands of happy customers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Promise</h3>
                            <p className="text-gray-600">
                                We promise quality, transparency, and reliability. Every item entrusted to us is treated with the utmost care. If you're not satisfied, we're not satisfied, and we'll make it right.
                            </p>
                        </div>
                    </div>

                    <div className="bg-primary-50 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Join the Revolution</h2>
                        <p className="text-gray-600 mb-6">
                            Experience the future of laundry today. Download the CareEase app and say goodbye to laundry day.
                        </p>
                    </div>
                </div>
            </section>

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
