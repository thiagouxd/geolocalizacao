
import express from "express";
import cors from 'cors';
import request from 'request';
import stores from './json/stores.json'

const app = express();
const port = 8080

const googleMapsUrl = (input) => `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=${input}&inputtype=textquery&key=AIzaSyC5t7cK8VjiacG1DxOkl0TO-tWcMbKu9hA`
const configureHead = (data) => {

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
  });
}

const getData = () => {
  app.get('/input', function (req, res) {
    var input = req.query.value;
    var valueInputEncoded = encodeURI(input)

    request(googleMapsUrl(valueInputEncoded), function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);

      res.send(JSON.parse(body))
    });
  });

  app.get('/lojas', function (req, res) {
    res.send(stores)
  });
}

const createServer = () => {
  app.listen(port, () => console.log(`Server running on port: ${port}`));
}

configureHead()
getData()
createServer()







