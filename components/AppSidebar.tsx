import { useClient } from '@/lib/hooks';
import { AiOutlineFileText, AiOutlinePenTool, AiOutlineSparkles, AiOutlineSettings } from 'lucide-react';
import Link from 'next/link';

export default function AppSidebar() {
  useClient();

  return (
    <aside className="bg-zinc-900 text-zinc-100 h-screen p-4 w-64">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/summarize" className="text-zinc-100 hover:text-white">
              <AiOutlineFileText className="mr-2" />
              Summarize
            </Link>
          </li>
          <li>
            <Link href="/dashboard/rephrase" className="text-zinc-100 hover:text-white">
              <AiOutlinePenTool className="mr-2" />
              Rephrase
            </Link>
          </li>
          <li>
            <Link href="/dashboard/generate" className="text-zinc-100 hover:text-white">
              <AiOutlineSparkles className="mr-2" />
              Generate Content
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="text-zinc-100 hover:text-white">
              <AiOutlineSettings className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}