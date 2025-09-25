import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Award, MessageCircle, Target } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import heroTraining from '@/assets/hero-training.jpg';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const HeroSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  
  return <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(195_100%_50%_/_0.1),transparent_50%)]"></div>
      
      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isIntersecting ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <Badge className="bg-gradient-cta text-success-foreground px-4 py-2 text-sm font-semibold animate-slide-up">
              🎓 Free Demo + 2-Day Classes
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Attend Oracle Fusion SCM{' '}
                <span className="text-gradient">Demo + 2-Day Free Classes</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Interactive live training | Preview actual classes | Career-changing decision – with zero risk
              </p>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-cta text-lg">
                <Target className="mr-2 h-5 w-5" />
                Reserve My Free Seat
              </Button>
              
            </div>

            {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-success" />
              <span className="text-sm font-medium text-foreground">Oracle Certified</span>
            </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">14,000+ Learners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium text-foreground">95% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isIntersecting ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow border border-primary/20">
              <img src={heroTraining} alt="Oracle Fusion SCM Training - Interactive live sessions with expert guidance" className="w-full h-[500px] object-cover" />
              
              {/* Floating Badges */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white px-3 py-1 animate-pulse-soft border-0">
                  🔴 Live Training
                </Badge>
              </div>
              
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-success text-success-foreground px-3 py-1 animate-float border-0">
                  📅 Next Batch Starting Soon
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;