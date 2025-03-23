
import React, { useEffect } from 'react';
import { ArrowRight, Lightbulb, Clock } from 'lucide-react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-comacks-red/10 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <Badge className="mb-5 animate-fade-in">CASE STUDIES</Badge>
              <AnimatedHeading level={1} className="mb-6" highlight>
                Success Stories from Australian Healthcare Clinics
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
                See how we've helped healthcare providers transform their patient acquisition and growth.
              </p>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
      </section>

      {/* Coming Soon Section */}
      <SectionContainer>
        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-comacks-red/20">
            <Clock className="h-10 w-10 text-comacks-red" />
          </div>
          <AnimatedHeading className="mb-6">
            Case Studies Coming Soon
          </AnimatedHeading>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            We're in the process of documenting our success stories with Australian healthcare clinics. 
            Check back soon to see detailed case studies on how we've helped providers grow their practices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <CTA className="py-3 px-8 text-lg" />
            <Link 
              to="/contact" 
              className="group inline-flex items-center text-comacks-white hover:text-comacks-red transition-colors"
            >
              Contact us for more information
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* What to Expect Section */}
      <SectionContainer className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">WHAT TO EXPECT</Badge>
          <AnimatedHeading className="mb-6">
            Our Future Case Studies Will Show...
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Here's a preview of the success stories we're currently documenting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">AI Automation Results</h3>
            <p className="text-comacks-white/70 mb-4">
              See how our AI systems have helped clinics automate patient acquisition and follow-up.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                24/7 lead capture
              </li>
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Automated follow-up sequences
              </li>
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Reduced admin workload
              </li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-100">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Digital Solutions Impact</h3>
            <p className="text-comacks-white/70 mb-4">
              Discover how our websites and landing pages have transformed online conversion rates.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Increased conversion rates
              </li>
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Improved user experience
              </li>
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Enhanced online presence
              </li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-200">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">SMMA Results</h3>
            <p className="text-comacks-white/70 mb-4">
              Learn how our social media and paid ad strategies have driven new patient growth.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Targeted patient acquisition
              </li>
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Improved ROI on ad spend
              </li>
              <li className="flex items-center text-comacks-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-comacks-red mr-2"></span>
                Increased brand visibility
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Placeholder Case Studies */}
      <SectionContainer>
        <div className="text-center mb-16">
          <Badge className="mb-4">PREVIEW</Badge>
          <AnimatedHeading className="mb-6">
            Upcoming Case Studies
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Here's a sneak peek at some of the success stories we'll be featuring soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Case Study 1 */}
          <div className="glass rounded-2xl overflow-hidden border border-comacks-white/10 animate-fade-in-left">
            <div className="aspect-video bg-gradient-to-br from-comacks-red/20 to-comacks-red/5 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dental Clinic" 
                className="w-full h-full object-cover mix-blend-overlay opacity-30"
              />
              <div className="absolute flex items-center justify-center">
                <span className="text-comacks-white text-lg font-semibold">Coming Soon</span>
              </div>
            </div>
            <div className="p-6">
              <Badge className="mb-3">DENTAL CLINIC</Badge>
              <h3 className="text-xl font-semibold mb-2 text-comacks-white">
                How Sydney Smile Center Doubled New Patient Bookings
              </h3>
              <p className="text-comacks-white/70 mb-4">
                A complete digital transformation for a leading dental practice in Sydney's CBD.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-comacks-red/10 text-comacks-red px-2 py-1 rounded-full">AI Automation</span>
                <span className="text-xs bg-comacks-red/10 text-comacks-red px-2 py-1 rounded-full">Website Redesign</span>
                <span className="text-xs bg-comacks-red/10 text-comacks-red px-2 py-1 rounded-full">Google Ads</span>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="glass rounded-2xl overflow-hidden border border-comacks-white/10 animate-fade-in-right">
            <div className="aspect-video bg-gradient-to-br from-comacks-red/20 to-comacks-red/5 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Spa" 
                className="w-full h-full object-cover mix-blend-overlay opacity-30"
              />
              <div className="absolute flex items-center justify-center">
                <span className="text-comacks-white text-lg font-semibold">Coming Soon</span>
              </div>
            </div>
            <div className="p-6">
              <Badge className="mb-3">MEDSPA</Badge>
              <h3 className="text-xl font-semibold mb-2 text-comacks-white">
                Melbourne MedSpa's 3X Increase in High-Value Treatments
              </h3>
              <p className="text-comacks-white/70 mb-4">
                How targeted marketing helped a luxury MedSpa attract more premium clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-comacks-red/10 text-comacks-red px-2 py-1 rounded-full">Social Media</span>
                <span className="text-xs bg-comacks-red/10 text-comacks-red px-2 py-1 rounded-full">Facebook Ads</span>
                <span className="text-xs bg-comacks-red/10 text-comacks-red px-2 py-1 rounded-full">WhatsApp Automation</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer className="bg-gradient-to-b from-comacks-black to-comacks-black/95">
        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4">BE OUR NEXT SUCCESS STORY</Badge>
          <AnimatedHeading className="mb-6">
            Want Results Like These for Your Clinic?
          </AnimatedHeading>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how we can help your healthcare practice achieve similar or better results.
          </p>
          <CTA className="py-3 px-8 text-lg" />
        </div>
      </SectionContainer>

      {/* Sticky Mobile CTA */}
      <CTA sticky />
    </div>
  );
};

export default CaseStudies;
