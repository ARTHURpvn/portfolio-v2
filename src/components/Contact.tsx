"use client";

import { useTranslation } from "react-i18next";
import { ContactForm } from "./form/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="mx-auto w-[85%] lg:h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
        {t("contact.title")}
      </motion.h1>
      <div className="montserrat mt-20 flex flex-col items-center justify-center">
        <motion.div className="w-[90%] space-y-4 lg:w-[65%]" variants={itemVariants}>
          <h2 className="text-2xl font-black lg:text-4xl">
            {t("contact.subtitle")}
          </h2>
          <h3 className="text-lg font-light lg:text-3xl">
            {t("contact.description")}
          </h3>
        </motion.div>
      </div>
      <motion.div variants={itemVariants}>
        <ContactForm />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
