import { motion } from 'motion/react'

const Home: React.FC = () => (
  <div className="flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-r from-purple-400 via-pink-500 to-red-500">
    <motion.div
      className="h-40 w-40 bg-white dark:bg-black"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      }}
    >
      &nbsp;
    </motion.div>
  </div>
)

export default Home
