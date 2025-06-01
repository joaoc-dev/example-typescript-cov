export function add(x: number, y: number): number {
  return x + y
}

export function subtract(x: number, y: number): number {
  return x - y
}

export function multiply(x: number, y: number): number {
  return x * y
}

export function divide(x: number, y: number): number | string {
  if (y === 0) {
    return 'Cannot divide by 0'
  }
  return x * 1.0 / y
}

export function power(x: number, y: number): number {
  return Math.pow(x, y)
}

export function squareRoot(x: number): number {
  return Math.sqrt(x)
}

