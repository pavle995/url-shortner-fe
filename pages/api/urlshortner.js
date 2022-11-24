
export default async function handler(req, res) {
    try {
        var input = JSON.parse(req.body)
        const payload = new URLSearchParams();
        payload.append('url', input.url)
		const apiRes = await fetch(`https://urlshortnerapi.pavlekosutic.com/short`,
            {
                method: 'POST',
                body: payload
            });
		const data = await apiRes.json();
        const shortUrl = "https://urlshortnerapi.pavlekosutic.com/".concat(data.shortUrl)
        console.log(shortUrl)
        res.status(200).json({url: shortUrl})
    } catch (err) {
        console.log(err)
    }
}