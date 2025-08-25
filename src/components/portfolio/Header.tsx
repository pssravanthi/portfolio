'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { profileData, aboutMe } from '@/lib/data';
import { ChevronDown, Download } from 'lucide-react';

const titles = [
    'Senior Software Engineer',
    'React Developer',
    'Java Developer',
    'Full Stack Developer'
];

const Header = () => {
    const [currentTitle, setCurrentTitle] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullTitle = titles[titleIndex];
            if (isDeleting) {
                setCurrentTitle(fullTitle.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                setCurrentTitle(fullTitle.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }

            if (!isDeleting && charIndex === fullTitle.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, titleIndex]);

    const handleScrollToExperience = () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
            <div>
                <p className="text-lg font-semibold text-primary mb-1">HELLO, MY NAME IS</p>
                <h1 className="text-4xl md:text-6xl font-bold font-headline text-foreground mb-2 animate-draw-in">
                    {profileData.name}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold font-headline text-muted-foreground mb-6 transition-all duration-300 h-10">
                   &mdash; {currentTitle}
                   <span className="animate-ping">|</span>
                </h2>
                <p className="max-w-2xl text-lg text-foreground/80 mb-8 mx-auto">
                    {aboutMe.summary}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" onClick={handleScrollToExperience}>
                       Explore My Journey <ChevronDown className="ml-2 h-5 w-5"/>
                    </Button>
                    <a href={profileData.resumeUrl} download="Sai Sravanthi Ponigate.docx">
                        <Button size="lg" variant="outline">
                           Download Resume <Download className="ml-2 h-5 w-5"/>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
