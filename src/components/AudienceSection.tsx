import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, GraduationCap, Code, TrendingUp, Clock, Target, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const AudienceSection = () => {
  const {
    ref: headerRef,
    isIntersecting: headerVisible
  } = useIntersectionObserver();
  const {
    ref: cardsRef,
    isIntersecting: cardsVisible
  } = useIntersectionObserver();
  const {
    ref: ctaRef,
    isIntersecting: ctaVisible
  } = useIntersectionObserver();
  const audiences = [{
    icon: GraduationCap,
    title: 'Students & Beginners',
    subtitle: 'Start your journey from scratch',
    description: 'Perfect for students and freshers who want to start their journey in a new domain from scratch',
    benefits: ['No prior experience needed', 'Learn through real-world examples'],
    color: 'primary'
  }, {
    icon: Briefcase,
    title: 'Working Professionals',
    subtitle: 'Upskill without disrupting your job',
    description: 'Busy professionals seeking to upskill and add new technical expertise to their profile',
    benefits: ['Upgrade your skill set efficiently', 'Learn without disrupting your job'],
    color: 'secondary'
  }, {
    icon: Target,
    title: 'Industry Experts',
    subtitle: 'Stay current with latest trends',
    description: 'Experienced professionals aiming to stay current with the latest trends and technologies',
    benefits: ['Learn feature upgrades & best practices', 'Deep-dive into real-time use cases'],
    color: 'accent'
  }, {
    icon: TrendingUp,
    title: 'Career Changers',
    subtitle: 'Explore new opportunities',
    description: 'Professionals from other fields exploring new opportunities in a growing industry',
    benefits: ['Clear roadmap for transition', 'Learn high-demand skills in tech'],
    color: 'primary'
  }];
  return <section className="section-padding bg-gradient-to-br from-muted/20 to-background">
      <div className="container-wide">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Who Can Attend This <span className="text-gradient">Webinar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This webinar is designed for anyone looking to advance their career in tech
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          return <Card key={index} className={`card-feature ${colorClasses[audience.color]} group transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: `${index * 200}ms`
          }}>
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
                  {audience.benefits.map((benefit, i) => <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${audience.color === 'primary' ? 'bg-primary' : audience.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
                      <span className="text-sm">{benefit}</span>
                    </div>)}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-border/20">
                  
                </div>
              </Card>;
        })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card ref={ctaRef} className={`card-gradient inline-block p-6 max-w-2xl transition-all duration-700 delay-600 ${ctaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <h3 className="text-xl font-bold mb-2">Still Not Sure Which Path Is Right?</h3>
            <p className="text-muted-foreground mb-4">
              Join our free demo session and speak directly with our career counselor
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-success" />
                <span>60-min demo session</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Personalized roadmap</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default AudienceSection;