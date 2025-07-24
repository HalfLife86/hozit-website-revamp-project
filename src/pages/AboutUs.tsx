import React, { useEffect } from 'react';
import { Users, Award, Shield, Clock, Globe, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/About/AboutHero';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About HozIT - Premier South African IT Solutions Provider | HozIT';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about HozIT Domain Hosting - South Africa\'s premier IT solutions provider since 2020. Trusted by Glencore, Norton Rose, SEFA and more.');
    }

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', 'HozIT about us, South African IT company, black-owned business, IT solutions South Africa, Winter Zozi');

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://hozit.co.za/about');

    const updateOrCreateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMetaProperty('og:title', 'About HozIT - Premier South African IT Solutions Provider');
    updateOrCreateMetaProperty('og:description', 'Learn about HozIT Domain Hosting - South Africa\'s premier IT solutions provider since 2020.');
    updateOrCreateMetaProperty('og:url', 'https://hozit.co.za/about');
    updateOrCreateMetaProperty('og:type', 'website');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />

      {/* Team Image Section */}
      <section id="our-story" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  Meet Our Team
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Our people put you and your team first. We're passionate about delivering exceptional customer service with best-fit technology solutions that drive your business forward.
                </p>
                <p className="text-lg leading-relaxed">
                  We're a collaborative team delivering small, custom technology while being positioned to lead the organization across multiple environments.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/8cc44546-9354-4afe-9adf-501a6959c681.png"
                  alt="HozIT Team - Our people put you and your team first"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              Hozit Domain Hosting is a premier South African IT solutions provider, dedicated to helping businesses thrive in the digital age. Founded in 2020 by esteemed technology entrepreneur Mr. Winter Zozi, the company brings over 25 years of industry expertise and a deep understanding of both corporate and SME environments.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Headquartered in Sandton, Johannesburg, Hozit Domain Hosting has grown into a trusted partner for organizations across the country, delivering cutting-edge technology solutions that are both innovative and reliable. With a strong track record of success and a passion for excellence, we've empowered hundreds of businesses through:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-3" />
                  Enterprise-grade Domain Registration & Hosting
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  Advanced Server Security & Support
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  Robust Cybersecurity Solutions
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-3" />
                  Expert ERP Consultancy
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-3" />
                  Custom Website Development
                </li>
                <li className="flex items-center">
                  <Headphones className="h-5 w-5 text-primary mr-3" />
                  Scalable Cloud Hosted PBX
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-primary mr-3" />
                  Efficient IT Equipment Supply & Delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              After 15 years in the corporate IT sector, Mr. Zozi saw an opportunity to bridge the technology gap for small to medium enterprises (SMEs) and state-owned entities. With a commitment to innovation and a customer-first approach, Hozit was born—not just as a service provider, but as a technology enabler.
            </p>
            <p className="text-lg leading-relaxed">
              What began as a domain hosting company has evolved into a comprehensive IT powerhouse, known for quality, scalability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Empowering Local Talent Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Empowering Local Talent</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Hozit is proudly Black-owned and strongly rooted in empowerment and diversity. The leadership team includes two dynamic black female directors: Ms. Tinyiko Ngwenyama and Ms. Travolta Tecia Mkhabela. We are passionate about nurturing young black professionals, offering them opportunities to lead and innovate in the rapidly evolving tech space.
            </p>
            <p className="text-lg leading-relaxed">
              We believe in uplifting South African talent, especially from underserved communities, and equipping them with skills to lead in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Directors</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/991fc7b0-ea5b-4540-9b01-6435c64203b0.png"
                  alt="W Zozi - Founder & Director"
                  className="w-48 h-48 mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">W Zozi</h3>
              <p className="text-muted-foreground">Founder & Director</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/28b4ed1f-cd40-402d-93a8-437fd790843e.png"
                  alt="Ms T Ngwenyama - Director"
                  className="w-48 h-48 mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ms T Ngwenyama</h3>
              <p className="text-muted-foreground">Director</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/lovable-uploads/3bcc77fb-d743-4bfa-93e4-1541fa7e0857.png"
                  alt="Ms T Mkhabela - Director"
                  className="w-48 h-48 mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ms T Mkhabela</h3>
              <p className="text-muted-foreground">Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trusted Clients</h3>
                <p className="text-sm text-muted-foreground">
                  Serving Glencore, Norton Rose, SEFA, Horizon Laboratories, and Ramothello Inc.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">2700+ Websites</h3>
                <p className="text-sm text-muted-foreground">
                  Successfully developed and hosted across South Africa
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">4000+ Extensions</h3>
                <p className="text-sm text-muted-foreground">
                  Cloud PBX extensions served with reliability
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Certified Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  SAP, Oracle, Microsoft Dynamics, and NetSuite specialists
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock customer and technical support
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">99.9% Uptime</h3>
                <p className="text-sm text-muted-foreground">
                  Guaranteed reliability and performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-12">
            To provide reliable, secure, and scalable IT solutions that support our clients' digital transformation and long-term growth.
          </p>
          
          {/* Company Registration Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-muted-foreground/20">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">VAT Number</h3>
              <p className="text-muted-foreground">4820276410</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Company Registration</h3>
              <p className="text-muted-foreground">2020/001667/07</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">CSD Number</h3>
              <p className="text-muted-foreground">MAAA1176904</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">B-BBEE Level</h3>
              <p className="text-muted-foreground">Level 1</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Black Ownership</h3>
              <p className="text-muted-foreground">100% Black Owned</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Female Youth</h3>
              <p className="text-muted-foreground">70% Black Female Youth</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;