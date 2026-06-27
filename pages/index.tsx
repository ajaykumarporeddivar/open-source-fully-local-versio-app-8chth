import { useClient } from '@/lib/hooks';
import AppSidebar from '@/components/AppSidebar';
import AppDashboard from '@/components/AppDashboard';

export default function Home() {
  useClient();

  return (
    <div className="flex h-screen bg-zinc-50">
      <AppSidebar />
      <AppDashboard />
    </div>
  );
}