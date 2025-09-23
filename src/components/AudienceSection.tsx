import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, GraduationCap, Code, TrendingUp, Clock, Target } from 'lucide-react';

const AudienceSection = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: 'Fresh Graduates',
      subtitle: 'Get job-ready with in-demand skills',
      description: 'Start your career with enterprise-grade Oracle skills that companies desperately need',
      benefits: [
        'Industry-ready certification',
        'Live project experience',
        'Placement assistance included',
        'Starting salary: 4-8 LPA'
      ],
      color: 'secondary'
    },
    {
      icon: Code,
      title: 'IT Professionals',
      subtitle: 'Upgrade from SAP/Legacy ERP to Oracle Cloud',
      description: 'Leverage your existing ERP knowledge to master the most in-demand Oracle Cloud platform',
      benefits: [
        'Fast-track learning path',
        'Advanced modules included',
        'Consultant-level training',
        'Premium salary packages'
      ],
      color: 'accent'
    },
    {
      icon: Users,
      title: 'Working Professionals',
      subtitle: 'Transition to IT with no coding background',
      description: 'Perfect for professionals from any domain looking to switch to high-paying Oracle careers',
      benefits: [
        'No technical background required',
        'Learn while working your current job',
        'Weekend and evening batches available',
        'Average salary increase: 150-300%'
      ],
      color: 'primary'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-muted/20 to-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Perfect for <span className="text-gradient">Every Career Stage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're starting fresh or upgrading your skills, our program is designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            const colorClasses = {
              primary: 'border-primary/20 bg-primary/5 hover:bg-primary/10',
              secondary: 'border-secondary/20 bg-secondary/5 hover:bg-secondary/10', 
              accent: 'border-accent/20 bg-accent/5 hover:bg-accent/10'
            };
            
            const iconColors = {
              primary: 'text-primary bg-primary/10',
              secondary: 'text-secondary bg-secondary/10',
              accent: 'text-accent bg-accent/10'
            };

            return (
              <Card key={index} className={`card-feature ${colorClasses[audience.color]} group`}>
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl ${iconColors[audience.color]} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
                  <p className={`font-semibold mb-3 ${audience.color === 'primary' ? 'text-primary' : audience.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                    {audience.subtitle}
                  </p>
                  <p className="text-muted-foreground">{audience.description}</p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {audience.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${audience.color === 'primary' ? 'bg-primary' : audience.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-border/20">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium">
                    <Target className="h-4 w-4" />
                    <span>Perfect Match for You</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card className="card-gradient inline-block p-6 max-w-2xl">
            <h3 className="text-xl font-bold mb-2">Still Not Sure Which Path Is Right?</h3>
            <p className="text-muted-foreground mb-4">
              Join our free demo session and speak directly with our career counselor
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-success" />
                <span>30-min career assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Personalized roadmap</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;