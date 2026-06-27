import { useClient } from '@/lib/hooks';
import { AiOutlineFileText } from 'lucide-react';

export default function AppSummarize() {
  useClient();

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
      <h2 className="font-bold text-zinc-900 tracking-tight">
        <AiOutlineFileText className="mr-2" />
        Summarize
      </h2>
      <p className="text-zinc-600">Summarize text here</p>
    </div>
  );
}