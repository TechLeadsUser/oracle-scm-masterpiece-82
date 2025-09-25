import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Users, Briefcase, Award, Quote } from 'lucide-react';
import trainerImage from '@/assets/trainer-anil.jpg';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TrainerProfile = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  
  const companies = ['Oracle', 'Capgemini', 'Infosys', 'TCS'];
  const certifications = [
    'Oracle Cloud SCM',
    'Procurement Cloud',
    'Inventory Management',
    'Order Management'
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-muted/30 to-background">
      <div className="container-wide">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isIntersecting ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet Your Expert <span className="text-gradient">Trainer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry veterans with real-world Oracle implementation experience
          </p>
        </div>

        <Card className={`card-gradient max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isIntersecting ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Trainer Image */}
            <div className="md:col-span-1 text-center">
              <div className="relative inline-block">
                <img 
                  src={trainerImage} 
                  alt="Anil Reddy - Senior Oracle Consultant with 12+ years experience"
                  className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-glow border-2 border-primary/20"
                />
                <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground border-0">
                  Oracle Expert
                </Badge>
              </div>
              
              <div className="mt-6 space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Anil Reddy</h3>
                <p className="text-primary font-semibold">Senior Oracle Consultant</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-primary">10,000+</div>
                    <div className="text-xs text-muted-foreground">Students Taught</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <div className="flex items-center justify-center mb-2">
                      <Briefcase className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="text-lg font-bold text-secondary">12+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trainer Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Quote */}
              <div className="relative">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <blockquote className="text-lg italic text-muted-foreground pl-6">
                  "I simplify Oracle concepts so anyone can become a consultant. My students don't just learn theory – they work on real projects from day one."
                </blockquote>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Industry Experience
                </h4>
                <div className="flex flex-wrap gap-2">
                  {companies.map((company) => (
                    <Badge key={company} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                  <Award className="h-5 w-5 text-success" />
                  Oracle Certifications
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-gradient-card p-4 rounded-xl border border-primary/20">
                <h4 className="font-semibold mb-2 text-foreground">Key Achievements</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Led 50+ Oracle Cloud implementations across Fortune 500 companies</li>
                  <li>• Trained over 10,000 professionals in Oracle Fusion modules</li>
                  <li>• Maintained 98% student satisfaction rate over 5 years</li>
                  <li>• Specialized in SCM, HCM, and Financials modules</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TrainerProfile;