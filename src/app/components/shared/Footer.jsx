import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const getDate = new Date();
  const currentYear = getDate.getFullYear();
  return (
    <footer>
      <section className="px-20 flex justify-between items-center bg-gradient-to-r from-slate-600 to-slate-700 py-10">
        <nav className="flex flex-col space-y-2">
          <h6 className="text-xl font-semibold text-slate-200">Services</h6>
          <a className="text-slate-300">Branding</a>
          <a className="text-slate-300">Design</a>
          <a className="text-slate-300">Marketing</a>
          <a className="text-slate-300">Advertisement</a>
        </nav>
        <nav className="flex flex-col space-y-2">
          <h6 className="text-xl font-semibold text-slate-200">Company</h6>
          <a className="text-slate-300">About us</a>
          <a className="text-slate-300">Contact</a>
          <a className="text-slate-300">Jobs</a>
          <a className="text-slate-300">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold text-slate-200 my-2">Social</h6>
          <div className="flex space-x-4">
            <a>
              <FaFacebook className="w-8 h-8 text-slate-300 hover:scale-105 duration-500 cursor-pointer hover:text-slate-400" />
            </a>
            <a>
              <FaTwitter className="w-8 h-8 text-slate-300 hover:scale-105 duration-500 cursor-pointer hover:text-slate-400" />
            </a>
            <a>
              <FaLinkedin className="w-8 h-8 text-slate-300 hover:scale-105 duration-500 cursor-pointer hover:text-slate-400" />
            </a>
            <a>
              <FaGithub className="w-8 h-8 text-slate-300 hover:scale-105 duration-500 cursor-pointer hover:text-slate-400" />
            </a>
          </div>
        </nav>
      </section>

      {/* footer tittle section  */}
      <section className="py-4 bg-slate-700">
        <p className="text-center text-slate-200 text-lg">
          Copyright © {currentYear} - All right reserved by{" "}
          <span className="text-cyan-500">ToolyZone</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
