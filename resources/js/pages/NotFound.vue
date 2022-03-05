<template>
<div class="container">
    <h2>Errore 404 Non siamo riusciti a trovare ciò che cercavi</h2>

    <router-link class="nav-link" :to="{ name: 'blog' }">Torna al blof per leggere contenuti interessanti</router-link>
</div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>