const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );
const React = require( 'react' );
const ReactDOMServer = require( 'react-dom/server' );

const app = express();

const App = require('../src/App').default; 


// serve static assets
app.get( /\.(css|ico|js|map|svg)$/, express.static(path.resolve( __dirname, '../build')));

app.use( '*', (req, res) => {
    let indexHTML = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), {
        encoding: 'utf8',
    });
    let appHTML = ReactDOMServer.renderToString(<App/>);

    //indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);

    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
} );

// run server
app.listen( '9000', () => {
    console.log('Express server started at http://localhost:9000');
} );