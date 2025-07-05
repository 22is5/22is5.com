 fetch("/js/text.json")
        .then(response => response.json())
        .then(data => {
            const messages = data.messages;
            let randomMessage = "22is5"

                randomMessage = messages[Math.floor(Math.random() * messages.length)];

            const randomDiv = document.getElementById('random')
            randomDiv.innerHTML = randomMessage;
            document.title = randomMessage;
        })
        .catch(error => console.error("what the flip", error));