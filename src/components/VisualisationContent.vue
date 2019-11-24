<template>
    <div>
        <div class="navbar navbar-main-title"> {{title}} <img src="../assets/VisualisationsLogoWhite2.png"></div>
        <component class="content-section" :is="currentComponent"></component>
    </div>
</template>
<script>


export default {
    props:{
        title:String,
        componentArray:Array
    },
    components:{
        
    },
    data(){
        return {
            currentComponent:null
        }    
    },
    mounted(){
        this.currentComponent = this.componentArray[0];
    }
}
</script>
<style lang="scss">
@import "../scss/variables.scss";

.navbar-main-title{
    font-size: 20pt;
    font-weight:bolder;
    text-align: center;
    line-height: $default-navbar-height;
    img{
        float:right;
        height:100%;
        padding:7px;
        box-sizing: border-box;
        line-height: $default-navbar-height;
    }
}
.content-section{
    padding-left:10px;
}

</style>