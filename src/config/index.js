const ACCESS_TOKEN = "BQCooQu1Za4zaezFXpjxsm-JRRBrSTEaBTBW2hENVyjmu5RtRY6xgB0qvMypIhIgRFaYHZ7USf0FJKfcwvK2mmdXgNLFzKlGfed-HvVwtwynrHvjAe3I_FfCEeYWDRNA31I9XOPkEcyflT8KWlzcXjMA9dsnJDd_"

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