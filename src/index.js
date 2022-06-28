import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import soccerImg from "./soccer.png";

studio.initialize();

const project = getProject("Bouncing Ball");

const sheet = project.sheet("Bouncing Ball Scene");

const ball = sheet.object("ball", { x: 0, y: 0 });

const ballImg = document.createElement("img");

ballImg.src = soccerImg;
ballImg.style.position = "absolute";
ballImg.width = 100;
ballImg.height = 100;
ballImg.style.left = "400px";
ballImg.style.top = "100px";

document.body.append(ballImg);

ball.onValuesChange((vals) => {
  ballImg.style.transform = `translate(${vals.x}px, ${vals.y}px)`;
});

ballImg.addEventListener("click", () => {
  sheet.sequence.play({ range: [0, 2], iterationCount: 10 });
});
