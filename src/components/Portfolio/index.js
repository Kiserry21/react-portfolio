import React, { useState } from "react";
import WikiView from "../../assets/images/wikiview.png";
import WDIWD from "../../assets/images/WDIWD.png";
import FreeWeight from "../../assets/images/freeweight.png";
import QuizChallenge from "../../assets/images/quiz.png";
import TechBlog from "../../assets/images/tech-blog.png";
import WeatherDashboard from "../../assets/images/wdashboard.png";
import WorkDay from "../../assets/images/work-day.png";
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/reset.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="center">
        <h1 className="page-header">My Projects</h1>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
        <div class="col">
          <div class="card">
            <img src={WikiView} alt="wikiview" class="card-img-top" />
            <div class="card-body">
              <h2 className="center">WikiView</h2>
              <h6>
                PotterWiki is an exceptional fan-made website that offers
                in-depth information about characters from the Harry Potter
                universe. It has impressive features such as an audio track,
                user interactivity, API integration, localStorage, Bulma
                formatting, and cross-page functionality. Overall, it's a
                well-designed site with seamless browsing experience.
              </h6>

              <h5>
                HTML, CSS, JavaScript, GitHub, API.
              </h5>

              <a
                href="https://github.com/Golemancer-Ctrl/project-wikiview"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://golemancer-ctrl.github.io/project-wikiview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={WDIWD} alt="WDIWD" class="card-img-top" />
            <div class="card-body">
              <h2 className="center">WDIWD</h2>
              <p className="center">what do I want to do?</p>

              <h6>
                Discover, connect, and create lasting friendships with this
                innovative app that not only suggests fun activities but also
                facilitates social interactions. It's the ultimate tool for
                enriching your social life and making the most of your free
                time.
              </h6>

              <h5>
                NodeJs, Handlebars, CSS, Vanilla Javascript,
                Sequelize, MySQL, Express, bCrypt, GitHub, Heroku.
              </h5>
              <a
                href="https://github.com/cbinder705/TBD-WDIWD-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://wdiwd-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={FreeWeight} alt="freeWeight" class="card-img-top" />
            <div class="card-body">
              <h2 className="center">Free Weight</h2>
              <h6>
                This innovative app help users to track, plan, and achieve their
                fitness goals. Personalized options, easy-to-use features, and
                workout history tracking make it the ultimate tool for taking
                user fitness journey to the next level.
              </h6>

              <h5>
               React, Node.js, Express.js, JavaScript, MongoDB,
                Mongoose, Apollo Server, GraphQL, GitHub, Heroku.
              </h5>
              <a
                href="https://github.com/Arspeke8/project-3-moon-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://moon-client.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Website</button>
              </a>
            </div>
          </div>
        </div>

        <div className="center">
        </div>
        <div class="col">
          <div class="card">
            <img src={QuizChallenge} alt="quizChallenge" class="card-img-top" />
            <div class="card-body">
              <h2 className="center">Quiz Challenge</h2>
              <h6>
                This quiz challenge app is perfect tool for a fun and
                educational challenge. Users can test their knowledge and
                compete with friends in a variety of categories, answering
                questions with a time limit. Incorrect answers result in a
                penalty of both score and time by ten seconds.
              </h6>

              <h5>HTML, CSS, JavaScript, GitHub.</h5>

              <a
                href="https://github.com/Kiserry21/QuizApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://kiserry21.github.io/QuizApp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Website</button>
              </a>
            </div>
          </div>
        </div>

       

        <div class="col">
          <div class="card">
            <img
              src={WeatherDashboard}
              alt="weatherDashboard"
              class="card-img-top"
            />
            <div class="card-body">
              <h2 className="center">Weather Dashboard</h2>
              <h6>
                Get up-to-date weather information for your city with this sleek
                and user-friendly dashboard app. Check the forecast for up to 5
                days, including temperature, wind, and humidity, to plan your
                activities with ease. Stay informed and stay prepared with this
                accurate and reliable weather app.
              </h6>

              <h5>HTML, CSS, JavaScript, API, GitHub.</h5>
              <a
                href="https://github.com/Kiserry21/WeatherDashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://kiserry21.github.io/WeatherDashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={WorkDay} alt="workday" class="card-img-top" />
            <div class="card-body">
              <h2 className="center">Work Day</h2>
              <h6>
                Stay organized with this Work Day Scheduler app, featuring a
                user-friendly interface and color-coding to indicate past,
                present, and future events. Save text inputs for each hour of
                the day, with dynamically updated HTML and CSS for an enhanced
                user experience. Keep on top of your daily tasks with ease using
                this innovative app.
              </h6>

              <h5>HTML, CSS, JavaScript, jQuery, GitHub.</h5>
              <a
                href="https://github.com/Kiserry21/DayScheduler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://kiserry21.github.io/DayScheduler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={TechBlog} alt="techBlog" class="card-img-top" />
            <div class="card-body">
              <h2 className="center">Tech Blog</h2>

              <h6>
                This tech blog app designed to help developers stay connected
                with the tech community and share their knowledge. With the
                ability to post articles, write comments, and update their posts
                with ease, developers can engage with other like-minded
                individuals and stay up-to-date on the latest trends in
                technology. 
              </h6>

              <h5>
               Handlebars,CSS, MySQL, Sequelize, JavaScript,
                GitHub, Heroku.
              </h5>
              <a
                href="https://github.com/Kiserry21/Tech-Blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://obscure-eyrie-55285.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
