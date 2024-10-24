export async function create(noteParams: { title: string }) {
  const response = await fetch("http://localhost:8000/notes/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(noteParams)
  });
  const json = await response.json();

  console.log(json);

  return json;
}