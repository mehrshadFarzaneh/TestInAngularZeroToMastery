// return 0 if it wasn't nature number
// return x + 1 if it was a nature number
export function compute(x: number) {
  if (x < 0) {
    return 0;
  }
  return x + 1;
}
