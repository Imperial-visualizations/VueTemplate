<template>
    <div>
        Hello world!
        <div id = "hi"></div>
    </div>
</template>
<script>

import Plotly from "plotly.js-dist";

export default{
    mounted(){
        // Mounted method is called when your visualisation page is loaded for the first time
        // This is akin to the $document.ready in jQuery.
        

        var data = [{x:[0,1,2], y:[3,2,1], type: 'bar'}];
        Plotly.newPlot("hi",data);
    }
}

</script>
<style scoped>
div{
    color:red;
}
</style>