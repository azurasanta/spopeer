
import { Factory, Model, createServer } from "miragejs";

export default function server() {
    createServer({
        models: {
            User: Model
        },

        seeds(server) {
            server.create("user")
        },

        routes() {
            this.get("/api/users", (schema) => {
                return schema.Users.all()
            })

            this.get("/api/user/:id", (schema, request) => {
                let email = request.params.email

                return schema.Users.find({email:email})
            })

            this.post("/api/user", (schema, request)=>{
                let user = JSON.parse(request.requestBody)
                return schema.Users.create(user)
            })
        },

        factories: {
            User: Factory.extend({
                email: "example@example.com"
            })
        }
    })
}