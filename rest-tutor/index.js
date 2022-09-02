import express from 'express';
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload'
const PORT = 8000;
const DB_URL = "mongodb+srv://jwt-auth:pswrd@cluster0.k3olp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();
app.use(express.json());
app.use(fileUpload({}))
app.use(express.static('static'))
app.use("/api", router)

app.get('/', (req, res) => {
    res.status(200).json("Сервер работает")
})

const start = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }

};
start();
