/**
 * Фукнция рисует на холсте, переданном в ключе ctx параметра settings,
 * звезду с заданными в параметрами:
 * spikes - количество лучей у звезды
 * outerRadius - радиус окружности, на которой располагаются вершины лучей звезды
 * innerRadius - радиус окружности, на которой располагаются внутренних углов звезды
 * fillColor - цвет заливки звезды
 */
export const drawStar = (settings) => {
    const {ctx, cx, cy, spikes, outerRadius, innerRadius, fillColor} = settings;

    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius)

    for ( let i = 0; i < spikes; i++ ) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;

        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;

        ctx.lineTo(x, y)
        rot += step
    }

    ctx.lineTo(cx, cy - outerRadius)
    ctx.closePath();

    ctx.fillStyle=fillColor;
    ctx.fill();
}