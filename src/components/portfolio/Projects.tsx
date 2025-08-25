'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <Card
          key={index}
          className="bg-card flex flex-col overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
        >
          <CardHeader>
            <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/600/400`}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.aiHint}
                />
            </div>
            <CardTitle className="text-xl font-headline text-primary">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <CardDescription className="mb-4 flex-grow">{project.description}</CardDescription>
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 text-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
