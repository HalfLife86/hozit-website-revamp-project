
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Server, Database, Shield, Check, Clock, Zap, Lock, ArrowUpCircle, HeadsetIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const WebsiteHosting = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'HozIT - Website Hosting';
  }, []);

  const hostingPlans = [
    {
      name: "Basic",
      price: "R199.00",
      period: "/Year",
      features: [
        "10GB SSD Web Space",
        "500GB Bandwidth",
        "1 Domain",
        "1 Max FTP Account",
        "1 Max Mailing List",
        "1 Subdomain",
        "2 Max SQL Databases",
        "5 Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Server",
        "JetBackup (Daily)",
        "Imunify360 Security",
        "CloudLinux Operating System",
        "cPanel Control Panel",
        "Softaculous One-Click Installs",
        "Basic 24/7 Customer Support (2-8 hours)"
      ],
      description: "Perfect for small personal websites and blogs.",
      popular: false
    },
    {
      name: "Standard",
      price: "R50.00",
      period: "/month",
      features: [
        "20GB SSD Web Space",
        "50GB Bandwidth",
        "1 Domain",
        "1 Max FTP Account",
        "2 Max Mailing Lists",
        "5 Subdomains",
        "2 Max SQL Databases",
        "5 Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Server",
        "JetBackup (Daily)",
        "Imunify360 Security",
        "CloudLinux Operating System",
        "cPanel Control Panel",
        "Softaculous One-Click Installs",
        "Basic 24/7 Customer Support (2-8 hours)"
      ],
      description: "Great for small businesses just getting started.",
      popular: true
    },
    {
      name: "Advanced",
      price: "R100.00",
      period: "/month",
      features: [
        "100GB SSD Web Space",
        "200GB Bandwidth",
        "5 Domains",
        "10 Max FTP Accounts",
        "10 Max Mailing Lists",
        "10 Subdomains",
        "10 Max SQL Databases",
        "20 Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Server",
        "JetBackup (Daily)",
        "Imunify360 Security",
        "CloudLinux Operating System",
        "cPanel Control Panel",
        "Softaculous One-Click Installs",
        "Basic 24/7 Customer Support (2-8 hours)"
      ],
      description: "Ideal for growing businesses with multiple websites.",
      popular: false
    },
    {
      name: "Master",
      price: "R250.00",
      period: "/month",
      features: [
        "300GB SSD Web Space",
        "Unlimited Bandwidth",
        "10 Domains",
        "10 Max FTP Accounts",
        "10 Max Mailing Lists",
        "10 Subdomains",
        "10 Max SQL Databases",
        "100 Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Server",
        "JetBackup (Daily)",
        "Imunify360 Security",
        "CloudLinux Operating System",
        "cPanel Control Panel",
        "Softaculous One-Click Installs",
        "Basic 24/7 Customer Support (2-8 hours)"
      ],
      description: "For medium to large businesses with high traffic demands.",
      popular: false
    },
    {
      name: "Premium",
      price: "R500.00",
      period: "/month",
      features: [
        "500GB SSD Web Space",
        "Unlimited Bandwidth",
        "30 Domains",
        "30 Max FTP Accounts",
        "30 Max Mailing Lists",
        "30 Subdomains",
        "30 Max SQL Databases",
        "200 Email Accounts",
        "Free SSL Certificate",
        "LiteSpeed Server",
        "JetBackup (Daily)",
        "Imunify360 Security",
        "CloudLinux Operating System",
        "cPanel Control Panel",
        "Softaculous One-Click Installs",
        "Basic 24/7 Customer Support (2-8 hours)"
      ],
      description: "Enterprise-level solution for maximum performance and resources.",
      popular: false
    }
  ];

  const keyFeatures = [
    {
      icon: ArrowUpCircle,
      title: "High Uptime Guarantee",
      description: "We understand the importance of website availability. Our hosting infrastructure is built with redundancy and failover mechanisms to ensure maximum uptime for your website."
    },
    {
      icon: Zap,
      title: "Fast Loading Speeds",
      description: "In today's fast-paced digital world, every second counts. Our hosting servers are optimized for speed, delivering fast loading times to provide an optimal user experience for your visitors."
    },
    {
      icon: Lock,
      title: "Robust Security Measures",
      description: "Protecting your website and data is our top priority. Our hosting plans include advanced security features such as SSL certificates, firewalls, and malware scanning to safeguard against cyber threats."
    },
    {
      icon: Database,
      title: "Scalability Options",
      description: "Whether you're experiencing a sudden surge in traffic or planning for future growth, our hosting plans offer scalability options to accommodate your changing needs. Upgrade or downgrade your resources with ease as your website evolves."
    },
    {
      icon: HeadsetIcon,
      title: "Expert Support",
      description: "Our team of hosting experts is available 24/7 to provide technical assistance and support whenever you need it. From setting up your hosting account to troubleshooting issues, we're here to ensure your website runs smoothly at all times."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Domain Registration and Website Hosting</h1>
              <p className="text-xl mb-8">Establishing a strong online presence starts with the right domain name and reliable website hosting. At Hozit Domain Hosting, we offer comprehensive solutions to help you secure the perfect domain name and ensure your website remains accessible and responsive to your audience.</p>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">Get Started</Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Website Hosting Solutions</h3>
                <p className="text-gray-600">Reliable website hosting is essential for ensuring your website is accessible to visitors around the clock. Our hosting solutions are designed to deliver exceptional performance, security, and scalability for websites of all sizes. Whether you're launching a personal blog, an e-commerce store, or a corporate website, we offer hosting plans tailored to your specific needs and budget.</p>
              </div>
              
              <div className="p-6 rounded-lg border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Domain Registration Services</h3>
                <p className="text-gray-600">Choosing the right domain name is crucial as it represents your brand identity on the web. Our domain registration services simplify the process of securing your desired domain name, whether it's a traditional .co.za, .com, .net, or a niche-specific extension. Our user-friendly interface allows you to search for available domain names and register them with ease.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hosting Plans Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Hosting Plans</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose the perfect hosting plan for your needs. All plans include 24/7 support, free SSL, and security features.</p>
            
            <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Plan Features</TableHead>
                    {hostingPlans.map((plan, index) => (
                      <TableHead key={index} className="text-center">
                        <div className={`px-4 py-2 ${plan.name === "Standard" ? "bg-amber-500 text-white rounded-t-lg" : ""}`}>
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <div className="mt-1">
                            <span className="text-2xl font-bold">{plan.price}</span>
                            <span className="text-sm">{plan.period}</span>
                          </div>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">SSD Web Space</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[0].split("SSD Web Space")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Bandwidth</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[1].split("Bandwidth")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Domains</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[2].split("Domain")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">FTP Accounts</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[3].split("Max FTP Account")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Mailing Lists</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[4].split("Max Mailing List")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Subdomains</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[5].split("Subdomain")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">SQL Databases</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[6].split("Max SQL Database")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Email Accounts</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">{plan.features[7].split("Email Account")[0]}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">SSL Certificate</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Order Now</TableCell>
                    {hostingPlans.map((plan, index) => (
                      <TableCell key={index} className="text-center">
                        <Button className={`${plan.name === "Standard" ? "bg-amber-500 hover:bg-amber-600" : "bg-blue-600 hover:bg-blue-700"} text-white`}>
                          Order Now
                        </Button>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            {/* Mobile view for plans */}
            <div className="md:hidden">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid grid-cols-5 mb-4">
                  {hostingPlans.map((plan, index) => (
                    <TabsTrigger key={index} value={plan.name.toLowerCase()}>
                      {plan.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {hostingPlans.map((plan, index) => (
                  <TabsContent key={index} value={plan.name.toLowerCase()}>
                    <div className={`rounded-lg overflow-hidden border ${plan.name === "Standard" ? 'border-amber-500 shadow-xl' : 'border-gray-200'}`}>
                      <div className={`p-6 ${plan.name === "Standard" ? 'bg-amber-500 text-white' : ''}`}>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="mb-4">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-sm">{plan.period}</span>
                        </div>
                        <Button className={`w-full ${plan.name === "Standard" ? 'bg-white text-amber-500 hover:bg-gray-100' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                          Order Now
                        </Button>
                      </div>
                      
                      <ul className="p-6 space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">Experience The Hozit Features Difference Today!</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Our hosting solutions come with powerful features designed to elevate your online presence.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-lg border border-gray-200 flex flex-col items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Domain Management Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Domain Management Tools</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Managing your domain and hosting services is made simple with our intuitive control panel. Access essential tools for domain management, DNS configuration, email setup, and more, all from a centralized dashboard.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our user-friendly interface puts you in control of your online presence, allowing you to make updates and modifications with ease.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Domain Registration Services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Website Hosting Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Features of Our Hosting Plans</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>Domain Management Tools</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center">Have Additional Questions?</h3>
                <p className="text-center text-gray-600 mb-6">Feel Free to Consult with us over a Live Chat or Ticket System</p>
                <div className="flex justify-center">
                  <Button className="bg-it-blue hover:bg-it-blue-light text-white px-8 py-3">Contact with us</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let Hozit Domain Hosting Power Your Online Presence</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're launching a new website or looking to enhance your existing online presence, Hozit Domain Hosting has the expertise and resources to help you succeed. Secure your domain name, choose a hosting plan that meets your needs, and embark on your digital journey with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Contact Sales</Button>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Sign Up Now</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteHosting;
