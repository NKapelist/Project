<template lang="pug">
	div.pugTest
		input(type = "file", id = "file")
		button(id = "button", @click = "readFile") Read
		p {{ file.message }}	
</template>

<script>
export default {
  	data(){
			return {
              file: { message : ""}}
		},
		mounted() {
				let input = document.getElementById("file");
				let output = this.file;
				input.onchange = function(){
					let list = this.files;
					let file = list[0];
					let reader = new FileReader();
					reader.onloadend = function (event){
						let text = event.target.result;
						console.log(text);
						output.message = text;
					}

					reader.readAsText(file);
				}
			},
	methods:{
			readFile: function (){
				let button, input
				input = document.getElementById("file");
				button = document.getElementById("button");
			}
		}
	
}
</script>

<style lang="scss">
	.pugTest{
		display: flex;
		margin-top: 20px;
		margin-left: 40px;
	}
</style>

