import Image from 'next/image';

const handpickedImgs = [
  {
    src: 'https://images.pexels.com/photos/8728408/pexels-photo-8728408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/9889204/pexels-photo-9889204.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/9725927/pexels-photo-9725927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/9606327/pexels-photo-9606327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/6437821/pexels-photo-6437821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    src: 'https://images.pexels.com/photos/9289896/pexels-photo-9289896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

export default function InstagramInfo() {
  return (
    <div className="cursor-default">
      <h3 className="text-primaryContent text-lg md:text-xl pb-2 md:pb-4">
        Theo dõi chúng tôi tại{' '}
        <span className="font-semibold text-gray-900 cursor-pointer md:pb-1 md:border-b md:border-b-primaryContent">
          @ĐN^3S
        </span>
      </h3>

      <div className="flex flex-wrap justify-center">
        {handpickedImgs.map((image, i) => {
          return (
            <div key={i} className="px-1 py-px w-28 sm:w-auto">
              <Image
                src={image.src}
                width={180}
                height={180}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
