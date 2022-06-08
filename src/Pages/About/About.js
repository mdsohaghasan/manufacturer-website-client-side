import React from "react";
import "./About.css";
import img from "../../../src/img/about/sohag.png";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <div class="mx-16 mx-auto ">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img} class="max-w-sm rounded-lg" />
          <div class="intro text-left">
            <h3 className="text-2xl font-bold text-primary">Hi, I'm</h3>
            <h1 className="text-6xl font-bold py-2">Sohag Hasan</h1>
            <h3 className="text-2xl font-bold text-primary ">
              Full Stack Web developer
            </h3>
            <p className="py-2">
              Hello! I'm Sohag Hasan a passionate software engineer. I develop
              web applications, mobile applications, and desktop applications.
              My core skill is based on JavaScript and I love to do most of the
              things using JavaScript. I love to make the web more open to the
              world. I have graduated with a bachelor's degree in Computer
              Science Engineering from Chandigarh University at Punjab, India in
              2020. I am available for any kind of job opportunity that suits my
              interests.
            </p>
            <button class="btn btn-primary">Contact Me</button>
          </div>
        </div>
      </div>

      {/* prograssbar */}

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-20">
        <div>
          <h2 className="text-3xl font-bold text-primary text-left pl-3">
            Skills
          </h2>

          <div class="bg-primary py-3 px-1 m-2">
            <p class="text-left text-white ml-1 py-1">JAVASCRIPT</p>
            <progress class="progress progress-success w-100 h-5" value="70" max="100"></progress>
          </div>

          <div class="bg-primary py-3 px-1 m-2">
            <p class="text-left text-white ml-1 py-1">REACT</p>
            <progress class="progress progress-success w-100 h-5" value="80" max="100"></progress>
          </div>

          <div class="bg-primary py-3 px-1 m-2">
            <p class="text-left text-white ml-1 py-1">EXPRESS JS</p>
            <progress class="progress progress-success w-100 h-5" value="50" max="100"></progress>

          </div>
        </div>
        <div class="mt-6">
          <div class="contact-box bg-primary text-white w-75 p-5 m-5">
            <h3>Education</h3>
            <h5>Masters In Islamic Studies</h5>
            <p>al haiatul ulya lil-jamiatil qawmia bangladesh</p>
          </div>

          <div class="stats shadow">

            <div class="stat place-items-center">
              <div class="stat-title">Downloads</div>
              <div class="stat-value">31K</div>
              <div class="stat-desc">From January 1st to February 1st</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">Users</div>
              <div class="stat-value text-secondary">4,200</div>
              <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div class="stat place-items-center">
              <div class="stat-title">New Registers</div>
              <div class="stat-value">1,200</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>

          </div>
        </div>
      </div>

      <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 m-20">
        <div class="col-4">
          <div class="border border-primary border-3 rounded m-3 p-3">
            <i class="bi bi-apple text-primary"></i>
            <p>React Js</p>
          </div>
        </div>
        <div class="col-4">
          <div class="border border-primary border-3 rounded m-3 p-3">
            <i class="bi bi-apple text-primary"></i>
            <p>Express Js</p>
          </div>
        </div>

        <div class="col-4">
          <div class="border border-primary border-3 rounded m-3 p-3">
            <i class="bi bi-apple text-primary"></i>
            <p>Node Js</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-20">
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-primary my-3">Join My Social Media</h3>
          <div class="avatar">
            <div class="w-16 mask mask-squircle">
              <Link to="/"><img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png" /></Link>
            </div>
          </div>
          <div class="avatar">
            <div class="w-16 mask mask-squircle mx-3">
              <Link to="/"><img src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png" /></Link>
            </div>
          </div>
          <div class="avatar">
            <div class="w-16 mask mask-squircle">
              <Link to="/"><img src="https://cdn.icon-icons.com/icons2/2037/PNG/512/in_linked_linkedin_media_social_icon_124259.png" /></Link>
            </div>
          </div>
        </div>

        <div class="contact-box bg-primary text-white w-75 p-5 m-5">
          <h3>Email</h3>
          <h5>mailsohaghasan@gmail.com</h5>
          <address>Address</address>
          <p>Mohammadpur,Dhaka1207</p>
          <p>+8801938388084</p>
        </div>
      </div>




    </div>
  );
};

export default About;
