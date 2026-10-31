const MAP = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
export function toRoman(n) {
  let out = '';
  let v = n;
  for (const [val, sym] of MAP) {
    while (v >= val) { out += sym; v -= val; }
  }
  return out;
}
