export async function remove(id: number) {
  const response = await fetch(`http://localhost:8000/notes/${id}`, {
    method: 'DELETE',
  });
  const json = await response.json();

  console.log(json);

  return json;
}