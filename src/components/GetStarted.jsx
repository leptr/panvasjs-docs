import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import changePageTitle from "./changePageTitle";

const GetStarted = () => {
  changePageTitle("PanvasJS | Get Started");
  return (
    <>
      <div className="body" id="get-started">
        <div className="page-title">Get Started</div>

        <div className="page-description">This page will walk you through creating your first PanvaJS project.</div>

        <div className="section">
          <div className="section-title">Creating your first PanvasJS project</div>

          <p>
            To create a new PanvasJS project you can clone one of the templates from the examples folder on the GitHub
            repository.
            <br />
            The offline template is self-contained and all the script files come with it, whereas the other template
            uses the online version of the file and uses the latest version by default.
          </p>
          <p>
            You can also implement PanvasJS into your existing project by dowloading the script file or adding it
            through the CDN by adding the following line of code into your head tag:
          </p>

          <SyntaxHighlighter
            language="html"
            style={atomOneDark}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLongLines={true}
            wrapLines={true}
            className="code-snippet"
          >
            {'<script src="https://cdn.jsdelivr.net/gh/leptr/panvasjs/panvas.min.js"></script>'}
          </SyntaxHighlighter>
        </div>

        <div className="section">
          <div className="section-title">setting up the project</div>
          To create your PanvasJS project, you will need to add the following code to your{" "}
          <span className="filename">main.js</span> JavaScript file:
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLongLines={true}
            wrapLines={true}
            className="code-snippet"
          >
            {`function setup() {
  // setup code
}

function update() {
  // update code
}
`}
          </SyntaxHighlighter>
          The setup code is only ran once when the page is initially loaded. The update code, however, is ran every time
          the canvas is refreshed (by default, this happens 60 times per second).
        </div>

        <div className="section">
          <div className="section-title">creating the canvas</div>
          First, we will create the main canvas element by using the <span className="inline-code">
            createCanvas()
          </span>{" "}
          function and set its background color to a dark grey by using the{" "}
          <span className="inline-code">canvas.background()</span> method:
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLongLines={true}
            wrapLines={true}
            className="code-snippet"
          >
            {`function setup() {
  canvas = createCanvas(400, 400);
  canvas.background(50);
}

function update() {
  // update code
}
`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <div className="section-title">drawing a circle!</div>
          Next, let's draw a circle on the screen using the <span className="inline-code">canvas.circle()</span> method.
          We will give it a nice soft red color using the <span className="inline-code">canvas.fill()</span> method:
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLongLines={true}
            wrapLines={true}
            className="code-snippet"
          >
            {`function setup() {
  canvas = createCanvas(400, 400);
  canvas.background(50);
}

function update() {
  canvas.fill(255, 106, 106);
  canvas.circle(200, 200, 50);
}
`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <div className="section-title">make it interesting</div>
          Let's try making the circle follow our cursor! To do this, we can use the{" "}
          <span className="inline-code">mouseX</span> and <span className="inline-code">mouseY</span> global variables:
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLongLines={true}
            wrapLines={true}
            className="code-snippet"
          >
            {`function setup() {
  canvas = createCanvas(400, 400);
  canvas.background(50);
}

function update() {
  canvas.fill(255, 106, 106);
  canvas.circle(mouseX, mouseY, 50);
}
`}
          </SyntaxHighlighter>
        </div>
        <div className="section">
          <div className="section-title">Continuing your journey</div>
          Hopefully this small example has opened your eyes to the possibilities that PanvasJS opens!
        </div>

        <div className="section">
          To learn more about everything that PanvasJS has to offer, visit the{" "}
          <Link to="/docs" className="inline-link">
            Documentation
          </Link>{" "}
          page.
        </div>

        <div className="section">
          You can also check out various code examples utilizing PanvasJS over on the{" "}
          <Link to="/examples" className="inline-link">
            Examples
          </Link>{" "}
          page. There, you will find various examples of video games, simulations, and illustrations that showcase the
          capabilities of PanvasJS.
        </div>
      </div>
    </>
  );
};

export default GetStarted;
