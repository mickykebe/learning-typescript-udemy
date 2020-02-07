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
var LLNode = /** @class */ (function () {
    function LLNode(value) {
        this.value = value;
        this.next = null;
    }
    return LLNode;
}());
var LinkedListCollection = /** @class */ (function (_super) {
    __extends(LinkedListCollection, _super);
    function LinkedListCollection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedListCollection.prototype.add = function (value) {
        var newNode = new LLNode(value);
        if (this.head === null) {
            this.head = newNode;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    };
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            var count = 0;
            var node = this.head;
            while (node !== null) {
                count++;
                node = node.next;
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    LinkedListCollection.prototype.at = function (index) {
        var counter = 0;
        var node = this.head;
        while (counter < index) {
            if (node === null) {
                break;
            }
            node = node.next;
            counter++;
        }
        return node;
    };
    LinkedListCollection.prototype.compare = function (leftIndex, rightIndex) {
        var maxIndex = leftIndex > rightIndex ? leftIndex : rightIndex;
        var counter = 0;
        var leftHand = this.head;
        var rightHand = this.head;
        var node = this.head;
        while (counter <= maxIndex && node !== null) {
            if (counter === leftIndex) {
                leftHand = node;
            }
            if (counter === rightIndex) {
                rightHand = node;
            }
            node = node.next;
            counter++;
        }
        if (leftHand && rightHand) {
            return leftHand.value > rightHand.value;
        }
        return false;
    };
    LinkedListCollection.prototype.swap = function (leftIndex, rightIndex) {
        var maxIndex = leftIndex > rightIndex ? leftIndex : rightIndex;
        var leftValue = null;
        var rightValue = null;
        var node = this.head;
        for (var i = 0; i <= maxIndex && node !== null; i++) {
            if (i === leftIndex) {
                leftValue = node.value;
            }
            if (i === rightIndex) {
                rightValue = node.value;
            }
            node = node.next;
        }
        if (leftValue === null || rightValue === null) {
            return;
        }
        node = this.head;
        for (var i = 0; i <= maxIndex && node !== null; i++) {
            if (i == leftIndex) {
                node.value = rightValue;
            }
            if (i === rightIndex) {
                node.value = leftValue;
            }
            node = node.next;
        }
    };
    LinkedListCollection.prototype.print = function () {
        var values = [];
        var node = this.head;
        while (node !== null) {
            values.push(node.value);
            node = node.next;
        }
        console.log(values);
    };
    return LinkedListCollection;
}(Sorter_1.Sorter));
exports.LinkedListCollection = LinkedListCollection;
