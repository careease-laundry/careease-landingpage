export const metadata = {
    title: 'Delete Account - CareEase',
    description: 'Learn how to delete your CareEase account and what data will be removed.',
};

export default function DeleteAccount() {
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
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Delete Your Account</h1>
                    <p className="text-gray-600 mb-8">Learn how to permanently delete your CareEase account and understand what happens to your data.</p>

                    <div className="prose prose-lg max-w-none">
                        {/* Warning Banner */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg font-semibold text-red-800">This action is permanent</h3>
                                    <p className="text-red-700 mt-1">
                                        Once your account is deleted, all your data will be permanently removed and cannot be recovered.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Delete Your Account</h2>
                            <p className="text-gray-700 mb-4">
                                You can delete your account directly from within any of our mobile apps by following these steps:
                            </p>
                            <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-3">
                                <li>Open the CareEase app (Vendor, User, or Delivery app)</li>
                                <li>Navigate to your <strong>Profile</strong> screen</li>
                                <li>Scroll down and tap <strong>&quot;Delete Account&quot;</strong></li>
                                <li>Enter your password to confirm your identity</li>
                                <li>Tap the <strong>&quot;Delete Account&quot;</strong> button in the confirmation dialog</li>
                            </ol>
                            <p className="text-gray-700">
                                Your account and all associated data will be permanently deleted immediately.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Data Gets Deleted</h2>
                            <p className="text-gray-700 mb-4">
                                When you delete your account, the following data will be permanently removed:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                                <li><strong>Account Information:</strong> Your name, email, phone number, and profile details</li>
                                <li><strong>Order History:</strong> All past order records and delivery information</li>
                                <li><strong>Chat Messages:</strong> All conversations with vendors and delivery personnel</li>
                                <li><strong>Support Tickets:</strong> All customer support requests and conversations</li>
                                <li><strong>Subscriptions:</strong> All subscription plans and usage history</li>
                                <li><strong>Vendor/Delivery Profile:</strong> Business profile, services, and performance data (if applicable)</li>
                                <li><strong>Addresses:</strong> All saved delivery and pickup addresses</li>
                                <li><strong>Favorites:</strong> All saved favorite vendors</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Notes</h2>
                            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                                <li>Account deletion is <strong>irreversible</strong>. You will not be able to recover your account or any data after deletion.</li>
                                <li>If you have any active orders, we recommend completing or cancelling them before deleting your account.</li>
                                <li>You will need to enter your password to confirm the deletion for security purposes.</li>
                                <li>After deletion, you can create a new account with the same email address, but none of your previous data will be available.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
                            <p className="text-gray-700 mb-4">
                                If you&apos;re having trouble deleting your account or have any questions, please contact our support team:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@careease.com</p>
                                <p className="text-gray-700">
                                    We will respond to your inquiry within 48 hours.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} CareEase. All rights reserved.</p>
                    <div className="mt-4 space-x-4">
                        <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
