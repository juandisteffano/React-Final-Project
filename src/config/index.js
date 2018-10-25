const ACCESS_TOKEN = "BQA0AybBadmJjLx33BEEfwxXpUsA_usn0K2k8TnGnXgZowGx29D0zmfpS0TzoUguGxpexa-RubFCw2oIZyRh6x_26y92DSG54Bxo2rYoURjkSv7MljBp3l9wz58zornyAyZlHOvKequjWzX-xkUY-tk4fKAyy19n"

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