import model from "../models/postsInfo.js";
import view from "../views/engine.js";

let controller = {
    model, 
    view,
    work: function() {
        let result = [];
        return this.model.init().then(() => {
	 		let data = this.model.data;
	        // result = data.map(trispile);

	        this.markUp = data;

        });
    },
    render: function() {
        this.work().then(() => {
        this.view.render(this.markUp);
    })
    },
    markUp: []
};

// function trispile(el) {
//     let html;

//     if (el && el.body && el.tag) {
//         html = document.createElement("div");

//         if (typeof el.body === "object") {

//             if (el.body.length) {
//                 el.body.map(trispile).forEach(element => {
//                 	html.appendChild(element)
//                 });
//             } else {
//                 html.appendChild(trispile(el.body));
//             }
//         } else {
//             html.innerHTML = el.body;
//         }
//         if (el.src) {
//             html.setAttribute("src", el.src);
//         }
//         if (el.href) {
//             html.setAttribute("href", el.href);
//         }
//         if (el.class) {
//             html.classList.add(el.class);
//         }
//         if (el.id) {
//             html.setAttribute("id", el.id);
//         }
//     }    
//     return html ? html : el;
// }

export default controller;