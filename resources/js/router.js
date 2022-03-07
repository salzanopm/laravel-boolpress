import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Blog from './pages/Blog.vue';
import LatestNews from './pages/LatestNews.vue';
import PostDetails from './pages/PostDetails.vue';
import TagsList from './pages/TagsList.vue';
import TagDetails from './pages/TagDetails.vue';
import NotFound from './pages/NotFound.vue';

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        },
        {
            path: "/latest-news",
            name: "latest-news",
            component: LatestNews
        },
        {
            path: "/blog/:slug",
            name: "post-details",
            component: PostDetails
        },
        {
            path: "/tags",
            name: "tags-list",
            component: TagsList
        },
        {
            path: "/tags/:slug",
            name: "tag-details",
            component: TagDetails
        },
        {
            path: "/*",
            name: "not-found",
            component: NotFound
        }
        
        
    ]
});
export default router;