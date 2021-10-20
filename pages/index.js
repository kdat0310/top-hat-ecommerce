import Head from 'next/head';
import InstagramInfo from './components/instagramInfo';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-16 text-center">
        <InstagramInfo />
      </main>

      <footer className="block sm:flex w-full border-t text-xs px-16 py-8">
        <div className="flex-1 pb-2 sm:pb-0">
          <div className="font-semibold text-primaryContent">©2021 ĐN^3S</div>
        </div>
        <div className="text-primaryContent opacity-50">
          Ho Chi Minh City University of Technology, E-commerce project (CO3027)
        </div>
      </footer>
    </div>
  );
}
