//First, we import all of our required modules and packages. Note the usage of cors. We expect this file to be accessing some type of information, not just delivering a front end, so cors is standard here to help us avoid problems and errors down the road. On line 7 we also require dotenv, again assuming one might be utilizing environment variables, such as URI strings or Access Tokens of some kind. It's best to shove all your import/require statements to the top, so they are out of the way and ready for use later.

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config()

// We import the PORT variable from our .env. If it is declared there, then it is used here. Otherwise it will default to a basic port number. NOTE FOR DEPLOYING: if a site does not give you a port number, it may parse your code to look for the PORT variable, and then attach the true port number that way. Heroku is one such site. Best practice is to keep your PORT variable in all caps for this reason.
const PORT = process.env.PORT || 4000;

//Middleware is invoked next. This is tellingg our server file to speak and use both express and cors. We must have this middleware before we perform any basic functions in our server, such as handle requests.
app.use(express.json());
app.use(cors());

//Put endpoints here! I have provided one example of an endpoint. It is not the only option, but is one I use most often. Usually I will put the actual callback inside of a controller file, to keep this server file clean.
app.get('/api/example', async (req, res) => {
  console.log('Wow, what a great example!')
  res.status(200).send('Great work!')
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));