import { useClient } from '@/lib/hooks';
import { AiOutlineSettings } from 'lucide-react';

export default function AppSettings() {
  useClient();

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
      <h2 className="font-bold text-zinc-900 tracking-tight">
        <AiOutlineSettings className="mr-2" />
        Settings
      </h2>
      <p className="text-zinc-600">Settings here</p>
    </div>
  );
}