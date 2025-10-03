import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, TrendingUp, MapPin, Quote } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const TestimonialsSection = () => {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver();
  const { ref: statsRef, isIntersecting: statsVisible } = useIntersectionObserver();
  const { ref: testimonialRef, isIntersecting: testimonialVisible } = useIntersectionObserver();
  const { ref: ctaRef, isIntersecting: ctaVisible } = useIntersectionObserver();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Shalini R.',
      previousRole: 'HR Executive',
      currentRole: 'Oracle SCM Consultant',
      company: 'Infosys',
      location: 'Bangalore',
      salaryIncrease: '220%',
      rating: 5,
      image: '👩‍💼',
      testimonial: "I had zero technical background when I started. Anil sir's teaching methodology made Oracle concepts so simple to understand. The live projects gave me real confidence. Got placed at Infosys with 8 LPA package - triple my previous salary!",
      highlights: ['Zero tech background', 'Got 8 LPA package', 'Real project confidence']
    },
    {
      name: 'Vamsi K.',
      previousRole: 'Mechanical Engineer',
      currentRole: 'Oracle Procurement Consultant',
      company: 'Capgemini',
      location: 'Hyderabad',
      salaryIncrease: '180%',
      rating: 5,
      image: '👨‍💻',
      testimonial: "Switching from mechanical to IT seemed impossible until I found this course. The 3-day free trial convinced me completely. The placement support was exceptional - got 3 offers and chose Capgemini. Best decision of my career!",
      highlights: ['Career switch success', 'Got 3 job offers', 'Exceptional support']
    },
    {
      name: 'Priya S.',
      previousRole: 'SAP Consultant',
      currentRole: 'Senior Oracle Fusion Consultant',
      company: 'TCS',
      location: 'Chennai',
      salaryIncrease: '65%',
      rating: 5,
      image: '👩‍💻',
      testimonial: "Already had SAP experience but Oracle Cloud is the future. This course helped me transition smoothly. The trainer's industry experience was invaluable. Now leading Oracle implementations at TCS with 40% salary hike.",
      highlights: ['Smooth SAP to Oracle transition', '40% salary hike', 'Leading implementations']
    },
    {
      name: 'Rajesh M.',
      previousRole: 'Fresh Graduate',
      currentRole: 'Oracle SCM Associate',
      company: 'Accenture',
      location: 'Mumbai',
      salaryIncrease: 'First Job',
      rating: 5,
      image: '👨‍🎓',
      testimonial: "As a fresh graduate, I was worried about getting a good job. This course not only taught me Oracle but also helped with resume building and interview prep. Got placed in Accenture directly from campus with 6.5 LPA!",
      highlights: ['Fresh graduate success', 'Complete job preparation', '6.5 LPA first job']
    }
  ];

  const stats = [
    { number: '92%', label: 'Placement success rate', color: 'success' },
    { number: '4.2 LPA', label: 'Average salary', color: 'primary' },
    { number: '6 months', label: 'Average placement time', color: 'secondary' }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Achievement of Our <span className="text-gradient">Students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people, real transformations - see how Oracle Fusion SCM training changed their careers
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const colorClasses = {
              success: 'text-success bg-success/10 border-success/20',
              primary: 'text-primary bg-primary/10 border-primary/20',
              secondary: 'text-secondary bg-secondary/10 border-secondary/20'
            };
            
            return (
              <Card
                key={index}
                className={`text-center p-6 ${colorClasses[stat.color]} border-2 transition-all duration-700 ${
                  statsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm font-medium">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Main Testimonial */}
        <Card
          ref={testimonialRef}
          className={`card-gradient mb-8 transition-all duration-700 delay-600 ${
            testimonialVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Info */}
            <div className="text-center">
              <div className="text-6xl mb-4">{currentTestimonial.image}</div>
              <h3 className="text-xl font-bold mb-2">{currentTestimonial.name}</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{currentTestimonial.location}</span>
                </div>
                
                <Badge className="bg-primary text-primary-foreground">
                  {currentTestimonial.company}
                </Badge>
              </div>

            </div>

            {/* Testimonial Content */}
            <div className="md:col-span-2">
              <div className="relative">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                
                <div className="pl-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg leading-relaxed mb-6">
                    "{currentTestimonial.testimonial}"
                  </blockquote>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Success Factors:</h4>
                    <div className="grid md:grid-cols-3 gap-2">
                      {currentTestimonial.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Progression */}
                  <div className="mt-6 p-4 bg-gradient-card rounded-xl border border-primary/10">
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Previous Role</div>
                        <div className="font-medium text-sm">{currentTestimonial.previousRole}</div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Current Role</div>
                        <div className="font-medium text-sm">{currentTestimonial.currentRole}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <Badge className="bg-success text-success-foreground">
                        {currentTestimonial.salaryIncrease !== 'First Job' 
                          ? `${currentTestimonial.salaryIncrease} Salary Increase` 
                          : 'First Job Success'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="btn-outline"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="btn-outline"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Card
            ref={ctaRef}
            className={`card-gradient inline-block p-6 max-w-2xl transition-all duration-700 delay-900 ${
              ctaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">Ready to Write Your Success Story?</h3>
            <p className="text-muted-foreground mb-4">
              Join our next batch and become part of our successful alumni network
            </p>
            <Button className="btn-cta">
              Reserve Your Free Demo Seat
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;