import JSON from "./Items.json";
import { Item } from "./Item";
import changePageTitle from "./changePageTitle";

const Docs = () => {
  changePageTitle("PanvasJS | Documentation");
  const Variables = JSON.variables;
  const Functions = JSON.functions;
  const Canvas = JSON.canvas;
  const Vector = JSON.vector;
  const Point = JSON.point;
  const Color = JSON.color;
  const Image = JSON.image;
  const Sound = JSON.sound;
  return (
    <>
      <div className="body" id="docs">
        <div className="page-title">Documentation</div>

        <div className="page-description">
          This page contains information on all of the functionality that PanvasJS provides to your project.
        </div>

        <div className="section" id="variables">
          <div className="section-title">global variables</div>
          {Variables.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>

        <div className="section" id="functions">
          <div className="section-title">global functions</div>

          {Functions.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>

        <div className="section" id="canvas">
          <div className="section-title">canvas class</div>

          <div className="section-description">
            The Canvas class is the main class of the framework. When an instance is created, it creates a canvas
            element and appends it to the document body. An instance can be created by calling the createCanvas
            function.
            <br />
            Example: let canvas = createCanvas(400, 400);
          </div>

          <div className="section-subtitle">attributes</div>

          {Canvas.attributes.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
          <div className="section-subtitle">methods</div>

          {Canvas.methods.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>

        <div className="section" id="vector">
          <div className="section-title">vector class</div>

          <div className="section-subtitle">attributes</div>

          {Vector.attributes.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
          <div className="section-subtitle">methods</div>

          {Vector.methods.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>

        <div className="section" id="point">
          <div className="section-title">point class</div>

          <div className="section-subtitle">attributes</div>

          {Point.attributes.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
          <div className="section-subtitle">methods</div>

          {Point.methods.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>

        <div className="section" id="color">
          <div className="section-title">color class</div>

          <div className="section-subtitle">attributes</div>

          {Color.attributes.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
          <div className="section-subtitle">methods</div>

          {Color.methods.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>

        <div className="section" id="image">
          <div className="section-title">image class</div>

          <div className="section-description">
            Takes a path to the image as an argument. The path must be relative to the HTML file.
          </div>

          <div className="section-subtitle">attributes</div>

          {Image.attributes.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>

        <div className="section" id="sound">
          <div className="section-title">sound class</div>

          <div className="section-description">
            Takes a path to the sound file as an argument. The path must be relative to the HTML file.
          </div>

          <div className="section-subtitle">attributes</div>

          {Sound.attributes.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
          <div className="section-subtitle">methods</div>
          {Sound.methods.map((item) => {
            return <Item name={item.name} body={item.body} key={Math.round(Math.random() * 999999)} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Docs;
