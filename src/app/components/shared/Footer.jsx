// components/Footer.jsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react'; // Using Lucide-React for clean icons
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-white text-2xl font-bold">BrandName</h2>
                        <p className="text-sm leading-6">
                            Building modern digital experiences with speed and precision. Follow our journey on social media.
                        </p>
                        <div className="flex space-x-5">
                            <Link href="#" className="hover:text-indigo-500 transition-colors"><FaFacebookF /></Link>
                            <Link href="#" className="hover:text-indigo-500 transition-colors"><FaSquareXTwitter /></Link>
                            <Link href="#" className="hover:text-indigo-500 transition-colors"><GrInstagram /></Link>
                            <Link href="#" className="hover:text-indigo-500 transition-colors"><BsLinkedin /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-indigo-500" />
                                <span>support@brandname.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-indigo-500" />
                                <span>+1 (555) 000-0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-indigo-500" />
                                <span>123 Tech Lane, Silicon Valley, CA</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Call to Action */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                        <p className="text-xs mb-4">Subscribe to get the latest news and updates.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-800 border-none rounded px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium py-2 rounded transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
                    <p>© {new Date().getFullYear()} BrandName Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
