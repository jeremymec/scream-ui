
export const locationList = ["Northland",
"Auckland",
"Waikato",
"Bay of Plenty",
"Gisborne",
"Hawke's Bay",
"Taranaki",
"Manawatū",
"Wellington",
"Tasman",
"Nelson",
"Marlborough",
"West Coast",
"Canterbury",
"Otago",
"Southland"]

export async function getCity(): Promise<string> {
    return fetch('http://ipwhois.app/json/').then((res) =>
        res.json().then(
            (data) => {
                let city = "Unknown";
                try {
                    city = data["city"];
                } catch {
                    
                }
                return city;
            }
        ));
}
