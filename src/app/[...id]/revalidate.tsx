async function fetchData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
    next: {
      revalidate: 50,
    },
  });
  const data = await response.json();
  return data;
}

export async function Revalidate() {
  const data = await fetchData();
  return (
    <div>
      <h1>Fetched data with revalidate: 50</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
