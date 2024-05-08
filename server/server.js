const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const signupRouter = require('./Routers/Signuprouter');
const loginRouter = require('./Routers/Loginroute');
//const emailRouter=require('./Routers/Emailroute');
//const Sell=require('./Routers/sellerroute')
const itemrouter=require('./Routers/itemrouter');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const MONGO_URI = 'mongodb+srv://nsaikrishna:sai2004@cluster0.2ifjzcb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb connection error'));

app.get('/', (req, res) => {
  res.send('Hello world');
});


app.use('/api/signup', signupRouter);
app.use('/api/login',loginRouter );
//app.use('/api/email',emailRouter)
app.use('/api/item',itemrouter);
app.use('/api/item/item',itemrouter);


app.listen(7000, () => {
  console.log('Server is running on port 7000');
});



