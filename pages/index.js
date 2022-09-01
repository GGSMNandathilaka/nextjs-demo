function HomePage() {
  const products = ["Product1", "Product2", "Product3"];
  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

export default HomePage;
