import Particle from './classes/Particle.js';
import {random} from './functions/lib.js';
import Vector from './classes/Vector.js';


{
    const $canvas = document.querySelector(`.canvas`);
    const ctx = $canvas.getContext(`2d`);

    const balls = [];
    const mouse = new Vector($canvas.width / 2, $canvas.height / 2);

    console.log("Log check part 2")
    

    const handleMouseMove = event => {
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
    };

    const handleResizeWindow = () => {
        $canvas.height = window.innerHeight
        $canvas.width = window.innerWidth
    }

    const drawBalls = () => {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        balls.forEach(ball => ball.draw());
        requestAnimationFrame(drawBalls);
    }

    const init = () => {

        handleResizeWindow()

        for (let i = 0; i < 1000; i++) {
            balls.push(new Particle($canvas, mouse, random(0, $canvas.width), random(0, $canvas.height), `white`));
        }

        drawBalls();
        $canvas.addEventListener(`mousemove`, handleMouseMove);

        window.addEventListener('resize', function() {
            console.log(window.width)
            
        })
    };

    init();
}