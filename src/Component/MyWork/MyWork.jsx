import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data"; // Your updated data

const MyWork = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5rem] m-20 mx-[10.625rem]">
      <div className="relative">
        <h1
          className="text-6xl px-8 py-0 font-semibold text-white relative"
          style={{ zIndex: 1 }}
        >
          My Latest Work
        </h1>
        <img
          className="absolute bottom-0 right-0"
          src={theme_pattern}
          style={{
            position: "absolute",
            bottom: "-10px",
            right: "10px",
            zIndex: -1,
          }}
          alt=""
        />
      </div>

      {/* Render Projects */}
      <div className="flex flex-col gap-10">
        {mywork_data.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg w-[80%] mx-auto"
          >
            <h2 className="text-3xl text-white">{project.w_name}</h2>
            <div className="grid grid-cols-3 gap-4">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className="box-border w-full h-auto transition duration-300 cursor-pointer hover:scale-250 border-4 border-transparent hover:border-white rounded-lg"
                  src={image}
                  alt={`Project ${project.w_name} Image ${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Profile Button */}
      <a
        href="https://github.com/ganigashammu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 rounded-full border-2 border-white px-14 py-6 text-lg font-medium text-white transition duration-500 hover:gap-9 hover:bg-white hover:text-gray-800"
      >
        Visit My GitHub
      </a>
    </div>
  );
};

export default MyWork;
