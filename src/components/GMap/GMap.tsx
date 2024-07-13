interface Props {
  width?: string;
  height?: string;
}

const GMap = ({ width = "100%", height = "100%" }: Props) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62317.021057207035!2d78.205329!3d12.52849!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac359a423ca2bb%3A0x2d48a71cc2782f48!2sAlmaa%20Siddha%20Care%20Clinic!5e0!3m2!1sen!2sin!4v1720879326481!5m2!1sen!2sin"
      allowFullScreen={true}
      style={{
        display: "block",
        height: `${height}`,
        width: `${width}`,
        border: "none",
      }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GMap;
