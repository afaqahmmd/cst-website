import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CortechSols",
  description: "Privacy Policy for CortechSols",
};

export default function PrivacyPolicyPage() {
  return (
    <main className='max-w-4xl mx-auto px-6 py-12 text-[#0F172A] bg-white'>
      <h1 className='text-3xl font-bold mb-2'>Privacy Policy For CorTechSols</h1>
      <h2 className='text-2xl font-semibold mb-6'>Privacy Policy</h2>
      <p className='mb-4'>
        <strong>Effective Date:</strong> 30-12-2026
      </p>
      <p className='mb-4'>
        At CortechSols (“Company,” “we,” “our,” or “us”), your privacy is extremely important to us. This Privacy Policy explains how we collect, use, share, and protect your personal information when you visit https://cortechsols.com or use our services.
      </p>
      <p className='mb-6'>
        By using our website, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of our website and services.
      </p>

      <h3 className='text-xl font-semibold mb-2'>1. Information We Collect</h3>
      <p className='mb-2'>We may collect the following categories of information:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>
          <strong>Personal Information</strong> — such as your name, email address, phone number, billing address, and payment details when you register, contact us, or make a purchase.
        </li>
        <li>
          <strong>Payment Information</strong> — When you pay through PayPal, Payoneer, Stripe, or credit/debit cards, your payment details are processed securely by these providers. We do not store full financial details such as credit card numbers.
        </li>
        <li>
          <strong>Usage Data</strong> — such as IP address, browser type, operating system, referring URLs, and interactions with our site (pages visited, time spent).
        </li>
        <li>
          <strong>Cookies & Tracking Technologies</strong> — we use cookies, pixels, and analytics tools to enhance your experience and provide relevant advertising.
        </li>
        <li>
          <strong>Voluntary Information</strong> — such as responses to surveys, customer support inquiries, or feedback you choose to provide.
        </li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>2. How We Use Your Information</h3>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Provide, operate, and improve our services.</li>
        <li>Process payments and deliver products/services you purchase.</li>
        <li>Send administrative updates, order confirmations, and important notices.</li>
        <li>Respond to support inquiries and provide customer service.</li>
        <li>Personalize content and offers to improve your experience.</li>
        <li>Conduct analytics to understand usage trends.</li>
        <li>Comply with legal, regulatory, and tax obligations.</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>3. Sharing of Information</h3>
      <p className='mb-2'>We do not sell your personal information. We may share information only in the following cases:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>
          <strong>Service Providers</strong> — With trusted partners such as PayPal, Payoneer, Stripe, hosting providers, or analytics vendors.
        </li>
        <li>
          <strong>Legal Requirements</strong> — If required by law, subpoena, or government request.
        </li>
        <li>
          <strong>Business Transfers</strong> — In the event of a merger, acquisition, or sale of assets, your information may be transferred.
        </li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>4. Cookies and Tracking</h3>
      <p className='mb-2'>We use cookies and similar tracking tools to:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Remember user preferences.</li>
        <li>Improve website performance.</li>
        <li>Track engagement and traffic analytics.</li>
        <li>Deliver targeted advertisements.</li>
      </ul>
      <p className='mb-6'>You can control or disable cookies in your browser settings, but some features of the site may not function properly without them.</p>

      <h3 className='text-xl font-semibold mb-2'>5. Data Retention</h3>
      <p className='mb-6'>We retain your data only for as long as necessary to provide our services or comply with legal obligations. Once no longer needed, we securely delete or anonymize your data.</p>

      <h3 className='text-xl font-semibold mb-2'>6. Data Security</h3>
      <p className='mb-2'>We implement administrative, technical, and physical safeguards to protect your personal information, including:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Secure Socket Layer (SSL) encryption for data transmission.</li>
        <li>PCI-compliant payment gateways (PayPal, Payoneer, Stripe).</li>
        <li>Regular vulnerability testing and security audits.</li>
      </ul>
      <p className='mb-6'>While we take strong precautions, no method of transmission or storage is 100% secure.</p>

      <h3 className='text-xl font-semibold mb-2'>7. Your Privacy Rights</h3>
      <p className='mb-2'>Depending on your location, you may have rights under laws such as the California Consumer Privacy Act (CCPA) or the General Data Protection Regulation (GDPR), including:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Right to access and obtain a copy of your data.</li>
        <li>Right to request correction or deletion.</li>
        <li>Right to restrict or object to processing.</li>
        <li>Right to opt out of marketing communications.</li>
        <li>Right to data portability.</li>
      </ul>
      <p className='mb-6'>To exercise your rights, contact us at info@cortechsols.com.</p>

      <h3 className='text-xl font-semibold mb-2'>8. Changes to This Policy</h3>
      <p className='mb-6'>We may update this Privacy Policy periodically. When changes are made, we will revise the “Effective Date” above. We encourage you to review this page regularly.</p>

      <h3 className='text-xl font-semibold mb-2'>9. Contact Us</h3>
      <p className='mb-2'>If you have any questions about this Privacy Policy, please contact us at:</p>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Email: info@cortechsols.com</li>
        <li>Website: https://cortechsols.com</li>
        <li>Address: 911 Brigade Loop, Murfreesboro, TN 37128</li>
      </ul>
    </main>
  );
}


