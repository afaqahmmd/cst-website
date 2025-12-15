import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | CortechSols",
  description: "Terms and Conditions for CortechSols",
};

export default function TermsAndConditionsPage() {
  return (
    <main className='max-w-4xl mx-auto px-6 py-12 text-[#0F172A] bg-white'>
      <h1 className='text-3xl font-bold mb-2'>Terms and Conditions</h1>
      <p className='mb-4'>
        <strong>Effective Date:</strong> 30-12-2026
      </p>
      <p className='mb-6'>
        Welcome to CortechSols. By using our website https://cortechsols.com or any of our services, you agree to the following Terms and Conditions (“Terms”). Please read them carefully.
      </p>

      <h3 className='text-xl font-semibold mb-2'>1. Acceptance of Terms</h3>
      <p className='mb-6'>
        By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree, you must stop using our services immediately.
      </p>

      <h3 className='text-xl font-semibold mb-2'>2. Use of Services</h3>
      <p className='mb-2'>You agree to use our website and services only for lawful purposes and in compliance with these Terms. You must not:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Use our site in a way that may damage or disrupt it.</li>
        <li>Attempt to hack, gain unauthorized access, or spread malware.</li>
        <li>Misuse our intellectual property, trademarks, or brand identity.</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>3. User Accounts</h3>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Some services may require you to create an account.</li>
        <li>You are responsible for maintaining the confidentiality of your login details.</li>
        <li>CortechSols reserves the right to suspend or terminate accounts that violate these Terms.</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>4. Intellectual Property</h3>
      <p className='mb-6'>
        All materials on this website — including text, code, graphics, logos, and software — are the exclusive property of CortechSols and protected under U.S. and international copyright laws. You may not copy, reproduce, modify, or distribute any material without prior written consent.
      </p>

      <h3 className='text-xl font-semibold mb-2'>5. Payments and Refunds</h3>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Payments may be made using PayPal, Payoneer, Stripe, or major credit/debit cards.</li>
        <li>By submitting payment details, you confirm that you are authorized to use the chosen method.</li>
        <li>Refunds will be issued according to our Refund Policy.</li>
        <li>Refunds are returned to the same payment method used for purchase.</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>6. Limitation of Liability</h3>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>CortechSols shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the website or services.</li>
        <li>We do not guarantee uninterrupted or error-free operation of our site.</li>
        <li>Our total liability for any claim shall not exceed the amount you paid us in the 12 months before the claim.</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>7. Indemnification</h3>
      <p className='mb-6'>
        You agree to indemnify and hold CortechSols harmless from any claims, damages, or expenses arising from your use of our website or violation of these Terms.
      </p>

      <h3 className='text-xl font-semibold mb-2'>8. Termination</h3>
      <p className='mb-6'>
        We may suspend or terminate your access to our website and services without prior notice if you breach these Terms.
      </p>

      <h3 className='text-xl font-semibold mb-2'>9. Governing Law</h3>
      <p className='mb-6'>
        These Terms shall be governed by the laws of the United States, specifically the State of Tennessee. Any disputes will be resolved in the courts located in Tennessee, United States.
      </p>

      <h3 className='text-xl font-semibold mb-2'>10. Modifications</h3>
      <p className='mb-6'>
        CortechSols reserves the right to modify these Terms at any time. Updates will be posted on this page with a new “Effective Date.”
      </p>

      <h3 className='text-xl font-semibold mb-2'>11. Contact Us</h3>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Email: info@cortechsols.com</li>
        <li>Website: https://cortechsols.com</li>
        <li>Address: 911 Brigade Loop, Murfreesboro, TN 37128</li>
      </ul>
    </main>
  );
}


