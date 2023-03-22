import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Orders from './component/Orders';
import { dateChecker } from './utils/utils';

describe('Orders component', () => {
  const data = [
    {
      OrderID: 1,
      ShippingAddress: '123 Main St;-;Anytown, USA',
      ShipAddress: '123 Main St, Anytown, USA',
      ContactName: 'John Doe',
      ProductNames: 'Product 1,Product 2,Product 3',
      ShippedDate: '2022-01-01'
    },
    {
      OrderID: 2,
      ShippingAddress: '456 Oak St;-;Anytown, USA',
      ShipAddress: '456 Oak St, Anytown, USA',
      ContactName: 'Jane Smith',
      ProductNames: 'Product 1,Product 4',
      ShippedDate: '2022-01-02'
    },
    {
      OrderID: 3,
      ShippingAddress: '',
      ShipAddress: '',
      ContactName: 'Bob Johnson',
      ProductNames: 'Product 2,Product 3',
      ShippedDate: '2140-01-03'
    }
  ];

  it('renders the component', () => {
    render(<Orders data={data} />);
    expect(screen.getByText('Show only shipped orders')).toBeInTheDocument();
    expect(screen.getByText('Results: 3')).toBeInTheDocument();
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.getByText('#2')).toBeInTheDocument();
    expect(screen.getByText('#3')).toBeInTheDocument();
  });

  it('filters orders by exact product name', () => {
    render(<Orders data={data} />);
    fireEvent.change(screen.getByPlaceholderText('Filter by product'), { target: { value: 'product 4' } });
    fireEvent.click(screen.getByAltText('Search icon'));
    expect(screen.getByText('Results: 1')).toBeInTheDocument();
    expect(screen.getByText('#1')).toBeInTheDocument();
    expect(screen.queryByText('#2')).not.toBeInTheDocument();
    expect(screen.queryByText('#3')).not.toBeInTheDocument();
  });

  it('filters orders by shipped date', () => {
    render(<Orders data={data} />);
    fireEvent.click(screen.getByLabelText('Show only shipped orders'));
    expect(screen.getByText('Results: 2')).toBeInTheDocument();
    expect(screen.getByText('#2')).toBeInTheDocument();
  });

  it('displays the "View Details" link for each order', () => {
    render(<Orders data={data} />);
    expect(screen.getAllByText('View Details')).toHaveLength(3);
  });
});

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
