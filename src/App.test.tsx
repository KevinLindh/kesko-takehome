import React from 'react';
import App from './App';
import { dateChecker } from './utils/utils';

test('Order that has been shipped', () => {
  let data = "2022-10-10";
  const value = dateChecker(data)
  expect(value).toBe(true);
});

test('Order that has not been shipped yet', () => {
  const future = new Date();
  const futureYear = future.getFullYear()+1;
  let data = `${futureYear}-10-10`;
  const value = dateChecker(data)
  expect(value).toBe(false);
});

test('null value for shippingDate', () => {
  let data = null;
  const value = dateChecker(data)
  expect(value).toBe(false);
});
