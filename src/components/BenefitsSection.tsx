import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Clock, 
  Smartphone, 
  FileText, 
  Briefcase, 
  Target, 
  CheckCircle, 
  Shield,
  Users,
  Award
} from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const BenefitsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  const benefits = [
    {
      icon: Play,
      title: 'Live Experience',
      description: 'Interactive sessions with real-time doubt clearing',
      color: 'primary'
    },
    {
      icon: Clock,
      title: '80 hrs Learning',
      description: 'Comprehensive curriculum covering all SCM modules',
      color: 'secondary'
    },
    {
      icon: Smartphone,
      title: 'LMS for Learning',
      description: 'Advanced learning management system with tracking',
      color: 'success'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Learn on-the-go with our dedicated mobile application',
      color: 'success'
    },
    {
      icon: FileText,
      title: 'Resume Tips',
      description: 'Professional resume building and interview preparation',
      color: 'primary'
    },
    {
      icon: Briefcase,
      title: 'Placement Support',
      description: 'Dedicated placement assistance with job guarantees',
      color: 'secondary'
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isIntersecting ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Attend This <span className="text-gradient">Demo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our unique training methodology and see why 95% of our students recommend us
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClasses = {
              primary: 'text-primary bg-primary/10',
              secondary: 'text-secondary bg-secondary/10',
              accent: 'text-accent bg-accent/10',
              success: 'text-success bg-success/10'
            };

            return (
              <Card key={index} className={`card-feature group hover:scale-105 transition-all duration-1000 ${
                isIntersecting ? 'animate-fade-in' : 'opacity-0 translate-y-10'
              }`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl mb-4 ${colorClasses[benefit.color]} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition Card */}
        <Card className={`card-gradient transition-all duration-1000 delay-900 ${
          isIntersecting ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <Badge className="bg-primary text-primary-foreground">🎯 Make an Informed Decision</Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                No Hidden Costs, No Pressure Sales
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Unlike other institutes, we believe in complete transparency. Try our actual training 
                methodology for 3 days. Only pay if you're 100% satisfied with the quality.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span>No upfront payment required</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>Direct trainer interaction</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-success" />
                  <span>Industry-recognized certification</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-card p-6 rounded-xl border border-primary/10">
                <h4 className="font-bold text-lg mb-2 text-center">What Students Say</h4>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-success/5 rounded-xl border border-success/10">
                  <div className="text-2xl font-bold text-success">95%</div>
                  <div className="text-xs text-muted-foreground">Placement Rate</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-2xl font-bold text-primary">₹6.2L</div>
                  <div className="text-xs text-muted-foreground">Avg. Salary</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;