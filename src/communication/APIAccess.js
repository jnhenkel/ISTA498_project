let backendAddress = "https://art-factory-api.herokuapp.com";
let frontendAddress = "https://jnhenkel.github.io";

let apiAccess = {
    addCustomer: (firstName, email, password) => {
        return fetch(`${backendAddress}/register`, {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({firstName, email, password})
        })
        .then(x => x.json())
        .then(x => {
            //console.log('x:',x);
            return x;
        });
    },

    findUserInfo: (email, password) => {
        return fetch(`${backendAddress}/login`, {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({email, password})
        })
        .then(x => x.json())
        .then(x=> {
            //console.log(x);
            return x;
        })
    },

    postScore: (email, score, art_url) => {
        return fetch(`${backendAddress}/score`, {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({email, score, art_url})
        })
        .then(x => x.json())
        .then(x => {
            //console.log(x);
            return x;
        })
    },

    getScore: (email) => {
        return fetch(`${backendAddress}/score/${email}`)
        .then(x => x.json())
        .then(x => {
            console.log('from getscore: ', x);
            return x;
        })
    }
}

export default apiAccess;