import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <div className="container mx-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p>Powered by <a href="https://github.com/Uzumaki-tushar">Tushar Sourav</a></p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-of-services" className="hover:text-gray-400">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  

export default Footer
