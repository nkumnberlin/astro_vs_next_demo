async function webinyClient(query: string){
    const response =  await fetch(import.meta.env.ASTRO_PUBLIC_WEBINY_API_URL, {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.WEBINY_API_TOKEN}`
        },
        body: JSON.stringify({
            query
        }),
    })
    const results = await response.json();
    return results.data;
}

export default webinyClient
