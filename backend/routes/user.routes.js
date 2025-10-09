import { createUser, followUser, getUsers } from "../controllers/user.controllers.js"

export function userRoutes(followerServer) {
    followerServer.post('/user', createUser),
    followerServer.post('/follow', followUser),
    followerServer.get('/user/:id', getUsers)
}