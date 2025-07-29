
import { Server, Database, Shield, Check, Clock, Zap, Lock, ArrowUpCircle, HeadsetIcon } from 'lucide-react';

export const hostingPlans = [
  {
    name: "Basic Hosting",
    price: "R199.00",
    period: "/Year",
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/199-package",
    features: [
      "10GB SSD Web Space",
      "500GB Monthly Bandwidth",
      "1 Hosted Domains",
      "1 FTP Accounts",
      "1 Mailing Lists",
      "1 Subdomains",
      "2 SQL Databases",
      "5 Email Accounts",
      "Free .co.za Domain",
      "Free SSL Certificate",
      "24/7 Support"
    ],
    description: "12 Months Basic Hosting Included",
    popular: false
  },
  {
    name: "Advanced Hosting",
    price: "R2,500.00",
    period: "/Year",
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/advanced-hosting",
    features: [
      "50GB SSD Web Space",
      "200GB Monthly Bandwidth",
      "3 Hosted Domains",
      "5 FTP Accounts",
      "5 Mailing Lists",
      "5 Subdomains",
      "5 SQL Databases",
      "10 Email Accounts",
      "Free .co.za Domain",
      "Website",
      "24/7 Support",
      "Free SSL Certificate"
    ],
    description: "12 Months Advanced Hosting, FREE Website and .co.za domain",
    popular: true
  },
  {
    name: "Master Hosting",
    price: "R10,000.00",
    period: "/Year",
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/master-hosting",
    features: [
      "200GB SSD Web Space",
      "Unlimited Monthly Bandwidth",
      "10 Hosted Domains",
      "10 FTP Accounts",
      "10 Mailing Lists",
      "10 Subdomains",
      "10 SQL Databases",
      "20 Email Accounts",
      "Free .co.za Domain",
      "Website",
      "24/7 Support",
      "Free SSL Certificate",
      "R800.00 Setup Fee"
    ],
    description: "12 Months Master Hosting, FREE Website and .co.za domain",
    popular: false
  },
  {
    name: "Premium Hosting",
    price: "R20,000.00",
    period: "/Year",
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/premium-hosting",
    features: [
      "300GB SSD Web Space",
      "Unlimited Monthly Bandwidth",
      "20 Hosted Domains",
      "20 FTP Accounts",
      "20 Mailing Lists",
      "20 Subdomains",
      "20 SQL Databases",
      "100 Email Accounts",
      "Free .co.za Domain",
      "Website",
      "24/7 Support",
      "Free SSL Certificate"
    ],
    description: "12 Months Premium Hosting, website and Free .co.za domain",
    popular: false
  }
];

export const keyFeatures = [
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
