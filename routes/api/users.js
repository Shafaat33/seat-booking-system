const express = require('express');
const router = express.Router();

//user model
const User = require('./../../models/Users');
const Seat = require('./../../models/Seats');
//@ get route
router.get('/', (req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

// @post route

router.post('/', (req, res)=> {
    // find seat id
    
    //const seat = Seat.findById(req.params.seatId,(err, result)=>{
        const newUser = new User({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            gender: req.body.gender,
            seat: req.body.seatId      
        });
        newUser.save().then(users => res.json(users))
     .catch(err => res.json(err));
     Seat.findById(req.body.seatId,(err,result)=>{
         result.status = 'pending'
         result.save().then(()=> console.log("updated"))
     })
    // console.log("result",result)
    })
      
     //console.log(req.body.name);
//})

router.delete('/:id' ,(req, res) => {
    User.findById(req.params.id).then(user =>
        user.remove().then(()=> res.json({ success: true})))
        .catch(err => res.status(404).json({success: false}));
        User.findById(req.params.id,(err,result)=>{
            const seatID = result.seat;
        Seat.findById(seatID,(err,res)=>{
            res.status = 'available'
            res.save().then(()=> console.log('enjoy'))
        })
        })
        
        })
        
    



module.exports = router;

