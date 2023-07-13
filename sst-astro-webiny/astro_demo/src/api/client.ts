async function webinyClient(query: string){
    const response =  await fetch('https://d9wiwukh06btt.cloudfront.net/cms/read/de-DE', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ad8493266156763b7f16ea7e14ce2b1c1bf65816c0da0b88`
        },
        body: JSON.stringify({
            query
        }),
    })
    const results = await response.json();
    return results.data;
}

export default webinyClient
