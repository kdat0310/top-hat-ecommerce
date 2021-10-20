import Image from 'next/image';

export function ProductPreview() {
  return (
    <div>
      <div>
        <Image
          className={'object-cover'}
          layout="fill"
          src={`https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`}
        />
      </div>
      <div>
        <h3>Mũ len ấm áp mùa đông lạnh giá</h3>
        <h3>Giá</h3>
      </div>
    </div>
  );
}
