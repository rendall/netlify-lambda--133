export const handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify({
            message: `Hello world ${Math.floor(Math.random() * 10)}`,
        })
    });
};
const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET"
};
