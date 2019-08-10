//dependencies//
let express = require("express");

//set up the express app//
let app = express();
let PORT = process.env.PORT || 8080;

//set up express app to handle data parsing//
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//set up route files//
require("./app/routing/apiRoutes")(app);
require("./app//routing/htmlRoutes")(app);

//set up listener, initialize server//
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
})
