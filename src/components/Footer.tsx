
const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-8">
            <a 
              href="https://neverleavetheplayground.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="https://speaker.neverleavetheplayground.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Learn About Speaking Events
            </a>
          </div>
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Never Leave The Playground. All rights reserved.</p>
            <p className="text-sm mt-2">Let's Start Playing!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
