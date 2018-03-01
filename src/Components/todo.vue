<template>

	<div class="toDoList" >
        <section class="panel">	
            <input type="checkbox" id="mark-all" v-on:click="selectAll" :checked="areAllSelected">
            <input v-model="newTask" v-on:keyup.enter="addTask" placeholder="Write your tasks and press Enter..." autofocus class="text-input">
            <button v-on:click="clearList">Clear List</button>
        </section>
        <section class="list">
            <ul class="list-item">
                <li v-for="task in tasks" :class="{done: isChecked(task)}">
                    <input type="checkbox" class="checkbox" v-on:click="check" v-model="task.checked">                             
                    <input type="text" v-if="task === editingTask" v-auto-focus class="text-input" 
                        v-on:keyup.enter="endEditing(task)" v-on:blur="endEditing(task)" v-model="task.text">
                    <label for="checkbox" v-if="task !== editingTask" v-on:dblclick="editTask(task)">{{ task.text }}</label>                                
                    <button class="delete" v-on:click="removeTask(task)">X</button>
                </li>
            </ul>                   
        </section>
    </div>

</template>

<script>
	export default {
		data() {
			return {
				newTask: "",
				tasks: [
					{
						text: "This is an example task. Delete or change by double click + Enter",
						checked: false
	                },
	                {
						text: "This is an example task. Delete or change by double click + Enter",
						checked: false
	                },
	                {
						text: "This is an example task. Delete or change by double click + Enter",
						checked: false
					}
				],
				editingTask: {

				}
			}
			
        },
        
		computed: {
			areAllSelected: function () {
				return this.tasks.every(function(task) {
					return task.checked;
				}) &&  this.tasks.length > 0;
			},
        },
        
		methods: {

			addTask: function () {
				var task = this.newTask.trim();
				if (task) {
					this.tasks.push({text: task, checked: false});
					this.newTask = "";
				}
			},

			removeTask: function (task) {
        var index = this.tasks.indexOf(task);
				this.tasks.splice(index, 1);
			},

			editTask: function (task) {
				this.editingTask = task;
			},

			endEditing: function (task) {
				this.editingTask = {};
				if (task.text.trim() === ""){
					this.removeTask(task);
				}
			},

			clearList: function () {
				this.tasks = [

				];
			},

			selectAll: function (task) {
				var targetValue = this.areAllSelected ? false : true;
				for (var i = 0; i < this.tasks.length; i++) {
					this.tasks[i].checked = targetValue;
				}
			},

			check: function (task) {
				task.checked = true;
			},

			isChecked: function (task) {
				return task.checked;
			}
		}
	} 
		
</script>

<style lang="scss">
	
	.toDoList{
            width: 100%;
            height: 100%;

            .panel, li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style-type: none;
                padding: 3px;
                margin:5px;
                // margin-left: 40px;
                width: 100%;

                    .text-input {
                        width: 80%;
                        border: 1px solid #bf929d;
                        padding-left: 10px;
                        height: 20px;
                        color: #221d33;
                    }

                    button {
                        background-color: inherit;
                        color: white;
                        border: 1px solid #bf929d;
                        outline: 0;
                        width: 80px;
                        height: 25px;
                        min-width: 80px;
                        cursor: pointer;
                        font-size: 15px;
                    }
            }
            .list li {
                background: linear-gradient(to top left, #703e4b, #f55f4c);

                    button {
                        background-color: transparent;
                        border: 1px solid #703e4b;
                        color: #ddd;
                        visibility: hidden;
                        font-size: 15px;
                        font-weight: bold;
                    }
                    label {
                        padding-right: 10px;
                        display: inline-block;
                        width: 80%;
                        font-size: 15px;
                        line-height: 20px;
                        color: #fcfcfc;
                        z-index: 2;
                        overflow: hidden;
                    }
            }
            
            .list li:hover > button {
                visibility: visible;
            }
   
            .list li.done label {
                color: #d9d9d9;
                text-decoration: line-through;
            }

            .panel button:hover{
                opacity: 0.5;
            }
        }


</style>

