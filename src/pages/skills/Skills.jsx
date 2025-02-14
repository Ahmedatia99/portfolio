import React from "react";
import { RiTailwindCssFill } from "react-icons/ri";
import IconRender from "./../../components/atoms/skill/IconRender";
import data from "./data.json";
export default function Skills() {
  return (
    <main className=" over h-screen  flex justify-center items-center">
      <section className="container mx-auto bg-supcolor p-5 max-sm:pt-2 rounded-xl lg:w-2/4 md:w-full max-sm:w-full ">
        <div className="flex justify-center items-center pb-3 max-sm:pb-1">
          <h1 className="text-4xl max-sm:text-2xl font-mono text-primary font-bold">
            Skills
          </h1>
        </div>

        <div className="flex items-center justify-center bg-gray-100">
          <section
            className="p-6 max-sm:p-3 rounded-lg shadow-lg shadow-gray-300 bg-white w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="py-4 grid grid-cols-2 max-sm:grid-cols-1 gap-x-5 gap-y-3">
              {data.map((item) => (
                <div
                  className="flex items-center py-3 max-sm:py-1"
                  key={item.id}
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-anchor-placement="top-bottom"
                >
                  <span className="w-10 h-10 shrink-0 mr-4  rounded-full bg-blue-50 flex items-center justify-center">
                    <IconRender iconName={item.icon} />
                  </span>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center">
                      <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center">
                        {item.name}
                      </h4>
                      <span className="px-3 py-2 max-sm:py-1 max-sm:px-2 rounded-lg bg-green-100 text-green-700 text-xs">
                        {item.percent}/10
                      </span>
                    </div>
                    <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                      <span
                        className="h-full bg-primary w-full block rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
