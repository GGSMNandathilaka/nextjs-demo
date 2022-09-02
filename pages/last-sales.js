import { useState, useEffect } from "react";

function LastSalesPage(props) {
  const url =
    "https://nextjs-course-790d7-default-rtdb.firebaseio.com/sales.json";
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const transformedSales = [];
          for (const key in data) {
            transformedSales.push({
              id: key,
              username: data[key].username,
              volume: data[key].volume,
            });
          }
          setSales(transformedSales);
          setIsLoading(false);
        }
      });
  }, []);

  if (!sales) {
    return <p>No data loaded yet...</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
