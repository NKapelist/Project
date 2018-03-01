import Vue from "vue";
import VueRouter from "vue-router";
import todo from "./Components/todo";
import clicker from "./Components/clicker";
import pugTest from "./Components/pugTest";
import profile from "./Components/profile";
import posts from "./Components/posts";


Vue.use(VueRouter);

export let routes = [
    {
        path: "/",
        component: todo,
    },
    {
        path: "/clicker",
        component: clicker,
    },
    {
        path: "/pugTest",
        component: pugTest,
    },
    {
        path: "/profile",
        component: profile,
    },
    {
        path: "/posts",
        component: posts,
    },
];

export default new VueRouter({
    mode: "history",
    routes
})