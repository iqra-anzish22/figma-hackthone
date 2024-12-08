const Footer = () => {
    return (
      <>
        <footer className="bg-white">
          {/* Main Footer Section */}
          <div className="flex justify-around gap-[50px] p-8 border-t-2 ">
            {/* Brand Section */}
            <div className="w-[16rem]">
              <h2 className="font-bold text-2xl mb-[40px]">Funiro.</h2>
              <p className="leading-6 font-normal mb-[40px] text-gray-700">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
  
            {/* Navbar Section */}
            <div>
              <h4 className="text-[#9F9F9F] text-[16px] font-medium mb-[40px]">
                Links
              </h4>
              <ul className="space-y-2">
                <li className="text-[#000000] text-[16px] font-medium">Home</li>
                <li className="text-[#000000] text-[16px] font-medium">Shop</li>
                <li className="text-[#000000] text-[16px] font-medium">About</li>
                <li className="text-[#000000] text-[16px] font-medium">Contact</li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h4 className="text-[#9F9F9F] text-[16px] font-medium mb-[40px]">
                Help
              </h4>
              <ul className="space-y-2">
                <li className="hover:text-gray-700 cursor-pointer">
                  Payment Option
                </li>
                <li className="hover:text-gray-700 cursor-pointer">Returns</li>
                <li className="hover:text-gray-700 cursor-pointer">
                  Privacy Policies
                </li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="text-[#9F9F9F] text-[16px] font-medium mb-[40px]">
                Newsletter
              </h4>
              <div className="flex items-center justify-between w-[20rem] gap-4 border-b-2 pb-2 border-gray-300">
                {/* Enter Email Address */}
                <div className="text-[#9F9F9F] text-[14px] font-normal">
                  Enter your Email Address
                </div>
  
                {/* Subscribe Button */}
                <div className="font-bold text-black px-4 py-2 cursor-pointer">
                  SUBSCRIBE
                </div>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="relative mt-8">
            <hr className="mx-auto w-[70%] border-gray-300" />
            <p className="absolute left-[13%] font-normal py-4 text-[16px] text-[#000000]">
              2023 Funiro. All rights reserved.
            </p>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  