import React, {Component} from 'react';

class sendToServer {

    async send(endpoint, httpMethod, token, jsonBody) {

        fetch(endpoint, {
            method: httpMethod,
            headers: {
                'Content-Type': 'application/json',
                'JWT': token
            },
            body: JSON.stringify(jsonBody)

        }).then(response => {

            if (!response.ok) {
                response.text().then(res => {
                    console.log(res)
                    return res;
                })
            }
            if (response.ok) {
                return response.json();
            }
        })

    }

}

export default sendToServer;