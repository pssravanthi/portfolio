'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { experienceData } from '@/lib/data';
import { Briefcase, Calendar, MapPin, X, ChevronDown, ChevronUp, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Experience = () => {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<number | null>(null);
    const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-slide-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      experienceRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
  
      return () => {
        experienceRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      };
    }, []);

    const openDialog = (index: number) => setSelectedExperienceIndex(index);
    const closeDialog = () => setSelectedExperienceIndex(null);
    
    const navigateExperience = (direction: 'next' | 'prev') => {
        if (selectedExperienceIndex === null) return;
        
        if (direction === 'next') {
            setSelectedExperienceIndex((prev) => (prev! + 1) % experienceData.length);
        } else {
            setSelectedExperienceIndex((prev) => (prev! - 1 + experienceData.length) % experienceData.length);
        }
    };

    const exp = selectedExperienceIndex !== null ? experienceData[selectedExperienceIndex] : null;

  return (
    <div className="relative pl-6 md:pl-8 after:absolute after:inset-y-0 after:left-0 after:w-0.5 after:bg-border">
      {experienceData.map((exp, index) => (
        <div 
            key={index} 
            className="relative pl-8 md:pl-10 pb-12 opacity-0"
            ref={el => experienceRefs.current[index] = el}
            style={{ animationFillMode: 'forwards', animationDelay: `${index * 150}ms` }}
        >
            <div className="absolute left-[-11px] top-1 h-6 w-6 bg-primary rounded-full border-4 border-background flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>
            <Card 
                className="shadow-md hover:shadow-xl hover:border-primary/50 cursor-pointer transition-all duration-300"
                onClick={() => openDialog(index)}
            >
                <CardHeader>
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                        <div>
                        <CardTitle className="text-xl font-headline text-primary">{exp.role}</CardTitle>
                        <CardDescription className="text-md font-semibold">
                            {exp.company}
                        </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground flex flex-col sm:items-end gap-1 whitespace-nowrap">
                        <div className='flex items-center gap-2'>
                                <Calendar className='w-4 h-4' />
                                <span>{exp.period}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                                <MapPin className='w-4 h-4' />
                                <span>{exp.location}</span>
                        </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 4).map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-sm">{tech.name}</Badge>
                        ))}
                        {exp.technologies.length > 4 && <Badge variant="outline">+{exp.technologies.length - 4} more</Badge>}
                    </div>
                </CardContent>
            </Card>
        </div>
      ))}
      {exp && (
         <Dialog open={selectedExperienceIndex !== null} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
            <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-headline text-primary">{exp.role}</DialogTitle>
                    <DialogDescription className="text-lg font-semibold">{exp.company}</DialogDescription>
                    <div className="text-sm text-muted-foreground flex items-center gap-x-4 gap-y-1 pt-2">
                         <div className="flex items-center gap-2">
                            <MapPin className='w-4 h-4' />
                            <span>{exp.location}</span>
                        </div>
                    </div>
                </DialogHeader>
                
                <div className="flex items-center justify-center my-4">
                    <div className="w-full h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full relative flex items-center justify-between">
                         <span className="absolute left-0 -bottom-6 text-xs font-mono text-muted-foreground">{exp.period.split(' - ')[0]}</span>
                         <div className="absolute left-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                         <div className="absolute right-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                         <span className="absolute right-0 -bottom-6 text-xs font-mono text-muted-foreground">{exp.period.split(' - ')[1]}</span>
                    </div>
                </div>

                <div className='py-4 space-y-6'>
                    <div>
                        <h4 className="font-bold text-lg text-foreground mb-2">{exp.project}</h4>
                        <p className="text-muted-foreground">{exp.description}</p>
                    </div>

                    <div>
                        <h5 className="font-bold text-lg text-foreground mb-3">Key Responsibilities:</h5>
                         <Accordion type="multiple" className="w-full">
                           {exp.technologies.map((tech, techIdx) => (
                               <AccordionItem value={`tech-${techIdx}`} key={techIdx}>
                                   <AccordionTrigger className="text-md font-semibold text-primary/90 hover:text-primary">
                                        {tech.name}
                                   </AccordionTrigger>
                                   <AccordionContent>
                                        <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                                           {tech.responsibilities.map((resp, respIdx) => (
                                               <li key={respIdx}>{resp}</li>
                                           ))}
                                       </ul>
                                   </AccordionContent>
                               </AccordionItem>
                           ))}
                       </Accordion>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <Button variant="outline" size="icon" onClick={() => navigateExperience('prev')}>
                        <ArrowLeft />
                    </Button>
                     <DialogClose asChild>
                        <Button variant="secondary">Close</Button>
                    </DialogClose>
                    <Button variant="outline" size="icon" onClick={() => navigateExperience('next')}>
                        <ArrowRight />
                    </Button>
                </div>
            </DialogContent>
          </Dialog>
      )}
    </div>
  );
};

export default Experience;
