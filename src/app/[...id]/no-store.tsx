async function fetchData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/2`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export async function NoStore() {
  const data = await fetchData();
  return (
    <div>
      <h1>Fetched data with cache: no-store</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
