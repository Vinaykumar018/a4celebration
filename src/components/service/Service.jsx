

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

// In a real implementation, you would import actual images
// This is a placeholder for demonstration
import img1 from '../../assets/categories/Anniversary.webp';
import img2 from '../../assets/categories/Baby-Shower.webp';
import img3 from '../../assets/categories/Baby-Welcome.webp';
import img4 from '../../assets/categories/Bacheloratte.webp';
import img5 from '../../assets/categories/Birthday.webp';
import img6 from '../../assets/categories/ProPosal.webp';


const Services = () => {
  const services = [
    {
      image: img1,
      title: "Anniversary",
      featured: true,
      url: "decoration",
      description: "Celebrate your special milestones with elegant decor",
    },
    {
      image: img6,
      title: "Proposal",
      url: "decoration",
      description: "Create magical moments for the perfect question",
    },
    {
      image: img3,
      title: "Birthday",
      url: "decoration",
      description: "Make every birthday a memorable celebration",
    },
    {
      image: img4,
      title: "Bachelorette",
      url: "decoration",
      description: "Unforgettable pre-wedding celebrations",
    },
    {
      image: img5,
      title: "Wedding",
      url: "decoration",
      description: "Your dream wedding, perfectly executed",
    },
    {
      image: img6,
      title: "Decoration",
      url: "decoration",
      description: "Professional events with a touch of elegance",
    },
    {
      image: img2,
      title: "Baby Shower",
      url: "decoration",
      description: "Welcoming new life with style and joy",
    },
    {
      image: img2,
      title: "Graduation",
      url: "decoration",
      description: "Celebrate achievements with memorable events",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">

<h1>hello</h1>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover" className="group">
              <Link to={service.url} className="block h-full">
                <div className="bg-pink-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col max-w-[280px] mx-auto w-full">
                  <div className="relative overflow-hidden aspect-square p-3 pt-4 bg-pink-50">
                    <motion.div className="w-full h-full" variants={imageVariants}>
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 m-3 rounded-2xl"
                      variants={overlayVariants}
                      initial="initial"
                    >
                      <span className="text-white font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                        View Details <ChevronRight size={16} />
                      </span>
                    </motion.div>
                  </div>

                  <div className="px-3 py-2 text-center bg-white flex-grow flex flex-col justify-center py">
                    <h3
                      className="text-xl font-extrabold  text-[#8B4513] tracking-wide google-font  
"
                      style={{ textTransform: "uppercase" }}
                    >
                      {service.title}
                    </h3>
                  </div>


                  {service.featured && (
                    <div className="absolute top-5 right-5 z-10">
                      <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium shadow-md">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
