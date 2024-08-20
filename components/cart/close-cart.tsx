import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      <XMarkIcon className={clsx('h-4 transition-all ease-in-out hover:scale-110 ', className)} />
    </div>
  );
}
