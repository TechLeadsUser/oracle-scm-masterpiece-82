import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Video, Download, HeadphonesIcon, BookOpen, Users, GraduationCap } from 'lucide-react';

const ScheduleSection = () => {
  const schedule = [
    {
      day: 'Day 1',
      title: 'Free Demo - Oracle SCM Overview & Career Scope',
      type: 'Live Zoom Session',
      duration: '1 Hour',
      color: 'success',
      icon: Video,
      topics: [
        'Oracle Fusion SCM Introduction',
        'Career opportunities in SCM',
        'Live Q&A with industry experts',
        'Course roadmap preview'
      ]
    },
    {
      day: 'Day 2', 
      title: 'Procurement Module – Live Hands-on',
      type: 'Practical Class',
      duration: '1 Hour',
      color: 'success',
      icon: BookOpen,
      topics: [
        'Purchase requisitions setup',
        'Supplier management',
        'Approval workflows',
        'Real-time practice session'
      ]
    },
    {
      day: 'Day 3',
      title: 'Inventory & Order Management – Use Case Demo',
      type: 'Project Session',
      duration: '1 Hour', 
      color: 'accent',
      icon: Calendar,
      topics: [
        'Inventory tracking systems',
        'Order lifecycle management',
        'Industry use cases',
        'Project assignment'
      ]
    }
  ];

  const includes = [
    { icon: Video, label: 'Zoom recordings access' },
    { icon: Users, label: 'Interact with Trainers' },
    { icon: GraduationCap, label: 'Clear understanding about the course' },
    { icon: HeadphonesIcon, label: 'Q&A support' }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your <span className="text-gradient">3-Day Preview Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our complete training methodology risk-free before making any commitment
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {schedule.map((session, index) => {
            const IconComponent = session.icon;
            const colorClass = session.color === 'success' ? 'border-success/20 bg-success/5' : 'border-accent/20 bg-accent/5';
            const badgeColor = session.color === 'success' ? 'bg-success text-success-foreground' : 'bg-accent text-accent-foreground';
            
            return (
              <Card key={index} className={`card-feature ${colorClass} hover:scale-105 transition-all duration-300`}>
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
                    {session.topics.map((topic, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* What's Included */}
        <Card className="card-gradient text-center">
          <h3 className="text-2xl font-bold mb-6">What's Included in Your Free Preview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {includes.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 p-4 bg-gradient-card rounded-xl border border-primary/10">
            <p className="text-muted-foreground">
              <strong>Timeline:</strong> Each session 1 hour • Recorded for your convenience • Demo session Recordings will be Provided
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ScheduleSection;