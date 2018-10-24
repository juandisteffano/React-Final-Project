const ACCESS_TOKEN = "BQD6fzRgmMjJDIwLWwAd7HpPApz3Gr4RA53gqMqzesnUDKK41Zesf4DGaQcO8KtxwHK5v7rd3SVItGeMXz0RMpnQ5nj_r48s5EpoNGKtz57Fk2Ra3te59hVvnhTPh6fUpd1nInZ0j7jasmShLJUcDOxiB6vMtyUa"


export default {
    baseUrl : "https://api.spotify.com/v1/",
    options: {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN
        },
        mode: 'cors',
        cache: 'default'
        }
}