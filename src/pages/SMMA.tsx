
import React, { useEffect } from 'react';
import { ArrowRight, LineChart, Target, Users, MessageCircle, CheckCircle, Award, Percent, MousePointer } from 'lucide-react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';

const SMMA = () => {
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
              <Badge className="mb-5 animate-fade-in">SOCIAL MEDIA MARKETING</Badge>
              <AnimatedHeading level={1} className="mb-6" highlight>
                Strategic Social Media & Paid Ads for Healthcare
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
                Targeted campaigns that attract high-quality patients for your specific treatments and services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
                <CTA className="py-3 px-8 text-lg" />
                <Link 
                  to="/contact" 
                  className="group inline-flex items-center text-comacks-white hover:text-comacks-red transition-colors"
                >
                  See our results
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
          <Badge className="mb-4">OUR MARKETING SERVICES</Badge>
          <AnimatedHeading className="mb-6">
            Complete Social Media & Ad Management for Healthcare
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            We handle every aspect of your clinic's digital marketing, from strategy to execution to reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Service 1 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Paid Advertising</h3>
            <p className="text-comacks-white/70 mb-6">
              Targeted ads on Google, Facebook, and Instagram that reach potential patients actively looking for your services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Google Ads campaigns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Facebook & Instagram Ads</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Remarketing to warm leads</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-100">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Social Media Management</h3>
            <p className="text-comacks-white/70 mb-6">
              Professional management of your clinic's social media presence to build authority and engage with patients.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Content creation & posting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Community engagement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Growth strategy</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-200">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MessageCircle className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Content Strategy</h3>
            <p className="text-comacks-white/70 mb-6">
              Educational and engaging content that positions your clinic as an authority in your specialty.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Blog posts & articles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Educational videos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Patient testimonials</span>
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-300">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <LineChart className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Analytics & Reporting</h3>
            <p className="text-comacks-white/70 mb-6">
              Transparent reporting that shows exactly how your marketing investment is performing.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Monthly performance reports</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">ROI tracking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Campaign optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer id="benefits" className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">BENEFITS</Badge>
          <AnimatedHeading className="mb-6">
            Why Our Healthcare Marketing Gets Results
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Our approach is specifically designed for healthcare providers in the Australian market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in">
            <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red mx-auto mb-6">
              <Award className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Healthcare Expertise</h3>
            <p className="text-comacks-white/70">
              We understand the unique compliance requirements and patient acquisition challenges in healthcare.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in delay-100">
            <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red mx-auto mb-6">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Targeted Approach</h3>
            <p className="text-comacks-white/70">
              We focus on reaching the right patients for your specific services, not just generating high traffic.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in delay-200">
            <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red mx-auto mb-6">
              <Percent className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Measurable ROI</h3>
            <p className="text-comacks-white/70">
              We track every lead and patient so you know exactly what your marketing investment is returning.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Process Section */}
      <SectionContainer id="process">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <Badge className="mb-4">OUR PROCESS</Badge>
            <AnimatedHeading className="mb-6">
              How We Drive Patient Growth
            </AnimatedHeading>
            <p className="text-comacks-white/80 mb-8">
              Our proven marketing process consistently delivers new patients to healthcare clinics across Australia.
            </p>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-comacks-red/20 flex items-center justify-center text-comacks-red font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-comacks-white">Research & Strategy</h4>
                  <p className="text-comacks-white/70">
                    We identify your ideal patients and develop a custom marketing strategy tailored to your clinic's goals.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-comacks-red/20 flex items-center justify-center text-comacks-red font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-comacks-white">Content Creation</h4>
                  <p className="text-comacks-white/70">
                    We develop compelling ads, posts, and content that resonates with potential patients.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-comacks-red/20 flex items-center justify-center text-comacks-red font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-comacks-white">Campaign Management</h4>
                  <p className="text-comacks-white/70">
                    We launch, monitor, and continuously optimize your campaigns for maximum performance.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="w-10 h-10 rounded-full bg-comacks-red/20 flex items-center justify-center text-comacks-red font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-comacks-white">Reporting & Optimization</h4>
                  <p className="text-comacks-white/70">
                    We provide transparent reporting and continuously refine strategies based on performance data.
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
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Social Media Marketing" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-comacks-white">3X</span>
                      <p className="text-comacks-white/90 text-lg mt-2">Patient Acquisition</p>
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

      {/* Ad Platforms Section */}
      <SectionContainer id="platforms" className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">PLATFORMS</Badge>
          <AnimatedHeading className="mb-6">
            Where We Promote Your Clinic
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            We leverage the most effective platforms to reach potential patients in your local area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="glass rounded-2xl p-6 border border-comacks-white/10 text-center flex flex-col items-center animate-fade-in">
            <div className="w-14 h-14 bg-comacks-red/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 8l3-5 3 5" className="text-comacks-red" />
                <path d="M10 19H5L3 5h18l-2 14H14" className="text-comacks-red" />
                <path d="M9 19c0 1 .895 2 2 2s2-1 2-2" className="text-comacks-red" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-comacks-white">Google</h3>
            <p className="text-comacks-white/70 text-sm">
              Search ads, display ads, and YouTube videos targeting high-intent patients.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 border border-comacks-white/10 text-center flex flex-col items-center animate-fade-in delay-100">
            <div className="w-14 h-14 bg-comacks-red/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" className="text-comacks-red" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-comacks-white">Facebook</h3>
            <p className="text-comacks-white/70 text-sm">
              Targeted ads reaching specific demographics in your local service area.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 border border-comacks-white/10 text-center flex flex-col items-center animate-fade-in delay-200">
            <div className="w-14 h-14 bg-comacks-red/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" className="text-comacks-red" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" className="text-comacks-red" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" className="text-comacks-red" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-comacks-white">Instagram</h3>
            <p className="text-comacks-white/70 text-sm">
              Visual storytelling to showcase your clinic and patient results.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 border border-comacks-white/10 text-center flex flex-col items-center animate-fade-in delay-300">
            <div className="w-14 h-14 bg-comacks-red/20 rounded-full flex items-center justify-center mb-4">
              <MousePointer className="w-8 h-8 text-comacks-red" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-comacks-white">Remarketing</h3>
            <p className="text-comacks-white/70 text-sm">
              Follow-up ads that bring back visitors who showed interest but didn't convert.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer className="bg-gradient-to-b from-comacks-black to-comacks-black/95">
        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4">GET STARTED TODAY</Badge>
          <AnimatedHeading className="mb-6">
            Ready to Grow Your Patient Base?
          </AnimatedHeading>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how our social media marketing can help your clinic attract more high-quality patients.
          </p>
          <CTA className="py-3 px-8 text-lg" />
        </div>
      </SectionContainer>

      {/* Sticky Mobile CTA */}
      <CTA sticky />
    </div>
  );
};

export default SMMA;
