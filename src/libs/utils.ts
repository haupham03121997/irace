import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomTime() {
  return Math.floor(Math.random() * 500) + 500;
}

export function chunkArray(array: any[], size: number) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
}

export function isClient() {
  return typeof window !== 'undefined';
}
