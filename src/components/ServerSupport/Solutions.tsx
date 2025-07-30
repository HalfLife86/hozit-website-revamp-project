
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const ServerSupportSolutions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Server Support Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide any type of computer and software Technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Windows Server Support */}
          <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Windows Server</CardTitle>
              <CardDescription>
                We will it support install, setup, fix issues windows server
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Installation windows (7,8,10) & Linux</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Installation windows server (2012,2016,2019) all edition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>File Server</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>IIS Configuration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Server Patching / Upgradation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>WSUS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance Tuning/Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>RDP Configurations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Data Recovery</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-3xl font-bold text-orange-600">R2,000.00 ZAR</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                <a href="https://hozit.co.za/whmcs/index.php?rp=/store/server-support/windows-server" target="_blank" rel="noopener noreferrer">Order Now</a>
              </Button>
            </CardFooter>
          </Card>

          {/* Linux Server Support */}
          <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Linux Server Support</CardTitle>
              <CardDescription>
                Complete Linux server management and optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>cPanel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>WordPress</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>DNS</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>MySQL</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Apache / PHP</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>SSL / Firewall</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Backup setup & solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>VPS & Migration</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-3xl font-bold text-orange-600">R2,000.00 ZAR</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                <a href="https://hozit.co.za/whmcs/index.php?rp=/store/server-support/linux-server-support" target="_blank" rel="noopener noreferrer">Order Now</a>
              </Button>
            </CardFooter>
          </Card>

          {/* AWS Architecture */}
          <Card className="border-t-4 border-orange-500 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">AWS Architecture</CardTitle>
              <CardDescription>
                Complete cloud infrastructure setup and management
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CloudFormation or Terraform script</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CI/CD pipeline</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Functional environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Configuration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Migration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>7 Days Delivery</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-3xl font-bold text-orange-600">R10,000.00 ZAR</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                <a href="https://hozit.co.za/whmcs/index.php?rp=/store/server-support/aws-architecture" target="_blank" rel="noopener noreferrer">Order Now</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServerSupportSolutions;
