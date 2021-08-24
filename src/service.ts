
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