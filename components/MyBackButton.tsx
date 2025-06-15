'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function MyBackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/main?tab=my');
    }
  };

  return (
    <Button
      variant="ghost"
      className="h-8 w-8 p-0"
      onClick={handleBack}
    >
      <ChevronLeft className="h-5 w-5" />
    </Button>
  );
} 