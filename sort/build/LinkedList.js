"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LLNode = /** @class */ (function () {
    function LLNode(value) {
        this.value = value;
        this.next = null;
    }
    return LLNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (value) {
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
    Object.defineProperty(LinkedList.prototype, "length", {
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
    LinkedList.prototype.at = function (index) {
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
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
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
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
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
        if (leftValue !== null && rightValue !== null) {
            for (var i = 0; i <= maxIndex && node !== null; i++) {
                if (i == leftIndex) {
                    node.value = rightValue;
                }
                if (i === rightIndex) {
                    node.value = leftValue;
                }
            }
        }
    };
    LinkedList.prototype.print = function () {
        var values = [];
        var node = this.head;
        while (node !== null) {
            values.push(node.value);
            node = node.next;
        }
        console.log(values);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
