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
var NumberCollection = /** @class */ (function (_super) {
    __extends(NumberCollection, _super);
    function NumberCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(NumberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumberCollection.prototype.swap = function (i, j) {
        var temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    };
    NumberCollection.prototype.compare = function (i, j) {
        return this.data[i] > this.data[j];
    };
    return NumberCollection;
}(Sorter_1.Sorter));
exports.NumberCollection = NumberCollection;
