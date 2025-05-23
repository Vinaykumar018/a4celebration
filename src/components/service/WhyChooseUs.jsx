import React from "react";

const WhyChooseUs = () => {
  const poojas = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/swastik13prod.appspot.com/o/NewAppFiles%2FpujaVectors%2FGreihPravesh.png?alt=media&token=461b9b31-c406-41bc-a66e-1707743ad493",
      title: "Plan Your Perfect Celebration",
      description: "From birthdays to grand weddings, we help you plan every detail of your special event with creativity and care."
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/mongodb-asset/o/puja-vectors%2Fsaraswati_maa.png?alt=media&token=3f0608ca-6ef4-4b71-a5a1-93277a56e72c",
      title: "Professional Event Decoration",
      description: "Make your event stand out with our custom decoration services, tailored to match your theme and style perfectly."
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/swastik13prod.appspot.com/o/appfiles%2Fpuja2.png?alt=media&token=86a025b0-f401-4271-bed8-477505e2fea9",
      title: "Unique Gifts for Every Occasion",
      description: "Browse our curated collection of thoughtful gifts perfect for weddings, birthdays, festivals, and corporate events."
    },
    {
      image: "https://www.pujapurohit.co.uk/assets/images/key-feature/11.webp",
      title: "Artist & Talent Management",
      description: "Book skilled performers, DJs, anchors, and entertainers to add life and energy to your celebration."
    },
  ];


  return (
    <section className="px-5 rashi_wrapper mt-2 mt-8 pb-8 bg-amber-50" id="zodiac_Sign">
      <div className="container mx-auto px-12">
        <div className="heading_wrapper " style={{ marginBottom: "40px" }}>
          <h2
            className="text-center text-4xl sm:text-5xl font-bold tracking-wide mb-8 text-amber-600"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {poojas.map((pooja, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-amber-200 p-4 rounded-2xl 
              transition-transform duration-300 ease-in-out transform hover:scale-100 hover:border-2 hover:border-amber-500"
            >
              {
                console.log(pooja.image)
              }
              <img
                alt={`Puja ${index + 1}`}
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                className="object-contain w-[40%] md:w-[30%]"
                src={pooja.image}
                style={{ color: "transparent" }}
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 md:mt-0 md:ml-4">
                <h2 className="text-amber-600 font-bold text-xl md:text-2xl">
                  {pooja.title}
                </h2>
                <p className="text-sm text-gray-700 font-semibold mt-2">
                  {pooja.description}
                </p>
                <div className="flex mt-3">
                  <div className="p-1 bg-amber-400 m-1 rounded-full"></div>
                  <div className="p-1 bg-amber-400 m-1 rounded-full"></div>
                  <div className="p-1 bg-amber-400 m-1 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;