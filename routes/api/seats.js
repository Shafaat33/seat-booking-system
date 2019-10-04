const express = require('express');
const router = express.Router();

//Seat model
const Seat = require('./../../models/Seats');
//@ get route
router.get('/', (req,res) => {
    Seat.find()
        .then(seats => res.json(seats))
        .catch(err => res.json(err));
});

router.put('/:id',(req,res) => {
    Seat.findById(req.params.id,(err,seat)=>{
        seat.status = 'Booked'
        seat.save().then(()=>console.log("Booked"));
    })
})
// router.post('/', (req, res)=> {  // will remove this code later 
//     const newSeat = new Seat({
//         name: req.body.name,
//         status: req.body.status
//     });
//      newSeat.save().then(seat => res.json(seat))
//      .catch(err => res.json(err));
//      //console.log(req.body.name);
// })

// router.delete('/:id', (req, res) => {
//     Seat.findById(req.params.id,(err,seat)=>{
//         seat.remove().then(()=> res.json({ success: true}))
//         .catch(err => res.status(404).json({success: false}));
//     })
        
// })

module.exports = router;