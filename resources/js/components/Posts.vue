<template>
    <section>
        <div class="container">
            <h1>ciao sono la tua lista dei post</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Posts',
    data: function() {
        return {
            posts: []
        };
    },
    methods: {
        getPosts: function() {
            // faremo la chiamata API per prenderci i post
            axios.get('http://127.0.0.1:8000/api/posts')
            .then((response) =>  {
               this.posts = response.data.results;
              
            });
        }
    },
	created: function() {
		this.getPosts();
	}
}
</script>