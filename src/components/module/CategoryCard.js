'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function CategoryCard({ name, title,index }) {
  return (
    <motion.div
    className="bg-secondary/20 rounded-xl hover:rounded-full w-40 py-3 transition-all duration-150"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }} // 👈 فقط یک بار وقتی 20% دیده شد
    transition={{
      duration: 0.6,
      delay: index * 0.15,
      ease: "easeOut"
    }}
  >       <Link href={`/buy-residential?categories=${name}`} className="flex items-center gap-4 justify-center transition-all duration-300 ease-in-out " >
          <Image
            className="rounded-full bg-white px-2.5 py-2.5 hover:bg-secondary/5  "
            src={`/images/${name}.png`}
            alt={title}
            width={38}
            height={38}
            priority={true}
            
          />
          
        
        <p className="text-primary">
            {title}
          </p>
          </Link>
      </motion.div>
  );
}

export default CategoryCard;