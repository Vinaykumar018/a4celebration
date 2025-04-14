const AvailableCities = () => {
  const cities = [
    { name: "Bengaluru", href: "/pandits/Bengaluru", src: "https://pujapurohit.in/assets/images/cities/bengluru.webp" },
    { name: "Delhi", href: "/pandits/Delhi", src: "https://pujapurohit.in/assets/images/cities/newdelhi.webp" },
    { name: "Noida", href: "/pandits/Noida", src: "https://firebasestorage.googleapis.com/v0/b/mongodb-asset/o/places%2Fnoida.png?alt=media&token=902ba55d-2469-40cd-9f10-b6f2672f8a10&_gl=1*vlbioo*_ga*MTE0NDIwNTUxMi4xNjU0MjY0Mzg0*_ga_CW55HF8NVT*MTY5NzcyMjAxNS4zNzYuMS4xNjk3NzIyNTM4LjYwLjAuMA.." },
    { name: "Gurugram", href: "/pandits/Gurugram", src: "https://firebasestorage.googleapis.com/v0/b/mongodb-asset/o/cities%2Fgurugram.png?alt=media&token=f860b4bf-c9a3-480b-9bac-e6b26f92e772" },
    { name: "Pune", href: "/pandits/Pune", src: "https://pujapurohit.in/assets/images/cities/pune.webp" },
    { name: "Mumbai", href: "/pandits/Mumbai", src: "https://pujapurohit.in/assets/images/cities/mumbai.webp" }
  ];

  return (
    <div className="flex bg-gradient-to-r from-pink-300 to-pink-300 w-full flex-wrap items-center md:px-8 px-2 py-6">
      <div className="md:flex items-center justify-center w-full">
        <div className="text-white text-center md:text-left mb-2 md:mb-0">
          <p className="md:flex md:flex-col">
            <span className="md:text-xl text-sm">We are</span>
            <span className="md:text-2xl text-sm font-semibold"> Available In</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center w-full">
          {cities.map((city, index) => (
            <a key={index} className="h-full w-24 md:w-36 flex flex-col justify-center bg-white px-2 m-2 p-1 items-center rounded-lg shadow-md hover:shadow-lg transition duration-300" href={city.href}>
              <img 
                alt={`pandits in ${city.name}`} 
                loading="lazy" 
                width="200" 
                height="200" 
                decoding="async" 
                className="rounded-lg h-14 w-34 object-contain" 
                src={city.src} 
                style={{ color: "transparent" }}
              />
              <p className="text-sm font-semibold text-pink-700 mt-2">{city.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCities;
