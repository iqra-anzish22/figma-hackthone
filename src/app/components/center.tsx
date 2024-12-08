import React from "react";
import Image from "next/image";

const Center = () => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#333333] mb-2">
            Browse The Range
          </h1>
          <p className="text-[20px] font-normal text-[#666666] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[0px]">
            {/* Feature One */}
            <div className="w-[581px] h-[456.88px] mr-[80px] rounded-lg p-4 mx-auto flex flex-col items-center">
              <Image
                width={400}
                height={300}
                src="/images/div1.png"
                alt="Feature 1"
                className="rounded-md mb-4"
              />
              <h2 className="text-[24px] font-semibold text-[#333333] text-center">
                Dining
              </h2>
            </div>

            {/* Feature Two */}
            <div className="w-[581px] h-[456.88px] rounded-lg p-4 mx-auto flex flex-col items-center">
              <Image
                width={400}
                height={300}
                src="/images/div2.png"
                alt="Feature 1"
                className="rounded-md mb-4"
              />
              <h2 className="text-[24px] font-semibold text-[#333333] text-center">
                Living
              </h2>
            </div>

            {/* Feature Three */}
            <div className="w-[581px] h-[456.88px] mr-[20px] rounded-lg p-4 mx-auto flex flex-col items-center">
              <Image
                width={400}
                height={300}
                src="/images/div3.png"
                alt="Feature 1"
                className="rounded-md mb-4"
              />
              <h2 className="text-[24px] font-semibold text-[#333333] text-center">
                Bedroom
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Center;
