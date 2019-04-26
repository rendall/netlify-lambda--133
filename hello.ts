import { Handler, Context, Callback } from "aws-lambda";

export const handler:Handler = (event:Event, context:Context, callback:Callback) => {
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

interface Event {
    path: string;
    httpMethod: string;
    queryStringParameters: {[parameter:string]:string};
    headers: {[header:string]:string};
    body: string;
    isBase64Encoded: boolean;
}
