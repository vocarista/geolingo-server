const express = require('express');
const app = express();
require('dotenv').config() || 7120;
const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})