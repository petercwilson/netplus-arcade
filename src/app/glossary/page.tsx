'use client';

import { useState, useMemo } from 'react';
import { glossary } from '@/lib/data';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search } from 'lucide-react';

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = useMemo(() => {
    if (!searchTerm) return glossary;
    return glossary.filter(
      (item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold font-headline mb-8 text-primary text-center">
        Glossary
      </h1>
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for a term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 text-lg py-6"
        />
      </div>

      <Accordion type="single" collapsible className="w-full">
        {filteredGlossary.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger className="text-xl font-headline hover:text-primary">
              {item.term}
            </AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground pl-4">
              {item.definition}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {filteredGlossary.length === 0 && (
        <p className="text-center text-muted-foreground mt-8 text-lg">
          No terms found matching your search.
        </p>
      )}
    </div>
  );
}
