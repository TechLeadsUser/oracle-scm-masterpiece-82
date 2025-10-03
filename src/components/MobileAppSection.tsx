import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, Play, FileText, Wifi, Clock, Coffee, Moon, Star, Users, Zap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import appMockup from '@/assets/app-mockup.png';
const MobileAppSection = () => {
  // Animation refs
  const {
    ref: headerRef,
    isIntersecting: headerVisible
  } = useIntersectionObserver();
  const {
    ref: contentRef,
    isIntersecting: contentVisible
  } = useIntersectionObserver();
  const {
    ref: phoneRef,
    isIntersecting: phoneVisible
  } = useIntersectionObserver();
  const {
    ref: statsRef,
    isIntersecting: statsVisible
  } = useIntersectionObserver();
  const {
    ref: ctaRef,
    isIntersecting: ctaVisible
  } = useIntersectionObserver();
  const features = [{
    icon: Play,
    title: 'Watch Live/Recorded Classes',
    description: 'Stream high-quality video sessions anywhere'
  }, {
    icon: FileText,
    title: 'Download PDFs & Quizzes',
    description: 'Access study materials offline anytime'
  }, {
    icon: Wifi,
    title: 'Offline Learning',
    description: 'Download videos through our app and learn offline anytime.'
  }];
  const useCases = [{
    icon: Play,
    title: 'Recorded classes available',
    description: 'Every class is recorded and stored in your LMS/App'
  }, {
    icon: Zap,
    title: 'Real-time Q&A sessions',
    description: 'Interact live with trainers and clarify doubts instantly'
  }, {
    icon: Users,
    title: 'Industry-expert trainers',
    description: 'Learn from certified professionals with real-world Oracle Fusion experience'
  }, {
    icon: FileText,
    title: 'Module-wise structured learning',
    description: 'Follow a clear, step-by-step path to complete mastery'
  }];
  const stats = [{
    number: '70%',
    label: 'Students use mobile app',
    icon: Users
  }, {
    number: '4.8★',
    label: 'App store rating',
    icon: Star
  }, {
    number: '50K+',
    label: 'Total downloads',
    icon: Download
  }, {
    number: '24/7',
    label: 'Always accessible',
    icon: Clock
  }];
  return <section className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Learn Anywhere with our <span className="text-gradient">Mobile App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Oracle training companion that fits in your pocket - never miss a learning opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div ref={contentRef} className={`space-y-8 transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6">App Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return <div key={index} className={`flex items-start gap-4 p-4 bg-gradient-card rounded-xl border border-primary/10 transition-all duration-500 hover-scale ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{
                  transitionDelay: `${400 + index * 100}ms`
                }}>
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>;
              })}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Perfect Learning Scenarios</h3>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon;
                return <div key={index} className={`text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10 transition-all duration-500 hover-scale ${contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{
                  transitionDelay: `${700 + index * 100}ms`
                }}>
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{useCase.title}</h4>
                      <p className="text-xs text-muted-foreground">{useCase.description}</p>
                    </div>;
              })}
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div ref={phoneRef} className={`relative transition-all duration-700 delay-300 ${phoneVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}>
            <Card className="card-gradient p-8 text-center">
              <img 
                src={appMockup} 
                alt="Tech Leads IT Mobile App" 
                className="mx-auto w-full max-w-2xl h-auto object-contain"
              />
              
              <div className="mt-6 space-y-4">
                <div className="flex flex-row gap-3 justify-center">
                  <a href="https://play.google.com/store/apps/details?id=com.techleadsit.academy_app" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                    <img src="/src/assets/google-play-badge.png" alt="Get it on Google Play" className="h-12 w-auto mx-auto" />
                  </a>
                  <a href="https://apps.apple.com/in/app/tech-leads-it/id6615066544" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                    <img src="/src/assets/app-store-badge.png" alt="Download on the App Store" className="h-12 w-auto mx-auto" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Available on Android and IOS</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <Card key={index} className={`card-feature text-center transition-all duration-500 hover-scale ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{
            transitionDelay: `${200 + index * 100}ms`
          }}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>;
        })}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className={`transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <Card className="card-gradient text-center mt-12">
          <h3 className="text-xl font-bold mb-2">Start Learning with Our Mobile App</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of professionals who are advancing their Oracle careers on-the-go
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero">
              <Zap className="mr-2 h-4 w-4" />
              Try Free Demo Class
            </Button>
            
          </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default MobileAppSection;