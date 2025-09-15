import { Typewriter } from 'react-simple-typewriter';
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter, CiYoutube } from "react-icons/ci";
import { PiFigmaLogoFill } from "react-icons/pi";
import { FaGithubAlt } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-24">
      
      {/* Text Section */}
      <motion.div 
        className="text-white max-w-2xl mt-10 lg:mt-0"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-blue-300 text-lg tracking-wide">WELCOME TO MY WORLD</h3>
        
        <h1 className="font-extrabold mt-6 text-4xl sm:text-5xl lg:text-6xl leading-snug">
          Hi, I'm{" "}
          <span className="bg-gradient-to-br from-blue-900 to-blue-300 text-transparent bg-clip-text">
            Ahsan Ali
          </span>
        </h1>
        
        <h2 className="font-bold mt-4 text-2xl sm:text-3xl lg:text-4xl">
          a{" "}
          <span className="bg-gradient-to-br from-blue-900 to-blue-300 text-transparent bg-clip-text">
            <Typewriter
              words={['WEB DEVELOPER', 'UI/UX DESIGNER', 'PROFESSIONAL CODER']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="mt-6 text-gray-300 leading-relaxed">
          I craft engaging digital experiences with modern web technologies.
          My focus is on clean design, smooth interactions, and performance-driven solutions 
          that make products not only beautiful but also functional.
        </p>

        {/* Social & Skills */}
        <div className="flex flex-wrap gap-16 mt-12">
          {/* Social Media */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold">FIND ME ON</h3>
            <div className="flex mt-4 gap-4">
              <div className="bg-black shadow-lg rounded-full h-12 w-12 flex items-center justify-center hover:-translate-y-1 duration-300 hover:bg-gradient-to-br from-blue-800 to-blue-300 hover:text-black">
                <SlSocialFacebook className="text-2xl" />
              </div>
              <div className="bg-black shadow-lg rounded-full h-12 w-12 flex items-center justify-center hover:-translate-y-1 duration-300 hover:bg-gradient-to-br from-blue-800 to-blue-300 hover:text-black">
                <CiTwitter className="text-2xl" />
              </div>
              <div className="bg-black shadow-lg rounded-full h-12 w-12 flex items-center justify-center hover:-translate-y-1 duration-300 hover:bg-gradient-to-br from-blue-800 to-blue-300 hover:text-black">
                <CiYoutube className="text-2xl" />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold">BEST SKILLS</h3>
            <div className="flex mt-4 gap-4">
              <div className="bg-black shadow-lg rounded-full h-12 w-12 flex items-center justify-center hover:bg-gradient-to-br from-blue-900 to-blue-300 hover:-translate-y-1 duration-300">
                <PiFigmaLogoFill className="text-2xl" />
              </div>
              <div className="bg-black shadow-lg rounded-full h-12 w-12 flex items-center justify-center hover:bg-gradient-to-br from-blue-900 to-blue-300 hover:-translate-y-1 duration-300">
                <FaGithubAlt className="text-2xl" />
              </div>
              <div className="bg-black shadow-lg rounded-full h-12 w-12 flex items-center justify-center hover:bg-gradient-to-br from-blue-900 to-blue-300 hover:-translate-y-1 duration-300">
                <TbBrandVscode className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="myphoto.png" 
          alt="Profile" 
          className="rounded-2xl shadow-2xl w-[280px] sm:w-[400px] lg:w-[500px] xl:w-[550px] object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Home;
