import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Target, Phone, Mail, Clock, Shield, CheckCircle, Users, MessageCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const LeadFormSection = () => {
  const {
    ref: headerRef,
    isIntersecting: headerVisible
  } = useIntersectionObserver();
  const {
    ref: formRef,
    isIntersecting: formVisible
  } = useIntersectionObserver();
  const {
    ref: sidebarRef,
    isIntersecting: sidebarVisible
  } = useIntersectionObserver();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    timeSlot: '',
    whatsappUpdates: true
  });
  const timeSlots = ['Morning (9 AM - 12 PM)', 'Afternoon (1 PM - 4 PM)', 'Evening (5 PM - 8 PM)', 'Weekend Batch (Sat-Sun)'];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to reserve your seat.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Seat Reserved Successfully! 🎉",
      description: "Check your email for demo class details. WhatsApp reminder will be sent 30 minutes before class."
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      timeSlot: '',
      whatsappUpdates: true
    });
  };
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Badge className="bg-success text-success-foreground mb-4 px-4 py-2">
              🎯 Limited Seats Available
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Reserve Your <span className="text-gradient">Free Demo Now</span>
            </h2>
            
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card ref={formRef} className={`card-gradient transition-all duration-700 delay-300 ${formVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Free Demo Registration</h3>
                  <p className="text-sm text-muted-foreground">No payment required • Instant confirmation </p>
                </div>

                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="flex items-center gap-2">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input id="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} className="h-12" required />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className="h-12" required />
                </div>

                {/* Mobile Field */}
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <Input id="mobile" type="tel" placeholder="+91 XXXXX XXXXX" value={formData.mobile} onChange={e => handleInputChange('mobile', e.target.value)} className="h-12" required />
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Preferred Time Slot <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.timeSlot} onValueChange={value => handleInputChange('timeSlot', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Choose your convenient time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(slot => <SelectItem key={slot} value={slot}>{slot}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                {/* WhatsApp Updates */}
                

                {/* Submit Button */}
                <Button type="submit" className="btn-cta w-full h-12 text-lg">
                  <Target className="mr-2 h-5 w-5" />
                  Reserve Free Demo Access
                </Button>

                {/* Trust Indicators */}
                
              </form>
            </Card>

            {/* Benefits & Trust */}
            <div ref={sidebarRef} className={`space-y-6 transition-all duration-700 delay-600 ${sidebarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {/* What Happens Next */}
              <Card className="card-feature">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  What Happens After Registration
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</div>
                    <div>
                      <div className="font-medium">Instant Confirmation</div>
                      <div className="text-sm text-muted-foreground">Email with demo class link sent immediately</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-xs font-bold text-secondary">2</div>
                    <div>
                      <div className="font-medium">Program Overview </div>
                      <div className="text-sm text-muted-foreground">Get a complete outline of our curriculum & training structure</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center text-xs font-bold text-success">3</div>
                    <div>
                      <div className="font-medium">Reminder & Support</div>
                      <div className="text-sm text-muted-foreground">WhatsApp reminders before class starts</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Live Stats */}
              <Card className="card-feature">
                <h3 className="text-lg font-bold mb-4">This Month's Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">150</div>
                    <div className="text-xs text-muted-foreground">Demo Attendees</div>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">180</div>
                    <div className="text-xs text-muted-foreground">Enrollments</div>
                  </div>
                </div>
              </Card>

              {/* Security */}
              <Card className="bg-gradient-to-r from-muted/50 to-muted/20 border border-border/20 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="font-semibold text-sm">Your Privacy is Protected</span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>✓ No spam calls or emails</div>
                  <div>✓ Data encrypted and secure</div>
                  <div>✓ Used only for course communication</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Sticky Mobile CTA */}
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-cta p-4 shadow-lg lg:hidden z-50">
            <div className="container mx-auto">
              <div className="flex items-center justify-between text-white">
                <div>
                  <div className="font-bold">Free Demo Starting Soon!</div>
                  <div className="text-xs opacity-90">Reserve your seat now</div>
                </div>
                <Button className="bg-white text-success hover:bg-white/90 font-bold">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LeadFormSection;