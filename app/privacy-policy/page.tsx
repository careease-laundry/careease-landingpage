export const metadata = {
  title: 'Privacy Policy - CareEase',
  description: 'CareEase Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-primary-600">CareEase</a>
            </div>
            <div>
              <a href="/" className="text-gray-700 hover:text-primary-600 transition">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to CareEase ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile applications and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications (the "Apps") and related services (collectively, the "Services").
              </p>
              <p className="text-gray-700">
                By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, phone number, password, and profile picture</li>
                <li><strong>Address Information:</strong> Delivery and pickup addresses, including GPS coordinates</li>
                <li><strong>Payment Information:</strong> Credit card details, billing address, and payment history (processed securely through Stripe)</li>
                <li><strong>Order Information:</strong> Order history, preferences, and special instructions</li>
                <li><strong>Subscription Information:</strong> Subscription plans, usage data, and renewal dates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you use our Services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, mobile network information</li>
                <li><strong>Usage Data:</strong> How you interact with our Apps, features used, time spent, and pages viewed</li>
                <li><strong>Location Data:</strong> Precise location data when you enable location services for delivery and pickup</li>
                <li><strong>Log Data:</strong> IP address, access times, app crashes, and performance data</li>
                <li><strong>Push Notification Tokens:</strong> Device tokens for sending push notifications via OneSignal</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Information from Third Parties</h3>
              <p className="text-gray-700 mb-4">
                We may receive information about you from third-party services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Payment Processors:</strong> Stripe provides payment transaction information</li>
                <li><strong>Cloud Storage:</strong> Cloudinary provides image storage and processing services</li>
                <li><strong>Analytics Services:</strong> We may use analytics services to understand app usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process and fulfill your orders, including scheduling pickups and deliveries</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send you order confirmations, updates, and delivery notifications via push notifications</li>
                <li>Communicate with you about your account, orders, and customer support requests</li>
                <li>Personalize your experience and provide recommendations</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues, fraud, and security threats</li>
                <li>Comply with legal obligations and enforce our terms of service</li>
                <li>Send you marketing communications (with your consent, where required)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Share Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We share information with third-party service providers who perform services on our behalf:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Payment Processing:</strong> Stripe processes payments securely</li>
                <li><strong>Cloud Storage:</strong> Cloudinary stores and processes images</li>
                <li><strong>Push Notifications:</strong> OneSignal sends push notifications</li>
                <li><strong>Hosting and Infrastructure:</strong> Vercel and other hosting providers</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Vendors and Delivery Personnel</h3>
              <p className="text-gray-700 mb-4">
                To fulfill your orders, we share necessary information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Vendors who process your laundry orders (name, address, order details)</li>
                <li>Delivery personnel who pick up and deliver your orders (name, address, contact information)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Business Transfers</h3>
              <p className="text-gray-700 mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Encryption of data in transit using SSL/TLS</li>
                <li>Secure storage of sensitive information</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure payment processing through PCI-compliant providers</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Location Services:</strong> Control location permissions through your device settings</li>
                <li><strong>Push Notifications:</strong> Manage push notification preferences in app settings</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our Services are not intended for children under the age of 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Services, you consent to the transfer of your information to these countries.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Links and Services</h2>
              <p className="text-gray-700 mb-4">
                Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We may also notify you via email or push notification for material changes.
              </p>
              <p className="text-gray-700">
                Your continued use of our Services after any changes to this Privacy Policy constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@careease.com</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> CareEase, Australia</p>
                <p className="text-gray-700">
                  We will respond to your inquiry within a reasonable timeframe.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. California Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by businesses</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. GDPR Rights (European Users)</h2>
              <p className="text-gray-700 mb-4">
                If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} CareEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

