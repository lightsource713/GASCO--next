import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx('mt-5 flex flex-none items-center justify-center', {
        'h-[70px] w-[70px] rounded-xl': !size,
        'h-[60px] w-[60px] rounded-lg': size === 'sm'
      })}
    >
      <LogoIcon
      />
    </div>
  );
}
