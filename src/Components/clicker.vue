<template>
	<div class="clicker">
        <input id="clickerInput" type="text" placeholder="Clicker Game" v-model="score">
        <button id="clickerButton" @click="onClick">{{act}}</button>
    </div>
</template>

<script>
	export default {
		data(){
			return{
                act: "Start",
				score: 0
			}
		},
		methods:{
			onClick: function() {
                this.act = "Push",
	            this.score++
                if (this.score == 1) {
                    setTimeout (() => {
                        alert(this.score)
                        this.score = 0
                        this.act = "Start"
                    }, 10000)
                }
	    	}
		}
	}
    	
</script>

<style lang="scss">
	.clicker {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 100%;

        input[type="text"] {
            border: none;
            outline: none;
            -webkit-appearance: none;
            width: 60%;
            height: 40px;
            vertical-align: middle;
            background-color: #FCE4EC;
            color: #FCE4EC;
            border: 1px solid #bf929d;
            border-radius: 10px;
            color: #221d33;
            margin-right: 3px;
            padding-left: 10px;
        }
        button {
            width: 50px;
            height: 45px;
            background: inherit;
            border: 1px solid #bf929d;
            border-radius: 10px;
            -webkit-appearance: none;
            font-size: 15px;
            color: #FCE4EC;
        }
    }
button:active, button:focus {
    outline: none;
}
button::-moz-focus-inner {
    border: 0;
}
</style>