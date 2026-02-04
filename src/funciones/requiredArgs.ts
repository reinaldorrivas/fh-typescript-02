
/*
 * Si necesitara un parámetro con dos o más tipos puedo hacer
 * lo siguiente:
 * const fullName = (firstName: string, lastName: (string | boolean)): string
 */
const fullName = (firstName: string, lastName: string): string =>
  `${firstName} ${lastName}`;

export const requiredArgs = (): void => {
  const name: string = fullName("Tony", "Stark");

  console.log({ name });

  console.log("--- END REQUIRED ARGUMENTS FILE ---");
};
