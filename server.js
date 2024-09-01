import mongoose from "mongoose";
import app from "./app.js";
const PORT = process.env.PORT || 1000;

import "dotenv/config";

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});