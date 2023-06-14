const mongoose = require("mongoose");
const uri = "mongodb+srv://Aamir:FXj14ZqKbi9CMGC5@cluster0.klw6wjk.mongodb.net/ordermanagement?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };