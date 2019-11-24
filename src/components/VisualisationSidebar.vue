<template>
    <div>
        <div class="navbar">Navbar</div>
        <div class="sidebar-content"> 
            <div v-for="(section,idx) in contentArray" :key="idx" v-html="section"></div>    
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        contentArray:Array
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
.sidebar-content{
    padding: 15px 15px;
    font-size: 14pt;
    font-weight: lighter;
}

</style>