async function getClientPosition(inputAddress: string) {
  const data = await fetch(`http://localhost:8080/input?value=${inputAddress}`)
  const res = await data.json()
  return await res.candidates[0].geometry.location
}

export default getClientPosition