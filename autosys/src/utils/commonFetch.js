const send = async (endpoint, httpMethod, token, jsonBody) => {

    await fetch(endpoint, {
        method: httpMethod,
        headers: {
            'Content-Type': 'application/json',
            'JWT': token
        },
        body: JSON.stringify(jsonBody)

    }).then(async response => {
        if (!response.ok) {
            response.text().then(async res => {
                return res;
            })
        }
        if (response.ok) {
            return await response.json();
        }
    })

}

export default send;
