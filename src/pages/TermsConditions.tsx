
import React, { useEffect } from 'react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-comacks-red/10 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <Badge className="mb-5 animate-fade-in">LEGAL</Badge>
              <AnimatedHeading level={1} className="mb-6" highlight>
                Terms & Conditions
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
                Last Updated: August 1, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <SectionContainer className="py-12">
        <div className="glass rounded-2xl p-6 md:p-10 border border-comacks-white/10 max-w-4xl mx-auto animate-fade-in">
          <div className="prose prose-invert max-w-none prose-headings:text-comacks-white prose-p:text-comacks-white/80">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Comacks ("we," "us" or "our"), concerning your access to and use of our website and services.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access our services.
            </p>

            <h2>2. Services</h2>
            <p>
              Comacks provides AI-powered automation systems, digital solutions, and social media marketing services specifically for healthcare clinics in Australia. Our services include, but are not limited to:
            </p>
            <ul>
              <li>AI automation systems for patient acquisition and retention</li>
              <li>Website and landing page development</li>
              <li>CRM integration and management</li>
              <li>Social media marketing and paid advertising campaigns</li>
              <li>Content creation and strategy</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, the website and all content, features, and functionality are owned by Comacks, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our materials without our express written consent.
            </p>

            <h2>4. User Representations</h2>
            <p>
              By using our services, you represent and warrant that:
            </p>
            <ul>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You are at least 18 years of age</li>
              <li>You will not use our services for any illegal or unauthorized purpose</li>
              <li>Your use of our services will not violate any applicable law or regulation</li>
              <li>All information you provide is true, accurate, current, and complete</li>
            </ul>

            <h2>5. Payments and Fees</h2>
            <p>
              We offer various service packages with different pricing structures. All fees are quoted in Australian Dollars (AUD) and are subject to change with notice. Payment terms will be specified in your service agreement.
            </p>
            <p>
              If you fail to make any payment when due, we reserve the right to suspend or terminate your services.
            </p>

            <h2>6. Refund Policy</h2>
            <p>
              Our "No Results, No Pay" guarantee means that if we fail to deliver the agreed-upon results specified in your service agreement, you may be eligible for a refund or service credits as detailed in your specific agreement. All refund requests will be evaluated on a case-by-case basis.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Comacks and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the services</li>
              <li>Any conduct or content of any third party on the services</li>
              <li>Any content obtained from the services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2>8. Term and Termination</h2>
            <p>
              These Terms remain in full force and effect while you use our services. We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law principles.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will notify you by email or by posting a notice on our website. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: arpit@comacks.com<br />
              Phone:  +91 7303908344<br />
              Address: New Delhi
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default TermsConditions;
