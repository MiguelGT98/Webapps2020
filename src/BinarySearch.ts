function binarySearch(
  stringArray: string[],
  left: number,
  right: number,
  st: string
): number {
  if (right >= left) {
    let mid: number = left + (right - 1) / 2;

    if (stringArray[mid].toUpperCase() === st.toUpperCase()) return mid;

    if (stringArray[mid].toUpperCase() > st.toUpperCase())
      return binarySearch(stringArray, left, mid - 1, st);

    return binarySearch(stringArray, mid + 1, right, st);
  }
  return -1;
}
