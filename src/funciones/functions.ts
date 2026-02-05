function returnName(hero: string): string {
  return hero;
}

export const functionsTs = (): void => {
  const hero: string = "Flash";

  console.log("returnName:", returnName(hero));

  const activateBatiSignal = (): string => "Bati signal activated!";

  console.log("activateBatiSignal:", activateBatiSignal());

  console.log("Tipado de una función:", typeof activateBatiSignal);

  const heroName = returnName(hero);

  console.log("heroName:", heroName);

  console.log("--- END FUNCTIONS FILE ---");
};
