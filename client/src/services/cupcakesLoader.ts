export async function cupcakesLoader() {
  const response = await fetch("http://localhost:3310/api/cupcakes");
  return await response.json();
}
