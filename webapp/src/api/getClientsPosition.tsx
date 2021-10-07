async function getClientPosition(inputAddress: string) {
  try {
    const data = await fetch(`http://localhost:8080/input?value=${inputAddress}`)
    const res = await data.json()
    return await res.candidates[0].geometry.location
  }
  catch (err) {
    alert(err);
  }
}

export default getClientPosition