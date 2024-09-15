import { isClient } from '@/libs/utils';

export const convertCurrencyVN = (value: number): string => {
  // 6000000 => "6,000,000"
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const setLocalStorage = <T = any>(key: string, value: T) => {
  isClient() && localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T = any>(key: string): T | null => {
  if (!isClient()) return null;
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

export const removeLocalStorage = (key: string) => {
  !isClient() && localStorage.removeItem(key);
};
