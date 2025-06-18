
const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Never Leave The Playground- Videos
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Discover engaging video programs designed to boost your brain health, improve your metabolism, 
          and teach you exciting new skills. From active play to juggling and beyond!
        </p>
        <div className="bg-red-100 border border-red-300 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
          {/* <p className="text-red-800 font-bold text-xl mb-2">TODAY ONLY!</p> */}
          <p className="text-red-700 text-lg mb-2">$1 for the Play Video</p>
          <p className="text-red-600 font-semibold">Coupon Code: QRZ81RA0FZ</p>
          <p className="text-red-700 text-lg mb-2 mt-3">The 5 in One $1 Today</p>
          <p className="text-red-600 font-semibold">Coupon Code: T5ZZJPL1KQ</p>
          <p className="text-red-800 font-bold text-lg mt-3">HAPPY PLAYING!</p>
        </div>
        <div className="flex justify-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Instant Download
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            HD Quality MP4
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Expert Instruction
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
