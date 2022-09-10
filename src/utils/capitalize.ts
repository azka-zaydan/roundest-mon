export function capitalizeFirstLetter(word: string | undefined) {
  if (typeof word === "undefined") return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
