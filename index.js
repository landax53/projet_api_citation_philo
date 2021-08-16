const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("Nouveau projet !")
})


app.listen(3000, () => console.log("listen to 3000"))