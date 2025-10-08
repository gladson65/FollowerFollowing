import { createUser } from "../controllers/user.controllers.js"

export function userRoutes(followerServer) {
    followerServer.post('/user', createUser)
}