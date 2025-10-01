import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Crown, Users, Play, Phone, Calendar, Shield, CreditCard, Zap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const PricingSection = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: keyPointsRef, isIntersecting: keyPointsVisible } = useIntersectionObserver();
  const { ref: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver();
  
  const plans = [{
    name: 'Self Paced',
    price: '₹20,000',
    originalPrice: '',
    type: 'recorded',
    description: 'Learn at your own speed with structured, pre-recorded lessons designed by experts.',
    features: ['Pre-recorded high-quality video lessons', 'Lifetime access to course materials', 'Industry-relevant curriculum', 'Assignments & quizzes', 'Learn at your own pace', 'Placement Guidance'],
    limitations: [],
    badge: '',
    buttonText: 'Buy Now',
    buttonVariant: 'outline'
  }, {
    name: 'Live Training',
    price: '₹30,000',
    originalPrice: '',
    type: 'live',
    description: 'Experience real-time learning with industry experts. Get personalized feedback from mentors.',
    features: ['Instructor-led live sessions', 'Doubt-clearing sessions', 'Hands-on projects & case studies', 'Access to recorded sessions', 'Certification support', 'Placement assistance for merit students'],
    limitations: [],
    badge: 'Most Popular',
    buttonText: 'Buy Now',
    buttonVariant: 'cta'
  }, {
    name: 'Corporate Training',
    price: "Let's Discuss",
    originalPrice: '',
    type: 'corporate',
    description: 'Upskill your team with tailor-made corporate training programs. Get customized content & dedicated support.',
    features: ['Customized training for teams', 'Flexible batch scheduling', 'Industry-focused curriculum', 'One-on-one mentorship', 'Dedicated support team', 'Exclusive hiring support'],
    limitations: [],
    badge: 'Enterprise',
    buttonText: 'Get A Personal Quote',
    buttonVariant: 'hero'
  }];
  return <section className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pay only after experiencing our 3-day free demo. No hidden charges, ever.
          </p>
        </div>

        {/* Key Points */}
        <div
          ref={keyPointsRef}
          className={`grid md:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-300 ${
            keyPointsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {plans.map((plan, index) => {
          const isPopular = plan.badge === 'Most Popular';
          const isEnterprise = plan.badge === 'Enterprise';
          return <Card
            key={index}
            className={`
                ${isPopular ? 'border-success/50 shadow-glow scale-105' : 'border-border/20'} 
                ${isEnterprise ? 'border-primary/50' : ''}
                card-gradient relative group hover:scale-105 transition-all duration-700
                ${cardsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
              `}
            style={{ transitionDelay: `${600 + index * 200}ms` }}
          >
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