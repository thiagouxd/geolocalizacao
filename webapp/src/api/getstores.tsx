async function getStores() {
  const data = await fetch("http://localhost:8080/lojas")
  const res = await data.json()
  return res
}

export default getStores