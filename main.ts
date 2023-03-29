//% color="#E7A1E1" icon="\uf247"
namespace triangle_filler {
    //%block="x1 = $x1 y1 = $y1 x2 = $x2 y2 = $y2 x3 = $x3 y3 = $y3 color = $color4 outline? = $outline"
    //% color4.shadow="colorNumberPicker"
    export function draw_triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color4: number, outline: boolean) {
        let lowestx = 0
        let highestx = 0
        let lowesty = 0
        let highesty = 0
        let triangle_draw_x = 0
        let triangle_draw_y = 0
        let b = 0
        let c = 0
        let d = 0
        if (x1 < x2 && x1 < x3) {
            lowestx = x1
        }
        if (x2 < x1 && x2 < x3) {
            lowestx = x2
        }
        if (x3 < x1 && x3 < x2) {
            lowestx = x3
        }
        if (x1 > x2 && x1 > x3) {
            highestx = x1
        }
        if (x2 > x1 && x2 > x3) {
            highestx = x2
        }
        if (x3 > x1 && x3 > x2) {
            highestx = x3
        }
        if (y1 < y2 && y1 < y3) {
            lowesty = y1
        }
        if (y2 < y1 && y2 < y3) {
            lowesty = y2
        }
        if (y3 < y2 && y3 < y1) {
            lowesty = y3
        }
        if (y1 > y2 && y1 > y3) {
            highesty = y1
        }
        if (y2 > y1 && y2 > y3) {
            highesty = y2
        }
        if (y3 > y1 && y3 > y2) {
            highesty = y3
        }
        scene.backgroundImage().drawLine(x1, y1, x2, y2, color4)
        scene.backgroundImage().drawLine(x2, y2, x3, y3, color4)
        scene.backgroundImage().drawLine(x3, y3, x1, y1, color4)
        if (outline) {
            scene.backgroundImage().drawLine(lowestx, lowesty, lowestx, highesty, 7)
            scene.backgroundImage().drawLine(lowestx, lowesty, highestx, lowesty, 7)
            scene.backgroundImage().drawLine(highestx, highesty, highestx, lowesty, 7)
            scene.backgroundImage().drawLine(highestx, highesty, lowestx, highesty, 7)
        }
        triangle_draw_x = lowestx
        triangle_draw_y = lowesty
        for (let index = 0; index < highesty - lowesty; index++) {
            for (let index2 = 0; index2 < highestx - lowestx; index2++) {
                b = ((y2 - y3) * (triangle_draw_x - x3) + (x3 - x2) * (triangle_draw_y - y3)) / ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3))
                c = ((y3 - y1) * (triangle_draw_x - x3) + (x1 - x3) * (triangle_draw_y - y3)) / ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3))
                d = 1 - b - c
                if (0 <= b && b <= 1 && 0 <= c && c <= 1 && 0 <= d && d <= 1) {
                    scene.backgroundImage().setPixel(triangle_draw_x, triangle_draw_y, color4)
                    scene.backgroundImage().drawLine(triangle_draw_x, triangle_draw_y, triangle_draw_x, triangle_draw_y, color4)
                }
                triangle_draw_x += 1
            }
            triangle_draw_x = lowestx
            triangle_draw_y += 1
        }
    }
}
