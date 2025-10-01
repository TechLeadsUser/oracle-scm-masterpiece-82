import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, Download, HeadphonesIcon, BookOpen, Users, GraduationCap } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const ScheduleSection = () => {
  const {
    ref: headerRef,
    isIntersecting: headerVisible
  } = useIntersectionObserver();
  const {
    ref: cardsRef,
    isIntersecting: cardsVisible
  } = useIntersectionObserver();
  const {
    ref: includedRef,
    isIntersecting: includedVisible
  } = useIntersectionObserver();
  const schedule = [{
    day: 'Demo Session',
    title: 'Career Path & Mentoring',
    type: 'Live Zoom Session',
    duration: '1 Hour',
    color: 'success',
    icon: Video,
    topics: [
      'Fusion SCM in the job market',
      'Course structure & roadmap',
      'How this course shapes your career',
      'Our mentoring approach',
      'Understand where Fusion SCM fits in ERP',
      'Gain clarity on career opportunities'
    ]
  }, {
    day: 'Day 1',
    title: 'Functional Foundations',
    type: 'Live Zoom Session',
    duration: '1 Hour',
    color: 'success',
    icon: BookOpen,
    topics: [
      'Oracle Licensing',
      'SCM Functional Consultant Role',
      'Project Types in Real-Time',
      'Role of Consultants in Implementation',
      'Learn consultant role & responsibilities',
      'Explore project types in real-time scenarios'
    ]
  }, {
    day: 'Day 2',
    title: 'Fusion Applications',
    type: 'Live Zoom Session',
    duration: '1 Hour',
    color: 'accent',
    icon: Calendar,
    topics: [
      'Application Architecture',
      'Navigation & Features',
      'Module Integration',
      'Role-based Access & Security',
      'Build a strong foundation for SCM modules',
      'Prepare to dive deeper into SCM modules'
    ]
  }];
  const includes = [{
    icon: BookOpen,
    label: 'Preview Complete Course Content'
  }, {
    icon: GraduationCap,
    label: 'Validate If Course Fits Your Goals'
  }, {
    icon: Users,
    label: 'Experience Faculty Teaching Style'
  }, {
    icon: Video,
    label: 'Make an Informed Decision'
  }];
  return <section className="section-padding bg-background">
      <div className="container-wide">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-gradient">3-Day Preview Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our complete training methodology risk-free before making any commitment
          </p>
        </div>

        {/* Schedule Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {schedule.map((session, index) => {
          const IconComponent = session.icon;
          const colorClass = session.color === 'success' ? 'border-success/20 bg-success/5' : 'border-accent/20 bg-accent/5';
          const badgeColor = session.color === 'success' ? 'bg-success text-success-foreground' : 'bg-accent text-accent-foreground';
          return <Card key={index} className={`card-feature ${colorClass} hover:scale-105 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: `${index * 200}ms`
          }}>
                <div className="text-center mb-6">
                  <Badge className={`${badgeColor} mb-4 px-3 py-1`}>
                    {session.day}
                  </Badge>
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${session.color === 'success' ? 'bg-success/10' : 'bg-accent/10'}`}>
                      <IconComponent className={`h-8 w-8 ${session.color === 'success' ? 'text-success' : 'text-accent'}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs">{session.type}</Badge>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {session.duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">What You'll Learn:</h4>
                  <ul className="space-y-1">
                    {session.topics.map((topic, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {topic}
                      </li>)}
                  </ul>
                </div>
              </Card>;
        })}
        </div>

        {/* What's Included */}
        <Card ref={includedRef} className={`card-gradient text-center transition-all duration-700 delay-600 ${includedVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <h3 className="text-2xl font-bold mb-6">Clarity You Get in 3days</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {includes.map((item, index) => {
            const IconComponent = item.icon;
            return <div key={index} className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>;
          })}
          </div>
          
          <div className="mt-8 p-4 bg-gradient-card rounded-xl border border-primary/10">
            <p className="text-muted-foreground">
              <strong>Timeline:</strong> Each session 1 hour • Recorded for your convenience • Demo session Recordings will be Provided
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-lg text-muted-foreground">
                Want to see the complete training program?
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Download Full Curriculum
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default ScheduleSection;