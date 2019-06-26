<!--  -->
<template>
<div class='words'>
    <Panel title="插件" :collapsible="false" :bodyStyle="{padding:'20px'}" >
    <div style="margin-bottom:10px">
			<TextBox placeholder="With icons" style="width:300px">
				<Addon>
					<span class="textbox-icon icon-add"></span>
					<span class="textbox-icon icon-remove"></span>
					<span class="textbox-icon icon-search"></span>
				</Addon>
			</TextBox>
		</div>
		<div style="margin-bottom:10px">
			<TextBox placeholder="Icons on left" style="width:300px">
				<Addon align="left">
					<span class="textbox-icon icon-add"></span>
					<span class="textbox-icon icon-remove"></span>
					<span class="textbox-icon icon-search"></span>
				</Addon>
			</TextBox>
		</div>
		<div style="margin-bottom:10px">
			<TextBox placeholder="With button" style="width:300px;height:30px">
				<Addon>
					<LinkButton iconCls="icon-search" :btnStyle="{borderRadius:0,borderWidth:'0 0 0 1px',width:'70px',height:'30px'}">Search</LinkButton>
				</Addon>
			</TextBox>
		</div>
		<div style="margin-bottom:10px">
			<TextBox placeholder="With button" style="width:300px;height:30px">
				<Addon align="left">
					<LinkButton iconCls="icon-search" :btnStyle="{borderRadius:0,borderWidth:'0 1px 0 0',width:'70px',height:'30px'}">Search</LinkButton>
				</Addon>
				<Addon align="right">
					<span class="textbox-icon icon-add"></span>
					<span class="textbox-icon icon-remove"></span>
					<span class="textbox-icon icon-search"></span>
				</Addon>
			</TextBox>
		</div>
    </Panel>
	  <Panel title="多行文本框" :collapsible="false" :bodyStyle="{padding:'20px'}" >
		  <div style="width:100%;max-width:400px;">
			<div style="margin-bottom:10px">
				<Label for="t1" align="top">Name:</Label>
				<TextBox inputId="t1" iconCls="icon-man" style="width:100%"></TextBox>
			</div>
			<div style="margin-bottom:10px">
				<Label for="t2" align="top">Description:</Label>
				<TextBox inputId="t2" :multiline="true" :value="description" style="width:100%;height:120px"></TextBox>
			</div>
		</div>
	  </Panel>
	  <Panel title="基本文本框" :collapsible="false" :bodyStyle="{padding:'20px'}" >
		      <div style="margin-bottom:10px;display:inline-block;margin-right:1em">
				<Label for="t1" align="top">First Name:</Label>
				<TextBox inputId="t1" v-model="fname" iconCls="icon-man" placeholder="First name"></TextBox>
				</div><div style="margin-bottom:10px;display:inline-block">
				<Label for="t2" align="top">Last Name:</Label>
				<TextBox inputId="t2" v-model="lname" placeholder="Last name"></TextBox>
				</div>
				<div style="margin-bottom:10px">
				<Label for="t3" align="top">Address:</Label>
				<TextBox inputId="t3" v-model="addr" style="width:25em"></TextBox>
				</div>
				<div style="margin-bottom:10px">
				<Label for="t4" align="top">Company:</Label>
				<TextBox inputId="t4" :disabled="true" placeholder="Company" style="width:25em"></TextBox>
				</div>
	  </Panel>
</div>
</template>

<script>

export default {
name: 'WORDS',
components: {},
data() {
return {
 description:
		"This TextBox will allow the user to enter multiple lines of text.",
		fname: "",
		lname: "",
		addr: ""
};
},
methods: {

},
mounted() {

},
}
</script>
<style lang='less' scoped>
.panel{
    margin: 10px;
}
</style>