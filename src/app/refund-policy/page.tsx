import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | CortechSols",
  description: "Refund Policy for CortechSols",
};

export default function RefundPolicyPage() {
  return (
    <main className='max-w-4xl mx-auto px-6 py-12 text-[#0F172A] bg-white'>
      <h1 className='text-3xl font-bold mb-2'>Refund Policy</h1>
      <p className='mb-4'>
        <strong>Effective Date:</strong> 30-12-2026
      </p>
      <p className='mb-6'>
        At CortechSols, we value our clients and aim to deliver high-quality digital solutions. If you are not satisfied with our services, this Refund Policy outlines the conditions under which refunds may be issued.
      </p>

      <h3 className='text-xl font-semibold mb-2'>1. Eligibility for Refunds</h3>
      <p className='mb-2'>Refunds may be considered in the following situations:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>If the project or service has not yet been started after payment.</li>
        <li>If deliverables are not provided as agreed in the project scope or contract.</li>
        <li>If technical errors on our side prevent delivery and cannot be resolved within a reasonable time.</li>
      </ul>
      <p className='mb-2'>Refunds will not be provided for:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Work already completed and delivered.</li>
        <li>Change-of-mind requests once work has commenced.</li>
        <li>Delays or issues caused by client-side factors (lack of communication, incomplete info, third-party dependencies).</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>2. Refund Request Process</h3>
      <p className='mb-2'>To request a refund:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Send an email to info@cortechsols.com with your order/project details.</li>
        <li>Our team will review your request within 7 business days.</li>
        <li>If approved, refunds will be processed within 10–15 business days through the original payment method.</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>3. Partial Refunds</h3>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>A pro-rated refund may be issued for the remaining portion of work not delivered.</li>
        <li>Administrative or setup fees may be deducted from the refund amount.</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>4. Non-Refundable Items</h3>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>Consultation fees</li>
        <li>Custom development already completed</li>
        <li>Third-party licenses, domains, or hosting purchased on your behalf</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>5. Payment Methods</h3>
      <p className='mb-2'>Refunds will be processed to the same payment method used for purchase. Currently, we support:</p>
      <ul className='list-disc pl-6 space-y-2 mb-6'>
        <li>PayPal</li>
        <li>Payoneer</li>
        <li>Bank Transfers (where applicable)</li>
      </ul>

      <h3 className='text-xl font-semibold mb-2'>6. Contact Us</h3>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Email: info@cortechsols.com</li>
        <li>Website: https://cortechsols.com</li>
      </ul>
    </main>
  );
}


