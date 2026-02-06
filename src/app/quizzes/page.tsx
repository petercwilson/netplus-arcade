'use client';

import { useState } from 'react';
import { quizzes } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

type AnswerStatus = 'correct' | 'incorrect' | 'unanswered';

export default function QuizzesPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('unanswered');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizzes[currentQuestionIndex];

  const handleAnswerSelect = (option: string) => {
    if (answerStatus !== 'unanswered') return;

    setSelectedAnswer(option);
    if (option === currentQuestion.correctAnswer) {
      setAnswerStatus('correct');
      setScore((prev) => prev + 1);
    } else {
      setAnswerStatus('incorrect');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswerStatus('unanswered');
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswerStatus('unanswered');
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <Card className="w-full text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl mb-4">
              Your final score is:
            </p>
            <p className="text-6xl font-bold text-primary">
              {score} / {quizzes.length}
            </p>
            <Button onClick={handleRestart} className="mt-8" size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold font-headline mb-2 text-primary text-center">
        Scenario Quiz
      </h1>
      <p className="text-center text-muted-foreground mb-8">Question {currentQuestionIndex + 1} of {quizzes.length}</p>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg text-muted-foreground">Scenario</CardTitle>
          <CardDescription className="text-lg text-foreground pt-2">
            {currentQuestion.scenario}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold mb-6 text-center">{currentQuestion.question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              
              return (
                <Button
                  key={option}
                  variant="outline"
                  size="lg"
                  className={cn(
                    "h-auto justify-start text-left whitespace-normal py-4 text-base",
                    answerStatus !== 'unanswered' && isCorrect && 'bg-green-500/20 border-green-500 text-foreground hover:bg-green-500/30',
                    isSelected && answerStatus === 'incorrect' && 'bg-accent/20 border-accent text-foreground hover:bg-accent/30',
                  )}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={answerStatus !== 'unanswered'}
                >
                  {option}
                </Button>
              )
            })}
          </div>

          {answerStatus !== 'unanswered' && (
            <Card className={cn(
              "mt-6 p-4",
              answerStatus === 'correct' ? 'bg-green-500/10 border-green-500/50' : 'bg-accent/10 border-accent/50'
            )}>
              <div className="flex items-start gap-4">
                {answerStatus === 'correct' ? <CheckCircle className="h-8 w-8 text-green-500 mt-1" /> : <XCircle className="h-8 w-8 text-accent mt-1" />}
                <div>
                  <h3 className={cn("text-lg font-bold", answerStatus === 'correct' ? 'text-green-400' : 'text-accent')}>
                    {answerStatus === 'correct' ? 'Correct!' : 'Incorrect'}
                  </h3>
                  <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                  <Button onClick={handleNextQuestion} className="mt-4">
                    {currentQuestionIndex < quizzes.length - 1 ? 'Next Question' : 'Show Results'}
                  </Button>
                </div>
              </div>
            </Card>
          )}

        </CardContent>
      </Card>
    </div>
  );
}
