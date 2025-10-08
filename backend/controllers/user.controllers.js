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

// add follower
export async function followUser(req, res) {
    const { userID, targetID } = req.body;

    // key validation
    if (!userID || !targetID) return res.status(400).json({message: 'userID and targetID both are required.'});

    // if follower and the following ID same
    if (userID === targetID) return res.status(400).json({message: 'cannot follow yourself'});

    // find user and target user by ID
    const user = await userModel.findById(userID);
    const target = await userModel.findById(targetID);

    // if they not found
    if (!user || !target) return res.status(404).json({message: "user not found"})

    // check if the targetID already there or not then add
    if (!user.following.includes(targetID)) {
        user.following.push(targetID);
        target.followers.push(userID);

        await user.save()
        await target.save()
    }

    return res.status(200).json({message: `${user.username} followed ${target.username}`});
}