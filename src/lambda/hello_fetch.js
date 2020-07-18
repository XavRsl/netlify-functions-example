import fetch from "node-fetch";

const API_ENDPOINT = "https://doi.org/";

exports.handler = async (event, context) => {
  const doi = event.queryStringParameters.doi;
  
  return fetch(API_ENDPOINT + doi, { headers: { "Accept": "application/vnd.citationstyles.csl+json;q=1.0" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
