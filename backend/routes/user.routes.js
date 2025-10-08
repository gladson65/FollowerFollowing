import { createUser, followUser } from "../controllers/user.controllers.js"

export function userRoutes(followerServer) {
    followerServer.post('/user', createUser),
    followerServer.post('/follow', followUser)
}