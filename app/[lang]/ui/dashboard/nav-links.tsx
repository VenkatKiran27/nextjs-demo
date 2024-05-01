'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Locale } from '../../../../i18n-config';
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';
// import { getDictionary } from '../../../../get-dictionary';
// import { Locale, getDictionary } from './dictionaries'

let lang: Locale;

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// const links = [
//   { name: 'Home', href: `/dashboard`, icon: HomeIcon },
//   {
//     name: 'Invoices',
//     href: `/dashboard/invoices`,
//     icon: DocumentDuplicateIcon,
//   },
//   { name: 'Customers', href: `/dashboard/customers`, icon: UserGroupIcon },
// ];

export default function NavLinks({
  navLinks: { links },
}
: {
  navLinks: {
    links: 
      {
        name: string;
        href: string;
        // icon: any;
        // icon: ForwardRefExoticComponent<
        //   Omit<SVGProps<SVGSVGElement>, 'ref'> & {
        //     title?: string | undefined;
        //     titleId?: string | undefined;
        //   } & RefAttributes<SVGSVGElement>
        // >;
      }[]
  };
}) 
{
  // const dictionary = await getDictionary(lang);

  // const links = [
  //   { name: `${dictionary['dashboard'].home}`, href: `/dashboard`, icon: HomeIcon },
  //   {
  //     name: `${dictionary['dashboard'].invoices}`,
  //     href: `/dashboard/invoices`,
  //     icon: DocumentDuplicateIcon,
  //   },
  //   { name: `${dictionary['dashboard'].customers}`, href: `/dashboard/customers`, icon: UserGroupIcon },
  // ];

  // const links = [
  //   { name: 'Home', href: `/dashboard`, icon: HomeIcon },
  //   {
  //     name: 'Invoices',
  //     href: `/dashboard/invoices`,
  //     icon: DocumentDuplicateIcon,
  //   },
  //   { name: 'Customers', href: `/dashboard/customers`, icon: UserGroupIcon },
  // ];

  const pathname = usePathname();
  console.log('pathname', pathname.substring(3));

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link?.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-orange-100 hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-orange-100 text-orange-600': pathname === link.href,
              },
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
