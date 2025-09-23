import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram,
  Award,
  Shield,
  Users
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Free Demo', href: '#demo' },
    { name: 'Meet Trainer', href: '#trainer' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' }
  ];

  const oracleModules = [
    'Oracle Fusion SCM',
    'Procurement Cloud',
    'Inventory Management',
    'Order Management',
    'Manufacturing Cloud',
    'Supply Planning',
    'Logistics Management',
    'Cost Management'
  ];

  const certifications = [
    {
      name: 'Oracle Certified Partner',
      icon: Award,
      color: 'text-success'
    },
    {
      name: 'ISO 9001:2015 Certified',
      icon: Shield,
      color: 'text-primary'
    },
    {
      name: 'NASSCOM Member',
      icon: Users,
      color: 'text-primary'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-primary/5 border-t border-primary/20">
      <div className="container-wide py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gradient">Tech Leads IT</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering careers through expert-led Oracle Fusion training. 
                Join thousands of professionals who transformed their careers with us.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-10 h-10 p-0 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-4 w-4" />
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 bg-gradient-card rounded-lg border border-primary/10">
                <div className="text-lg font-bold text-primary">14K+</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
              <div className="text-center p-3 bg-gradient-card rounded-lg border border-success/10">
                <div className="text-lg font-bold text-success">95%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <Button className="btn-whatsapp w-full">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Support
              </Button>
            </div>
          </div>

          {/* Oracle SCM Modules */}
          <div>
            <h4 className="font-bold mb-4">Oracle SCM Modules</h4>
            <div className="space-y-2">
              {oracleModules.map((module, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Call Us</div>
                  <div className="text-muted-foreground text-sm">+91 9876543210</div>
                  <div className="text-muted-foreground text-sm">+91 8765432109</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Email Us</div>
                  <div className="text-muted-foreground text-sm">info@techleadsit.com</div>
                  <div className="text-muted-foreground text-sm">support@techleadsit.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Visit Us</div>
                  <div className="text-muted-foreground text-sm leading-relaxed">
                    Tech Tower, 3rd Floor<br />
                    HITEC City, Hyderabad<br />
                    Telangana - 500081
                  </div>
                </div>
              </div>

              <div className="p-3 bg-gradient-card rounded-lg border border-success/10">
                <div className="font-medium text-sm text-success">WhatsApp Support</div>
                <div className="text-muted-foreground text-xs">24/7 Available for queries</div>
                <div className="text-success text-sm font-medium">+91 9876543210</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-border/20 pt-8 mb-8">
          <h4 className="font-bold text-center mb-6">Our Certifications & Memberships</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Badge key={index} variant="outline" className={`px-4 py-2 ${cert.color} border-current`}>
                  <IconComponent className="mr-2 h-4 w-4" />
                  {cert.name}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Tech Leads IT. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs">
                Transforming careers through Oracle expertise since 2018.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="btn-whatsapp rounded-full w-14 h-14 p-0 shadow-glow animate-pulse-soft">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;