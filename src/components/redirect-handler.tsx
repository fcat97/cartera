'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function RedirectHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirectUrl = searchParams.get('red');
    
    if (redirectUrl) {
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return null;
}
