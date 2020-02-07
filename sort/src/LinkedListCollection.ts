import { Sorter } from "./Sorter";

class LLNode {
  next: LLNode | null = null;

  constructor(public value: number) {}
}

export class LinkedListCollection extends Sorter {
  head: LLNode | null = null;

  add(value: number): void {
    const newNode = new LLNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  get length(): number {
    let count = 0;
    let node = this.head;
    while (node !== null) {
      count++;
      node = node.next;
    }
    return count;
  }

  at(index: number): LLNode | null {
    let counter = 0;
    let node = this.head;
    while (counter < index) {
      if (node === null) {
        break;
      }
      node = node.next;
      counter++;
    }
    return node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const maxIndex = leftIndex > rightIndex ? leftIndex : rightIndex;
    let counter = 0;
    let leftHand = this.head;
    let rightHand = this.head;
    let node = this.head;
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
  }

  swap(leftIndex: number, rightIndex: number): void {
    const maxIndex = leftIndex > rightIndex ? leftIndex : rightIndex;
    let leftValue: number | null = null;
    let rightValue: number | null = null;
    let node = this.head;
    for (let i = 0; i <= maxIndex && node !== null; i++) {
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
    for (let i = 0; i <= maxIndex && node !== null; i++) {
      if (i == leftIndex) {
        node.value = rightValue;
      }
      if (i === rightIndex) {
        node.value = leftValue;
      }
      node = node.next;
    }
  }

  print(): void {
    let values: number[] = [];
    let node = this.head;
    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }
    console.log(values);
  }
}
