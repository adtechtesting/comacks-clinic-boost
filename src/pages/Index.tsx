
import React, { useEffect } from 'react';
import { ArrowRight, Zap, Code, LineChart, CheckCircle, Lightbulb, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Badge from '@/components/Badge';
import AnimatedHeading from '@/components/AnimatedHeading';
import SectionContainer from '@/components/SectionContainer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-comacks-red/10 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-5 animate-fade-in">TRUSTED BY AUSTRALIAN HEALTHCARE CLINICS</Badge>
            <AnimatedHeading level={1} className="mb-6" highlight>
              Grow Your Clinic on Autopilot
            </AnimatedHeading>
            <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
              AI-Powered Systems That Attract, Convert, and Retain Patients—While You Focus on Care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <CTA className="py-3 px-8 text-lg" />
              <Link 
                to="/about" 
                className="group inline-flex items-center text-comacks-white hover:text-comacks-red transition-colors"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
      </section>

      {/* Trust Badges */}
      <SectionContainer className="py-10 md:py-16">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="glass rounded-xl py-3 px-5 flex items-center animate-fade-in">
            <div className="bg-comacks-red/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="h-5 w-5 text-comacks-red" />
            </div>
            <span className="text-comacks-white font-medium">HIPAA Compliant</span>
          </div>
          <div className="glass rounded-xl py-3 px-5 flex items-center animate-fade-in">
            <div className="bg-comacks-red/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="h-5 w-5 text-comacks-red" />
            </div>
            <span className="text-comacks-white font-medium">Trusted by Australian Clinics</span>
          </div>
          <div className="glass rounded-xl py-3 px-5 flex items-center animate-fade-in">
            <div className="bg-comacks-red/20 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <CheckCircle className="h-5 w-5 text-comacks-red" />
            </div>
            <span className="text-comacks-white font-medium">Privacy Focused</span>
          </div>
        </div>
      </SectionContainer>

      {/* Services Overview */}
      <SectionContainer id="services">
        <div className="text-center mb-16">
          <Badge className="mb-4">OUR SERVICES</Badge>
          <AnimatedHeading className="mb-6">
            Complete Digital Growth Solutions <br className="hidden md:block" />for Healthcare Clinics
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            From patient acquisition to retention, we provide end-to-end digital solutions designed specifically for Australian healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            title="AI Automation Systems"
            description="24/7 lead capture and patient follow-up systems that work while you sleep."
            icon={<Zap className="h-7 w-7 text-comacks-red" />}
            link="/ai-automation"
            features={[
              "Lead Capture Systems",
              "Follow-up Automation",
              "CRM Integration",
              "WhatsApp Automation"
            ]}
            className="animate-fade-in"
          />
          <ServiceCard
            title="Digital Solutions"
            description="High-converting websites and landing pages designed for healthcare providers."
            icon={<Code className="h-7 w-7 text-comacks-red" />}
            link="/digital-solutions"
            features={[
              "Clinic Websites",
              "Lead Generation Pages",
              "CRM Integrations",
              "Lead Management"
            ]}
            className="animate-fade-in delay-100"
          />
          <ServiceCard
            title="Social Media Marketing"
            description="Strategic paid advertising and social media management for clinics."
            icon={<LineChart className="h-7 w-7 text-comacks-red" />}
            link="/smma"
            features={[
              "Paid Ads",
              "Social Media Management",
              "Content Strategy",
              "Local SEO"
            ]}
            className="animate-fade-in delay-200"
          />
        </div>
      </SectionContainer>

      {/* Case Studies Section */}
      <SectionContainer id="case-studies" className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">CASE STUDIES</Badge>
          <AnimatedHeading className="mb-6">
            Success Stories from Australian Healthcare Providers
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            See how we've helped clinics across Australia grow their patient base and increase revenue.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-comacks-red/20">
            <Lightbulb className="h-10 w-10 text-comacks-red" />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-comacks-white">Results Coming Soon</h3>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            We're in the process of documenting our success stories with Australian clinics. 
            Check back soon to see detailed case studies on how we've helped healthcare providers grow their business.
          </p>
          <div className="inline-block">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-comacks-red hover:text-comacks-red/80 font-medium transition-colors"
            >
              Be our next success story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* Why Choose Us */}
      <SectionContainer id="why-us">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <Badge className="mb-4">WHY CHOOSE US</Badge>
            <AnimatedHeading className="mb-6">
              We're Invested In Your Success
            </AnimatedHeading>
            <p className="text-comacks-white/80 mb-8">
              We believe in a partnership approach where our success is directly tied to yours. 
              That's why we offer guarantees that other agencies don't.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <CheckCircle className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">No Results, No Pay Guarantee</h4>
                  <p className="text-comacks-white/70">
                    We're so confident in our ability to deliver that if you don't see results, you don't pay.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <Clock className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Free Setup & Onboarding</h4>
                  <p className="text-comacks-white/70">
                    We handle all the technical details so you can focus on what you do best—caring for patients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <DollarSign className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Personalized Growth Plan</h4>
                  <p className="text-comacks-white/70">
                    Every clinic is unique. We create custom strategies that align with your specific goals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <CTA />
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="glass rounded-2xl border border-comacks-white/10 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-comacks-red/20 to-comacks-red/5 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Healthcare professional" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-comacks-white">100%</span>
                      <p className="text-comacks-white/90 text-lg mt-2">Focus on Patient Care</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-comacks-red/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-comacks-red/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer id="testimonials" className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">TESTIMONIALS</Badge>
          <AnimatedHeading className="mb-6">
            What Our Clients Say
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Hear directly from healthcare providers who've transformed their practices with our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <TestimonialCard
            quote="The AI automation has completely transformed how we handle new patient inquiries. It's like having an extra staff member working 24/7!"
            author="Dr. Sarah Johnson"
            position="Dentist"
            clinic="Smile Right Dental"
            rating={5}
            className="animate-fade-in"
          />
          <TestimonialCard
            quote="Our website conversion rate has tripled since working with Comacks. Their understanding of the healthcare space is impressive."
            author="Michael Chen"
            position="Practice Manager"
            clinic="Wellness Physiotherapy"
            rating={5}
            className="animate-fade-in delay-100"
          />
          <TestimonialCard
            quote="The 'No Results, No Pay' guarantee made this a no-brainer for us. They delivered beyond our expectations."
            author="Dr. Emma Williams"
            position="Medical Director"
            clinic="Bayside Medical Centre"
            rating={5}
            className="animate-fade-in delay-200"
          />
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer className="bg-gradient-to-b from-comacks-black to-comacks-black/95">
        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4">GET STARTED TODAY</Badge>
          <AnimatedHeading className="mb-6">
            Ready to Grow Your Clinic?
          </AnimatedHeading>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and get a personalized growth plan for your healthcare practice. 
            No commitments, no pressure—just actionable insights to help your clinic thrive.
          </p>
          <CTA className="py-3 px-8 text-lg" />
        </div>
      </SectionContainer>

      {/* Sticky Mobile CTA */}
      <CTA sticky />
    </div>
  );
};

export default Index;
