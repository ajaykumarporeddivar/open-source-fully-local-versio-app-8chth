import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
 { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export default function App({, pageProps }: AppProps) {
  return (
    <main className={cn('font-sans', inter.className)}>
      <Component {...pageProps} />
    </main>
  );
}