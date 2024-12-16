"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
var Dice;
(function (Dice) {
    function strategy(_score, _active, _potential) {
        return Math.random() < 0.3;
    }
    Dice.strategy = strategy;
})(Dice || (exports.Dice = Dice = {}));
//# sourceMappingURL=dicestrategy.js.map