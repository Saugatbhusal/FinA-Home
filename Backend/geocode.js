async function geocode(city, country) {
    console.log("form new call")

    const query = `${city}, ${country}`

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`

    try {
        const res = await fetch(url, {
            headers: { 'User-Agent': 'airbnb-clone-portfolio (dynamicbhusal9@gmail.com)' },
            signal: AbortSignal.timeout(5000)
        });

        if (!res.ok) return null
        const data = await res.json()

        if (!data.length) return null
        return {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon)
        };
    } catch (error) {
        console.log(error)
        return null
    }
}

export default geocode