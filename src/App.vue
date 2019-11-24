<template>
    <div id="app">
        <visualisation-sidebar class="vis-sidebar" :title="title" :sidebarContent="getSidebarContent" :style="{width:getSidebarWidth}"></visualisation-sidebar>
        <visualisation-content class="vis-content" :title="title" :componentArray="getComponentNameArray" :style="{width:getContentWidth}"></visualisation-content>
        
    </div>
</template>

<script>
import VisualisationContent from "./components/VisualisationContent.vue";
import VisualisationSidebar from "./components/VisualisationSidebar.vue";

const page_context = require.context(
    "html-loader!./visualisation_pages",
    false,
    /\w+\.(html)$/
)

export default {
    name: 'app',
    components:{
        "visualisation-content":VisualisationContent,
        "visualisation-sidebar":VisualisationSidebar
    },
    data(){ 
        return{
            title:"Visualisation Title",
            split_ratio:0.4,
            vis_pages:[
                {
                    title:"Page 1",
                    contentPath:"./page1content.html",
                    componentName:"page1"
                },
                {
                    title:"Page 2",
                    contentPath:"./page2content.html",
                    componentName:"page2"
                }
            ]
        }
    },
    created(){
        for(let path of this.vis_pages){
            path.content = page_context(path.contentPath);
        }
    },
    computed:{
        getContentWidth(){
            return (1-this.split_ratio) * 100 + "%";
        },
        getSidebarWidth(){
            return this.split_ratio * 100 + "%";
        },
        getComponentNameArray(){
            return this.vis_pages.map(x => x.componentName)
        },
        getSidebarContent(){
            return this.vis_pages.map(x=>x.content);
        }
        
    }
}
</script>

<style lang="scss">
@import "./scss/variables.scss";
@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

*{
    margin:0;
    padding:0;
    font-family: "Fira Sans",'Trebuchet MS', sans-serif;

}
.vis-content{

    height:100vh;
    float:right;
}
.fullscreen{
    width:100%;
}
.vis-sidebar{
    height:100vh;
    float:left;
    box-shadow: 1px 0px 10px 0px rgba(224,224,224,1);
}
.navbar{
    height:$default-navbar-height;
    background-color: $imperial-blue;
    color:white;
}
</style>
