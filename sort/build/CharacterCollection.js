"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var CharacterCollection = /** @class */ (function (_super) {
    __extends(CharacterCollection, _super);
    function CharacterCollection(data) {
        var _this = _super.call(this) || this;
        _this.characters = [];
        _this.characters = data.split("");
        return _this;
    }
    Object.defineProperty(CharacterCollection.prototype, "data", {
        get: function () {
            return this.characters.join("");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterCollection.prototype, "length", {
        get: function () {
            return this.characters.length;
        },
        enumerable: true,
        configurable: true
    });
    CharacterCollection.prototype.swap = function (i, j) {
        var temp = this.characters[i];
        this.characters[i] = this.characters[j];
        this.characters[j] = temp;
    };
    CharacterCollection.prototype.compare = function (i, j) {
        return this.characters[i].toLowerCase() > this.characters[j].toLowerCase();
    };
    return CharacterCollection;
}(Sorter_1.Sorter));
exports.CharacterCollection = CharacterCollection;
