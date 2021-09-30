
export async function getCountry(): Promise<string> {
    return fetch('http://ipwhois.app/json/').then((res) =>
        res.json().then(
            (data) => {
                let country = "Unknown";
                try {
                    country = data["country"];
                } catch {
                    
                }
                return country;
            }
        ));
}
