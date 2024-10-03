const data = {
  products: [
    {
      id: 10,
      name: 'Bananas',
      description: '6 bananas',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
