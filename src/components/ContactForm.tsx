
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you shortly.');
      setFormData({
        name: '',
        clinicName: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 border border-comacks-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-comacks-white mb-2 font-medium">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-comacks-white/5 border border-comacks-white/10 text-comacks-white focus:border-comacks-red focus:ring-1 focus:ring-comacks-red outline-none transition-all"
            placeholder="John Smith"
          />
        </div>
        
        <div>
          <label htmlFor="clinicName" className="block text-comacks-white mb-2 font-medium">
            Clinic Name *
          </label>
          <input
            type="text"
            id="clinicName"
            name="clinicName"
            value={formData.clinicName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-comacks-white/5 border border-comacks-white/10 text-comacks-white focus:border-comacks-red focus:ring-1 focus:ring-comacks-red outline-none transition-all"
            placeholder="Smith Family Dental"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-comacks-white mb-2 font-medium">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-comacks-white/5 border border-comacks-white/10 text-comacks-white focus:border-comacks-red focus:ring-1 focus:ring-comacks-red outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-comacks-white mb-2 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-comacks-white/5 border border-comacks-white/10 text-comacks-white focus:border-comacks-red focus:ring-1 focus:ring-comacks-red outline-none transition-all"
            placeholder="+61 400 000 000"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-comacks-white mb-2 font-medium">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-comacks-white/5 border border-comacks-white/10 text-comacks-white focus:border-comacks-red focus:ring-1 focus:ring-comacks-red outline-none transition-all resize-none"
          placeholder="Tell us about your clinic and what you're looking for..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-comacks-red text-comacks-white py-3 px-6 rounded-lg transition-all hover:bg-comacks-red/90 hover:shadow-lg hover:shadow-comacks-red/20 flex items-center justify-center font-medium disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            Sending...
            <svg className="animate-spin ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        ) : (
          <span className="flex items-center">
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
