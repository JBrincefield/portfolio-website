import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Sidebar() {
    return (
        <aside className="w-full sm:w-80 bg-[#23272a] text-white rounded-2xl p-6 shadow-lg flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative rounded-full overflow-hidden w-24 h-24 border-2 border-green-400">
                <img
                    src="/picture.jfif"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name and Title */}
            <h2 className="text-xl font-bold mt-4">Jacob Brincefield</h2>
            <span className="text-sm mt-1 bg-gray-800 px-3 py-1 rounded">Full-Stack Developer & CS Student @ Neumont</span>

            {/* Divider */}
            <hr className="my-6 w-full border-gray-600" />

            {/* Contact Info */}
            <div className="space-y-4 text-sm w-full">
                <div className="flex items-center gap-2">
                    <MdEmail className="text-yellow-400" />
                    <span className="truncate">JacobBrincefield2005@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdPhone className="text-yellow-400" />
                    <span>+1 (253) 302-2669</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdLocationOn className="text-yellow-400" />
                    <span>Salt Lake City, UT, United States</span>
                </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center gap-4">
                <a href="https://github.com/JBrincefield" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                    <FaGithub className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/jacob-brincefield-866587362/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                    <FaLinkedinIn className="h-5 w-5" />
                </a>
            </div>
        </aside>
    );
}
