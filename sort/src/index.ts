import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedListCollection } from "./LinkedListCollection";

const numberCollection = new NumberCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection("asXdezf");
characterCollection.sort();
console.log(characterCollection.data);

const llCollection = new LinkedListCollection();
llCollection.add(10);
llCollection.add(3);
llCollection.add(-5);
llCollection.add(0);
llCollection.sort();
llCollection.print();
