const ExamplesData = {
  flappyBird: {
    files: [
      {
        filename: "main.js",
        fileID: 1,
        content: `// Include the pipe and bird files
include("./js/pipe.js");
include("./js/bird.js");

function setup() {
  // Create the canvas
  canvas = createCanvas(400, 600);
  canvas.background(100, 100, 255);

  // Create the global gravity vector, a downwards pointed vector
  gravity = createVector(0, 0.6);

  // The global score variable
  score = 0;

  // Create the bird and the pipe
  pipe = new Pipe();
  bird = new Bird();
}

function update() {
  // Call the bird and pipe update methods
  pipe.update();
  bird.update();

  // Display the player score on the canvas
  canvas.fill(255);
  canvas.textAlign(CENTER);
  canvas.text(score, width / 2, 70, 70, "Roboto");
}

// Restart function is called if the bird collides with the pipe
// It resets the player score, and creates a new instance of the bird and the pipe
function restart() {
  score = 0;
  bird = new Bird();
  pipe = new Pipe();
}

// The keyDown function is called by PanvasJS every time a key is pressed
// If the key is the space button, make the bird jump
function keyDown(keyCode) {
  if (keyCode === KEY.SPACE) bird.jump();
}`,
      },
      {
        filename: "bird.js",
        fileID: 2,
        content: `// Main Bird class
class Bird {
  constructor() {
    this.position = createVector(50, height / 2);
    this.radius = 20;

    // Create a new vector for acceleration and velocity of the bird
    this.acceleration = createVector();
    this.velocity = createVector();
  }

  // The draw method draws the bird as a circle on the canvas
  draw() {
    canvas.noStroke();
    canvas.fill(255, 255, 0);
    canvas.circle(this.position.x, this.position.y, this.radius);
  }

  // The jump method sets the bird velocity to a powerful upwards vector to make it jump
  jump() {
    this.velocity.set(0, -10);
  }

  // The collide method detects if the bird has collided with the provided pipe
  // Only one pipe can be on the screen at one given time, so we are detecting the collision with the global pipe variable
  collide() {
    if (
      this.position.x + this.radius >= pipe.x &&
      this.position.x - this.radius <= pipe.x + pipe.width
    ) {
      if (
        this.position.y - this.radius <= pipe.y ||
        this.position.y + this.radius >= pipe.y + pipe.height
      ) {
        // Call the global restart function if the bird has collided with a pipe
        restart();
      }
    }
  }

  // The update method handles the bird physics calculations
  update() {
    // Add the global gravity vector to the bird acceleration
    this.acceleration.add(gravity);
    // Add the acceleration to the bird velocity
    this.velocity.add(this.acceleration);
    // Add the velocity to the bird position to make it move/fall
    this.position.add(this.velocity);

    // Reset the acceleration each frame
    this.acceleration.multiply(0);

    // Call the collide method to check for bird collision
    this.collide();

    // Constrain the bird within the canvas height
    if (this.position.y + this.radius >= height)
      this.position.y = height - this.radius;
    else if (this.position.y - this.radius <= 0) this.position.y = this.radius;

    // Check if the bird has successfully passed the pipe and increase the score
    if (this.position.x - this.radius === pipe.x + pipe.width) score++;

    // Call the draw method to display the bird on the canvas
    this.draw();
  }
}`,
      },
      {
        filename: "pipe.js",
        fileID: 3,
        content: `// Main Pipe class
class Pipe {
  constructor() {
    this.x = width;
    // The y position of the pipe is randomly selected between 30% and 70& of the canvas
    this.y = random(height * 0.3, height * 0.7);

    this.width = 80; // The width of the pipe
    this.height = 150; // The height of the pipe is the space between the top and the bottom pipe

    // The speed at which the pipe moves on the screen
    this.speed = 3;
  }

  // The draw method draws the pipe on the canvas
  draw() {
    canvas.noStroke();
    canvas.fill(100, 255, 100);
    // Draw the top of the pipe at the pipe position
    canvas.rect(this.x, 0, this.width, this.y);
    // Draw the bottom of the pipe 150 pixels below the top pipe
    canvas.rect(
      this.x,
      this.y + this.height,
      this.width,
      height - this.y - this.height
    );
  }

  // The update method handles the pipe movement
  update() {
    // Move the pipe across the screen
    this.x -= this.speed;

    // If the pipe has moved off screen, reset its position to the start and give it a new height
    if (this.x < -this.width) {
      this.x = width;
      this.y = random(height * 0.3, height * 0.7);
    }

    // Call the draw method to display the pipe on the canvas
    this.draw();
  }
}`,
      },
    ],
  },

  pong: {
    files: [
      {
        filename: "main.js",
        fileID: 1,
        content: `// Include the paddle and ball files
include("./js/paddle.js");
include("./js/ball.js");

function setup() {
  // Create the canvas
  canvas = createCanvas(800, 500);
  canvas.background(0);

  // Create the player 1 and player 2 paddles
  player1 = new Paddle(true);
  player2 = new Paddle(false);

  // Create the ball
  ball = new Ball();
}

function update() {
  // Update the players and ball
  player1.update();
  player2.update();

  ball.update();

  // Check if the ball is colliding with the paddles
  ball.checkCollision(player1);
  ball.checkCollision(player2);
}

// The keyDown function is called by PanvasJS every time a key is pressed
function keyDown() {
  switch (keyCode) {
    case KEY.W: // If the key is W, move the player 1 up
      player1.move(UP);
      break;
    case KEY.S: // If the key is S, move the player 1 down
      player1.move(DOWN);
      break;
    case KEY.O: // If the key is O, move the player 2 up
      player2.move(UP);
      break;
    case KEY.L: // If the key is L, move the player 2 down
      player2.move(DOWN);
      break;
  }
}

// The keyUp function is called by PanvasJS every time a key is released
function keyUp() {
  switch (keyCode) {
    case KEY.W: // If the key is W, stop player 1 movement
      player1.move(null);
      break;
    case KEY.S: // If the key is S, stop player 1 movement
      player1.move(null);
      break;
    case KEY.O: // If the key is O, stop player 2 movement
      player2.move(null);
      break;
    case KEY.L: // If the key is L, stop player 2 movement
      player2.move(null);
      break;
  }
}`,
      },
      {
        filename: "paddle.js",
        fileID: 2,
        content: `// Main Paddle class
class Paddle {
  constructor(player) {
    // Determine if the paddle is player 1 or player 2
    this.isPlayer1 = player;

    // Define paddle size
    this.height = 100;
    this.width = 20;

    // Define paddle position based on whether it is player 1 or player 2
    this.x = this.isPlayer1 ? this.width : width - this.width * 2;
    this.y = (height - this.height) / 2;

    // Variables for handling movement
    this.moveDir = null;
    this.moveSpeed = 5;

    // Score per player
    this.score = 0;
  }

  // Draw the paddle
  draw() {
    canvas.noStroke();
    canvas.fill(255);
    canvas.rect(this.x, this.y, this.width, this.height);

    // Display player score
    canvas.fill(255, 150);
    canvas.textAlign(CENTER);
    // Draw the score at the right place depending on whether this is player 1 or player 2
    if (this.isPlayer1) canvas.text(this.score, 30, 50, 50, "Arial");
    else canvas.text(this.score, width - 40, 50, 50, "Arial");
  }

  // Handle switching player movement
  move(dir) {
    this.moveDir = dir;
  }

  // Update method handles player movement
  update() {
    // Move the player up or down based on the moveDir variable
    if (this.moveDir === UP) this.y -= this.moveSpeed;
    else if (this.moveDir === DOWN) this.y += this.moveSpeed;

    // Lock the player position if he is on the edges
    if (this.y < 0) this.y = 1;
    else if (this.y + this.height > height) this.y = height - this.height - 1;

    this.draw();
  }
}`,
      },
      {
        filename: "ball.js",
        fileID: 3,
        content: `// Main Bass class
class Ball {
  constructor() {
    this.radius = 10;

    this.set();
  }

  // The set method sets the initial ball position, speed, and direction
  set() {
    this.x = width / 2;
    this.y = height / 2;

    this.speedX = random() > 0.5 ? randInt(-10, -5) : randInt(5, 10);
    this.speedY = random() > 0.5 ? randInt(-10, -5) : randInt(5, 10);
  }

  // The checkCollision method checks if the ball is colliding with the provided paddle
  checkCollision(paddle) {
    // We are using basic circle-rectangle collision detection by checking the edges that the ball is close to
    if (this.y + this.radius >= paddle.y && this.y - this.radius <= paddle.y + paddle.height) {
      if (paddle.isPlayer1 && this.x - this.radius <= paddle.x + paddle.width && this.speedX < 0) this.speedX *= -1;
      else if (!paddle.isPlayer1 && this.x + this.radius >= paddle.x && this.speedX > 0) this.speedX *= -1;
    }
  }

  // The draw method draws the ball on the canvas
  draw() {
    canvas.noStroke();
    canvas.fill(255);
    canvas.circle(this.x, this.y, this.radius);
  }

  // The update method handles all of the ball physics
  update() {
    // Handle ball movement based on Y speed and X speed
    this.x += this.speedX;
    this.y += this.speedY;

    // Handle ball bouncing off the top and bottom edge
    if (this.y - this.radius <= 0 || this.y + this.radius >= height) this.speedY *= -1;

    if (this.x - this.radius <= 0) {
      // If the ball X is below 0, it has hit the left edge and player 2 scores
      player2.score++;
      this.set();
    } else if (this.x + this.radius >= width) {
      // If the ball X is above canvas width, it has hit the right edge and player 1 scores
      player1.score++;
      this.set();
    }

    this.draw();
  }
}`,
      },
    ],
  },

  raycasting: {
    files: [
      {
        filename: "main.js",
        fileID: 1,
        content: `// Include the wall, ray, and camera files
include("./js/wall.js");
include("./js/ray.js");
include("./js/camera.js");

function setup() {
  // The canvas here is split into two halves, so we are defining the width and height of each half
  // Then later when creating the canvas we make it twice the width of the scene
  sceneW = 400;
  sceneH = 400;

  // Create the canvas
  canvas = createCanvas(sceneW * 2, sceneH);
  canvas.background(0);

  // The scene array will hold all of the distances between the camera and the walls it is looking at
  scene = [];

  // The walls array will hold all the walls that exist on the map
  walls = [];
  // Create walls for the scene edges
  walls.push(new Wall(0, 0, sceneW, 0, false));
  walls.push(new Wall(sceneW, 0, sceneW, sceneH, false));
  walls.push(new Wall(sceneW, sceneH, 0, sceneH, false));
  walls.push(new Wall(0, sceneH, 0, 0, false));

  // Create a few walls on the map
  // The positions of these walls do not matter, they can be placed anywhere on the map
  walls.push(new Wall(300, 100, 300, 300, true));
  walls.push(new Wall(100, 100, 200, 200, true));
  walls.push(new Wall(100, 300, 200, 300, true));

  // Create an instance of the camera
  camera = new Camera(0, 200);
}

function update() {
  // Update all of the walls in the walls array
  for (let wall of walls) wall.update();

  // Call the camera update method
  camera.update();

  canvas.stroke(255);
  canvas.lineWidth(1);
  // Draw a line in the middle of the canvas to visually split it into two halves
  canvas.line(sceneW, 0, sceneW, sceneH);

  // Iterate through all of the items in the scene and render them on screen as vertical lines
  for (let i = 0; i < scene.length; i++) {
    // Get the projection plane for the information from the rays
    let distProjectionPlane = abs(sceneW / 2 / tan(camera.fov / 2));

    // Calculate the global positions of the lines to make the code easier to understand
    let w = sceneW / scene.length;
    let h = (sceneH / scene[i]) * distProjectionPlane;
    let start = (sceneH - h) / 2;

    // The brightness of the line drawn is proportional to its distance from the camera
    // Look at each line as a slice of the wall that the camera is looking at
    // The further the "line" is from the camera, the further the wall is as well
    // Walls that are further away will appear darker, since the rays are illuminating the walls
    let brightness = map(scene[i], 0, sceneW, 200, 0);

    // Draw a line at the position of each scene item
    // All of these lines together will create a 3D effect that will make the full image look like a 3D render of the scene
    canvas.noStroke();
    canvas.fill(brightness);
    canvas.rect(i * w + sceneW, start, w + 1, h);
  }
}

// The keyDown function is called by PanvasJS every time a key is pressed
function keyDown() {
  switch (keyCode) {
    case KEY.A: // If the key is A, move the camera forward
      camera.rotate(RIGHT);
      break;
    case KEY.D: // If the key is D, rotate the camera to the right
      camera.rotate(LEFT);
      break;
    case KEY.W: // If the key is A, rotate the camera to the left
      camera.move(UP);
      break;
    case KEY.S: // If the key is S, move the camera backward
      camera.move(DOWN);
      break;
  }
}

// The keyUp function is called by PanvasJS every time a key is released
function keyUp() {
  if (keyCode === KEY.W || keyCode === KEY.S) camera.move(null); // If the key is W or S, stop camera movement
  else if (keyCode === KEY.A || keyCode === KEY.D) camera.rotate(null); // If the key is A or D, stop camera rotation
}`,
      },
      {
        filename: "wall.js",
        fileID: 2,
        content: `// Main Wall class
class Wall {
  constructor(x1, y1, x2, y2, shouldDraw) {
    // The wall is defined by two vectors and their positions
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);

    this.shouldDraw = shouldDraw;
  }

  // The draw method draws a line between the start and end point of the wall
  draw() {
    if (this.shouldDraw) {
      canvas.stroke(255);
      canvas.lineWidth(2);
      canvas.line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }

  // The update method calls the draw method; this is unnecessary here, but is kept for the sake of consistency with the standard used throughout PanvasJS
  update() {
    this.draw();
  }
}`,
      },
      {
        filename: "ray.js",
        fileID: 3,
        content: `// Main Ray class
class Ray {
  constructor(x, y, a) {
    // The ray is defined by a position and direction
    this.pos = createVector(x, y);
    this.dir = Vector.fromAngle(a);
    // The offset is the angle of the ray relative to the source
    this.offset = a;
  }

  // The setDirection method allows us to change the direction of the ray on the go
  setDirection(x, y) {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }

  // The setAngle method allows us to change the change the angle offset of the ray
  setAngle(a) {
    this.dir = Vector.fromAngle(a);
    this.offset = a;
  }

  // The cast method casts the ray based on the position and direction
  cast(wall) {
    // Get all the paramaters for the wall position
    let x1 = wall.a.x;
    let y1 = wall.a.y;
    let x2 = wall.b.x;
    let y2 = wall.b.y;

    // Get all the paramaters for the ray start and end points
    let x3 = this.pos.x;
    let y3 = this.pos.y;
    let x4 = this.pos.x + this.dir.x;
    let y4 = this.pos.y + this.dir.y;

    // Calculate if the ray is colliding with the wall
    // More information on the method used can be found on the Ray Casting page on Wikipedia
    // https://en.wikipedia.org/wiki/Ray_casting
    let d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (d === 0) return false;

    let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / d;

    let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / d;

    if (t > 0 && t < 1 && u > 0) {
      let p = createVector();
      p.x = x1 + t * (x2 - x1);
      p.y = y1 + t * (y2 - y1);
      return p;
    } else return false;
  }

  // The draw method draws the ray as a line on the canvas
  draw() {
    canvas.stroke(255);
    canvas.lineWidth(1);
  }

  // The update method calls the draw method; this is unnecessary here, but is kept for the sake of consistency with the standard used throughout PanvasJS
  update() {
    this.draw();
  }
}`,
      },
      {
        filename: "camera.js",
        fileID: 4,
        content: `// Main camera class
class Camera {
  constructor(x, y) {
    // The camera is defined by its position, field of view, and angle offset
    this.pos = createVector(x, y);

    this.fov = 60;
    this.angle = 0;

    // The rotateStep and rotateDir variables control the rotation of the camera by the user
    this.rotateStep = 3;
    this.rotateDir = null;

    // The moveStep and moveDir variables control the movement of the camera by the user
    this.moveStep = 3;
    this.moveDir = null;

    // The division value is the angle offset between two adjacent rays cast by the camera
    this.division = 5;

    // The rays array holds all of the rays cast by the camera
    this.rays = [];

    // Creat all of the rays that originate from teh camera with above defined parameters
    for (let i = -(this.fov / 2); i < this.fov / 2; i += 1 / this.division)
      this.rays.push(new Ray(this.pos.x, this.pos.y, i));
  }

  // The draw method draws all of the rays from the camera to display them on the canvas
  draw() {
    for (let i = 0; i < this.rays.length; i++) {
      let ray = this.rays[i];
      ray.pos = this.pos;
      ray.setAngle(this.angle + i / this.division - this.fov / 2);
      ray.update();
    }
  }

  // The rotate method allows the user to rotate the camera
  rotate(dir) {
    this.rotateDir = dir;
  }

  // The move method allows the user to move the camera
  move(dir) {
    this.moveDir = dir;
  }

  // The setPosition method allows the user to change the position of the camera to the given point on the canvas
  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  // The look method casts all the rays and finds if they are colliding with any of the walls
  look() {
    for (let i = 0; i < this.rays.length; i++) {
      let ray = this.rays[i];
      // The record variable holds the shortest distance between the ray start and a wall it collides with
      let record = Infinity;
      // The closestPoint variable holds the closest intersection point of the ray and a wall
      // The ray acts like a ray of light. If it is colliding with a wall, it does not go through it, so we only need the closest one
      let closestPoint = null;

      // Iterate through the walls and check them against each ray for collision
      for (let wall of walls) {
        // Check if the ray collides with the wall
        let p = ray.cast(wall);
        if (p) {
          // Get the distance between the ray and the wall
          let dist = distance(ray.pos.x, ray.pos.y, p.x, p.y);

          dist *= abs(cos(ray.dir.angle(true) - this.angle));

          // If the distance is shorter than the current record, make it the new one
          if (dist <= record) {
            record = dist;
            closestPoint = p;
          }
        }
      }

      // Set the scene item at the index i to the record distance
      scene[i] = record;

      // If a closest point exists, it means the ray is colliding with a wall
      if (closestPoint) {
        // Draw the line
        canvas.line(this.pos.x, this.pos.y, closestPoint.x, closestPoint.y);
      }
    }
  }

  // The update method handles the rotation and movement of the camera, and calls the look and draw methods
  update() {
    this.look();

    // Handle camera rotation
    if (this.rotateDir === RIGHT) this.angle -= this.rotateStep;
    else if (this.rotateDir === LEFT) this.angle += this.rotateStep;

    // Handle camera movement
    if (this.moveDir === UP) {
      // The movement is calculated by the camera angle
      // If the player presses a movement key, the camera moves forward in relation to its angle offset
      // The movement is thus calculated by getting the vector of the future position of the camera and adding it to the camera position vector
      let newA = Vector.fromAngle(this.angle);
      newA.multiply(this.moveStep);
      this.pos.add(newA);
    } else if (this.moveDir === DOWN) {
      let newA = Vector.fromAngle(this.angle);
      newA.multiply(this.moveStep);
      this.pos.subtract(newA);
    } else if (this.moveDir === RIGHT) {
      let newA = Vector.fromAngle(this.angle - 90);
      newA.multiply(this.moveStep);
      this.pos.add(newA);
    } else if (this.moveDir === LEFT) {
      let newA = Vector.fromAngle(this.angle + 90);
      newA.multiply(this.moveStep);
      this.pos.add(newA);
    }

    // Constrain teh camera within the canvas bounds
    // The canvas is in this case split into two halves, so the custom sceneW and sceneH variables are used
    if (this.pos.x <= 0) this.pos.x = 1;
    else if (this.pos.x >= sceneW) this.pos.x = sceneW - 1;
    if (this.pos.y <= 0) this.pos.y = 1;
    else if (this.pos.y >= sceneH) this.pos.y = sceneH - 1;

    this.draw();
  }
}`,
      },
    ],
  },
};

export default ExamplesData;
