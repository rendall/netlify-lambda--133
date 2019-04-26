# netlify-lambda--133

Repro repo for [netlify-lambda issue #133](https://github.com/netlify/netlify-lambda/issues/133)

## To install

* Navigate to your workspace directory
* `git clone https://github.com/rendall/netlify-lambda--133.git`
* `npm install`

## First, to verify that it's working

* `npm run serve` or `npx netlify-lambda serve ./functions-src`
* Visit <http://localhost:9000/.netlify/functions/hello>
* Should see a message similar to `{"message":"Hello world 7"}` with http status `200`

## To reproduce the error

* `npm run repro` which
  * copies `hello.ts` into the `functions-src` folder
  * compiles the `hello.ts` into `./functions-src/hello.js` via the `tsc` command
  * attempts to `netlify-lambda build` and `netlify-lambda serve` the `./functions-src` folder
* The error output is below

## The expected output

```output
netlify-lambda: Starting server
Hash: c781759a1bca6d5c8fbd
Version: webpack 4.30.0
Time: 1135ms
Built at: 04/26/2019 7:46:28 AM
   Asset      Size  Chunks             Chunk Names
hello.js  1.22 KiB       0  [emitted]  hello
Entrypoint hello = hello.js
[0] ./hello.js 321 bytes {0} [built]
Lambda server is listening on 9000
```

## Error output

```output
netlify-lambda: Building functions
Hash: ae0f91495479c5f3a57f
Version: webpack 4.30.0
Time: 1763ms
Built at: 04/26/2019 7:53:36 AM
   Asset      Size  Chunks  Chunk Names
hello.js  3.85 KiB       0  hello
Entrypoint hello = hello.js
[0] ./hello.ts 3.36 KiB {0} [built] [failed] [1 error]

ERROR in ./hello.ts
Module build failed (from ../node_modules/babel-loader/lib/index.js):
SyntaxError: ./netlify-lambda--133\functions-src\hello.ts: Unexpected token (3:20)

  1 | import { Handler, Context, Callback } from "aws-lambda";
  2 | 
> 3 | export const handler:Handler = (event:Event, context:Context, callback:Callback) => {
    |                     ^
  4 |   callback(null, {
  5 |     statusCode: 200,
  6 |     headers: HEADERS,
    at Parser.raise (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:3851:17)
    at Parser.unexpected (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:5167:16)
    at Parser.parseVar (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7947:18)
    at Parser.parseVarStatement (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7762:10)
    at Parser.parseStatementContent (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7358:21)
    at Parser.parseStatement (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7291:17)
    at Parser.parseExportDeclaration (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:8477:17)
    at Parser.maybeParseExportDeclaration (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:8427:31)
    at Parser.parseExport (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:8356:29)
    at Parser.parseStatementContent (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7395:27)
    at Parser.parseStatement (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7291:17)
    at Parser.parseBlockOrModuleBlockBody (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7868:25)
    at Parser.parseBlockBody (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7855:10)
    at Parser.parseTopLevel (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:7220:10)
    at Parser.parse (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:8863:17)
    at parse (./netlify-lambda--133\node_modules\@babel\parser\lib\index.js:11135:38)
    ```