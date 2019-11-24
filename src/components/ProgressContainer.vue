<template>
    <div class="vis-container">
        <div class="progress-container">
            <div class="overlay">
                <button v-for="(title,idx) in titles" :key="idx" :class="[overlay-button,currentTitle===idx? 'activeButton':'']" >{{title}}</button>
            </div>
            <meter v-for="(title,idx) in titles" :key="idx" :class="[currentTitile === idx? 'activeMeter' : '']"
                    :min="sectionTops[idx]" :max="sectionBottoms[idx]" :value = "scrollPos"></meter>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        currentTitle:Array,
        scrollPos:Number
    },
    methods:{
        scrollTo(e){

        },
        hoverPosUpdate(e)
    }
}
</script>
<style lang="scss">

</style>