const fullName = (firstName: string, ...props: string[]): string =>
  `${firstName} ${props.join(" ")}`;

export const restArgs = (): void => {
  const superman = fullName("Clark", "Joseph", "Ken");

  console.log({ superman });

  console.log("--- END REST ARGUMENTS FILE ---");
};
