function arrayDiff(originalArray, updatedArray) {
  const newElements = [];
  const removedElements = [];

  // Find new elements
  for (const element of updatedArray) {
    if (!originalArray.includes(element)) {
      newElements.push(element);
    }
  }

  // Find removed elements
  for (const element of originalArray) {
    if (!updatedArray.includes(element)) {
      removedElements.push(element);
    }
  }

  return [newElements, removedElements];
}
const originalArray = [1, 2, 3, 4, 5];
const updatedArray = [2, 3, 5, 6, 7];

const [newElements, removedElements] = arrayDiff(originalArray, updatedArray);

console.log("New elements:", newElements);
console.log("Removed elements:", removedElements);
