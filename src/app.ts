import { getScreams } from './service';

interface ScreamDrawInfo{

    id: number,
    x: number,
    y: number,
    fontSize: number,
    angle: number

}

// Generate random scream infos
const screamDrawInfos: ScreamDrawInfo[] = []
for (let i in [...Array(10).keys()]){

    const id = Number(i);
    let x = 0;
    let y = 0.1;
    let fontSize = (Math.random() * (0.05 - 0.01) + 0.01)
    let angle = 0;

    // Special cases
    switch(id) {
        case 0:
            y = 0.51;
            fontSize = (Math.random() * (0.1 - 0.07) + 0.05)
            break;
    }

    screamDrawInfos.push({
        id,
        x,
        y,
        fontSize,
        angle
    });
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d')!;
window.addEventListener('resize', resizeCanvas, false);
        
function resizeCanvas() {

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    context.scale(canvas.width, canvas.height);
                
    draw(); 
}
        
function draw() {

    getScreams().then(screams => {
        screams.forEach((value, i) => {
            drawScream(value, screamDrawInfos[i])
        })
    });
}

function drawScream(text: string, info: ScreamDrawInfo) {
    context.font = info.fontSize + 'px arial';
    context.fillText(text, info.x, info.y);

    // TODO - calculate offset somehow based on the size of the txt so scream draw info can remain pure
}

resizeCanvas();