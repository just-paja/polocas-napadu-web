export const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

export const getNewRandomItem = (items, last) =>
  getRandomItem(items.filter(item => item !== last));
