'use client'
import { motion } from "framer-motion";

function ServiceCard({name,index}) {
  return (
    <motion.div
    className="bg-secondary/20 rounded-xl hover:rounded-full w-40 py-3 transition-all duration-500 text-center flex items-center justify-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // 👈 فقط یک بار وقتی 20% دیده شد
    transition={{
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut"
    }}
  > 
  {name}
      
    </motion.div>
  )
}

export default ServiceCard
