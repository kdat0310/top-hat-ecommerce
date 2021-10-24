export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden cursor-default">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Chúng tôi là ĐN^3S
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Ấp ủ mang đến những dòng nón thời trang hấp dẫn, đầy đủ thể loại
              với giá dễ tiếp cận nhưng đảm bảo chất lượng, đẳng cấp, tinh tế.
              Hứa hẹn sẽ gây bão trong thời gian tới với những mẫu mũ đặc sắc.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://images.pexels.com/photos/2385775/pexels-photo-2385775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/3490366/pexels-photo-3490366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/3849806/pexels-photo-3849806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/9937868/pexels-photo-9937868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/6750185/pexels-photo-6750185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://images.pexels.com/photos/6729622/pexels-photo-6729622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#products-category"
                className="inline-block text-center bg-gradient-to-r from-yellow-500 to-yellow-400 border border-transparent rounded-md py-3 px-8 font-medium text-white"
              >
                Khám phá ngay!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
