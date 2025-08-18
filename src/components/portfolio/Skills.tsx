'use client';
import React, { useState } from 'react';
import { skillsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

type Skill = {
  name: string;
  level: number;
};

const colors = ['#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-background border rounded-md shadow-lg">
        <p className="font-bold">{label}</p>
        <p className="text-sm">Proficiency: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skillsData)[0]);
  const activeSkills = (skillsData[activeCategory] as Skill[]) || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card className="p-4 shadow-lg">
            <h3 className="text-xl font-bold font-headline mb-4 text-center text-primary">Categories</h3>
            <div className="flex flex-col space-y-2">
                {Object.keys(skillsData).map((category) => (
                <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'ghost'}
                    onClick={() => setActiveCategory(category)}
                    className="w-full justify-start text-left h-12 text-md"
                >
                    {category}
                </Button>
                ))}
            </div>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card className="shadow-lg h-[500px] p-6">
            <h3 className="text-xl font-bold font-headline mb-4 text-primary">{activeCategory}</h3>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={activeSkills}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 50, bottom: 5 }}
            >
                <XAxis type="number" hide />
                <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
                    width={120}
                 />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--secondary))' }} />
                <Bar dataKey="level" barSize={25} radius={[0, 5, 5, 0]} animationDuration={500}>
                    {activeSkills.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
