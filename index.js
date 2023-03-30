const express = require("express");
const app = express();

PORT = 8400


// CONTROLLERS
// app.use("/company-services", require("./controllers/company-services"));
// app.use("/past-projects", require("./controllers/past-projects"));
// app.use("about-us", require("./controllers/about-us"));
// app.use("contact-us", require("./controllers/contact-us"));

//ROUTES
app.get("/", (req, res) => {
    res.render("home.ejs")
    console.log("homepage")
})




app.listen(PORT, () => console.log(`SmithConstruction is live on port ${PORT} 👷🏼‍♂️`));