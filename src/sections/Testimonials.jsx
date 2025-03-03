import React from "react";
import { motion } from "framer-motion"; // لاستخدام animations متقدمة

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Gamal Mahmoud",
      role: "Software Engineer",
      content:
        "The course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on project helped me build real-world skills. Highly recommended it to anyone looking to learn!",
      image: "https://www.ascm.org/globalassets/ascm_website_assets/img/2-5-how-do-i-apply-block.jpg", // صورة شخصية
      rating: 5, 
    },
    {
      id: 2,
      name: "Omar Mohamed",
      role: "Developer",
      content:
        "The course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on project helped me build real-world skills. Highly recommended it to anyone looking to learn!",
      image: "https://media.istockphoto.com/id/1072395722/photo/fitness-trainer-at-gym.jpg?s=612x612&w=0&k=20&c=3VBLCgbxG3bGNRp9Sc3tN_7G-g_DxXhGk9rhuZo-jkE=", // صورة شخصية
      rating: 4, 
    },
    {
      id: 3,
      name: "Islam Tarek",
      role: "Designer",
      content:
        "The course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on project helped me build real-world skills. Highly recommended it to anyone looking to learn!",
      image: "https://img.freepik.com/free-photo/unpleased-male-teacher-wearing-glasses-points-with-pointer-stick-blackboard-sitting-table-with-school-tools-classroom_141793-114329.jpg", // صورة شخصية
      rating: 4.5, 
    },
  ];

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-2xl ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className=" p-4 flex-wrap grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 md:gap-4 justify-center items-center">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="group mb-6 p-6 border rounded-xl shadow-lg flex-1 max-w-sm relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }} 
          viewport={{ once: false }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
        
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.1 }} 
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </motion.div>
         
          <motion.div
            className="text-center mt-4"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
            <h3 className="text-xl font-bold text-purple-800 mt-4">
              {testimonial.name}
            </h3>
            <p className="text-lg font-semibold text-gray-800">
              {testimonial.role}
            </p>

            <div className="mt-3 flex justify-center">
              {renderRating(testimonial.rating)}
            </div>
          </motion.div>

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;