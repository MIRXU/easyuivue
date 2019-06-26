<!--  -->
<template>
<div class='index'>
    <Layout style="width:100%;">
        <LayoutPanel region="north" style="height:50px;">
            <headers/>
        </LayoutPanel>
        <LayoutPanel region="south" style="height:200px;">
            <footers/>
        </LayoutPanel>
        <LayoutPanel region="west" style="width:300px;">
            <menus v-on:getMenus="nextPage"/>
        </LayoutPanel>
        <LayoutPanel region="center" >
            <router-view></router-view>
        </LayoutPanel>
    </Layout>

</div>
</template>

<script>
import headers from "@/components/headers"
import menus from "@/components/menus"
import bodys from "@/components/bodys"
import footers from "@/components/footers"
export default {
name:"INDEX",
components:{
headers,
menus,
bodys,
footers
},
data() {
return {

};
},
methods: {
    nextPage(type){
       
        if(type==='btn'){
            this.$router.push({path:'/btn'})
       }else if(type==='input'){
            this.$router.push({path:'/inputs'})
       }else if(type==='word'){
            this.$router.push({path:'/words'})
       }else if(type==='dialogs'){
            this.$router.push({path:'/dialogs'})
       }else if(type==='calendars'){
            this.$router.push({path:'/calendars'})
       }else if(type==='tables'){
            this.$router.push({path:'/tables'})
       }
    }
},
mounted() {

},
}
</script>
<style lang='less' scoped>

</style>