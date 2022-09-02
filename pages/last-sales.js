import { useState, useEffect } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const url =
    "https://nextjs-demo-bc79f-default-rtdb.firebaseio.com/sales.json";
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(url, (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
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
    }
  }, [data]);

  if (error) {
    return <p>Failed to load...</p>;
  }

  if (!sales) {
    return <p>No data loaded yet...</p>;
  }

  if (!data && !sales) {
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
