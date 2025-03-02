import React from "react";
import { motion, useAnimation } from "framer-motion"; // لاستخدام animations متقدمة

const Design = () => {
  const data = [
    {
      id: 1,
      title1: "Graphic Design",
      title2: "UI/UX Design",
      description:
        "Unlock your creativity with our UI & UX course! Learn essential design principles, master industry-leading tools, and create stunning visuals to bring your ideas to life.",
      rate: "4.7",
      sales: 80,
      oldPrice: 11.99,
      newPrice: 4.99,
      hours: 22,
      minute: 30,
      lessons: 64,
      sale: "sale",
      image: "https://sourcemediakw.com/wp-content/uploads/2023/04/UIUX.png",
    },
    {
      id: 2,
      title1: "Software Development",
      title2: "Project Design",
      description:
        "Transform ideas into actionable plans with our Project Design course! Learn to structure, organize, and execute projects effectively using professional tools and techniques.",
      rate: "4.6",
      sales: 160,
      oldPrice: 15.99,
      newPrice: 7.99,
      hours: 30,
      minute: 30,
      lessons: 121,
      sale: "sale",
      image:
        "https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2020/04/SOC091_FreeTutsCourses_WebDesign@2x.png",
    },
    {
      id: 3,
      title1: "Web Development",
      title2: "HTML & CSS",
      description:
        "Build the foundation of web development with our HTML & CSS course! Learn to create stunning, responsive websites from scratch with hands-on projects and practical skills.",
      rate: "4.9",
      sales: 288,
      oldPrice: 10.99,
      newPrice: 8.99,
      hours: 16,
      minute: 40,
      lessons: 107,
      sale: "sale",
      image:
        "data:image/png;base64,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",
    },
    {
        id: 4,
        title1: "Web Development",
        title2: "Angular",
        description:
          `Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js`,
        rate: "4.7",
        sales: 2165,
        oldPrice: 55.99,
        newPrice: 44.99,
        hours: 80,
        minute: 22,
        lessons: 167,
        sale: "sale",
        image:
          "data:image/jpeg;base64,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",
    },
    {
        id: 5,
        title1: "Programming Languages",
        title2: "Next.js",
        description:
          "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!",
        rate: "4.8",
        sales: 21854,
        oldPrice: 124.50,
        newPrice: 99.99,
        hours: 95,
        minute: 48,
        lessons: 294,
        sale: "sale",
        image: "data:image/jpeg;base64,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",
    },
    {
        id: 6,
        title1: "Web Development",
        title2: "React",
        description:
          "Master React and Redux. Apply modern design patterns to build apps with React Router, TailwindCSS, Context, and Hooks!",
        rate: "4.9",
        sales: 18452,
        oldPrice:152.50,
        newPrice: 124.99,
        hours:80,
        minute:40,
        lessons: 126,
        sale: "sale",
        image: "data:image/png;base64,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",
    },
  ];

  return (
    <div className="mt-5 p-4 gap-6  flex-wrap grid grid-cols-3 justify-center ">
      {data.map((items, index) => (
        <motion.div
          key={items.id}
          className="group mb-6 p-6 border rounded-xl shadow-lg flex-1 max-w-sm relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ duration: 0.2, delay: index * 0.2 }} 
          viewport={{ once: false }}
          whileHover={{ scale: 1.05, rotate: 2 }} 
        >
          <motion.img
            src={items.image}
            alt={items.title1}
            className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }} 
          />
          <h2 className="text-xl font-bold text-blue-800">{items.title1}</h2>
          <h3 className="text-lg font-semibold text-gray-800">{items.title2}</h3>
          <p className="text-gray-600 mt-2">{items.description}</p>
          <div className="mt-3 flex items-center">
            <span className="text-yellow-500">⭐ {items.rate}</span>
            <span className="ml-4 text-green-600">🛒 {items.sales} Sales</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-500 line-through">${items.oldPrice}</span>
            <span className="ml-2 text-red-600 font-bold">
              ${items.newPrice}
            </span>
          </div>
          <div className="mt-2">
            <span className="text-gray-700">
              ⏳ {items.hours}h {items.minute}m
            </span>
            <span className="ml-4 text-gray-700">📚 {items.lessons} Lessons</span>
          </div>
          <div className="mt-3">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
              {items.sale}
            </span>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          <motion.button
            className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }} 
          >
           Learn More
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default Design;