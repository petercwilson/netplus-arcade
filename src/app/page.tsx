import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { FlashcardIcon } from '@/components/icons/flashcard-icon';
import { QuizIcon } from '@/components/icons/quiz-icon';
import { ProgressIcon } from '@/components/icons/progress-icon';
import { GlossaryIcon } from '@/components/icons/glossary-icon';

const features = [
  {
    title: 'Interactive Flashcards',
    description: 'Learn key definitions with interactive, flippable cards.',
    href: '/flashcards',
    icon: FlashcardIcon,
  },
  {
    title: 'Scenario Quizzes',
    description: 'Test your knowledge with real-world network scenarios.',
    href: '/quizzes',
    icon: QuizIcon,
  },
  {
    title: 'Track Progress',
    description: 'Unlock achievements and see how far you have come.',
    href: '/progress',
    icon: ProgressIcon,
  },
  {
    title: 'Quick-Ref Glossary',
    description: 'Instantly look up definitions and concepts.',
    href: '/glossary',
    icon: GlossaryIcon,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter text-primary mb-2 text-shadow-primary">
          Welcome to NetPlus Arcade
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your gamified journey to mastering CompTIA Network+ concepts. Choose
          your challenge below and start learning!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title} className="group">
            <Card className="h-full flex flex-col transition-all duration-300 ease-in-out group-hover:border-primary group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
              <CardHeader className="flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
