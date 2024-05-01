import Link from 'next/link';
import NavLinks from '@/app/[lang]/ui/dashboard/nav-links';
import AcmeLogo from '@/app/[lang]/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import { getDictionary } from '../../../../get-dictionary';
import Counter from '@/app/[lang]/counter';
import LocaleSwitcher from '@/app/[lang]/locale-switcher';
import { Locale } from '../../../../i18n-config';
// import {useTranslations} from 'next-intl';

export default async function SideNav({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  // const t = useTranslations('UserProfile');

  const links = [
    {
      name: `${dictionary['dashboard'].home}`,
      href: `/dashboard`,
      // icon: HomeIcon
    },
    {
      name: `${dictionary['dashboard'].invoices}`,
      href: `/dashboard/invoices`,
      // icon: DocumentDuplicateIcon,
    },
    {
      name: `${dictionary['dashboard'].customers}`,
      href: `/dashboard/customers`,
      // icon: UserGroupIcon
    },
  ];

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-orange-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks navLinks={{links}} />
        <div>
          <LocaleSwitcher />
          {/* <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{' '}
          {dictionary['server-component'].welcome}
        </p> */}
          {/* <Counter dictionary={dictionary.counter} /> */}
        </div>
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-orange-100 hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
