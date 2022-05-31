const mongoose = require("mongoose");

const URI =
  "mongodb+srv://son:hoang1995@cluster0.fs4fbnj.mongodb.net/test?retryWrites=true&w=majority";
async function connect() {
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect sucess");
  } catch {
    console.log("Connect fail");
  }
}

module.exports = {
  connect,
  mongoURI: URI,
};
