import { useClient } from '@/lib/hooks';
import AppSummarize from './AppSummarize';
import AppRephrase from './AppRephrase';
import AppGenerate from './AppGenerate';
import AppSettings from './AppSettings';
import { useRouter } from 'next/navigation';

export default function AppDashboard() {
  useClient();
  const router = useRouter();

  switch (router.pathname) {
    case '/dashboard/summarize':
      return <AppSummarize />;
    case '/dashboard/rephrase':
      return <AppRephrase />;
    case '/dashboard/generate':
      return <AppGenerate />;
    case '/dashboard/settings':
      return <AppSettings />;
    default:
      return <div>Dashboard</div>;
  }
}