export const useUniqueNumbers = (
  limit: number,
  totalValues: number,
): number[] => {
  const uniqueValues = new Set<number>();

  do {
    uniqueValues.add(Number((Math.random() * limit).toFixed()));
  } while (uniqueValues.size < totalValues);

  return [...uniqueValues];
};
