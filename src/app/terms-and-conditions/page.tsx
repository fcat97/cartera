import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
    const lastUpdatedDate = "January 25, 2026";

    return (
        <div className="py-8 sm:py-12">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Terms & Conditions for Cartera</CardTitle>
                    <CardDescription className="text-center">Last Updated: {lastUpdatedDate}</CardDescription>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none text-foreground/80 text-base leading-relaxed px-6 sm:px-8 md:px-10">
                    <div className="space-y-8">
                        <section className="space-y-4">
                            <p>
                                <strong>Organization:</strong> UqabMedia
                                <br />
                                <strong>Contact Email:</strong> media.uqab@gmail.com
                            </p>
                            <p>
                                These Terms & Conditions (“Terms”) govern your use of the Cartera mobile application (“App”), owned and operated by UqabMedia (“we”, “our”, “us”). By accessing or using Cartera, you agree to be bound by these Terms. If you do not agree, you must discontinue using the App.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">1. Eligibility</h2>
                            <p>Cartera is available to users of all ages. By using the App, you confirm that you can legally enter into a binding agreement under applicable law.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">2. User Accounts</h2>
                            <h3 className="text-xl font-semibold text-foreground">2.1 Registration</h3>
                            <p>To use Cartera, you may need to create an account. You agree to:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Provide accurate and complete information</li>
                                <li>Keep your login credentials secure</li>
                                <li>Not share your account with others</li>
                                <li>Take responsibility for all activities under your account</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-foreground">2.2 Account Termination</h3>
                            <p>You may request account deletion at any time. We may terminate or suspend your account at our discretion, including for:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Policy violations</li>
                                <li>Abuse, fraud, or suspicious activity</li>
                                <li>Misuse of the App</li>
                                <li>Threats to system security or other users</li>
                            </ul>
                            <p>Deleted accounts and related data are removed within 3 working days, subject to third-party service policies.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">3. Subscription & Payments</h2>
                            <h3 className="text-xl font-semibold text-foreground">3.1 Auto-Renewing Subscription</h3>
                            <p>Cartera offers auto-renewing subscriptions to enable sync and backup features.</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Subscriptions automatically renew at the end of each billing period unless cancelled.</li>
                                <li>You will be charged the applicable subscription fee at the start of each renewal period.</li>
                                <li>You may cancel your subscription at any time through your account settings or app store settings.</li>
                                <li>Cancellation will take effect at the end of the current billing period.</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-foreground">3.2 Free Trial</h3>
                            <p>All subscription features include a free trial period. After the trial ends, your subscription will automatically convert to a paid subscription unless cancelled.</p>
                            <h3 className="text-xl font-semibold text-foreground">3.3 No Refunds</h3>
                            <p>All subscription payments are final and non-refundable. We do not provide refunds or credits for:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Partial subscription periods</li>
                                <li>Unused subscription time</li>
                                <li>Subscription fees already charged</li>
                                <li>Accidental purchases or renewals</li>
                            </ul>
                            <p>By subscribing, you acknowledge and agree to this no-refund policy.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">4. Collected Information</h2>
                            <p>We may collect:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Email address</li>
                                <li>User name</li>
                                <li>Hashed password</li>
                                <li>Transactional records (for sync subscribers)</li>
                                <li>Diagnostic and usage data via third-party services</li>
                            </ul>
                            <p>Data usage and storage follow our Privacy Policy.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">5. User Responsibilities</h2>
                            <p>By using Cartera, you agree:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>To use the App only for lawful purposes</li>
                                <li>To comply with all applicable local and international laws</li>
                                <li>To avoid sharing harmful, misleading, or malicious content</li>
                                <li>To maintain the security of your device and credentials</li>
                                <li>To notify us of any unauthorized access or suspected breaches</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">6. Prohibited Activities</h2>
                            <p>You may not:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Reverse-engineer, decompile, or attempt to extract source code</li>
                                <li>Circumvent security features or exploit vulnerabilities</li>
                                <li>Use automated scripts, bots, or unauthorized tools</li>
                                <li>Use the App for fraudulent, illegal, or harmful purposes</li>
                                <li>Interfere with server operations, APIs, or data flows</li>
                                <li>Attempt to access data belonging to other users</li>
                                <li>Reproduce, copy, resell, or redistribute the App without permission</li>
                            </ul>
                            <p>Violation of these restrictions may result in immediate account termination and legal action.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">7. Use of Third-Party Services</h2>
                            <p>Cartera relies on external platforms, including:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Firebase Authentication</li>
                                <li>Firebase Firestore</li>
                                <li>Firebase Analytics</li>
                                <li>Firebase Crashlytics</li>
                                <li>Appwrite Database</li>
                                <li>Appwrite Functions</li>
                            </ul>
                            <p>Your data may be transmitted to or stored on these services according to their privacy policies.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">8. Intellectual Property</h2>
                            <p>All content, UI/UX, logos, designs, code, and other intellectual property in the App are owned by UqabMedia and are protected under applicable laws.</p>
                            <p>You receive a non-exclusive, non-transferable, revocable license to use the App.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">9. “As Is” & “Without Warranties” Disclaimer</h2>
                            <p>Cartera is provided “as is” and “as available,” without warranties of any kind, whether express or implied. This includes, but is not limited to:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>No warranty that the App will be error-free</li>
                                <li>No warranty of uninterrupted service or availability</li>
                                <li>No warranty that data will always be preserved, synced, or backed up without loss</li>
                                <li>No warranty that bugs or vulnerabilities will be resolved immediately</li>
                                <li>No warranty of fitness for a particular purpose</li>
                                <li>No warranty against data corruption caused by device malfunction, third-party outage, or unexpected errors</li>
                            </ul>
                            <p>By using Cartera, you acknowledge and agree that:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Data backup and sync features may experience occasional failures</li>
                                <li>We are not liable for any loss of data, including synced or backed-up data</li>
                                <li>You use the App at your own risk</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">10. Limitation of Liability</h2>
                            <p>To the maximum extent permitted under Bangladesh law: UqabMedia, its developers, and partners shall not be liable for any:</p>
                            <ul className="list-disc list-inside space-y-2 pl-4">
                                <li>Loss of data</li>
                                <li>Loss of revenue, profits, or opportunities</li>
                                <li>Device damage</li>
                                <li>Service interruption</li>
                                <li>Security breach caused by third parties</li>
                                <li>Bugs, crashes, or technical issues</li>
                                <li>Indirect, incidental, or consequential damages</li>
                            </ul>
                            <p>Our total liability for any claim shall not exceed the amount paid by the user, which is currently zero (0) BDT, since all products are free.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">11. Changes to the Terms</h2>
                            <p>We may update these Terms occasionally. Changes will be effective once published in the App or on our website. Continued use of Cartera after changes implies acceptance of the updated Terms.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">12. Governing Law</h2>
                            <p>These Terms are governed by the laws of Bangladesh. Any disputes will be resolved under the jurisdiction of Bangladeshi courts.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary border-b pb-2">13. Contact Information</h2>
                            <p>For questions or support, contact us at:</p>
                            <address className="not-italic">
                                <strong>UqabMedia</strong>
                                <br />
                                Email: <a href="mailto:media.uqab@gmail.com" className="text-primary hover:underline">media.uqab@gmail.com</a>
                            </address>
                        </section>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
