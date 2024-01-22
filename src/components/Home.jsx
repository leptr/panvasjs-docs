import { Link } from "react-router-dom";
import changePageTitle from "./changePageTitle";

const Home = () => {
  changePageTitle("PanvasJS | Home");
  return (
    <>
      <div className="body" id="home">
        <div className="page-title">Home</div>

        <div className="page-description">Welcome to PanvasJS!</div>

        <div className="section">
          <p>PanvasJS is a JavaScript framework for creative coding utilizing the HTML canvas element.</p>
          <p>
            It is a barebones game engine made for people who like the challenge of making 2D video games practically
            from scratch with just the basic tools for graphics display and mathematical calculations.
          </p>
          <p>
            It poses a challenge of coding all the logic yourself, including the physics simulations, drawing more
            complicated shapes, complex math, and much more. It can also be used for simpler things than video games,
            such as animations and simulations.
          </p>
        </div>

        <div className="section">
          <div className="section-title">Getting started</div>
          <p>
            In order to get started with the PanvasJS framework, you can check out the{" "}
            <Link to="/get-started" className="inline-link">
              Get Started
            </Link>{" "}
            page and start your first ever PanvasJS project.
          </p>
          <p>
            To learn more about everything that PanvasJS has to offer, visit the{" "}
            <Link to="/docs" className="inline-link">
              Documentation
            </Link>{" "}
            page.
          </p>
          <p>
            You can also check out various code examples utilizing PanvasJS over on the{" "}
            <Link to="/examples" className="inline-link">
              Examples
            </Link>{" "}
            page. There, you will find various examples of video games, simulations, and illustrations that showcase the
            capabilities of PanvasJS.
          </p>
        </div>

        <div className="section">
          <div className="section-title">contributing</div>
          <p>
            Visit the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/leptr/panvasjs"
              className="inline-link"
            >
              GitHub repository
            </a>{" "}
            if you wish to contribute to the development of PanvasJS.
          </p>
          <p>There, you will also find all of the examples and templates for creating your first PanvasJS project!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
