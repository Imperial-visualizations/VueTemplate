
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Automatically load in components from visualisation_pages
const page_context = require.context(
    "./visualisation_pages",
    false,
    /\w+\.(vue)$/
)
page_context.keys().forEach(filename=>{
    const componentConfig = page_context(filename)
    const name = filename.split("/").pop().replace(/\.\w+$/,"")

    Vue.component(name,componentConfig.default || componentConfig);
});

new Vue({
    render: h => h(App),
}).$mount('#app')

