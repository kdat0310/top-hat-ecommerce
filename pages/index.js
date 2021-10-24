import Head from 'next/head';
import Categories from './components/categories';
import Hero from './components/hero';
import InstagramInfo from './components/instagramInfo';
import ProductPreviewContainer, {
  ProductPreview,
} from './components/productPreviewContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ĐN^3S - Chúng tôi bán mũ</title>
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

      <Hero />
      <Categories />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <ProductPreviewContainer />
        <InstagramInfo />
      </main>

      <footer className="block sm:flex w-full border-t text-xs px-8 sm:px-24 py-8 cursor-default">
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
