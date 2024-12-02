export async function cupcakeLoader() {
  const response = await fetch("http://localhost:3310/api/cupcakes");
  const cupcakes = await response.json();
  return cupcakes;
}
