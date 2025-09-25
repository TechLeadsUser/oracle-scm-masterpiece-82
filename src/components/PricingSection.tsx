import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Crown, Users, Play, Phone, Calendar, Shield, CreditCard, Zap } from 'lucide-react';
const PricingSection = () => {
  const plans = [{
    name: 'Self-Paced Learning',
    price: '₹14,999',
    originalPrice: '₹24,999',
    type: 'recorded',
    description: 'Perfect for self-motivated learners',
    features: ['Pre-recorded video sessions', 'Lifetime access to content', 'PDF materials & quizzes', 'Basic email support', 'Certificate of completion', 'Mobile app access'],
    limitations: ['No live interaction', 'Limited doubt clearing', 'No placement assistance'],
    badge: '',
    buttonText: 'Choose Self-Paced',
    buttonVariant: 'outline'
  }, {
    name: 'Live Online Training',
    price: '₹24,999',
    originalPrice: '₹39,999',
    type: 'live',
    description: 'Our most popular complete program',
    features: ['Live interactive sessions', 'Direct trainer interaction', 'Real-time doubt clearing', 'Live projects & assignments', 'Resume building assistance', 'Interview preparation', 'Job placement assistance', 'Lifetime community access', 'Mobile app with offline sync', '24/7 support channel'],
    limitations: [],
    badge: 'Most Popular',
    buttonText: 'Join Live Training',
    buttonVariant: 'cta'
  }, {
    name: 'Corporate Training',
    price: 'Custom',
    originalPrice: '',
    type: 'corporate',
    description: 'Tailored for teams and organizations',
    features: ['Customized curriculum', 'On-site/remote delivery', 'Team progress tracking', 'Dedicated account manager', 'Flexible scheduling', 'Volume discounts available', 'Post-training support', 'Custom certification'],
    limitations: [],
    badge: 'Enterprise',
    buttonText: 'Request Quote',
    buttonVariant: 'hero'
  }];
  return <section className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pay only after experiencing our 3-day free demo. No hidden charges, ever.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="flex items-center gap-3 p-4 bg-success/5 rounded-xl border border-success/10">
            <Calendar className="h-6 w-6 text-success" />
            <span className="font-medium">Pay after 3-day free access</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <CreditCard className="h-6 w-6 text-primary" />
            <span className="font-medium">EMI options available</span>
          </div>
          <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-medium">100% satisfaction guarantee</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
          const isPopular = plan.badge === 'Most Popular';
          const isEnterprise = plan.badge === 'Enterprise';
          return <Card key={index} className={`
                ${isPopular ? 'border-success/50 shadow-glow scale-105' : 'border-border/20'} 
                ${isEnterprise ? 'border-primary/50' : ''}
                card-gradient relative group hover:scale-105 transition-all duration-300
              `}>
                {/* Badge */}
                {plan.badge && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className={`
                    px-4 py-1 ${isPopular ? 'bg-success text-success-foreground' : 'bg-primary text-primary-foreground'}
                  `}>
                      {isPopular && <Crown className="w-4 h-4 mr-1" />}
                      {plan.badge}
                    </Badge>
                  </div>}

                {/* Header */}
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="space-y-2">
                    {plan.originalPrice && <div className="text-sm text-muted-foreground line-through">
                        {plan.originalPrice}
                      </div>}
                    <div className="text-3xl font-bold text-primary">
                      {plan.price}
                      {plan.type === 'live'}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>)}
                  
                  {plan.limitations.length > 0 && <div className="pt-2 border-t border-border/10">
                      <p className="text-xs text-muted-foreground mb-2">Limitations:</p>
                      {plan.limitations.map((limitation, i) => <div key={i} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full border border-muted-foreground/30 mt-0.5 flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{limitation}</span>
                        </div>)}
                    </div>}
                </div>

                {/* CTA Button */}
                <Button className={`w-full ${plan.buttonVariant === 'cta' ? 'btn-cta' : plan.buttonVariant === 'hero' ? 'btn-hero' : 'btn-outline'}`}>
                  {plan.buttonVariant === 'cta' && <Zap className="mr-2 h-4 w-4" />}
                  {plan.buttonVariant === 'hero' && <Phone className="mr-2 h-4 w-4" />}
                  {plan.buttonText}
                </Button>
              </Card>;
        })}
        </div>

        {/* Bottom Info */}
        
      </div>
    </section>;
};
export default PricingSection;