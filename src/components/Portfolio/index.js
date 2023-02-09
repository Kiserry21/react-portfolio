import React from "react";
import QuizChallenge from "../../assets/images/quiz.png";
import TechBlog from "../../assets/images/tech-blog.png";
import FreeWeight from "../../assets/images/freeweight.png";
import WeatherDashboard from "../../assets/images/wdashboard.png";
import WDIWD from "../../assets/images/WDIWD.png";
import WikiView from "../../assets/images/wikiview.png";
import WorkDay from "../../assets/images/work-day.png";
import { Button, DatePicker, Space, version } from 'antd';
import "antd/dist/reset.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
        <div class="col">
          <div class="card">
            <img src={QuizChallenge} alt="quizChallenge" class="card-img-top" />
            <div class="card-body">
              <p className="center">Quiz Challenge</p>
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
            <img src={FreeWeight} alt="freeWeight" class="card-img-top" />
            <div class="card-body">
              <p className="center">Free Weight</p>
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

        <div class="col">
          <div class="card">
            <img src={TechBlog} alt="techBlog" class="card-img-top" />
            <div class="card-body">
              <p className="center">Tech Blog</p>
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

        <div class="col">
          <div class="card">
            <img
              src={WeatherDashboard}
              alt="weatherDashboard"
              class="card-img-top"
            />
            <div class="card-body">
              <p className="center">Weather Dashboard</p>
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
            <img src={WDIWD} alt="WDIWD" class="card-img-top" />
            <div class="card-body">
              <p className="center">WDIWD</p>
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
            <img src={WikiView} alt="wikiview" class="card-img-top" />
            <div class="card-body">
              <p className="center">WikiView</p>
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
            <img src={WorkDay} alt="workday" class="card-img-top" />
            <div class="card-body">
              <p className="center">Work Day</p>
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
      </div>
    </section>
  );
}

export default Portfolio;
