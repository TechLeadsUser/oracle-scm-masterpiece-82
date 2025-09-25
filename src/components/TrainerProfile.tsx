import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Users, Briefcase, Award, Quote } from 'lucide-react';
import trainerImage from '@/assets/trainer-anil.jpg';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const TrainerProfile = () => {
  const {
    ref: headerRef,
    isIntersecting: headerVisible
  } = useIntersectionObserver();
  const {
    ref: cardRef,
    isIntersecting: cardVisible
  } = useIntersectionObserver();
  const companies = ['Oracle', 'Capgemini', 'Infosys', 'TCS'];
  const certifications = ['Oracle Cloud SCM', 'Procurement Cloud', 'Inventory Management', 'Order Management'];
  return <section className="section-padding bg-gradient-to-br from-muted/30 to-background">
      <div className="container-wide">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet Your Expert <span className="text-gradient">Trainer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry veterans with real-world Oracle implementation experience
          </p>
        </div>

        <Card ref={cardRef} className={`card-gradient max-w-4xl mx-auto transition-all duration-700 delay-300 ${cardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Trainer Image */}
            <div className="md:col-span-1 text-center">
              <div className="relative inline-block">
                <img src={trainerImage} alt="Anil Reddy - Senior Oracle Consultant with 12+ years experience" className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-glow border-2 border-primary/20" />
                <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground border-0">Oracle Exper</Badge>
              </div>
              
              <div className="mt-6 space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Krishna V</h3>
                <p className="text-primary font-semibold">Oracle Fusion SCM Expert </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-primary">5,000+</div>
                    <div className="text-xs text-muted-foreground">Students Taught</div>
                  </div>
                  <div className="text-center p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                    <div className="flex items-center justify-center mb-2">
                      <Briefcase className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="text-lg font-bold text-secondary">20+</div>
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
                  {companies.map(company => <Badge key={company} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                      {company}
                    </Badge>)}
                </div>
              </div>

              {/* Certifications */}
              

              {/* Key Achievements */}
              <div className="bg-gradient-card p-4 rounded-xl border border-primary/20">
                <h4 className="font-semibold mb-2 text-foreground">Key Achievements</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  
                  <li>• 20+ years of expertise in Oracle ERP, specializing in Fusion SCM Training.</li>
                  <li>• Maintained 98% student satisfaction rate over 5 years</li>
                  <li>• Successfully trained over 5,000 students in Oracle Cloud SCM course, empowering them to become skilled IT professionals.</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>;
};
export default TrainerProfile;