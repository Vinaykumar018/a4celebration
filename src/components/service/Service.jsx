import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from '../../redux/categoriesSlice'
import { useEffect } from "react"

const Services = () => {
  const dispatch = useDispatch()
  const { categories, loading, error } = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

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

  // Function to get image URL
  const getImageUrl = (imagePath) => {
    return imagePath ? `http://localhost:3000/${imagePath.replace(/\\/g, '/')}` : '/placeholder.svg'
  }

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <p>Loading categories...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-7xl text-center text-red-500">
          <p>Error loading categories: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category._id}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Link to={`/${category.slug_url}`} className="block h-full">
                <div className="bg-pink-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col max-w-[280px] mx-auto w-full">
                  <div className="relative overflow-hidden aspect-square p-3 pt-4 bg-pink-50">
                    <motion.div className="w-full h-full" variants={imageVariants}>
                      <img
                        src={getImageUrl(category.category_image)}
                        alt={category.category_name}
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

                  <div className="px-3 py-2 text-center bg-white flex-grow flex flex-col justify-center">
                    <h3
                      className="text-md font-extrabold text-[#8B4513] tracking-wide google-font"
                      style={{ textTransform: "uppercase" }}
                    >
                      {category.category_name}
                    </h3>

                  </div>

                  {/* Popular badge - you can customize the condition */}
                  {category.status === "1" && (
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