export namespace Dice {
    export function strategy(_score: number[], _active: number, _potential: number): boolean {
        console.log("Dice Flo");
        return Math.random() < 0.3;
    }
}