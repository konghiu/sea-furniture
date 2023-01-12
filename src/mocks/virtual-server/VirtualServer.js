import { createServer, Model } from "miragejs";
import news_api from "../news_api";
import list_product from "../products_api";
import users_api from "../users_api";

export const VirtualServer = ({ environment = "test" }) => {
     let server = createServer({
          environment,
          models: {
               products: Model,
               users: Model,
               news: Model,
          },
          seeds(server) {
               list_product.forEach((item) => {
                    return server.create("product", item);
               });
               users_api.forEach((item) => {
                    return server.create("user", item);
               });
               news_api.forEach((item) => {
                    return server.create("news", item);
               });
          },
          routes() {
               // products
               this.namespace = "api/products";
               this.urlPrefix = "http://localhost:3000";

               this.get("/", (schema, request) => {
                    return schema.products.all();
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
               this.namespace = "http://localhost:3000/sea-furniture/api/users";
               this.get("/", (schema, request) => {
                    return schema.users.all();
               });

               this.post("/transaction/:id", (schema, request) => {
                    let id = request.params.id;
                    let order = JSON.parse(request.requestBody);
                    let user = schema.users.findBy({ user_ID: Number(id) });
                    user.transaction.push(order);
                    return user;
               });

               this.post("/address/:id", (schema, request) => {
                    let id = request.params.id;
                    let address = JSON.parse(request.requestBody);
                    let user = schema.users.findBy({ user_ID: Number(id) });
                    user.user_list_address.push(address);
                    return user;
               });

               this.post("/address/default/:id", (schema, request) => {
                    let id = request.params.id;
                    let reqIndex = JSON.parse(request.requestBody);
                    let user = schema.users.findBy({ user_ID: Number(id) });

                    user.attrs.user_list_address.forEach((address, index) => {
                         if (index === reqIndex.index) {
                              address.default = true;
                         } else {
                              address.default = false;
                         }
                    });

                    return user;
               });

               this.post("/address/remove/:id", (schema, request) => {
                    let id = request.params.id;
                    let reqIndex = JSON.parse(request.requestBody);
                    let user = schema.users.findBy({ user_ID: Number(id) });

                    let next_list_address = user.attrs.user_list_address.filter(
                         (item, index) => index !== reqIndex.index
                    );
                    user.update({
                         user_list_address: next_list_address,
                    });
                    return user;
               });

               // news
               this.namespace = "/api/news";
               this.get("/", (schema, request) => {
                    return schema.news.all();
               });
               this.post("/comment", (schema, request) => {
                    let newComment = JSON.parse(request.requestBody);
                    const user_comment = newComment.user_comment;
                    const id = newComment.id;
                    let all_comment = schema.news.all();
                    const findBlog = all_comment.models.findIndex((item) => {
                         return item.id === id;
                    });
                    all_comment.models[findBlog].comments.push(user_comment);
                    return all_comment.models;
               });
          },
     });

     return server;
};
