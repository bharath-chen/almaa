import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatIcon = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <FaWhatsapp
      className={`fixed bg-[#25d366] text-sm p-4 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[33%] bottom-[40px] right-[40px] shadow-icon ${
        showIcon ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      size={60}
      color="#fff"
    />
  );
};

export default WhatsAppFloatIcon;
