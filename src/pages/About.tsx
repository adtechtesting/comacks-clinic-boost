
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, BarChart } from 'lucide-react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';
import CTA from '@/components/CTA';

const About = () => {
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
              <Badge className="mb-5 animate-fade-in">ABOUT US</Badge>
              <AnimatedHeading level={1} className="mb-6" highlight>
                The Story Behind Comacks
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
         Revolutionizing how the healthcare clinics approach digital growth.
              </p>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
      </section>

      {/* Our Story */}
      <SectionContainer id="our-story">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="animate-fade-in-left">
            <Badge className="mb-4">OUR STORY</Badge>
            <AnimatedHeading className="mb-6">
              From Vision to Reality
            </AnimatedHeading>
            <p className="text-comacks-white/80 mb-6">
              Comacks was founded with a simple yet powerful vision: to help healthcare clinics grow through the power of AI and digital marketing.
            </p>
            <p className="text-comacks-white/80 mb-6">
              Comacks saw a gap in the market. While working with Australian healthcare providers, he noticed that many were struggling with outdated marketing approaches and missing opportunities to leverage AI for growth.
            </p>
            <p className="text-comacks-white/80">
              Today, Comacks is dedicated to bringing cutting-edge digital solutions to healthcare clinics across Australia, helping them attract, convert, and retain patients more effectively than ever before.
            </p>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="glass rounded-2xl border border-comacks-white/10 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-comacks-red/20 to-comacks-red/5 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Team working" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-comacks-red/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 bg-comacks-red/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Mission & Vision */}
      <SectionContainer id="mission-vision" className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">MISSION & VISION</Badge>
          <AnimatedHeading className="mb-6">
            What Drives Us Forward
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            We're on a mission to transform how healthcare clinics approach digital growth and patient acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Our Mission</h3>
            <p className="text-comacks-white/80 mb-6">
              To empower healthcare providers with AI-powered systems and digital strategies that allow them to focus on what matters most—providing exceptional patient care.
            </p>
            <p className="text-comacks-white/80">
              We believe that by automating patient acquisition and retention, clinics can dedicate more resources to delivering quality healthcare while still growing their practices.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-100">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Our Vision</h3>
            <p className="text-comacks-white/80 mb-6">
              To create a future where every healthcare clinic has access to enterprise-level AI and marketing systems, regardless of their size or resources.
            </p>
            <p className="text-comacks-white/80">
              We envision a healthcare landscape where technology bridges the gap between providers and patients, making quality care more accessible to all Australians.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Values */}
      <SectionContainer id="values">
        <div className="text-center mb-16">
          <Badge className="mb-4">OUR VALUES</Badge>
          <AnimatedHeading className="mb-6">
            The Principles That Guide Us
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Our core values shape everything we do, from how we develop our solutions to how we interact with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <svg className="h-7 w-7 text-comacks-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Integrity</h3>
            <p className="text-comacks-white/70">
              We operate with complete transparency and honesty. Our "No Results, No Pay" guarantee reflects our commitment to delivering real value.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-100">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <svg className="h-7 w-7 text-comacks-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Innovation</h3>
            <p className="text-comacks-white/70">
              We constantly push the boundaries of what's possible with AI and digital marketing in healthcare, bringing cutting-edge solutions to our clients.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-200">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <BarChart className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Results-Focused</h3>
            <p className="text-comacks-white/70">
              We measure success by the growth we generate for our clients. Everything we do is aimed at delivering measurable, meaningful results.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-300">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <svg className="h-7 w-7 text-comacks-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Client Partnership</h3>
            <p className="text-comacks-white/70">
              We see ourselves as an extension of your team, working alongside you to achieve your clinic's growth goals.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-400">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <svg className="h-7 w-7 text-comacks-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Continuous Learning</h3>
            <p className="text-comacks-white/70">
              We invest heavily in staying ahead of digital trends and AI advancements, ensuring our clients always have access to the most effective strategies.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-500">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <svg className="h-7 w-7 text-comacks-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="15"></line>
                <line x1="15" y1="9" x2="9" y2="15"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Simplicity</h3>
            <p className="text-comacks-white/70">
              We make complex digital marketing and AI systems accessible and easy to understand for healthcare providers of all technical backgrounds.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer className="bg-gradient-to-b from-comacks-black to-comacks-black/95">
        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4">JOIN US</Badge>
          <AnimatedHeading className="mb-6">
            Ready to Partner with Comacks?
          </AnimatedHeading>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how our values-driven approach can help your clinic grow on autopilot.
          </p>
          <CTA className="py-3 px-8 text-lg" />
        </div>
      </SectionContainer>

      {/* Sticky Mobile CTA */}
      <CTA sticky />
    </div>
  );
};

export default About;
