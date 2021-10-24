const callouts = [
  {
    description: 'Sản phẩm cho',
    name: 'Nam',
    imageSrc:
      'https://images.pexels.com/photos/6353658/pexels-photo-6353658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    description: 'Sản phẩm cho',
    name: 'Nữ',
    imageSrc:
      'https://images.pexels.com/photos/7765972/pexels-photo-7765972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    description: 'Sản phẩm cho',
    name: 'Bé',
    imageSrc:
      'https://images.pexels.com/photos/5560485/pexels-photo-5560485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

export default function Categories() {
  return (
    <div
      id="products-category"
      className="mt-20 lg:grid lg:grid-cols-3 cursor-pointer"
    >
      {callouts.map((callout) => (
        <div key={callout.name} className="group relative">
          <div className="absolute z-10 text-xl font-extrabold text-white p-8">
            {callout.description}
            <div className="text-3xl lg:text-4xl">{callout.name}</div>
          </div>
          <div className="relative bg-black w-full h-80 overflow-hidden group-hover:opacity-75 transition duration-100 ease-in-out sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src={callout.imageSrc}
              alt={callout.imageAlt}
              className="w-full h-full object-center object-cover opacity-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
