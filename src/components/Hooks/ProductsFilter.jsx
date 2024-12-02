export const ProductsFilter = (searchValue) => {
  let products = [
    {
      id: 1,
      title: "sueter1",
      description: "sueres",
      price: 10
    },
    {
      id: 2,
      title: "sueter2",
      description: "sueres",
      price: 10
    },
    {
      id: 3,
      title: "sueter3",
      description: "sueres",
      price: 10
    }
  ];

  let newProducts = products.filter((produc) => {
    return produc.title.includes(searchValue);
  });

  console.log(newProducts);

  return newProducts;
}
