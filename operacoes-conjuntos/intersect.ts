import LinkedList from "./lista-encadeada.ts";

const setA = new LinkedList<number>();
const setB = new LinkedList<number>();

setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);

setB.add(4);
setB.add(5);
setB.add(6);
setB.add(7);
setB.add(8);

setA.show();
setA.intersection(setB);
setA.show();
