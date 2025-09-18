export const truncateSingleWord = (text: string, maxLength: number = 30): string => {
  if (!text) return "";
  const words = text.split(" ");

  // Only truncate if it's a single word and longer than maxLength
  if (words.length === 1 && text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }

  return text;
};

export const truncateText = (text: string, maxLength: number = 30): string => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};