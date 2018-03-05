import './styles/styles';
// import ctrl from "./controllers/builderCtrl.js";
// import "./controllers/clickerCtrl.js";
// import "./posts.js";
import Vue from "vue/dist/vue.min";
import PIXI from 'pixi.js/dist/pixi.min';
// import "./toDoList.js";
// import todo from "./Components/todo";
// import clicker from "./Components/clicker";
// import pugTest from "./Components/pugTest";
// import posts from "./Components/posts";
// import profile from "./Components/profile";
import router from "./router";


new Vue ({
  router,
  el: "#application",
  template:
    `<div>
    <div class="r_links">
    <router-link to="/">ToDoList</router-link>
    <router-link to="/clicker">Clicker</router-link>
    <router-link to="/pugTest">PugTest</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/draw">Game</router-link>
    </div>
    
    <div class="r_view">
    <router-view></router-view>
    </div>
    </div>`


            // `<div>
            // <todo/>
            // <clicker/>
            // <pugTest/>
            // <profile/>
            // <posts/>
            // </div>`,
  // components :{
  //   todo : todo,
  //   clicker : clicker,
  //   pugTest : pugTest,
  //   profile : profile,
  //   posts : posts,    
  // }
  
});



// ctrl.render();

// new Vue({
// 	el: "#app",
// 	data: {
// 		message: "Hello world"
// 	}
// })

// var app2 = new Vue({
//   el: '#app2',
//   data: {
//     score: 0
//   },
//   methods: {
//     click: function () {
//       this.score = this.score + 1
//     }
//   }
// })

