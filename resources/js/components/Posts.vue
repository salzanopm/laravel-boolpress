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
                        <div class="card-body">
                            <router-link :to="{ name: 'post-details', params: { slug: post.slug } }">Leggi l'articolo</router-link>
                        </div>
                    </div>
                </div>
                <!-- end single post card -->
            </div>
            <nav>
                <ul class="pagination">
                    <!-- class disabled all li per disabilitare un link -->
                    <li  class="page-item" :class="{'disabled' : currentPage == 1 }">
                        <a @click="getPosts(currentPage - 1)" class="page-link" href="#" aria-disabled="true">Previous</a>
                    </li>
                    <li v-for="n in lastPage" :key="n" class="page-item" :class="{'active' : currentPage == n}">
                        <a @click="getPosts(n)" class="page-link" href="#">{{ n }}</a>
                    </li>
                    <li class="page-item" :class="{'disabled' : currentPage == lastPage }">
                        <a @click="getPosts(currentPage + 1)" class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Posts',
    data: function() {
        return {
            posts: [],
            currentPage: 1,
            lastPage: false
        };
    },
    methods: {
        getPosts: function(pageNumber) {
            // faremo la chiamata API per prenderci i post
            axios.get('/api/posts', {
                params: {
                    page: pageNumber
                }
            })
            .then((response) => {
               this.posts = response.data.results.data;
               this.currentPage = response.data.results.current_page;
               this.lastPage = response.data.results.last_page;
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
		this.getPosts(1);
	}
}
</script>