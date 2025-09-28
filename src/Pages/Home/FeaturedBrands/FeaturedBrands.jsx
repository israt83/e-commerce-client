import React from "react";

const FeaturedBrands = () => {
  const brands = [
    { id: 1, img: "https://logo.clearbit.com/absolutenewyork.com" },
    { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT03e3sgpi4taqiLItZ2PQUd9u4oiQ9kY84qw&s" },
    { id: 3, img: "https://logo.clearbit.com/thebodyshop.com" },
    { id: 4, img: "https://www.banglashoppers.com/media/wysiwyg/brand/revuele.jpg" },
    { id: 5, img: "https://images.cults3d.com/yyLzHTnenyYMcZlCq4ihR95mf8g=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/15233766/illustration-file/052e20fa-a733-43bc-ae39-d213258f7240/31.jpeg" },
    { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt65Ls8BePlDkHCmzwH2MMoe-9Oyv-E66CsA&s" },
    { id: 7, img: "https://static.vecteezy.com/system/resources/thumbnails/008/386/000/small/ck-or-kc-initial-letter-logo-design-vector.jpg" },
    { id: 8, img: "https://www.banglashoppers.com/media/wysiwyg/brand/revuele.jpg" },
  ];

  return (
    <div className="bg-gray-50 shadow lg:px-20  px-6 py-6 rounded-lg mt-8 relative overflow-hidden">
      <h2 className="text-2xl font-semibold mb-6 ">FEATURED BRANDS</h2>

      {/* wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* moving row */}
        <div className="flex animate-scroll whitespace-nowrap">
          {brands.concat(brands).map((brand, index) => (
            <img
              key={index}
              src={brand.img}
              alt="brand logo"
              className="mx-6 inline-block h-16 w-28 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>

      {/* left fade */}
      <div className=" pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      {/* right fade */}
      <div className=" pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>

      {/* Custom CSS animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FeaturedBrands;
