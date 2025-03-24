import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import SectionContainer from '@/components/SectionContainer';
import AnimatedHeading from '@/components/AnimatedHeading';
import Badge from '@/components/Badge';
import ContactForm from '@/components/ContactForm';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
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
              <Badge className="mb-5 animate-fade-in">CONTACT US</Badge>
              <AnimatedHeading level={1} className="mb-6" highlight>
                Let's Grow Your Clinic Together
              </AnimatedHeading>
              <p className="text-comacks-white/80 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
                Reach out to schedule your free consultation and discover how we can help your healthcare practice thrive.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-comacks-red/10 rounded-full blur-3xl opacity-70"></div>
      </section>

      {/* Contact Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Badge className="mb-4">GET IN TOUCH</Badge>
            <AnimatedHeading className="mb-6">
              We'd Love to Hear from You
            </AnimatedHeading>
            <p className="text-comacks-white/80 mb-8">
              Fill out the form below or book a metting with Calendly so one of our specialists will get back to you within 24 hours to discuss how we can help your clinic grow.
            </p>
            <ContactForm />
          </div>
          <div>
            <div className="glass rounded-2xl p-8 border border-comacks-white/10 mb-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-6 text-comacks-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                    <Mail className="h-5 w-5 text-comacks-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-comacks-white">Email</h4>
                    <a href="mailto:info@comacks.com.au" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                      arpit@comacks.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                    <Phone className="h-5 w-5 text-comacks-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-comacks-white">Phone</h4>
                    <a href="tel:+61400000000" className="text-comacks-white/70 hover:text-comacks-red transition-colors">
                      +91 7303908344
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-comacks-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-comacks-white">Location</h4>
                    <p className="text-comacks-white/70">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 border border-comacks-white/10 animate-fade-in delay-100">
              <h3 className="text-xl font-semibold mb-6 text-comacks-white">Chat with Us</h3>
              <div className="flex items-start">
                <div className="bg-comacks-red/20 p-2 rounded-lg mr-4 mt-1">
                  <MessageSquare className="h-5 w-5 text-comacks-red" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-comacks-white">WhatsApp</h4>
                  <p className="text-comacks-white/70 mb-4">
                    Prefer to chat directly? Reach out to us on WhatsApp for quick responses.
                  </p>
                  <a
                    href="https://wa.me/7303908344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-comacks-red text-comacks-white px-4 py-2 rounded-full inline-flex items-center transition-all hover:bg-comacks-red/90"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Map Section with Calendly */}
      <SectionContainer className="bg-comacks-red/5">
        <div className="text-center mb-16">
          <Badge className="mb-4">BOOK A MEETING</Badge>
          <AnimatedHeading className="mb-6">
            Schedule Your Free Consultation
          </AnimatedHeading>
          <p className="text-comacks-white/80 max-w-3xl mx-auto">
            Use our calendar to book a time that works for you. We'll discuss your clinic's goals and how we can help you achieve them.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 border border-comacks-white/10 overflow-hidden animate-fade-in">
          <InlineWidget
            url="https://calendly.com/03arpit04"
            styles={{ height: '800px', width: '100%' }}
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Contact;