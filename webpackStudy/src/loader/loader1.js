const { mode } = require("../../webpack.config");

module.exports = function(sourceCode){
    console.log("loader1",sourceCode)
    return sourceCode+"loader1"
}