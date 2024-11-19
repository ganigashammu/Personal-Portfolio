import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/profile.png';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-40 my-20 gap-20">
      <div className="relative flex items-center justify-center">
        {/* Theme Pattern */}
        <img
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '10px',
            zIndex: -1,
          }}
          src={theme_pattern}
          alt=""
        />
        {/* About Me Text */}
        <h1
          className="text-6xl font-bold text-white relative"
          style={{ zIndex: 1 }}
        >
          About Me
        </h1>
      </div>

      {/* Other Content */}
      <div className="flex gap-20">
        <div>
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-5 text-2xl font-normal text-white">
            <p>
              Hi, I'm Samanth Kumar, an aspiring front-end developer with a
              passion for crafting beautiful and user-friendly web applications.
            </p>
            <p>
              I'm focused on enhancing my expertise in front-end development,
              and I'm always looking for opportunities to work on exciting
              projects that challenge me and help me grow.
            </p>
          </div>

          {/* Academic Qualifications */}
          <div className="flex flex-col gap-5 text-xl font-normal text-white">
            <h2 className="text-3xl font-semibold">Academic Qualifications</h2>
            <p>
              <strong>Master of Computer Applications</strong><br />
              2022 - 2024<br />
              St Joseph Engineering College, Mangalore<br />
              CGPA: 8.20/10
            </p>
            <p>
              <strong>Bachelor of Computer Applications</strong><br />
              2018 - 2021<br />
              SDM College of Business Management, Mangalore<br />
              Percentage: 79.12%
            </p>
          </div>

          {/* Work Experience */}
          <div className="flex flex-col gap-5 text-xl font-normal text-white">
            <h2 className="text-3xl font-semibold">Work Experience</h2>
            <p>
              <strong>Tech Support Engineer</strong><br />
              NewFold Digital at Diya Systems | Maryhill, Mangalore<br />
              Feb - June 2022
            </p>
            <ul className="list-disc list-inside">
              <li>Identified and resolved server and website issues through troubleshooting techniques.</li>
              <li>Utilized web hosting platforms such as cPanel, and learned domain name registration and management.</li>
              <li>Skilled in setting up email accounts, configuring forwarding, and troubleshooting hosting platforms.</li>
              <li>Provided technical assistance via Ticket/Email, Live Chat, and coordinated escalations internally.</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-semibold text-white">Skills</h2>
            <div className="flex flex-col gap-5">
              <div className="flex gap-20 items-center transform transition duration-300 hover:scale-[1.05]">
                <p className="min-w-[9.375rem] text-xl font-medium text-white">HTML & CSS</p>
                <hr
                  className="outline-none border-none w-[3.125rem] h-[0.5rem] rounded-[3.125rem] bg-gradient-to-r from-custom-orange to-custom-purple"
                  style={{ width: '50%' }}
                />
              </div>
              <div className="flex gap-20 items-center transform transition duration-300 hover:scale-[1.05]">
                <p className="min-w-[9.375rem] text-xl font-medium text-white">JavaScript</p>
                <hr
                  className="outline-none border-none w-[3.125rem] h-[0.5rem] rounded-[3.125rem] bg-gradient-to-r from-custom-orange to-custom-purple"
                  style={{ width: '60%' }}
                />
              </div>
              <div className="flex gap-20 items-center transform transition duration-300 hover:scale-[1.05]">
                <p className="min-w-[9.375rem] text-xl font-medium text-white">React JS</p>
                <hr
                  className="outline-none border-none w-[3.125rem] h-[0.5rem] rounded-[3.125rem] bg-gradient-to-r from-custom-orange to-custom-purple"
                  style={{ width: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
