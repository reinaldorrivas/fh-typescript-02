export const functionType = (): void => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = (): string => "¡El mundo está salvado!";

  let someFunction: (a: number, b: number) => number;
  someFunction = addNumbers;
  console.log(someFunction(1, 2));

  let anotherFunction: (name: string) => string;
  anotherFunction = greet;
  console.log(anotherFunction("René"));

  let differentFunction: () => string;
  differentFunction = saveTheWorld;
  console.log(differentFunction());

  console.log("--- END FUNCTION TYPE FILE ---");
};
