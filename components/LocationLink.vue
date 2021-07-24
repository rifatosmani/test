<template>
        <a target="_blank" :href="'https://www.google.it/maps/place/' + this.name" class="greyborderBtn"><span class="fa">></span>&nbsp; View on Google Maps</a>
</template>

<script>
export default ({
    props:["name"],
})
</script>

<style  scoped>
.greyborderBtn {
    color: #4d4d4d;
    padding: 5px 20px;
    border: 1px solid #91969B;
    display: inline-block;
    cursor: pointer;
}

</style>