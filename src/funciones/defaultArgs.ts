const fullName = (
  firstName: string,
  upperCase: boolean = false,
  lastName?: string,
): string => {
  if (upperCase) {
    return lastName ? `${firstName} ${lastName}` : `${firstName}`.toUpperCase();
  }

  return lastName ? `${firstName} ${lastName}` : `${firstName}`;
};

export const defaultArgs = (): void => {
  const name: string = fullName("Tony");

  console.log({ name });

  console.log("--- END DEFAULT ARGUMENTS FILE ---");
};
