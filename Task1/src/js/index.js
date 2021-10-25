import { drawStar } from "./utils";
import { STARS_CONFIG } from "./starsConfig";

const sourceCanvas = document.getElementById('source');
const sourceCtx = sourceCanvas.getContext('2d');
const sourceCanvasWidth = sourceCanvas.offsetWidth;
const sourceCanvasHeight = sourceCanvas.offsetHeight;

const targetCanvas = document.getElementById('target');


STARS_CONFIG.map( star => {
    const starConfig = {
        ctx: sourceCtx,
        cx: sourceCanvasWidth * star.cxFactor,
        cy: sourceCanvasHeight * star.cyFactor,
        ...star
    }
    drawStar(starConfig);
})

function pick(event) {
    const x = event.layerX;
    const y = event.layerY;
    const pixel = sourceCtx.getImageData(x, y, 1, 1);
    const data = pixel.data;


    return `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
}


sourceCanvas.addEventListener('click', function(event) {
    const sourceColor = pick( event );

    targetCanvas.style.backgroundColor = sourceColor;
});


