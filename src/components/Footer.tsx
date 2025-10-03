import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Twitter, Linkedin, Youtube, Instagram, Award, Shield, Users } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    name: 'Free Demo',
    href: '#demo'
  }, {
    name: 'Meet Trainer',
    href: '#trainer'
  }, {
    name: 'Schedule',
    href: '#schedule'
  }, {
    name: 'Pricing',
    href: '#pricing'
  }, {
    name: 'Testimonials',
    href: '#testimonials'
  }, {
    name: 'FAQ',
    href: '#faq'
  }];
  const oracleModules = ['Oracle Fusion SCM', 'Procurement Cloud', 'Inventory Management', 'Order Management', 'Manufacturing Cloud', 'Supply Planning', 'Logistics Management', 'Cost Management'];
  const certifications = [{
    name: 'Oracle Certified Partner',
    icon: Award,
    color: 'text-success'
  }, {
    name: 'ISO 9001:2015 Certified',
    icon: Shield,
    color: 'text-primary'
  }, {
    name: 'NASSCOM Member',
    icon: Users,
    color: 'text-primary'
  }];
  const socialLinks = [{
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: Youtube,
    href: '#',
    label: 'YouTube'
  }, {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }];
  return <footer className="bg-gradient-to-br from-background to-primary/5 border-t border-primary/20">
      

      {/* Floating WhatsApp Button */}
      
    </footer>;
};
export default Footer;