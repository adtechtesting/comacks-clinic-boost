import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, LoaderCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("https://project-nu-nine-47.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }
      
      toast({
        description: "Message sent successfully! We'll get back to you shortly."
      });
      
      setFormData({
        name: '',
        clinicName: '',
        email: '',
        phone: '',
        message: '',
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ 
        variant: "destructive", 
        description: error instanceof Error ? error.message : "Something went wrong!" 
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 border border-comacks-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-comacks-white mb-2 font-medium">
            Your Name *
          </label>
          <Input
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
          <Input
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
          <Input
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
          <Input
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
        <Textarea
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
      
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-comacks-red text-comacks-white py-3 px-6 rounded-lg transition-all hover:bg-comacks-red/90 hover:shadow-lg hover:shadow-comacks-red/20 flex items-center justify-center font-medium disabled:opacity-70"
      >
        {loading ? (
          <span className="flex items-center">
            Sending...
            <LoaderCircle className="animate-spin ml-2 h-5 w-5" />
          </span>
        ) : (
          <span className="flex items-center">
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </span>
        )}
      </Button>
    </form>
  );
}
