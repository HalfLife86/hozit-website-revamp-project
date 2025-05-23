
import { Server, Database, Shield, Check, Clock, Zap, Lock, ArrowUpCircle, HeadsetIcon } from 'lucide-react';

export const hostingPlans = [
  {
    name: "Basic",
    price: "R199.00",
    period: "/Year",
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/199-package",
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
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/we",
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
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/advanced-hosting",
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
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/master-hosting",
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
    orderLink: "https://www.hozit.co.za/whmcs/index.php?rp=/store/web-hosting-packages/premium-hosting",
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
