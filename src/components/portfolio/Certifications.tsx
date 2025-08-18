'use client';
import React, { useEffect, useRef } from 'react';
import { certifications } from '@/lib/data';
import { Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Certifications = () => {
    const certificationRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-grow-in');
                        entry.target.classList.remove('opacity-0');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        certificationRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            certificationRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <Card
                        key={index}
                        ref={(el) => (certificationRefs.current[index] = el)}
                        className="bg-card border rounded-lg p-4 flex items-center gap-4 hover:shadow-lg hover:border-primary transition-all duration-300 group opacity-0"
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Award className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-card-foreground">{cert.name}</h3>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
