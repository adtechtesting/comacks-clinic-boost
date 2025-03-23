
import React, { useEffect } from 'react';
import { ArrowRight, Globe, Code, LineChart, Layers, Monitor, Database, Check, Lightbulb } from 'lucide-react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';

const DigitalSolutions = () => {
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
              <Badge className="mb-5 animate-fade-in">DIGITAL SOLUTIONS</Badge>
              <AnimatedHeading level={1} className="mb-6" highlight>
                High-Converting Digital Experiences for Healthcare
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
                Custom websites, landing pages, and digital experiences designed to convert visitors into patients.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
                <CTA className="py-3 px-8 text-lg" />
                <Link 
                  to="/contact" 
                  className="group inline-flex items-center text-comacks-white hover:text-comacks-red transition-colors"
                >
                  View our work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
      </section>

      {/* Services Section */}
      <SectionContainer id="services">
        <div className="text-center mb-16">
          <Badge className="mb-4">OUR DIGITAL SOLUTIONS</Badge>
          <AnimatedHeading className="mb-6">
            Custom Digital Experiences for Healthcare Providers
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            From full clinic websites to targeted landing pages, we build digital assets that attract and convert patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Service 1 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Globe className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Clinic Websites</h3>
            <p className="text-comacks-white/70 mb-6">
              Beautiful, fast-loading websites designed specifically for healthcare providers that establish credibility and convert visitors.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Responsive design for all devices</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">SEO-optimized for local search</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Patient-focused user experience</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-100">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Layers className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Landing Pages</h3>
            <p className="text-comacks-white/70 mb-6">
              High-converting landing pages designed to capture leads for specific services or promotions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Treatment-specific pages</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">A/B testing for maximum conversion</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Integrated lead capture forms</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-200">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Database className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">CRM Integration</h3>
            <p className="text-comacks-white/70 mb-6">
              Seamless integration with your clinic's CRM system for efficient patient data management.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Compatible with major healthcare CRMs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Automated lead routing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">HIPAA-compliant data handling</span>
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-300">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Analytics & Optimization</h3>
            <p className="text-comacks-white/70 mb-6">
              Data-driven insights to continuously improve your digital performance and ROI.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Conversion tracking</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">User behavior analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Monthly performance reports</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Process Section */}
      <SectionContainer id="process" className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">OUR PROCESS</Badge>
          <AnimatedHeading className="mb-6">
            How We Build Your Digital Presence
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Our proven process ensures we deliver digital solutions that meet your clinic's specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in">
            <div className="relative">
              <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red font-bold text-2xl mx-auto mb-6">
                1
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-comacks-red/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Discovery</h3>
            <p className="text-comacks-white/70">
              We learn about your clinic, patients, services, and unique value proposition.
            </p>
          </div>

          {/* Step 2 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in delay-100">
            <div className="relative">
              <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red font-bold text-2xl mx-auto mb-6">
                2
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-comacks-red/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Design</h3>
            <p className="text-comacks-white/70">
              We create mockups and prototypes tailored to your brand and conversion goals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in delay-200">
            <div className="relative">
              <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red font-bold text-2xl mx-auto mb-6">
                3
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-comacks-red/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Development</h3>
            <p className="text-comacks-white/70">
              We build your digital assets with clean code, fast loading times, and SEO best practices.
            </p>
          </div>

          {/* Step 4 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in delay-300">
            <div className="relative">
              <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red font-bold text-2xl mx-auto mb-6">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Optimization</h3>
            <p className="text-comacks-white/70">
              We continuously monitor and improve performance to maximize patient acquisition.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Features Section */}
      <SectionContainer id="features">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="animate-fade-in-left">
            <Badge className="mb-4">FEATURES</Badge>
            <AnimatedHeading className="mb-6">
              What Sets Our Digital Solutions Apart
            </AnimatedHeading>
            <p className="text-comacks-white/80 mb-8">
              We don't just build websites—we create patient acquisition systems designed specifically for healthcare providers.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <Monitor className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Healthcare-Specific Design</h4>
                  <p className="text-comacks-white/70">
                    Layouts and features optimized for patient acquisition in the healthcare industry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <Code className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Conversion-Focused Development</h4>
                  <p className="text-comacks-white/70">
                    Every element is designed with one goal: turning visitors into patients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <Lightbulb className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Industry Expertise</h4>
                  <p className="text-comacks-white/70">
                    We understand the unique challenges and opportunities in healthcare marketing.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <CTA />
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="glass rounded-2xl border border-comacks-white/10 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-comacks-red/20 to-comacks-red/5 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Digital Solutions" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-comacks-white">40%</span>
                      <p className="text-comacks-white/90 text-lg mt-2">Higher Conversion Rate</p>
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

      {/* Final CTA Section */}
      <SectionContainer className="bg-gradient-to-b from-comacks-black to-comacks-black/95">
        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4">GET STARTED TODAY</Badge>
          <AnimatedHeading className="mb-6">
            Ready to Transform Your Digital Presence?
          </AnimatedHeading>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how our digital solutions can help your clinic attract more patients.
          </p>
          <CTA className="py-3 px-8 text-lg" />
        </div>
      </SectionContainer>

      {/* Sticky Mobile CTA */}
      <CTA sticky />
    </div>
  );
};

export default DigitalSolutions;
