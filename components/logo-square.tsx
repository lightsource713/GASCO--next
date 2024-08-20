import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('mt-5 flex flex-none items-center justify-center', {
        'h-[140px] w-[140px] rounded-xl': !size,
        'h-[120px] w-[120px] rounded-lg': size === 'sm'
      })}
    >
      <LogoIcon
      />
    </div>
  );
}
