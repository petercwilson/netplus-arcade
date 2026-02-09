'use client';

import { useState } from 'react';
import { flashcards } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + flashcards.length) % flashcards.length
      );
    }, 150);
  };
  
  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * flashcards.length);
      } while (randomIndex === currentIndex);
      setCurrentIndex(randomIndex);
    }, 150);
  };

  const currentCard = flashcards[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl font-bold font-headline mb-8 text-primary text-shadow-primary">
        Flashcards
      </h1>

      <div className="w-full max-w-2xl perspective">
        <div
          className={cn(
            'relative w-full h-80 preserve-3d transition-transform duration-500',
            isFlipped && 'rotate-y-180'
          )}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of the card */}
          <div className="absolute w-full h-full backface-hidden">
            <Card className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-card border-2 border-primary/50 shadow-lg shadow-primary/10">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground font-headline text-lg">Term</p>
                <p className="text-3xl font-bold text-foreground">
                  {currentCard.term}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Back of the card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <Card className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-card border-2 border-accent/50 shadow-lg shadow-accent/10">
              <CardHeader>
                 <CardTitle className="text-center font-headline text-accent">Definition</CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <p className="text-xl text-foreground">
                  {currentCard.definition}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <p className="text-muted-foreground mt-4">Click card to flip</p>


      <div className="flex items-center gap-4 mt-8">
        <Button onClick={handlePrev} variant="outline" size="lg">
          <ArrowLeft className="mr-2 h-5 w-5" /> Prev
        </Button>
        <Button onClick={handleShuffle} variant="secondary" size="lg">
          <Shuffle className="mr-2 h-5 w-5" /> Shuffle
        </Button>
        <Button onClick={handleNext} variant="outline" size="lg">
          Next <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      <div className="mt-4 text-muted-foreground font-headline">
        Card {currentIndex + 1} of {flashcards.length}
      </div>
    </div>
  );
}
