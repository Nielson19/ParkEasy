import express from "express"
import {dirname} from "path"
import {fileURLToPath} from "url"

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res)=>{
    

    res.render(__dirname + "/views/signup.ejs")


})

app.listen(3000);