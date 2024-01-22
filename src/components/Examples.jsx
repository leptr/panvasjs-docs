import Tabs from "./Tabs";
import ExamplesData from "./ExamplesData";
import changePageTitle from "./changePageTitle";

const Examples = () => {
  changePageTitle("PanvasJS | Examples");
  return (
    <>
      <div className="body" id="examples">
        <div className="page-title">Examples</div>
        <div className="page-description">
          This page contains multiple examples of projects created using the PanvasJS framework.
        </div>

        <div className="section">
          <div className="section-title">Flappy Bird</div>

          <p>
            <a
              className="inline-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Flappy_Bird"
            >
              Flappy Bird
            </a>{" "}
            was a popular video game created in 2012 by Dong Nguyen, a Vietnamese developer under the company .Gears. It
            became extremely popular very quickly and is still infamous to this day. It created a new genre of video
            games dubbed hypercasual games.
          </p>

          <p>
            This example attempts to recreate Flappy Bird using PanvasJS. For the sake of simplicity, only basic shapes
            are used instead of any sprites.
          </p>

          <Tabs data={ExamplesData.flappyBird} />

          <a
            className="live-demo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://panvasjs.leptr.com/examples/flappy-bird"
          >
            Live Demo
          </a>
        </div>

        <div className="section">
          <div className="section-title">Pong</div>
          <p>
            <a
              className="inline-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Pong"
            >
              Pong
            </a>{" "}
            is an infamous table-tennis arcade game developed in 1972 by Atari. It was one of the earliest arcade games
            and had a huge impact on the development of the video game industry that we see today.
          </p>

          <p>
            In this example, we use PanvasJS to recreate this beloved arcade game and make it playable in the browser.
          </p>

          <Tabs data={ExamplesData.pong} />

          <a
            className="live-demo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://panvasjs.leptr.com/examples/pong"
          >
            Live Demo
          </a>
        </div>

        <div className="section">
          <div className="section-title">Raycasting</div>
          <p>
            <a
              className="inline-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/Ray_casting"
            >
              Raycasting
            </a>{" "}
            is a method of rendering 3D objects on a digital 2D plane or the screen. It utilizes ray vectors that are
            cast from the camera object to detect collision with other objects and calculate the distance of said
            objects from the camera. A mathematical formula is then used to render the object in 3D on the screen.
          </p>

          <p>
            In this example we will create a raycasting example in PanvasJS that will allows us to create a 3D
            experience inside our web browser.
          </p>

          <Tabs data={ExamplesData.raycasting} />

          <a
            className="live-demo"
            target="_blank"
            rel="noopener noreferrer"
            href="https://panvasjs.leptr.com/examples/raycasting"
          >
            Live Demo
          </a>
        </div>

        <div className="section">
          <div className="section-title">More Examples</div>

          <p>
            These were some of the available examples that showcase the capabilities of PanvasJS. They hope to show you
            everything that PanvasJS can do and some of the ways to utilize it.
          </p>

          <p>
            To find more examples such as the Snake game, random maze generation, or snowfall simulation, visit the
            <a
              className="inline-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/leptr/panvasjs"
            >
              PanvasJS GitHub repository
            </a>{" "}
            , where you can find the rest of the examples.
          </p>
        </div>
      </div>
    </>
  );
};

export default Examples;
