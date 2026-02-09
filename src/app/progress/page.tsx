import { achievements } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrophyIcon } from '@/components/icons/trophy-icon';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export default function ProgressPage() {
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const totalCount = achievements.length;
  const progressPercentage = (unlockedCount / totalCount) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold font-headline mb-4 text-primary text-center text-shadow-primary">
        Your Progress
      </h1>
      <p className="text-center text-muted-foreground mb-8 text-lg">
        You have unlocked {unlockedCount} of {totalCount} achievements. Keep it up!
      </p>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <Progress value={progressPercentage} className="h-4" />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card
            key={achievement.id}
            className={cn(
              'transition-all',
              achievement.unlocked
                ? 'border-primary/50 shadow-md shadow-primary/10'
                : 'bg-card/50 text-muted-foreground'
            )}
          >
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <TrophyIcon
                className={cn(
                  'w-8 h-8',
                  achievement.unlocked ? 'text-primary' : 'text-muted-foreground'
                )}
              />
              <CardTitle className="font-headline text-xl">
                {achievement.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
