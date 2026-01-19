import React from 'react'



      
    
const Footer = () => {
    return (
      <footer className="bg-white text-black py-6 w-full">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-black mt-2">Your dream job is just a click away.</p>
          </div>
  
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg  font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/about" className="text-black hover:text-blue-500">About Us</a></li>
              <li><a href="/jobs" className="text-black hover:text-blue-500">Browse Jobs</a></li>
              <li><a href="/contact" className="text-black hover:text-blue-500">Contact</a></li>
              <li><a href="/faq" className="text-black hover:text-blue-500">FAQ</a></li>
              <li><a href="/privacy-policy" className="text-black hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-black hover:text-blue-500">Terms of Service</a></li>
              <li><a href="/blog" className="text-black hover:text-blue-500">Blog</a></li>
              <li><a href="/support" className="text-black hover:text-blue-500">Support</a></li>
            </ul>
          </div>
  
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-black hover:text-blue-500">Facebook</a>
              <a href="#" className="text-black hover:text-blue-500">Twitter</a>
              <a href="#" className="text-black hover:text-blue-500">LinkedIn</a>
              <a href="#" className="text-black hover:text-blue-500">Instagram</a>
              <a href="#" className="text-black hover:text-blue-500">YouTube</a>
            </div>
          </div>
        </div>
 
        {/* Copyright */}
        <div className="w-full text-center text-gray-300 text-sm mt-6 border-t border-gray-500 pt-4">
          © {new Date().getFullYear()} Job Hunt. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  