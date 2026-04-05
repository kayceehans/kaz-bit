"use client";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const products = [
  {
    id: 1,
    title: "Dell Inspiron",
    price: "NGN120,000",
    img: "/DellInspiron.jpg",
    description:
      "Dell Inspiron, Windows 10, Intel(R) Core i5 -6200u, 2.30GHZ, 250GB RADEON GRAPHIC, WebCam, Wifi.",
  },
  {
    id: 2,
    title: "HP EliteBook 840 G1",
    price: "NGN180,000",
    img: "/HPElite.jpeg",
    description:
      "HP EliteBook 840 G1, 8GB Intel(R) Core i5,120GB, Windows 11 Pro.",
  },
  {
    id: 3,
    title: "Lenovo ThinkPad",
    price: "NGN200,000",
    img: "/LenovoThinkPad.jpeg",
    description:
      "Lenovo With Detachable KeyBoard, 8GB Intel(R) Core i5 -6200u, 2.30GHZ, 250GB 128MB GRAPHIC CARD, WebCam, Wifi.",
  },
  {
    id: 4,
    title: "Toshiba",
    price: "NGN95,200",
    img: "/ToshibaSatelite.jpeg",
    description:
      "Toshiba,Windows 11 pro, Intel pentium R 2.10GHz/4GB, 120GB, Webcam, Bluetooth, Wi-Fi.",
  },
];

export default function ProductSlider() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+2347035044307";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    toast.success("Phone number copied");

    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
  if (!selectedProduct) return;

  const phone = phoneNumber.replace("+", "");

  const message = `Hi, I'm interested in ${selectedProduct.title} (${selectedProduct.price})`;

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
};

  return (
    <>
      {/* SLIDER */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex gap-6 snap-x snap-mandatory">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-72 bg-[#112240] rounded-lg p-4 snap-start hover:border-cyan-500 border border-transparent transition-all hover:scale-105"
            >
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  sizes="100vw"
                  className="object-cover rounded-md"
                />
              </div>

              <h3 className="text-xl font-bold text-white">
                {product.title}
              </h3>
              <p className="text-cyan-300 font-mono text-lg">
                {product.price}
              </p>

              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-4 w-full text-sm text-blue-400 border border-blue-400 py-2 rounded hover:bg-blue-400/10 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          onClick={() => setSelectedProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue/60 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-2xl bg-gradient-to-br from-blue-900/40 to-[#0a192f] backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-white animate-fadeIn"
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-bold mb-2">
              {selectedProduct.title}
            </h2>

            <p className="text-cyan-400 mb-4">Available</p>

            {/* DESCRIPTION */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4">
              
              {/* COPY */}
              <button
                onClick={handleCopy}
                className="flex-1 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition"
              >
                {copied ? "Copied " : "Copy Number "}
              </button>

              {/* WHATSAPP */}
              <button
                onClick={openWhatsApp}
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
              >
                Chat on WhatsApp 
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}