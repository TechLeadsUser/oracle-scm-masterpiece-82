import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Download, 
  Play, 
  FileText, 
  Wifi, 
  Clock, 
  Coffee, 
  Moon,
  Star,
  Users,
  Zap
} from 'lucide-react';

const MobileAppSection = () => {
  const features = [
    {
      icon: Play,
      title: 'Watch Live/Recorded Classes',
      description: 'Stream high-quality video sessions anywhere'
    },
    {
      icon: FileText,
      title: 'Download PDFs & Quizzes',
      description: 'Access study materials offline anytime'
    },
    {
      icon: Wifi,
      title: 'Offline Mode',
      description: 'Continue learning without internet connection'
    }
  ];

  const useCases = [
    {
      icon: Coffee,
      title: 'Learn during commute',
      description: 'Make your travel time productive'
    },
    {
      icon: Clock,
      title: 'Lunch break sessions',
      description: 'Quick 15-30 minute learning modules'
    },
    {
      icon: Clock,
      title: 'Weekend deep dives',
      description: 'Intensive study sessions at your pace'
    },
    {
      icon: Moon,
      title: 'Night shift friendly',
      description: 'Learn when it works for your schedule'
    }
  ];

  const stats = [
    { number: '70%', label: 'Students use mobile app', icon: Users },
    { number: '4.8★', label: 'App store rating', icon: Star },
    { number: '50K+', label: 'Total downloads', icon: Download },
    { number: '24/7', label: 'Always accessible', icon: Clock }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Learn Anywhere with our <span className="text-gradient">Mobile App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your Oracle training companion that fits in your pocket - never miss a learning opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6">App Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gradient-card rounded-xl border border-primary/10">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Perfect Learning Scenarios</h3>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase, index) => {
                  const IconComponent = useCase.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{useCase.title}</h4>
                      <p className="text-xs text-muted-foreground">{useCase.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <Card className="card-gradient p-8 text-center">
              <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-3xl border-8 border-muted/20 shadow-elegant">
                {/* Phone Screen */}
                <div className="absolute inset-4 bg-background rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 bg-primary/5 flex items-center justify-between px-4 text-xs">
                    <span>9:41</span>
                    <span>100%</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="text-left">
                      <Badge className="bg-red-500 text-white text-xs mb-2">🔴 LIVE</Badge>
                      <h4 className="text-sm font-semibold">Oracle SCM Training</h4>
                      <p className="text-xs text-muted-foreground">Module 3: Procurement</p>
                    </div>
                    
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-3 bg-muted rounded"></div>
                      <div className="h-3 bg-muted/60 rounded w-2/3"></div>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="flex-1 h-8 bg-success/20 rounded text-xs flex items-center justify-center text-success font-medium">
                        Download
                      </div>
                      <div className="flex-1 h-8 bg-primary/20 rounded text-xs flex items-center justify-center text-primary font-medium">
                        Notes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex flex-row gap-3 justify-center">
                  <a href="#" className="block hover:opacity-80 transition-opacity">
                    <img 
                      src="/src/assets/google-play-badge.png" 
                      alt="Get it on Google Play" 
                      className="h-12 w-auto mx-auto"
                    />
                  </a>
                  <a href="#" className="block hover:opacity-80 transition-opacity">
                    <img 
                      src="/src/assets/app-store-badge.png" 
                      alt="Download on the App Store" 
                      className="h-12 w-auto mx-auto"
                    />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="card-feature text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Card className="card-gradient text-center mt-12">
          <h3 className="text-xl font-bold mb-2">
            Start Learning Today with Our Mobile App
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of professionals who are advancing their Oracle careers on-the-go
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero">
              <Zap className="mr-2 h-4 w-4" />
              Try Free Demo Class
            </Button>
            <div className="text-sm text-muted-foreground">
              App download link sent after registration
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MobileAppSection;