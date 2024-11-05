namespace Test {

    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    const crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

    crc2.fillStyle = "black";
    crc2.fillRect(0, 0, 800, 800);

    console.log("drawing")
    crc2.fillStyle = "white";
    const path: Path2D = new Path2D;
    crc2.rotate(45);
    crc2.translate(0, 400);
    crc2.arc(0, 0, 50, 0, 360);
}