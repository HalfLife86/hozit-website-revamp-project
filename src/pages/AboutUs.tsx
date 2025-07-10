import { Users, Award, Shield, Clock, Globe, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-it-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering South African businesses with innovative IT solutions since 2020
          </p>
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
      <section className="py-16 bg-gradient-to-r from-it-accent to-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Empowering Local Talent</h2>
          <div className="prose prose-lg max-w-none text-white">
            <p className="text-lg leading-relaxed mb-6">
              Hozit is proudly Black-owned and strongly rooted in empowerment and diversity. The leadership team includes two dynamic black female directors: Ms. Tinyiko Ngwenyama and Ms. Travolta Tecia Mkhabela. We are passionate about nurturing young black professionals, offering them opportunities to lead and innovate in the rapidly evolving tech space.
            </p>
            <p className="text-lg leading-relaxed">
              We believe in uplifting South African talent, especially from underserved communities, and equipping them with skills to lead in the digital economy.
            </p>
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
          <p className="text-xl leading-relaxed">
            To provide reliable, secure, and scalable IT solutions that support our clients' digital transformation and long-term growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;