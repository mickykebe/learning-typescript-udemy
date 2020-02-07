import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  characters: string[] = [];
  constructor(data: string) {
    super();
    this.characters = data.split("");
  }

  get data(): string {
    return this.characters.join("");
  }

  get length(): number {
    return this.characters.length;
  }

  swap(i: number, j: number): void {
    const temp = this.characters[i];
    this.characters[i] = this.characters[j];
    this.characters[j] = temp;
  }

  compare(i: number, j: number): boolean {
    return this.characters[i].toLowerCase() > this.characters[j].toLowerCase();
  }
}
