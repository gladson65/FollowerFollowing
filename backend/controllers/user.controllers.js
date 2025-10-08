import userModel from "../models/users.models.js";

// create new user
export function createUser(req, res) {

    const { username } = req.body;

    if (!username) return res.status(404).json({message: 'username is missing'});

    // preparing data to store inside 
    const newUser = new userModel({
        username
    })

    // save new user into userModel
    newUser.save().then((data)=> {
        if(!data) return res.status(404).json({message: "Something went wrong!"})
        return res.status(201).json({message: "user added successfully", user: data});
    
    }).catch((error)=> {
        return res.status(500).json({error: error.message});
    })
}