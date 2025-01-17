import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => (
  <footer className="flex items-center justify-center gap-8 text-lg font-body">
    <div className="flex gap-4">
      <FaInstagram />
      <FaFacebook />
    </div>
    <p>&copy; 2024 Greenside Golf Repair</p>
  </footer>
);

export default Footer;
