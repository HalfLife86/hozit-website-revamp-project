
import React from 'react';
import { Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DisasterRecovery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Disaster Recovery Solutions: Ensuring Business Continuity</h2>
          <p className="text-xl text-gray-600">
            In today's digital age, businesses rely heavily on technology to operate efficiently and serve their customers. 
            However, unforeseen events such as natural disasters, cyber attacks, hardware failures, or human errors can 
            disrupt business operations and lead to significant financial losses. That's where our disaster recovery solutions come in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-bold">Comprehensive Disaster Recovery Planning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                At Hozit Domain Hosting, we understand the importance of having a robust disaster recovery plan in place to 
                minimize downtime and ensure business continuity in the face of adversity. Our team of experts works closely 
                with your organization to assess potential risks, identify critical systems and data, and develop a comprehensive 
                disaster recovery strategy tailored to your unique needs and objectives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-bold">Off-Site Data Protection</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Off-site data protection is a critical component of any disaster recovery plan. Storing backups off-site ensures 
                that your data remains safe and accessible even if your primary infrastructure is compromised. We offer secure 
                off-site data storage solutions that replicate your critical data to geographically diverse locations, providing 
                redundancy and resilience against disasters such as fires, floods, or cyber attacks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-bold">Automated Backup and Recovery</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Manual backups are time-consuming and prone to human error. Our disaster recovery solutions leverage automated 
                backup and recovery processes to ensure that your data is backed up regularly and consistently. We implement 
                automated backup schedules tailored to your organization's needs, ensuring that critical data is protected 
                without disrupting your day-to-day operations. In the event of a disaster, our automated recovery processes 
                enable swift restoration of your systems and data, minimizing downtime and mitigating losses.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-bold">Continuous Monitoring and Testing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Effective disaster recovery requires more than just backup and recovery capabilities—it requires proactive 
                monitoring and regular testing to ensure readiness and effectiveness. Our disaster recovery solutions include 
                continuous monitoring of your systems and data, allowing us to detect potential issues and address them before 
                they escalate into full-blown disasters. We also conduct regular disaster recovery drills and testing exercises 
                to validate the efficacy of your recovery plan and identify areas for improvement.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-bold">Tailored Disaster Recovery Solutions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We understand that every business is unique, with its own set of requirements, constraints, and objectives. 
                That's why we offer tailored disaster recovery solutions designed to meet your specific needs and budget. 
                Whether you're a small business with limited resources or a large enterprise with complex IT infrastructure, 
                we work closely with you to develop a disaster recovery plan that aligns with your business goals and ensures 
                the continuity of your operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DisasterRecovery;
