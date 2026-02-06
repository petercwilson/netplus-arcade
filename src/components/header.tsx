import Link from 'next/link';
import { NetworkIcon } from '@/components/icons/network-icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'Flashcards', href: '/flashcards' },
  { name: 'Quizzes', href: '/quizzes' },
  { name: 'Progress', href: '/progress' },
  { name: 'Glossary', href: '/glossary' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary"
          >
            <NetworkIcon className="w-8 h-8" />
            <span className="font-headline">NetPlus Arcade</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-xl font-bold text-primary mb-4"
                >
                  <NetworkIcon className="w-7 h-7" />
                  <span className="font-headline">NetPlus Arcade</span>
                </Link>
                  {navItems.map((item) => (
                    <Button key={item.name} variant="ghost" asChild className='justify-start text-lg'>
                      <Link href={item.href}>{item.name}</Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
