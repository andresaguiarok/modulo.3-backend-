const { connect } = require("mongoose")

let url = "mongodb+srv://andresaguiarok:<passwprd>@cluster0.wbacuba.mongodb.net/ecommerceBackend?retryWrites=true&w=majority"

module.exports = {
    connectDB: ()=> {

        connect(url)
        console.log("Base de datos conectada")
    }
}
