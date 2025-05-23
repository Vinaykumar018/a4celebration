import { FaArrowDown, FaBook, FaInfoCircle } from 'react-icons/fa';

const ProductOverview = () => {
  // Dummy data for a celebration decoration or gift product
  const productDetails = {
    long_description: `
      <p>Celebrate your special occasion with our beautifully designed celebration gifts and decorations! Our collection includes everything you need to make your event unforgettable. From elegant floral arrangements to vibrant balloons, we've got it all covered!</p>
      <p>Each product is handcrafted with attention to detail and designed to add that perfect touch of charm to your celebration. Whether it's a wedding, birthday, or anniversary, our decorations will elevate the atmosphere.</p>
    `,
    pooja_Samegristatus: "1", // Sample flag to show if "Puja Samagri" section should appear
  };

  return (
    <div className="w-full mt-2 font-sans ">
      <h2 className="mb-6 text-center text-2xl font-bold mb-4 text-amber-700">Product Overview</h2>
      <div className="rounded-lg shadow-sm rounded-lg divide-y bg-amber-50">
        <details className="px-4">
          <summary className="py-4 font-medium cursor-pointer text-black flex justify-between items-center">
            <span className="flex items-center gap-2">
              <FaBook className="text-amber-500" />
              Product Description
            </span>
            <FaArrowDown className="text-amber-500" />
          </summary>
          <div className="pb-4 text-gray-700">
            <p className="mb-2 text-lg font-semibold text-amber-600">
              The Decoration Kit includes:
            </p>
            <ul className="list-disc pl-6">
              <li>Floral Arrangements</li>
              <li>Vibrant Balloons</li>
              <li>Tablecloths and Centerpieces</li>
              <li>Fairy Lights and Garlands</li>
              <li>Gift Wrapping Supplies</li>
            </ul>
            <p className="mt-4 text-sm italic text-red-600">
              <FaInfoCircle className="inline mr-2 text-yellow-600" />
              Note: If you choose "Without Kit" option, you'll need to arrange the materials yourself.
            </p>
          </div>
        </details>

        {productDetails.pooja_Samegristatus === "1" && (
          <details className="px-4">
            <summary className="py-4 font-medium cursor-pointer text-black flex justify-between items-center">
              <span className="flex items-center gap-2">
                <FaBook className="text-amber-500" />
                Decoration Kit & Materials
              </span>
              <FaArrowDown className="text-amber-500" />
            </summary>
            <div className="pb-4 text-gray-700">
              <p className="mb-2 text-lg font-semibold text-amber-600">
                The Decoration Kit includes:
              </p>
              <ul className="list-disc pl-6">
                <li>Floral Arrangements</li>
                <li>Vibrant Balloons</li>
                <li>Tablecloths and Centerpieces</li>
                <li>Fairy Lights and Garlands</li>
                <li>Gift Wrapping Supplies</li>
              </ul>
              <p className="mt-4 text-sm italic text-red-600">
                <FaInfoCircle className="inline mr-2 text-yellow-600" />
                Note: If you choose "Without Kit" option, you'll need to arrange the materials yourself.
              </p>
            </div>
          </details>
        )}

      </div>


    </div>


  );
};

export default ProductOverview;
