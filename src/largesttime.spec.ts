function largestTimeFromDigits(arr: number[]): string {
  let maxTime = -1;

  // Helper function to convert hours and minutes into total minutes
  const getMinutes = (h: number, m: number): number => h * 60 + m;

  // Generate all permutations of 4 digits
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === i) continue;

      for (let k = 0; k < 4; k++) {
        if (k === i || k === j) continue;

        const l = 6 - i - j - k; // Remaining index

        const hour = arr[i] * 10 + arr[j];
        const minute = arr[k] * 10 + arr[l];

        if (hour < 24 && minute < 60) {
          const total = getMinutes(hour, minute);
          maxTime = Math.max(maxTime, total);
        }
      }
    }
  }

  if (maxTime === -1) return "";

  const hh = Math.floor(maxTime / 60).toString().padStart(2, "0");
  const mm = (maxTime % 60).toString().padStart(2, "0");

  return `${hh}:${mm}`;
}
console.log(largestTimeFromDigits([1, 2, 3, 4])); // Output: "23:41"
console.log(largestTimeFromDigits([5, 5, 5, 5])); // Output: ""
