// Create a Translator class
// - It should have a translate method to translate a string in any language to any other target language.
// - Use fetch API to do this.
// - Use the following API to translate : https://rapidapi.com/googlecloud/api/google-translate1/
// - Understand what are locales.
// - Refer this to get the list of locales : https://www.oracle.com/java/technologies/javase/jdk8-jre8-suported-locales.html

// Example :

// Translator.translate("Hello","fr") should return "Bonjour"

// Declaration of translate
// function translate(sourceString:string, targetLanguage:string)

class Translator {
    static translate(sourceString, targetLanguage) {    // the translate function translates a string from one language to another with taking 2 strings as arguments, one is the matter and the other is the language

        const encodedParams = new URLSearchParams();

        encodedParams.append("q", sourceString);                // Appends the source string to the URLSearchParams object.
        encodedParams.append("target", targetLanguage);         // Appends the target language to the URLSearchParams object.
        encodedParams.append("source", "en");                   // Appends the source language to the URLSearchParams object.
        

        const options = {                   // created an object which used to pass the request
            method: 'POST',                 // the POST method is used to SEND the information to the given link using the mentioned API
            headers: {
              'content-type': 'application/x-www-form-urlencoded',                          // it tells the server that the body of the request is encoded as a query string..
              'Accept-Encoding': 'application/gzip',                                        // it tells the server that I am willing to accept the response or data in gzip format
              'X-RapidAPI-Key': 'fa9f3c559fmsh5b6082bff83e74bp13254bjsn7680b718a93f',       // using the translateAPI link I logged in to the rapidAPI.com, then I got my API-Key
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'                         // its the host link, after sending/recieving the data it will redirect to the given website
            },
          
            body: encodedParams
          };
          

        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)        // fetching the data, for the data we sent to translate
            .then(response => response.json())                                                  // convert the recieved response to the json format
            .then(response => console.log(response.data.translations[0].translatedText))        // it prints the response or the translated text in the console
            .catch(err => console.error(err));              // if it gets any error or it finds the text sent can't be translated, it will print an error in the console

    }
}

Translator.translate("Hello", "fr");
Translator.translate("Hi Dileep How are you", "fr");
