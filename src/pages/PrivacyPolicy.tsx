
import React, { useEffect } from 'react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';

const PrivacyPolicy = () => {
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
                Privacy Policy
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
                Last Updated: August 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <SectionContainer className="py-12">
        <div className="glass rounded-2xl p-6 md:p-10 border border-comacks-white/10 max-w-4xl mx-auto animate-fade-in">
          <div className="prose prose-invert max-w-none prose-headings:text-comacks-white prose-p:text-comacks-white/80">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Comacks ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request marketing materials</li>
              <li>Participate in our promotions, surveys, or contests</li>
              <li>Contact us with inquiries or feedback</li>
            </ul>
            <p>
              The personal information we collect may include:
            </p>
            <ul>
              <li>Name, email address, phone number, and business name</li>
              <li>Billing information and transaction data</li>
              <li>Login credentials</li>
              <li>User preferences and profile information</li>
              <li>Information you provide when contacting our support team</li>
            </ul>

            <h2>3. Healthcare Data and HIPAA Compliance</h2>
            <p>
              As a service provider to healthcare clinics, we take the privacy and security of healthcare data very seriously. We comply with all applicable healthcare privacy laws, including HIPAA when applicable. We do not access, store, or process protected health information (PHI) unless explicit consent is provided and proper safeguards are in place.
            </p>

            <h2>4. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you for various purposes, including:
            </p>
            <ul>
              <li>Providing, operating, and maintaining our services</li>
              <li>Improving, personalizing, and expanding our services</li>
              <li>Understanding how you use our services</li>
              <li>Developing new products, services, features, and functionality</li>
              <li>Communicating with you about our services, updates, and marketing materials</li>
              <li>Providing customer support</li>
              <li>Processing transactions and sending related information</li>
              <li>Preventing fraudulent activities and ensuring the security of our platform</li>
            </ul>

            <h2>5. Disclosure of Your Information</h2>
            <p>
              We may share your information with third parties in certain situations, including:
            </p>
            <ul>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
              <li>In connection with a business transfer (such as a merger or acquisition)</li>
            </ul>

            <h2>6. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to:
            </p>
            <ul>
              <li>Access and receive a copy of your personal information</li>
              <li>Rectify inaccurate personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to the processing of your personal information</li>
              <li>Restrict the processing of your personal information</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p>
              To exercise these rights, please contact us at info@comacks.com.au.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              Email: info@comacks.com.au<br />
              Phone: +61 (0) 400 000 000<br />
              Address: Sydney, Australia
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default PrivacyPolicy;
