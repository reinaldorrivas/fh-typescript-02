const fullName = (firstName: string, lastName?: string): string =>
  lastName ? `${firstName} ${lastName}` : `${firstName}`;

export const optionalArgs = (): void => {
  const name: string = fullName("Tony");

  console.log({ name });

  console.log("--- END OPTIONAL ARGUMENTS FILE ---");
};
