const mongoose = require("mongoose");
const express = require ("express");
const router = express.Router();

const user = require ("../models/users-schema");

router.route("/create").post((req, res, next) => {
    return user.create(req.body, (error, data) => {
        if (error){
            return next (error);
        } else{
            console.log(data);
             res.json(data);
        }
    });
});


router.route("/").get((req, res)=> {
    return user.find((error, data) => {
        if(error){
            return next (error);
        } else {
            return res.json(data);
        }
    });
});


router.route("/edit/:id").get((req,res) => {
    return user.findById(req.params.id, (error, data) => {
        if (error){
            return next (error);
        } else {
            return res.json(data);
        }
    });
});

router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
             next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})

router.route("/delete/:id").delete((req, res, next) => {
    return user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error){
            return next(error);
        } else{
            return res.status(200).json({
                msg: data
            })
        } 
    })
})

module.exports = router;