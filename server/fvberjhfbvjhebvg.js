[DATABASE]
[db.js]
 module.exports = {
     db: "mongodb://localhost:27017/GOSSIPER-BLOG"
 };

 [MODELS] 
 [lists-schema.js]
 const mongoose = require("mongoose");

 listsSchema = new mongoose.Schema({
     title: String,
     content: String,

 }, {timestamps: true})

 listsSchema.method.toJSON = () => {
     _id: this._id,
     title: this.title,
     content: this.content,
     createdAt: this.createdAt,
     ...At: this.db...this
 }

module.exports = mongoose.model("lists", listsSchema);


[ROUTES]
[API]
[article.routes.js]

const mongoose = require("mongoose");
const router = express.Router();
const list = require(../../models/listsSchema.js);

router.route("/").get((res, req, next) => {
    list.find((error, data) => {
        if(error){
            return next (error);
        } else {
            res.json(data);
            console.log(data);
        }
    })
} );

router.route("/add").post((req, res, next) => {
    list.create(req.body, (error, data) => {
        if(error){
            return next (error);
        } else {
            res.json(data);
            console.log(data);
        }
    });
});

router.route("/editSearch/:id").get((req, res, next) => {
    list.findById(req.params.id,(error, data) => {
        if(error){
            return next (error);
        } else {
            res.json(data);
            console.log(data);
        }
    });
});

router.route("/update/:id").put((req, res, next) => {
    list.findByIdAndUpdate(req.params.id, (error, data) => {
        if(error){
            return next (error);
        } else {
            res.json(data);
            console.log(data);
        }
    });
});

router.route("/find").get;

router.route("/delete").delete;