import './styles/styles.scss';
import ctrl from "./controllers/builderCtrl.js";
import "./controllers/clickerCtrl.js";
import "./posts.js";
import Vue from "vue/dist/vue.min.js";
import "./toDoList.js";

// ctrl.render();

new Vue({
	el: "#app",
	data: {
		message: "Hello world"
	}
})

var app2 = new Vue({
  el: '#app2',
  data: {
    score: 0
  },
  methods: {
    click: function () {
      this.score = this.score + 1
    }
  }
})

