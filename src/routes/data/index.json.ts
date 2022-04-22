import axios from "axios";

let result = 'initial';

export const get = () => {
    return {
        status: 200,
        body: result
    }
}

export async function post({ }) {

    let response = null;
    new Promise(async () => {
    try {
        response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map', {
        headers: {
            'X-CMC_PRO_API_KEY': '0f2dc2cd-1cbb-4a03-b434-d1efec50add8',
        },
        });
    } catch(ex) {
        response = null;
        // error
        console.log(ex);
        result = "fetch failed"
    }
    if (response) {
        // success
        const json = response.data.data;
        result = json.data;
    }
    });

    return { 
        status: 303,
        headers: {
            location: "./"
        }
    };
}
