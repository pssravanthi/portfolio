'use client';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { profileData } from '@/lib/data';
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        toast({
          title: "Email Client Opening",
          description: "Your default email application should now be open to send the message.",
        })

        setFormData({ name: '', email: '', message: '' });
    };
    
    return (
        <Card className="shadow-lg">
            <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                    Have a question or want to work together? Feel free to reach out.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Your Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message here..." value={formData.message} onChange={handleChange} required rows={5} />
                    </div>
                    <Button type="submit" className="w-full md:w-auto">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Contact;
