document.addEventListener("DOMContentLoaded", function () {
    const getJokesBtn = document.getElementById("getJokesBtn");
    const numberOfJokesInput = document.getElementById("numberOfJokes");
    const jokesResponse = document.getElementById("jokesResponse");
    const apiKey = 'BeloNZIWW2YihsrrI4KxDKmdP1JUHL8Qgc3Bg0q9';

    getJokesBtn.addEventListener("click", function () {
        const numberOfJokes = numberOfJokesInput.value;

        if (numberOfJokes >= 1 && numberOfJokes <= 30) {
            const apiUrl = `https://api.api-ninjas.com/v1/dadjokes?limit=${numberOfJokes}`;

            fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                }
            })
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.status);
                    }
                })
                .then(function (data) {
                    jokesResponse.innerHTML = "";
                    data.forEach(function (joke) {
                        jokesResponse.innerHTML += `<p>${joke.joke}</p>`;
                    });
                })
                .catch(function (error) {
                    console.error("Error:", error);
                    jokesResponse.innerHTML = "An error occurred while fetching jokes.";
                });
        } else {
            jokesResponse.innerHTML = "Please enter a number between 1 and 30.";
        }
    });
});