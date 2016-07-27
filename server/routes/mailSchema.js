var mongoose = require("mongoose");
var maildet = mongoose.Schema({"msg_id":String ,"Msg_snippet":String,"Msg_data":String
}
);
module.exports = mongoose.model("mails", maildet);
