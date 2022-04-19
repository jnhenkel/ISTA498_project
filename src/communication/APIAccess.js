let backendAddress = "https://art-factory-api.herokuapp.com";

let apiAccess = {
    addCustomer: (firstName, email, password) => {
        return fetch(`${backendAddress}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, email, password})
        })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x;
        });
    },
    findUserInfo: (email, password) => {
        return fetch(`${backendAddress}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(x => x.json())
        .then(x=> {
            console.log(x);
            return x;
        })
    }
}

export default apiAccess;