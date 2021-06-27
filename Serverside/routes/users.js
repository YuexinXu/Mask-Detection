const router = require('express').Router();
let User = require('../models/user.model');

router.route('/signup').post((req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const role = req.body.role;
    const img = req.body.img;
    

    const newUser = new User({
        email,
        password,
        firstname,
        lastname,
        role,
        img
    });

    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+err));
    
})

router.route('/:id').get((req, res)=>{
    User.findById(req.params.id)
        .then(user=>res.json(user))
        .catch(err=>res.status(400).json('Error: '+err));
})

router.route('/:id').delete((req, res)=>{
    User.findByIdAndDelete(req.params.id)
        .then(()=>res.json('User Deleted!'))
        .catch(err=>res.status(400).json('Error: '+err));
})

router.route('/update/:id').post((req, res)=>{
    User.findById(req.params.id)
        .then(user=>{
            user.email = req.body.email;
            user.firstname = req.body.firstname;
            user.lastName = req.body.lastname;
            user.role = req.body.role;
            user.img = req.body.img;

            user.save()
                .then(()=> res.json('User updated!'))
                .catch(err=> res.status(400).json('Error: '+err));
        })
        .catch(err=>res.status(400).json('Error: '+err));
})









module.exports = router;
