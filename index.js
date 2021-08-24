const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/PalleteDB", {useNewUrlParser: true});

const PalleteSchema = {
    Title: String,
    colors: [String]
}

const Pallete = mongoose.model("Pallete", PalleteSchema);

app.get("/", (req,res) => {
    res.render("home");
})

app.get("/:customTitle", (req,res) => {

    const Title = req.params.customTitle;
    console.log(Title);
    Pallete.findOne({Title: Title},(err,found) => {
        if(!err){
            if(found){
                res.render("saved", {Title: found.Title, colors:found.colors})
            }

        }
    })
})

app.post("/",(req,res) => {
    console.log(req.body);
    const newPallete = new Pallete({
        Title: req.body.title.toLowerCase(),
        colors: req.body.colors
    })
    newPallete.save();
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Server Started!");
})