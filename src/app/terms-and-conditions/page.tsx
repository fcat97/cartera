import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function TermsAndConditionsPage() {
  return (
    <div className="py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms and Conditions</CardTitle>
          <CardDescription>Last Updated: October 26, 2023</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-blue dark:prose-invert max-w-none">
          <p>Welcome to Cartera! These terms and conditions outline the rules and regulations for the use of UqabMedia's Application, Cartera.</p>
          <p>By accessing this app, we assume you accept these terms and conditions. Do not continue to use Cartera if you do not agree to all of the terms and conditions stated on this page.</p>

          <h2>1. License to Use</h2>
          <p>Unless otherwise stated, UqabMedia and/or its licensors own the intellectual property rights for all material on Cartera. All intellectual property rights are reserved. You may access this from Cartera for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
              <li>Republish material from Cartera</li>
              <li>Sell, rent or sub-license material from Cartera</li>
              <li>Reproduce, duplicate or copy material from Cartera</li>
              <li>Redistribute content from Cartera</li>
          </ul>

          <h2>2. User Account</h2>
          <p>You are responsible for maintaining the confidentiality of your account and password, and you agree to accept responsibility for all activities that occur under your account or password. We reserve the right to refuse service, terminate accounts, remove or edit content in our sole discretion.</p>

          <h2>3. Acceptable Use</h2>
          <p>You must not use this application in any way that causes, or may cause, damage to the application or impairment of the availability or accessibility of Cartera or in any way which is unlawful, illegal, fraudulent, or harmful.</p>
          
          <h2>4. Sync Subscription</h2>
          <p>Cartera offers an optional subscription service for data synchronization across multiple devices. This is a recurring payment service. By purchasing the subscription, you agree to pay the subscription fees at the rates in effect when the charges were incurred.</p>
          
          <h2>5. Limitation of Liability</h2>
          <p>In no event shall UqabMedia, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this application whether such liability is under contract. UqabMedia, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this application.</p>

          <h2>6. Indemnification</h2>
          <p>You hereby indemnify to the fullest extent UqabMedia from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>

          <h2>7. Variation of Terms</h2>
          <p>UqabMedia is permitted to revise these terms at any time as it sees fit, and by using this application, you are expected to review these terms on a regular basis.</p>

          <h2>8. Governing Law & Jurisdiction</h2>
          <p>These terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which UqabMedia is based, and you submit to the non-exclusive jurisdiction of the state and federal courts located in that jurisdiction for the resolution of any disputes.</p>
        </CardContent>
      </Card>
    </div>
  );
}
