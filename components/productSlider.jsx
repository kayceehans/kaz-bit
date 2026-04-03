import Image from 'next/image';

const products = [
  { id: 1, title: 'Toshiba,Windows 11 pro, Intel pentium R 2.10GHz/4GB, 120GB, Webcam, Bluetooth, Wi-Fi', price: 'NGN95,200', img: '/ToshibaSatelite.jpeg' },
  { id: 2, title: 'Dell Inspiron, Windows 10, Intel(R) Core i5 -6200u, 2.30GHZ, 250GB RADEON GRAPHIC, WebCam, Wifi', price: 'NGN120,000', img: '/DellInspiron.jpg' },
  { id: 3, title: 'HP EliteBook 840 G1, 8GB Intel(R) Core i5,120GB, Windows 11 Pro ', price: 'NGN180,000', img: '/HPElite.jpeg' },
  { id: 4, title: 'Lenovo With Detachable KeyBoard, 8GB Intel(R) Core i5 -6200u, 2.30GHZ, 250GB 128MB GRAPHIC CARD, WebCam, Wifi', price: 'NGN200,000', img: '/LenovoThinkPad.jpeg' },
];

export default function ProductSlider() {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex gap-6 snap-x snap-mandatory">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-72 bg-[#112240] rounded-lg p-4 snap-start hover:border-cyan-500 border border-transparent transition-all"
          >
            <div className="relative h-40 w-full mb-4">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-bold text-white">{product.title}</h3>
            <p className="text-cyan-300 font-mono text-lg">{product.price}</p>
            <button className="mt-4 w-full text-sm text-blue-400 border border-blue-400 py-2 rounded hover:bg-blue-400/10">
              Call 07035044307
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
