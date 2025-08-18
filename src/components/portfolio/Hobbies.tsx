'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Paintbrush, Pencil } from 'lucide-react';

const hobbiesData = [
  {
    title: 'Canvas Painting',
    description: 'Exploring emotions and stories through acrylic and oil on canvas.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'acrylic painting canvas',
    icon: <Paintbrush className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Sketching & Drawing',
    description: 'Capturing moments and ideas with graphite and charcoal.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'charcoal sketch drawing',
    icon: <Pencil className="h-6 w-6 text-primary" />,
  },
];

const Hobbies = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-center text-lg text-muted-foreground mb-12">
        Beyond the world of code, I find joy and inspiration in creative expression. My passion for art allows me to approach problems with a unique perspective and a keen eye for detail.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hobbiesData.map((hobby, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative h-60 w-full">
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={hobby.aiHint}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  {hobby.icon}
                  <h3 className="text-2xl font-bold font-headline text-card-foreground">{hobby.title}</h3>
                </div>
                <p className="text-muted-foreground">{hobby.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
