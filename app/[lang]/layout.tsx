// import '@/app/ui/global.css';
import '@/app/[lang]/ui/global.css';
import { inter } from '@/app/[lang]/ui/fonts';
import { Metadata } from 'next';
import { Locale } from '../../i18n-config';
 
export const metadata: Metadata = {
  title: {
    template: '%s | MOC - QR Tool Dashboard',
    default: 'MOC - QR Tool Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

// export async function generateStaticParams() {
//   return [{ lang: 'en-US' }, { lang: 'de' }]
// }

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}