import { createServer, Model } from "miragejs";
import list_product from "../products_api";
import users_api from "../users_api";

export const VirtualServer = ({ environment = "test" }) => {
     let server = createServer({
          environment,
          models: {
               products: Model,
               users: Model,
          },
          seeds(server) {
               list_product.forEach((item) => {
                    return server.create("product", item);
               });
               users_api.forEach((item) => {
                    return server.create("user", item);
               });
          },
          routes() {
               // products
               this.namespace = "api/products";
               this.urlPrefix = "http://localhost:3000";

               this.get("/", (schema, request) => {
                    return schema.products.all();
               });
               this.get("/:id", (schema, request) => {
                    let id = request.params.id;
                    return schema.products.find(id);
               });
               this.post("/", (schema, request) => {
                    let attrs = JSON.parse(request.requestBody);
                    return schema.products.create(attrs);
               });
               this.patch("/:id", (schema, request) => {
                    let newAttrs = JSON.parse(request.requestBody);
                    let id = request.params.id;
                    let note = schema.products.find(id);
                    return note.update(newAttrs);
               });
               this.delete("/:id", (schema, request) => {
                    let id = request.params.id;
                    return schema.products.find(id).destroy();
               });

               // users
               this.namespace = "/api/users";
               this.get("/", (schema, request) => {
                    return schema.users.all();
               });
          },
     });

     return server;
};
