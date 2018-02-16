export default {
	render: function(data){
		// var body = document.body;
		var body = document.getElementsByClassName("main_content_container")[0];
		// data.forEach (function (el){
		// 	body.appendChild(el);
		// });
		data.map(el => {
        	let div = document.createElement("div");
        	let h3 = document.createElement("h3");
        	let p = document.createElement("p");
        	h3.innerHTML = el.title;
        	p.innerHTML = el.body;
        	div.appendChild(h3);
			div.appendChild(p);
			div.classList.add('posts_container');
        	return div;
        }).forEach(el => {
        	body.appendChild(el);

        });
        
    }
};