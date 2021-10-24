import Link from 'next/link';

export function SeeMoreProduct() {
  return (
    <div className="center">
      <Link href="/">
        <a className="pb-1 border-b border-b-primaryContent hover:opacity-75">
          XEM TẤT CẢ SẢN PHẨM
        </a>
      </Link>
    </div>
  );
}
