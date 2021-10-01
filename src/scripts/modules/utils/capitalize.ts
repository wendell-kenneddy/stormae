/**
 * Capitalizes the first letter of a given string.
 * @param {string} str - The string whose first letter will be capitalized.
 * @returns The new string.
 */
function capitalize(str: string): string {
  const firstLetter = str[0].toUpperCase();
  const capitalized = `${firstLetter}${str.slice(1)}`;
  return capitalized;
}

export { capitalize };
