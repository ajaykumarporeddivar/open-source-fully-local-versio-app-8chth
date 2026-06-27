import { useClient } from '@/lib/hooks';
import { AiOutlineSparkles } from 'lucide-react';

export default function AppGenerate() {
  useClient();

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
      <h2 className="font-bold text-zinc-900 tracking-tight">
        <AiOutlineSparkles className="mr-2" />
        Generate Content
      </h2>
      <p className="text-zinc-600">Generate content here</p>
    </div>
  );
}