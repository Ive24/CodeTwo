namespace Asteroid_Project {

    export let asteroidPaths: Path2D[];
    export let ufoPath: Path2D;

    export const shapeAsteroids: number[][][] = [ // [][][] ein dreidimensionales Array
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [69, 93], [30, 79], [19, 87], [2, 63], [15, 43] //immer x, y 
        ],
        [
            [39, 1], [53, 28], [78, 15], [91, 41], [76, 59], [78, 82], [44, 94], [15, 83], [1, 55], [14, 14]
        ],
        [
            [39, 0], [57, 26], [58, 7], [86, 31], [88, 70], [53, 58], [54, 96], [26, 91], [28, 76], [2, 56], [15, 19]
        ],
        [
            [37, 3], [70, 14], [62, 34], [83, 31], [78, 76], [55, 96], [20, 84], [7, 67], [5, 27], [20, 15], [39, 39]
        ]
    ];

    export function createPaths(): void {
        asteroidPaths = createAsteroidPaths(shapeAsteroids);
        ufoPath = createUfoPath();
    }

    function createAsteroidPaths(_shapes: number[][][]): Path2D[] { //Funktion liest die Koordinaten aus dem Array und erstellt die 2D Pfade, diese werden dann in ein neues Array "Path2D[]" verpackt.
        const paths: Path2D[] = [];
        for (const type of _shapes) {
            const path: Path2D = new Path2D();
            let first: boolean = true;
            //console.group(type);
            for (const coordinates of type) {
                //console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            //console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }

    function createUfoPath(): Path2D {
        const path: Path2D = new Path2D();
        path.moveTo(20, 13);
    }


}