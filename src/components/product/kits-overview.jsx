import { FaArrowDown, FaBook, FaInfoCircle } from 'react-icons/fa';

const KitsOverview = (kitPart) => {
  const productDetails = {
    long_description: `
      <p>Celebrate your special occasion with our beautifully designed celebration gifts and decorations! Our collection includes everything you need to make your event unforgettable. From elegant floral arrangements to vibrant balloons, we've got it all covered!</p>
      <p>Each product is handcrafted with attention to detail and designed to add that perfect touch of charm to your celebration. Whether it's a wedding, birthday, or anniversary, our decorations will elevate the atmosphere.</p>
    `,
    pooja_Samegristatus: "1",
  };

  const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .product-shadow {
          box-shadow: 0 10px 25px -5px rgba(244, 114, 182, 0.2);
        }
      `}</style>

      <div className="w-full sm:mt-2 mt-0 font-poppins bg-amber-50">


        <div className="rounded-lg shadow-sm divide-y bg-amber-50 product-shadow">



          <details className="px-4" open>
            <summary className="py-4 font-medium cursor-pointer text-black flex justify-between items-center">
              <span className="flex items-center gap-2">
                <FaBook className="text-amber-500" />
                Decoration Kit & Materials
              </span>
              <FaArrowDown className="text-amber-500" />
            </summary>
            <div className="pb-4 text-gray-700">

              <div
                className="kit text-xs"
                dangerouslySetInnerHTML={{ __html: '<ul>' + decodeHTML(kitPart.data).split('</p><p>').join('') }}
              />
              <p className="mt-4 text-sm italic text-red-600">
                <FaInfoCircle className="inline mr-2 text-yellow-600" />
                Note: If you choose "Without Kit" option, you'll need to arrange the materials yourself.
              </p>
            </div>
          </details>

        </div>
      </div>
    </>
  );
};

export default KitsOverview;
