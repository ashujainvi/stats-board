import React from "react";
import "./CircleCanvas.scss";

let rafTimer;
class CircleCanvas extends React.Component {
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
      const numberOfCircles = windowWidth > 768 ? 120 : 50;
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

    function animateCircles() {
      ctx.clearRect(0, 0, windowWidth, windowHeight);
      circlesArray.forEach((circle) => {
        circle.update();
      });

      rafTimer = requestAnimationFrame(animateCircles);
    }

    initCircles();
    animateCircles();
  }

  componentWillUnmount() {
    // always cancel rAF when done with component
    if (rafTimer) {
      cancelAnimationFrame(rafTimer);
    }
  }

  render() {
    return (
      <canvas
        id="circle-canvas"
        className="circle-canvas"
        ref={this.canvasRef}
      ></canvas>
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
    this.colorRange = data.colorRange || ["#db2e3485", "#101218cb"];
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

export default CircleCanvas;
