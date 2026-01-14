## Roman to Integer

Roman numerals are represented by seven different symbols:

| Symbol | Value |
|--------|-------|
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

---

### Example

- `II` → 2  
- `XII` → 12  
- `XXVII` → 27  

Roman numerals are usually written from largest to smallest from left to right.

---

### Subtractive Notation

In some cases, subtraction is used instead of addition:

- `IV` → 4  
- `IX` → 9  

There are **six valid subtractive combinations**:

- `I` can be placed before `V` (5) and `X` (10) → 4, 9  
- `X` can be placed before `L` (50) and `C` (100) → 40, 90  
- `C` can be placed before `D` (500) and `M` (1000) → 400, 900  

---

### Problem

Given a roman numeral string `s`, convert it to an integer.

---

### Constraints

- `1 <= s.length <= 15`
- `s` contains only the characters `'I'`, `'V'`, `'X'`, `'L'`, `'C'`, `'D'`, and `'M'`
- `s` is guaranteed to be a valid Roman numeral
- The integer value is in the range `[1, 3999]`

---

### Input

```text
s = "MCMXCIV"