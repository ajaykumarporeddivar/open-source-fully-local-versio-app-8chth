import { useClient } from '@/lib/hooks';
import { AiOutlinePenTool } from 'lucide-react';

export default function AppRephrase() {
  useClient();

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
      <h2 className="font-bold text-zinc-900 tracking-tight">
        <AiOutlinePenTool className="mr-2" />
        Rephrase
      </h2>
      <p className="text-zinc-600">Rephrase text here</p>
    </div>
  );
}