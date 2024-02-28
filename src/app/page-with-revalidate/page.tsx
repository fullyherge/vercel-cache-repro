export default async function PageWithRevalidate() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 10 },
  });
  const data = await response.json();

  return (
    <div>
      <h1>Fetched data with revalidate: 10</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
