/**
 * Routers
 */
import { itemRouter } from './routers/ItemRouter';

/** 
 * Server dependencies
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

/**
 * Initializing the basic uses of the app
 */
app.use(cors({ origin: true, credentials: true }))
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Setting the routes
 */
app.use('/api/items', itemRouter.router);


try {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(`mongodb://localhost:27017/scanit`, { useNewUrlParser: true })
  console.log("Connected to DB!")
} catch (e) {
  console.log(e)
}


// const item1 = {
//   id: '014',
//   series: '0000009239',
//   name: 'עגבניות',
//   details: 'אדומות מאוד'
// }

// const item2 = {
//   id: '470001014',
//   series: '0000009239',
//   name: 'טיל בין גלקטי',
//   details: 'מאוד גיי'
// }

// const item3 = {
//   id: '470003316',
//   series: '0000009240',
//   name: 'כיסא',
//   details: 'עם 2 רגליים'
// }

// new itemModel(item1).save()
// new itemModel(item2).save()
// new itemModel(item3).save()
app.get('/*', function(req, res) {
  const publicPath = path.join(__dirname, '../build');
  res.sendFile(path.join(publicPath, '/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Listening on port ${port}`);
