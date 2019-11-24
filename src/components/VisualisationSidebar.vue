<template>
    <div>
        <div class="navbar">Navbar</div>
        <div class="sidebar-content"> 
            <div v-for="(section,idx) in sidebarContent" :key="idx" v-html="section" class="content-section"></div>    
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        sidebarContent:Array
    },
    data(){
        return{
       // List of sections needed to composite
        }
    },
    methods:{

    }
}
</script>
<style lang="scss">
@import "@/scss/variables.scss";
.sidebar-content{
    padding: 15px 15px;
    font-size: 14pt;
    font-weight: lighter;
    overflow-y: scroll;
    height:calc(100vh - #{$default-navbar-height});
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 0.7em;
    }
    &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }
}
.content-section{
    
}

</style>