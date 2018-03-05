import Vue from "vue";
import VueRouter from "vue-router";
import PIXI from 'pixi.js';

import todo from "./Components/todo";
import clicker from "./Components/clicker";
import pugTest from "./Components/pugTest";
import profile from "./Components/profile";
import posts from "./Components/posts";
import draw from "./Components/draw";

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
    {
        path: "/draw",
        component: draw,
    },
];

export default new VueRouter({
    // mode: "history",
    routes
})