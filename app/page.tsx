'use client';

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Care<span className="text-primary-600">Ease</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">How It Works</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
            </div>
            <div>
              <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-white -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Premium Laundry Services
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Fresh & Clean <br />
              <span className="text-primary-600">Every Time.</span>
            </h1>

            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Experience the future of laundry with our state-of-the-art facilities,
              eco-friendly solutions, and unmatched convenience. Your clothes deserve the best care.
            </p>

            {/* App Download Links Layout */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">For Users</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://apps.apple.com/in/app/careease/id6759057789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition shadow-sm w-full sm:w-auto"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 21.43c-1.397.94-2.824.965-4.23.04-1.346-.867-2.73-1.077-4.116-.07C6.67 22.38 5.626 22 4.6 20.89 2.053 18.15.532 14.15 1.572 10.3c.48-1.78 1.442-3.18 2.805-4.04 1.34-.83 2.813-.91 4.22-.16 1.05.56 1.94.59 2.96.03 1.55-.84 3.09-.76 4.39.29 1.15.93 1.83 2.15 2.14 3.55-2.22 1.08-3.32 2.76-3.23 4.98.1 2.45 1.63 4.09 3.86 4.66-.5 1.51-1.32 2.89-2.352 4.02v-.01zm-4.32-20.1C11.96 1.15 11.83.99 11.66.86c-.95-.73-2.12-.9-3.25-.49C7.4 1 6.57 2.06 6.54 3.24c-.02 1.09.43 2.05 1.18 2.72.93.83 2.19.98 3.33.42 1-.49 1.83-1.57 1.8-2.73 0-.11-.01-.22-.05-.33z" fillRule="evenodd" clipRule="evenodd" /></svg>
                    iOS App
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.careease.users"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition shadow-sm w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.341l-2.543-2.542 2.54-2.54a10.975 10.975 0 011.603.882c1.076.69 1.705 1.402 1.705 2.16 0 .758-.629 1.47-1.705 2.16-.505.324-1.049.624-1.6.88zM2.872 3.033c-.22.253-.338.58-.338.966v15.998c0 .385.118.711.334.964l8.368-8.384-8.364-9.544zM11.906 13.25l-2.378-2.379 6.273-7.143a4.018 4.018 0 00-1.879-.624c-.58-.04-1.229.08-1.925.362-.647.262-5.495 2.846-9.155 4.802l9.064 4.982zM14.072 15.419l2.253 2.252a10.974 10.974 0 01-1.782.946c-.66.3-1.28.435-1.854.435-.615 0-1.218-.15-1.821-.453-3.616-1.92-8.358-4.444-9.019-4.707l9.043-4.966 3.18 3.18z" /></svg>
                    Android App
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">For Partners</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a
                    href="https://apps.apple.com/in/app/careease-vendor/id6758931521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition"
                  >
                    iOS Vendor App
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.careease.vendor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition"
                  >
                    Android Vendor App
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/careease-delivery/id6759485875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-600 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:bg-primary-100 transition"
                  >
                    iOS Delivery App
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-center lg:justify-start gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-500 font-medium">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-sm text-gray-500 font-medium">Available Service</p>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 relative">
              <img
                src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Clean modern laundromat with rows of washers"
                className="w-full h-full object-cover"
              />

              {/* Floating Card inside Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Eco-Friendly</p>
                  <p className="text-xs text-gray-500">100% Green Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Why Choose CareEase?</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">Everything you need for hassle-free, premium laundry care.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 gap-y-12">
            {[
              { title: 'Fast Service', desc: 'Quick turnaround times with same-day or next-day delivery options available.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Professional Quality', desc: 'Expert cleaning with premium eco-friendly detergents and state-of-the-art equipment.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Door-to-Door', desc: 'We pick up and deliver directly to your location. Never carry a heavy laundry bag again.', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096 4 4 0 00-5.12 4.78z' },
              { title: 'Affordable Pricing', desc: 'Competitive rates with flexible subscription plans tailored to your lifestyle.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Track Your Order', desc: 'Live updates from pickup to delivery. Know exactly where your favorite shirt is.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { title: '24/7 Support', desc: 'Round-the-clock customer support ready to assist you whenever you need help.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-gray-50/50 border border-gray-100/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300">
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">Simple, fast, and remarkably convenient.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connecting line for larger screens */}
            <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10" />

            {[
              { num: '1', title: 'Download App', desc: 'Get CareEase from the App Store or Google Play.' },
              { num: '2', title: 'Schedule Pickup', desc: 'Choose your services and pick a convenient time.' },
              { num: '3', title: 'We Clean', desc: 'Our experts clean your items with the utmost care.' },
              { num: '4', title: 'We Deliver', desc: 'Fresh clothes are returned right to your doorstep.' }
            ].map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="w-20 h-20 bg-white border-4 border-gray-50 shadow-xl shadow-gray-200/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-gray-900 mx-auto mb-6 group-hover:scale-105 group-hover:border-primary-100 transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Experience Premium Laundry Care</h2>
          <p className="text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
            Join thousands of satisfied customers across Australia enjoying our fast, eco-friendly services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://apps.apple.com/in/app/careease/id6759057789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 transition shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2"
            >
              Get Started on iOS
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.careease.users"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white border border-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700 transition flex items-center justify-center gap-2"
            >
              Get Started on Android
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                Care<span className="text-primary-600">Ease</span>
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Premium laundry service delivered directly to your door in Australia.
              </p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Wash & Fold</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Dry Cleaning</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Ironing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Subscription Plans</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Contact</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-6">Support</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">FAQs</a></li>
                <li><a href="/privacy-policy" className="text-gray-500 hover:text-primary-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-primary-600 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} CareEase. All rights reserved.</p>
            <div className="flex items-center gap-4 text-gray-400">
              {/* Decorative links to socials could go here */}
              <span className="text-sm">Australia</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

