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
