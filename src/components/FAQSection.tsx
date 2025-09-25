import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const FAQSection = () => {
  const {
    ref: headerRef,
    isIntersecting: headerVisible
  } = useIntersectionObserver();
  const {
    ref: faqRef,
    isIntersecting: faqVisible
  } = useIntersectionObserver();
  const {
    ref: ctaRef,
    isIntersecting: ctaVisible
  } = useIntersectionObserver();
  const faqs = [{
    question: "Will I get access to class recordings?",
    answer: "Yes! All live sessions are automatically recorded and available in your personal dashboard within 2 hours. You get lifetime access to these recordings, so you can review concepts anytime. The recordings include chat conversations and screen sharing for complete context."
  }, {
    question: "Can I attend classes from mobile/tablet?",
    answer: "Absolutely! Our platform is fully optimized for mobile devices. You can attend live classes, access recordings, download materials, and even take quizzes from your smartphone or tablet. Many of our students prefer mobile learning during commutes."
  }, {
    question: "What if I miss some live classes?",
    answer: "No worries! Every session is recorded and available immediately. Plus, we conduct weekend doubt-clearing sessions where you can ask questions about missed content. Our support team also provides 1-on-1 catch-up sessions if needed."
  }, {
    question: "Do I need any IT background to learn Oracle SCM?",
    answer: "Not at all! Our curriculum is designed for complete beginners. We start with basic Oracle concepts and gradually build up to advanced SCM modules. 60% of our successful students came from non-IT backgrounds like HR, Finance, Mechanical Engineering, etc."
  }, {
    question: "How does the payment process work?",
    answer: "You first attend our 3-day free preview classes without paying anything. Only if you're satisfied with the quality and teaching methodology, you pay for the full course. We accept all payment methods including EMI options starting from ₹2,999/month."
  }, {
    question: "What's the difference between Self-Paced and Live Training?",
    answer: "Self-Paced gives you pre-recorded videos and basic support. Live Training includes real-time interaction with trainers, doubt clearing, live projects, placement assistance, and community access. 85% of our students choose Live Training for better career outcomes."
  }, {
    question: "Do you provide job placement guarantee?",
    answer: "We provide dedicated placement assistance with our Live Training package. While we can't legally guarantee jobs, we have a 92% placement success rate. Our team actively connects you with hiring partners and provides interview preparation until you get placed."
  }, {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes! We offer a 7-day money-back guarantee after your payment. If you're not satisfied with the course quality within the first week, we'll refund 100% of your fees, no questions asked. However, less than 2% of students request refunds."
  }];
  return <section className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-wide">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to all your questions about our Oracle Fusion SCM training program
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card ref={faqRef} className={`card-gradient p-8 transition-all duration-700 delay-300 ${faqVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/20 rounded-xl px-6 data-[state=open]:bg-primary/5">
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-semibold">
                    <div className="flex items-center gap-3">
                      
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-11 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </Card>

          {/* Still Have Questions CTA */}
          <div className="text-center mt-12">
            <Card ref={ctaRef} className={`card-gradient inline-block p-6 max-w-2xl transition-all duration-700 delay-600 ${ctaVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our expert counselors are available to address all your concerns personally
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-whatsapp">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat via WhatsApp
                </Button>
                
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/20">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold">Career Counseling</div>
                    <div className="text-muted-foreground">Mon-Sat, 09:30 AM - 07:00 PM</div>
                  </div>
                  <div>
                    <div className="font-semibold">Technical Support</div>
                    <div className="text-muted-foreground">24/7 Available</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;