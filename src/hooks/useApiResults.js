import { useState, useEffect } from "react";

import price from "../api/currentPrice";

export default () => {
    const [ bitPrice, setBitPrice ] = useState([]);

    const bitCoinApi = async () => {
        try {
            const response = await price.get('/currentprice.json')
            let results = [];
            for(let key in response.data.bpi) {
                results.push(response.data.bpi[key]);
            }
            setBitPrice(results);
        } catch(err) {
            console.log("Something went wrong ", err);
        }
        
}

    useEffect(() => {
        bitCoinApi();
    }, []);


    return bitPrice;
}