import LogoSquare from 'components/logo-square';
import Link from 'next/link';
const { SITE_NAME } = process.env;

export default async function NavbarWithoutCartIcon() {

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="flex justify-end md:w-1/3"></div>
      </div>
    </nav>
  );
}
