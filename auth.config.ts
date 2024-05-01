import type { NextAuthConfig } from 'next-auth';
import { Locale } from './i18n-config';

let lang: Locale;

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log('Current lang', lang);
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
  secret: process.env.AUTH_SECTRET,
} satisfies NextAuthConfig;

// pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,

// const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const handleSearch = useDebouncedCallback((term) => {
//     const params = new URLSearchParams(searchParams);
//     console.log(term);
//     params.set('page', '1');
//     if (term) {
//       params.set('query', term);
//     } else {
//       params.delete('query');
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }, 300);