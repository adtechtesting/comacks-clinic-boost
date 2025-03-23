
import React, { useEffect } from 'react';
import { ArrowRight, Cpu, MessageSquare, BarChart, UserCheck, Zap, Clock, Database, Check } from 'lucide-react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';

const AIAutomation = () => {
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
              <Badge className="mb-5 animate-fade-in">AI AUTOMATION SYSTEMS</Badge>
              <AnimatedHeading level={1} className="mb-6" highlight>
                24/7 Patient Acquisition on Autopilot
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
                Harness the power of AI to automate patient communication, lead nurturing, and appointment booking—even while you sleep.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
                <CTA className="py-3 px-8 text-lg" />
                <Link 
                  to="/contact" 
                  className="group inline-flex items-center text-comacks-white hover:text-comacks-red transition-colors"
                >
                  Schedule a demo
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

      {/* Features Section */}
      <SectionContainer id="features">
        <div className="text-center mb-16">
          <Badge className="mb-4">OUR AI SYSTEMS</Badge>
          <AnimatedHeading className="mb-6">
            Intelligent Automation for Healthcare Clinics
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Our AI-powered systems are designed specifically for healthcare providers to streamline patient communication and acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Feature 1 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">24/7 Lead Capture Systems</h3>
            <p className="text-comacks-white/70 mb-6">
              Never miss a potential patient again. Our automated systems capture inquiries around the clock, ensuring no opportunity slips through the cracks.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Website chatbots that qualify leads</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">After-hours inquiry management</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Instant response to patient questions</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-100">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">WhatsApp Automation</h3>
            <p className="text-comacks-white/70 mb-6">
              Engage patients on their preferred channel with intelligent WhatsApp automation that feels personal and responsive.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Automated appointment reminders</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Patient follow-up sequences</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">FAQ handling with AI-powered responses</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-200">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Database className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">CRM Integration</h3>
            <p className="text-comacks-white/70 mb-6">
              Seamlessly connect your patient data across all systems for a unified view of every patient journey.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Integration with major healthcare CRMs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Automated patient record updates</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">HIPAA-compliant data handling</span>
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 card-hover animate-fade-in delay-300">
            <div className="bg-comacks-red/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <UserCheck className="h-7 w-7 text-comacks-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-comacks-white">Patient Nurturing Sequences</h3>
            <p className="text-comacks-white/70 mb-6">
              Turn inquiries into appointments with intelligent follow-up sequences that nurture potential patients.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Personalized email nurturing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">SMS follow-up campaigns</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-comacks-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-comacks-white/70">Behavior-based communication triggers</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer id="how-it-works" className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">PROCESS</Badge>
          <AnimatedHeading className="mb-6">
            How Our AI Automation Works
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            A simple, effective process that delivers results without disrupting your clinic's operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in">
            <div className="relative">
              <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red font-bold text-2xl mx-auto mb-6">
                1
              </div>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-comacks-red/50 to-transparent"></div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Assessment</h3>
            <p className="text-comacks-white/70">
              We analyze your current patient acquisition process and identify opportunities for automation.
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
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Implementation</h3>
            <p className="text-comacks-white/70">
              We set up and configure your AI systems, integrating them with your existing tools and workflows.
            </p>
          </div>

          {/* Step 3 */}
          <div className="glass rounded-2xl p-8 border border-comacks-white/10 text-center animate-fade-in delay-200">
            <div className="relative">
              <div className="w-16 h-16 bg-comacks-red/20 rounded-full flex items-center justify-center text-comacks-red font-bold text-2xl mx-auto mb-6">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-comacks-white">Optimization</h3>
            <p className="text-comacks-white/70">
              We continuously monitor and refine your automation systems to maximize performance and ROI.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer id="benefits">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <Badge className="mb-4">BENEFITS</Badge>
            <AnimatedHeading className="mb-6">
              Why AI Automation Makes a Difference
            </AnimatedHeading>
            <p className="text-comacks-white/80 mb-8">
              Our AI systems don't just save time—they transform how your clinic acquires and retains patients.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <Zap className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Never Miss an Opportunity</h4>
                  <p className="text-comacks-white/70">
                    Respond to patient inquiries instantly, any time of day or night, ensuring no potential patient slips away.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <Clock className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Save Hours of Staff Time</h4>
                  <p className="text-comacks-white/70">
                    Automate routine communication tasks so your team can focus on providing exceptional care.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <BarChart className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">Increase Conversion Rates</h4>
                  <p className="text-comacks-white/70">
                    Our AI systems have been shown to improve lead-to-patient conversion rates by up to 40%.
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
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="AI Automation" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-5xl font-bold text-comacks-white">24/7</span>
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

      {/* Final CTA Section */}
      <SectionContainer className="bg-gradient-to-b from-comacks-black to-comacks-black/95">
        <div className="glass rounded-2xl p-8 md:p-12 border border-comacks-white/10 text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-4">GET STARTED TODAY</Badge>
          <AnimatedHeading className="mb-6">
            Ready to Automate Your Patient Acquisition?
          </AnimatedHeading>
          <p className="text-comacks-white/80 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how our AI automation systems can transform your healthcare practice.
          </p>
          <CTA className="py-3 px-8 text-lg" />
        </div>
      </SectionContainer>

      {/* Sticky Mobile CTA */}
      <CTA sticky />
    </div>
  );
};

export default AIAutomation;
