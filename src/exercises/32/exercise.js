// Get the details of an airport
// - Create an Airport class
// - Have a getInfoFromIATA() method on the Airport class which returns an airport details given its iata code
// - Have a getInfoFromICAO() method on the Airport class which returns an airport details given its icao code
// - Use Promises for async calls.
// - Use the following API : https://rapidapi.com/Active-api/api/airport-info

// Example :

// Airport.getInfoFromIATA("HYD")
// Airport.getInfoFromICAO("HYD")

// Returns
/*
{
    "id": 3081,
    "iata": "HYD",
    "icao": "VOHS",
    "name": "Rajiv Gandhi International Airport",
    "location": "Hyderabad, Telangana, India",
    "street_number": "",
    "street": "",
    "city": "Hyderabad",
    "county": "Ranga Reddy",
    "state": "Telangana",
    "country_iso": "IN",
    "country": "India",
    "postal_code": "500409",
    "phone": "+91 40 6654 6370",
    "latitude": 17.240263,
    "longitude": 78.42938,
    "uct": 330,
    "website": "http://www.hyderabad.aero/"
}


*/
class Airport {
    async getInfoFromIATA(iata) {    // here getInfoFromIATA is declared as a instance passing IATA code as the arguments
        // Your code here
        const options = {              
            method: 'GET',           // the method called is GET in which we can get the data from the mentioned link with given API. GET is for get data and POST is for SEND data
            headers: {
                'X-RapidAPI-Key': 'fa9f3c559fmsh5b6082bff83e74bp13254bjsn7680b718a93f',  // using the above link I logged in to the rapidAPI.com, then I got my API-Key
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'         // we are saying the API to redirect to the host link after getting the IATA data information
            }
        };
        const res = await fetch(`https://airport-info.p.rapidapi.com/airport?iata=${iata}`, options); // fetching the results from the link provided in which we passing the IATA code.
        const data = await res.json();                      // converting the data we got to the json format
        return data
    }

    async getInfoFromICAO(icao) {     // here getInfoFromICAO is declared as a instance passing ICAO code as the arguments

        // Your code here
        const options = {
            method: 'GET',              // the method called is GET in which we can get the data from the mentioned link with given API.
            headers: {
                'X-RapidAPI-Key': 'fa9f3c559fmsh5b6082bff83e74bp13254bjsn7680b718a93f',   // its my API key from rapidAPI.com
                'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'                          // host link which is used to redirect after getting the ICAO information
            }
        };

        fetch(`https://airport-info.p.rapidapi.com/airport?icao=${icao}`, options)   // fetching the ICAO details if the code entered is correct or not
            .then(response => response.json())                                       // converting the response to the json format
            .then(response => console.log(response))                                 // then print the response in the terminal
            .catch(err => console.error(err));                                       // if it catches the error then in the terminal print the error content
    }
}
let airport = new Airport()                                                 // creating the new instance with the object new Airport()
airport.getInfoFromIATA("HYD").then(response => console.log(response)).catch(err => console.error(err)); //it tries to get the details with the IATA code. if the request is successfull it prints the details or else it will print the error message                                            
airport.getInfoFromICAO("VOHS");            // it get the details because the ICAO code "VOHS" is valid
airport.getInfoFromICAO("HYD");             // but here there is no ICAO code like HYD so it shows us the error message
