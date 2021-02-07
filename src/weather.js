
// Require https module
const https = require("https");
const api = require("./api.json");

const get = (query, type, days = 1) => {

    try {
        let URL;
        if (type === "forecast") {
            URL = `https://api.weatherapi.com/v1/${type}.json?key=${api.key}&q=${query}&days=${days}`;          
        }
        else {
            URL = `https://api.weatherapi.com/v1/${type}.json?key=${api.key}&q=${query}`;
        }

        const request = https.get(URL, response => {
            let body = ""
            
            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', data => {
                try {
                // Parse the data
                const weather = JSON.parse(body);
                // return the data
                return weather;
                }
                catch (error) {
                    console.error(error.message);
                }
            });
        });
    }
    catch (error) {
        console.error(error.message);
    }
};

export default get;