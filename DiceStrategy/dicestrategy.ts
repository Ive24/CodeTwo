export namespace Dice {
    export function strategy(_score: number[], _active: number, _potential: number): boolean {
        return Math.random() < 0.3;
    }
}