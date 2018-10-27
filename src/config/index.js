const ACCESS_TOKEN = "BQAwDcyj-kY9XWXm11yFYSS0iA4-nZA31-e_sU1y9K1Fw5dDH3BwrfqoM5PcR1x9AiOjbtyV5tjPYajm_WPZSozITb-OlBYz5dX1dOJbChTHnRgS8mcjp3YMuzLndgDckA68izx-3F18gu7ll8qZZ_uupUrANpk"

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