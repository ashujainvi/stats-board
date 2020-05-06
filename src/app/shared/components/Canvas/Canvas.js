import React from "react";
import "./Canvas.scss";

let rafTimer;
class Canvas extends React.Component {
  canvasRef = React.createRef();

  componentDidMount() {
    console.log("mounted");
    const canvas = this.canvasRef.current;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    const ctx = canvas.getContext("2d");

    window.addEventListener("resize", () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      canvas.width = windowWidth;
      canvas.height = windowHeight;
      initCircles();
    });

    // circles for canvas
    let circlesArray = [];
    function initCircles() {
      circlesArray = [];
      const numberOfCircles = windowWidth > 768 ? 420 : 210;
      for (let i = 0; i <= numberOfCircles; i++) {
        // circle values for circle class
        let radius = Math.random() * 3 + 1;
        const data = {
          radius,
          minRadius: radius,
          x: getCoordinateValue("x", radius),
          y: getCoordinateValue("y", radius),
          dx: (Math.random() - 0.5) * 3,
          dy: (Math.random() - 0.5) * 3,
          ctx,
        };
        circlesArray.push(new Circle(data));
      }
    }

    function getCoordinateValue(coordinateType, radius) {
      if (coordinateType === "x") {
        return Math.random() * (windowWidth - radius * 2) + radius;
      } else {
        return Math.random() * (windowHeight - radius * 2) + radius;
      }
    }

    // blob for canvas
    const blobConfig = {
      backgroundColor: "#151a1f",
      ctx,
    };

    const blob = new Blob(blobConfig);

    function animateCircles() {
      ctx.clearRect(0, 0, windowWidth, windowHeight);
      blob.update();
      circlesArray.forEach((circle) => {
        circle.update();
      });
      ctx.restore();

      rafTimer = requestAnimationFrame(animateCircles);
    }

    initCircles();
    animateCircles();
    // animateBlob();
  }

  componentWillUnmount() {
    // always cancel rAF when done with component
    if (rafTimer) {
      cancelAnimationFrame(rafTimer);
    }
  }

  render() {
    return (
      <canvas id="canvas" className="canvas" ref={this.canvasRef}></canvas>
    );
  }
}

class Circle {
  constructor(data) {
    this.x = data.x;
    this.y = data.y;
    this.dx = data.dx;
    this.dy = data.dy;
    this.ctx = data.ctx;
    this.radius = data.radius;
    this.maxRadius = data.maxRadius || 30;
    this.minRadius = data.minRadius || 2;
    this.colorRange = data.colorRange || ["#fd413c", "#1d2326"];
    this.color = this.colorRange[
      Math.floor(Math.random() * this.colorRange.length)
    ];
    this.mouse = {
      x: null,
      y: null,
    };

    if (window.innerWidth > 768) {
      this.addMouseListener();
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    if (this.x + this.radius > windowWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > windowHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (this.mouse.x) {
      if (
        this.mouse.x - this.x < 50 &&
        this.mouse.x - this.x > -50 &&
        this.mouse.y - this.y < 50 &&
        this.mouse.y - this.y > -50
      ) {
        if (this.radius < this.maxRadius) {
          this.radius += 1;
        }
      } else if (this.radius > this.minRadius) {
        this.radius -= 1;
      }
    }

    this.draw();
  }

  // mouse interactivity
  addMouseListener() {
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    });
  }
}

class Blob {
  constructor(config) {
    this.ctx = config.ctx;
    this.backgroundColor = config.backgroundColor;
    this.TWO_PI = Math.PI * 2;
    this.HALF_PI = Math.PI / 2;
    this.wobbleIncrement = 0;
    // use this to change the size of the blob
    this.radius = config.size || 700;
    // think of this as detail level
    // number of conections in the `bezierSkin`
    this.segments = 12;
    this.step = this.HALF_PI / this.segments;
    this.anchors = [];
    this.radii = [];
    this.thetaOff = [];

    const bumpRadius = 80;
    const halfBumpRadius = bumpRadius / 2;

    for (let i = 0; i < this.segments + 2; i++) {
      this.anchors.push(0, 0);
      this.radii.push(Math.random() * bumpRadius - halfBumpRadius);
      this.thetaOff.push(Math.random() * 2 * Math.PI);
    }

    this.theta = 0;
    this.thetaRamp = 0;
    this.thetaRampDest = 12;
    this.rampDamp = 25;
  }

  update() {
    this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
    this.theta += 0.03;

    this.anchors = [0, this.radius];
    for (let i = 0; i <= this.segments + 2; i++) {
      const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
      const rad = this.radius + this.radii[i] * sine;
      const x = rad * Math.sin(this.step * i);
      const y = rad * Math.cos(this.step * i);
      this.anchors.push(x, y);
    }

    this.ctx.save();
    this.ctx.translate(-5, -5);
    this.ctx.scale(1, 1);
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.bezierSkin(this.anchors, false);

    this.ctx.lineTo(0, 0);
    this.ctx.fill();
    this.ctx.clip();
  }

  // array of xy coords, closed boolean
  bezierSkin(bez, closed = true) {
    const avg = this.calcAvgs(bez);
    const leng = bez.length;

    if (closed) {
      this.ctx.moveTo(avg[0], avg[1]);
      for (let i = 2; i < leng; i += 2) {
        let n = i + 1;
        this.ctx.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
      }
      this.ctx.quadraticCurveTo(bez[0], bez[1], avg[0], avg[1]);
    } else {
      this.ctx.moveTo(bez[0], bez[1]);
      this.ctx.lineTo(avg[0], avg[1]);
      for (let i = 2; i < leng - 2; i += 2) {
        let n = i + 1;
        this.ctx.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
      }
      this.ctx.lineTo(bez[leng - 2], bez[leng - 1]);
    }
  }

  // create anchor points by averaging the control points
  calcAvgs(p) {
    const avg = [];
    const leng = p.length;
    let prev;

    for (let i = 2; i < leng; i++) {
      prev = i - 2;
      avg.push((p[prev] + p[i]) / 2);
    }
    // close
    avg.push((p[0] + p[leng - 2]) / 2, (p[1] + p[leng - 1]) / 2);
    return avg;
  }
}

export default Canvas;
