async function buscar_info_ip() {
    let ip = document.getElementById("textoip").textContent
    const token = "5896e5a958c341"
    const url = `https://ipinfo.io/${ip}?token=${token}`
    try{
        const res = await fetch(url)
        const json = await res.json()
        document.getElementById("datosip").textContent = json.city
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
