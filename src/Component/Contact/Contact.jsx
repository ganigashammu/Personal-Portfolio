import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7925819f-fa77-422e-843f-418e940f2cea");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message);
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20 my-20 mx-[42.5]">
        <div className="relative">
          <h1
            className="font-semibold text-7xl py-0 px-8"
            style={{ zIndex: 1 }}
          >
            Get in Touch
          </h1>
          <img
            className="absolute bottom-0 right-0"
            style={{
              position: "absolute",
              bottom: "-10px",
              right: "10px",
              zIndex: -1,
            }}
            src={theme_pattern}
            alt=""
          />
        </div>
        <div className="flex gap-10">
          {/* Left side - "Let's Talk" */}
          <div className="flex-1 flex-col gap-6">
            <h1 className="mb-4 font-extrabold text-5xl bg-gradient-to-r from-custom-orange to-custom-purple text-transparent bg-clip-text">
              Lets Talk
            </h1>
            <p className=" max-w-lg text-lg leading-relaxed text-white mb-6">
              I am enthusiastic about crafting intuitive and engaging user
              interfaces and am always looking for opportunities to grow and
              learn in a collaborative environment. As a fresher, I am seeking a
              role where I can contribute to innovative projects, bring value to
              the team, and continue advancing my skills in front-end
              development.
            </p>
            <div className="flex flex-col space-y-7 text-xl">
              <div className="flex items-center gap-5">
                <img src={mail_icon} alt="Mail Icon" className="w-6 h-6" />
                <p>shamanthganiga123@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={linkedin} alt="LinkedIn Icon" className="w-6 h-6" />
                <p>www.linkedin.com/in/samanth-kumar-a0919123a</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <form onSubmit= {onSubmit} className="flex flex-col items-start gap-9 justify-end">
            <label className="text-xl font-bold" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name" 
              type="text"
              className="w-[700px] h-[78px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] font-Outfit text-lg border-0"
              placeholder="Enter Your Name"
            />

            <label className="text-xl font-bold" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              name="email" 
              className="w-[700px] h-[78px] pl-5 rounded bg-[#32323c] text-[#A0A0A0] font-Outfit text-lg border-0"
              type="email"
              placeholder="Enter Your Email"
            />

            <label className="text-xl font-bold" htmlFor="message">
              Write Your Message Here
            </label>
            <textarea
              id="message"
              name="message"
              className="w-[650px] border-none p-[25px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px] font-Outfit"
              placeholder="Enter Your Message"
              rows="8"
            ></textarea>

            <button
              className="border-none text-white rounded-full bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.28%)] text-2xl py-6 px-20 mb-12 cursor-pointer transition-all duration-300 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
