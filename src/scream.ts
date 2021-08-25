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
    let fontSize = (Math.random() * (.5 - 0.1) + 0.1)
    let angle = 0;

    // Special cases
    switch(id) {
        case 0:
            y = 0.51;
            fontSize = (Math.random() * (.5 - 0.09) + 0.09)
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

export function drawScreams(screams: string[]) {

    

}

function drawScream(scream: string, info: ScreamDrawInfo) {
    // Scale values
    // const yScaled = context.canvas.height * info.y
    // const xScaled = context.canvas.width * info.x
    // const textLengthFontOffset = 1 - text.length
    // const fontScaled = ((Math.abs(yScaled - xScaled) + Math.min(yScaled, xScaled)) * info.fontSize) - text.length
    

    // context.font = fontScaled+ 'px arial';
    // context.fillText(text, xScaled, yScaled);
}