async function getClientPosition(inputAddress: string) {
  const data = await fetch(`http://localhost:8080/input?value=${inputAddress}`)
  const res = await data.json()
  if (res.status === "ZERO_RESULTS" || res.status === "INVALID_REQUEST") {
    return
  } else {
    return await res.candidates[0].geometry.location
  }
}

export default getClientPosition