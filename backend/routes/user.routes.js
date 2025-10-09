import { createUser, followUser, getUser, getAllUsers } from "../controllers/user.controllers.js"

export function userRoutes(followerServer) {
    followerServer.post('/user', createUser),
    followerServer.post('/follow', followUser),
    followerServer.get('/user/:id', getUser),
    followerServer.get('/allUsers', getAllUsers)
}