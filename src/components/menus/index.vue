<!--  -->
<template>
<div class='menus'>
         <SideMenu :style="{width:width+'px'}"
                :data="menus"
                @selectionChange="onItemClick($event)">
        </SideMenu>
</div>
</template>

<script>

export default {
name: 'MENUS',
components: {},
data() {
return {
        width:"240px",
        collapsed: false,
        menus: [
        {
          text: "基础控件",
          iconCls: "icon-sum",
          state: "open",
          children: [
            {
              text: "基础按钮",
              value:'btn'
            },
            {
              text: "输入框",
               value:'input'
            },
            {
              text: "文本",
              value:'word'
            },
             {
              text: "弹框",
              value:'dialogs'
            },
             {
              text: "日历",
              value:'calendars'
            },
             {
              text: "表格",
              value:'tables'
            }
          ]
        }
      ]
};
},
methods: {
    onItemClick(e){
      this.$emit('getMenus',e.value)
    }
},
mounted() {

},
}
</script>
<style lang='less' scoped>

</style>