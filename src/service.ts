
const url = process.env.API_URL!

export async function getScreams(): Promise<string[]> {

    return fetch(url + '/post')
        .then(
            res => res.json()
                .then(data => {
                    return data
                }
                )
        )
}

export async function postScream(message: string): Promise<boolean> {

    return fetch(url + '/post', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: { post: message } })
    })
        .then(
            res => {return res.ok}
        )
}
