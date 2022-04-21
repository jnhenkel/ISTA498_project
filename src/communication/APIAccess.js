let backendAddress = "https://art-factory-api.herokuapp.com";
let frontendAddress = "https://jnhenkel.github.io";

let apiAccess = {
    addCustomer: (firstName, email, password) => {
        return fetch(`${backendAddress}/register`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${backendAddress}/signup`
            },
            body: JSON.stringify({firstName, email, password})
        })
        .then(x => x.json())
        .then(x => {
            console.log('x:',x);
            return x;
        });
    },

    findUserInfo: (email, password) => {
        return fetch(`${backendAddress}/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${backendAddress}/login`
            },
            body: JSON.stringify({email, password})
        })
        .then(x => x.json())
        .then(x=> {
            console.log(x);
            return x;
        })
    },

    postScore: (email, score) => {
        return fetch(`${backendAddress}/score`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${backendAddress}/score`
            },
            body: JSON.stringify({email, score})
        })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x;
        })
    }
}

export default apiAccess;