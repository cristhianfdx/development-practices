<template lang="html">
     <div class="album">         
        <h3>{{album.title}}</h3>
        <a href="#">Ver Album</a>
    </div>
</template>

<script>

    export default{
        name: 'AlbumCard',
        props:{
            album : Object
        }
    }

</script>

<style>

</style>