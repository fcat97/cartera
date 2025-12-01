import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy for Cartera</CardTitle>
          <CardDescription>Last Updated: October 26, 2023</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            <strong>Organization:</strong> UqabMedia
            <br />
            <strong>Contact Email:</strong> media.uqab@gmail.com
          </p>

          <p>UqabMedia (“we”, “our”, “us”) operates the mobile application Cartera (“the App”). This Privacy Policy explains how we collect, use, store, and protect your information when you use Cartera.</p>
          <p>By using Cartera, you agree to the practices described in this Policy.</p>

          <h2>1. Information We Collect</h2>
          <p>We collect only the minimum information required to provide and improve the App’s core features.</p>
          
          <h3>1.1 Account Information</h3>
          <p>When you register for Cartera, we collect:</p>
          <ul>
            <li>Email address</li>
            <li>User name</li>
            <li>Hashed password (never stored or transmitted in plain text)</li>
          </ul>

          <h3>1.2 Transactional Data (Sync Subscription Feature)</h3>
          <p>If you purchase the optional sync subscription, we collect:</p>
          <ul>
            <li>Transactional records related to your activities inside the App</li>
          </ul>
          <p>These are used solely for syncing your data across devices.</p>

          <h3>1.3 Automatic Data (for Diagnostics & Analytics)</h3>
          <p>Through third-party services, we may automatically collect:</p>
          <ul>
            <li>Device information</li>
            <li>App usage data</li>
            <li>Crash logs</li>
            <li>Performance metrics</li>
          </ul>
          <p>This information helps us improve stability, performance, and user experience.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information solely for the following purposes:</p>
          <ul>
            <li>Creating and managing user accounts</li>
            <li>Providing synchronization services (if subscribed)</li>
            <li>Improving app performance and user experience</li>
            <li>Debugging, diagnostics, and crash prevention</li>
            <li>Responding to user inquiries and support requests</li>
          </ul>
          <p>We do not sell, rent, trade, or share your personal data with any third parties for marketing or advertising.</p>

          <h2>3. Third-Party Service Providers</h2>
          <p>Cartera uses trusted third-party providers to store and process data. These services have their own privacy policies and data protection mechanisms. We use:</p>

          <h3>3.1 Firebase Services</h3>
          <ul>
            <li>Firebase Authentication</li>
            <li>Firebase Firestore</li>
            <li>Firebase Crashlytics</li>
            <li>Firebase Analytics</li>
          </ul>

          <h3>3.2 Appwrite Services</h3>
          <ul>
            <li>Appwrite Database</li>
            <li>Appwrite Functions</li>
          </ul>
          <p>These services may collect device identifiers, diagnostic information, and usage data according to their respective privacy policies.</p>

          <h2>4. Data Storage & Retention</h2>
          <p>We store your account and sync data until you request deletion.</p>
          <p>After a deletion request, we will remove your data within 3 working days from our systems.</p>
          <p>Data stored on third-party platforms (e.g., Firebase, Appwrite) will be retained and deleted according to their individual data retention policies.</p>

          <h2>5. Data Security</h2>
          <p>We take strong measures to protect your information, including:</p>
          <ul>
            <li>Secure password hashing</li>
            <li>Encrypted data transfers (HTTPS)</li>
            <li>Access-control restrictions</li>
            <li>Industry-standard security practices</li>
          </ul>
          <p>However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2>6. Children’s Privacy</h2>
          <p>Cartera is available for users of any age. We do not knowingly collect personal information from children beyond what is necessary for account creation. Parents or guardians may contact us at media.uqab@gmail.com if they believe a child’s data was collected improperly.</p>
          
          <h2>7. User Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Request corrections</li>
            <li>Request deletion of your account and associated data</li>
            <li>Opt out of optional features such as analytics (via device settings if applicable)</li>
          </ul>
          <p>To exercise your rights, contact us at media.uqab@gmail.com.</p>

          <h2>8. International Use</h2>
          <p>This Privacy Policy follows general global privacy standards. We do not currently claim compliance with any specific jurisdictional regulations (such as GDPR or CCPA), but we aim to follow industry best practices.</p>
          
          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. If changes are made, we will update the “Last Updated” date at the top of this document. Continued use of the App after updates indicates acceptance of the revised policy.</p>

          <h2>10. Contact Information</h2>
          <p>If you have any questions about this Privacy Policy or your personal data, you can contact us at:</p>
          <p>
            <strong>UqabMedia</strong>
            <br />
            Email: media.uqab@gmail.com
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
