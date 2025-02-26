export function getRandomUID() {
  return `${Math.random().toString(36).substring(7)}-${Date.now()}`;
}

// export function isTrulyEmpty(obj: Record<string, any>) {
//   for (const val of Object.values(obj)) {
//     if (val !== undefined && val !== null && val !== "") {
//       return false;
//     }
//   }
//   return true;
// }
