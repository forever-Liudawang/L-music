const path = require("path")
console.log(path.resolve(__dirname,"./src/index.js"))
module.exports = {
    mode:"development",
    // entry:path.resolve(__dirname,"src/index.js"),
    output:{
        filename:"bundle[hash:5].js",
        path: path.resolve(__dirname,"./build")
    },
    devtool:"source-map",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:["./src/loader/loader1.js",{
                    loader:"./src/loader/loader2.js",
                    options:{
                        name:"loader2"
                    }
                }]
            }
        ]
    }
}