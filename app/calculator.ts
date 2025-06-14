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

export function factorial(x: number): number {
  if (x < 0) {
    return 'Cannot calculate factorial of negative number'
  }
  return x === 0 ? 1 : x * factorial(x - 1)
}

export function fibonacci(x: number): number {

  if (x === 0) {
    return 0
  }
  if (x === 1) {
    return 1
  }
  return fibonacci(x - 1) + fibonacci(x - 2)
}
