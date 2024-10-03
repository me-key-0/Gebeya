import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <Link to="/about" className="hover:underline">About Us</Link>
                    <Link to="/blog" className="hover:underline">Services</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link >
                </div>
            </div>
        </footer>
    );
};

export default Footer;