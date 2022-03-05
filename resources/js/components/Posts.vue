<template>
    <section>
        <div class="container">
            <h1>ciao sono la tua lista dei post</h1>
            <div class="row row-cols-3">
                <!-- single post card -->
                <div v-for="post in posts" :key="post.id" class="col">
                    <div class="card my-2">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h5 class="card-title">{{post.title}}</h5>
                            <p class="card-text">{{ truncateText(post.content, 50) }}</p>
                        </div>
                        <!-- <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul> -->
                        <!-- <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div> -->
                    </div>
                </div>
                <!-- end single post card -->
            </div>
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
            .then((response) => {
               this.posts = response.data.results.data;
            });
        },
        truncateText: function(text, maxCharsNumber) {
            // prende un testo se il testo è più lungo di x caratteri
            // lo taglio e aggiunge  3 puntini alla fine
            if(text.length > maxCharsNumber) {
                return text.substr(0, maxCharsNumber) + '...';
            }

            return text;
        }
    },
	created: function() {
		this.getPosts();
	}
}
</script>