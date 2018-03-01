<template>
    <div class="posts">
		<div class="posts_block" v-for="post in posts">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
		</div>
	</div>
</template>

<script>
export default {
    data () {
        return {
            posts: []
        }
    },
    created: function() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then(json => {this.posts = json});
    }
}
</script>

<style lang="scss">
    @import '../styles/_reset.scss';
    @import '../styles/_var.scss';

    .posts {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        justify-content: space-around;

        .posts_block {
            display: flex;
            flex-flow: row wrap;
            width: 25%;
            min-width: 100px;
            border: 1px solid #bf929d;
            background: linear-gradient(to top left, #703e4b, #f55f4c);
            font-size: 80%;
            @include padding (5px,5px);
            @include margin (10px,0px);
        }
    }

.posts_block:hover{
    opacity: 0.5;
}
</style>
 