<!--  -->
<template>
<div class='btn'>
    <Panel title="基础点击按钮" :collapsible="false" :bodyStyle="{padding:'20px'}" >
        <LinkButton iconCls="icon-add" :toggle="true" :selected="true">添加</LinkButton>
        <LinkButton iconCls="icon-remove" :toggle="true">移除</LinkButton>
        <LinkButton iconCls="icon-save" :toggle="true">保存</LinkButton>
        <LinkButton iconCls="icon-cut" :toggle="true">剪贴</LinkButton>
    </Panel>
     <Panel title="单选框按钮" :collapsible="false" :bodyStyle="{padding:'20px'}" >
        <div v-for="fruit in fruits" :key="fruit" style="margin-bottom:10px">
            <RadioButton name="group1" :inputId="fruit" :value="fruit" v-model="value"></RadioButton>
            <Label :for="fruit">{{fruit}}</Label>
        </div>
    </Panel>
    <Panel title="复选框按钮" :collapsible="false" :bodyStyle="{padding:'20px'}">
        <div v-for="fruit in fruits" :key="fruit" style="margin-bottom:10px">
            <CheckBox :inputId="fruit" :value="fruit" :multiple="true" v-model="values"></CheckBox>
            <Label :for="fruit">{{fruit}}</Label>
        </div>
    </Panel>
     <Panel title="开关按钮风格" :collapsible="false" :bodyStyle="{padding:'20px'}" >
         <SwitchButton inputId="s1"></SwitchButton>
         <SwitchButton inputId="s2" class="rounded" :value="true"></SwitchButton>
     </Panel>
      <Panel title="文件按钮" :collapsible="false" :bodyStyle="{padding:'20px'}" >
      <FileButton style="width:100px" @select="onFileSelect($event)">选择文件</FileButton>
      </Panel>
</div>
</template>

<script>

export default {
name: 'BTN',
components: {},
data() {
return {
    value:'',
    values:'',
    fruits:['apple','banner','pie']
};
},
methods: {

},
mounted() {

},
}
</script>
<style lang='less' scoped>
.btn{
    .l-btn{
        margin: 20px;
    }
}
.panel {
    margin: 10px;
}
.rounded.switchbutton {
  border-radius: 30px;
}
.rounded.switchbutton .switchbutton-handle {
  border-radius: 30px;
}
</style>