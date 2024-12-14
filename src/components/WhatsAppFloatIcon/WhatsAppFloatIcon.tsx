import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatIcon = () => {
  const handleWhatsapp = () => {
    window.open(`https://wa.me/+917401403000`, "_blank");
  };

  return (
    <FaWhatsapp
      onClick={handleWhatsapp}
      className={`fixed bg-[#25d366] z-[999] text-sm p-4 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[33%] bottom-[40px] right-[40px] shadow-icon cursor-pointer`}
      size={60}
      color="#fff"
    />
  );
};

export default WhatsAppFloatIcon;
