export async function query() {
  const response = await fetch("http://localhost:8000/notes/");
  const json = await response.json();

  console.log(json);

  return json;
}