import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Facebook, X, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactInfo = ({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: string }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-it-accent/10 p-3 rounded-full mr-4">
        <Icon className="h-6 w-6 text-it-accent" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-black">{title}</h3>
        <p className="text-black">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_n4400m9';
      const templateId = 'template_u2oh7d4';
      const publicKey = 's9YQR8_wMjfdDG9Pk';
      
      // Template parameters that will be sent to EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      console.log("Sending email with data:", templateParams);
      
      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll respond to your inquiry within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again or contact us directly at info@hozit.co.za",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-it-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-heading">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to start your next IT project? Get in touch with our team of experts today.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-it-accent p-8 text-black">
              <h3 className="text-2xl font-bold mb-6 text-black">Get in Touch</h3>
              <p className="mb-8 text-black">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <ContactInfo 
                icon={Phone} 
                title="Phone" 
                content="+27 66 527 5917" 
              />
              
              <ContactInfo 
                icon={Mail} 
                title="Email" 
                content="info@hozit.co.za" 
              />
              
              <ContactInfo 
                icon={MapPin} 
                title="Address" 
                content="145 Second Street, Parkmore Sandton, Johannesburg, 2196" 
              />
              
              <div className="mt-8">
                <h4 className="text-xl font-medium mb-4 text-black">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://web.facebook.com/people/Hozit-Domain-Hosting/100086561992144/?mibextid=PtKPJ9" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
                    <Facebook className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://x.com/hozit_sa" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
                    <X className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://www.instagram.com/hozit_sa/" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
                    <Instagram className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://www.linkedin.com/company/hozit-domain-hosting" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-black" />
                  </a>
                  <a href="https://www.tiktok.com/@hozit.domain.host" target="_blank" rel="noopener noreferrer" className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.321 5.562a5.124 5.124 0 0 1-3.035-2.494 5.12 5.12 0 0 1-.477-1.976H12.05v12.337a2.318 2.318 0 0 1-3.555 1.959 2.318 2.318 0 0 1-1.082-1.959c0-1.28 1.037-2.318 2.318-2.318.22 0 .433.031.636.088V7.406a6.114 6.114 0 0 0-.636-.033c-3.382 0-6.124 2.742-6.124 6.124S6.349 19.62 9.731 19.62c3.383 0 6.124-2.742 6.124-6.124v-6.87a8.803 8.803 0 0 0 5.322 1.77V5.562h-1.856Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-it-accent focus:border-it-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-it-accent focus:border-it-accent"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-it-accent focus:border-it-accent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-it-accent focus:border-it-accent"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-it-accent hover:bg-amber-600 text-black w-full font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
