import NextImage from 'next/image';

import addToCartIcon from '../images/icons/add-to-cart.svg';
import { SeeMoreProduct } from './seeMoreProducts';

const products = [
  {
    id: 1,
    name: 'Mũ vành nơ xanh cho bé gái',
    href: '#',
    price: '₫48.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Trẻ em',
  },
  {
    id: 2,
    name: 'Mũ lưỡi trai VIMADE cho nam',
    href: '#',
    price: '₫100.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Nam',
  },
  {
    id: 3,
    name: 'Mũ bảo hiểm nửa đầu DeadPool',
    href: '#',
    price: '₫100.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Nam',
  },
  {
    id: 4,
    name: 'Kính chắn giọt bắn gọng gương dễ sử dụng',
    href: '#',
    price: '₫50.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Trẻ em',
  },
  {
    id: 5,
    name: 'Mũ vành nơ xanh cho bé gái',
    href: '#',
    price: '₫48.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Trẻ em',
  },
  {
    id: 6,
    name: 'Mũ lưỡi trai VIMADE cho nam',
    href: '#',
    price: '₫100.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Nam',
  },
  {
    id: 7,
    name: 'Mũ bảo hiểm nửa đầu DeadPool',
    href: '#',
    price: '₫100.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Nữ',
  },
  {
    id: 8,
    name: 'Kính chắn giọt bắn gọng gương dễ sử dụng',
    href: '#',
    price: '₫50.000',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    category: 'Nữ',
  },
];

export default function ProductPreviewContainer() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="cursor-default text-2xl font-extrabold tracking-tight text-primaryContent">
        Các mặt hàng bán chạy
      </h2>

      <div className="mt-6 mb-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 text-left">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>

            <div className="mt-4 mb-2 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              </div>
              <p className="text-medium font-extrabold text-gray-900">
                {product.price}
              </p>
            </div>

            <div className="flex justify-end cursor-pointer">
              <div className="float-right rounded-full h-18 w-18 flex items-center justify-center border border-gray-300 p-2">
                <NextImage src={addToCartIcon} height={18} width={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <SeeMoreProduct />
    </div>
  );
}
