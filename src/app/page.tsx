'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase,
  Star,
  Menu,
  X,
  Award,
  Github,
  Mail,
  Phone,
  Linkedin,
  Palette,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import Header from '@/components/portfolio/Header';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import { profileData } from '@/lib/data';
import Certifications from '@/components/portfolio/Certifications';
import Projects from '@/components/portfolio/Projects';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
];

export default function Home({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [activeSection, setActiveSection] = useState('about');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0.2 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        sectionRefs.current[item.id] = el;
        observer.observe(el);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsSheetOpen(false);
  };

  const NavLinks = ({ isMobile = false }) => (
    <nav
      className={
        isMobile
          ? 'flex flex-col space-y-4 text-lg'
          : 'hidden md:flex items-center space-x-8'
      }
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleNavLinkClick(item.id)}
          className={`relative font-medium transition-colors hover:text-primary ${
            activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          {item.label}
          {activeSection === item.id && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-primary rounded-full"></span>
          )}
        </button>
      ))}
    </nav>
  );

  return (
    <div className="bg-background text-foreground font-body">
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-muted/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <a href="#" onClick={() => handleNavLinkClick('about')}>
            <h1 className="text-2xl font-bold font-headline text-primary">
              {profileData.name}
            </h1>
          </a>

          <NavLinks />

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex justify-between items-center p-4 border-b">
                 <h2 className="text-xl font-bold">Menu</h2>
                 <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                    <X/>
                 </Button>
              </div>
              <div className="p-4">
                <NavLinks isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="space-y-24 md:space-y-32 mb-24">
          <section id="about">
            <Header />
          </section>

          <section id="experience">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center text-primary flex items-center justify-center gap-4">
              <Briefcase className="w-8 h-8"/> Professional Experience
            </h2>
            <Experience />
          </section>

          <section id="projects">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center text-primary flex items-center justify-center gap-4">
              <Lightbulb className="w-8 h-8"/> Projects
            </h2>
            <Projects />
          </section>

          <section id="skills">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center text-primary flex items-center justify-center gap-4">
              <Star className="w-8 h-8"/> Skills & Technologies
            </h2>
            <Skills />
          </section>

          <section id="certifications">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12 text-center text-primary flex items-center justify-center gap-4">
                <Award className="w-8 h-8"/> Certifications
            </h2>
            <Certifications />
          </section>
        </div>
      </main>
      
       <footer className="bg-card border-t py-8 mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
                <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-4 mb-6">
                    <a href={`mailto:${profileData.email}`} className="font-medium hover:text-primary flex items-center gap-2">
                       <Mail className="h-5 w-5" /> {profileData.email}
                    </a>
                    <a href={`tel:${profileData.phone}`} className="font-medium hover:text-primary flex items-center gap-2">
                        <Phone className="h-5 w-5" /> {profileData.phone}
                    </a>
                </div>
                <div className="flex justify-center space-x-4">
                   <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground/80">
                     <p>&copy; {new Date().getFullYear()} {profileData.name}. All Rights Reserved.</p>
                     <Palette className="h-4 w-4 text-primary/80" />
                </div>
            </div>
        </footer>
    </div>
  );
}
