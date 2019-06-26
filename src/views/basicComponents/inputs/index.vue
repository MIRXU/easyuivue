<!--  -->
<template>
<div class='inputs'>
     <Panel title="使用工具提示验证表单" :collapsible="false" :bodyStyle="{padding:'20px'}" >
        <Form ref="form" :model="user" :rules="rules" @validate="errors=$event">
        <div style="margin-bottom:20px">
            <Label for="name" align="top">Name:</Label>
            <TextBox inputId="name" name="name" v-model="user.name" v-Tooltip="getTipOpts('name')"></TextBox>
        </div>
        <div style="margin-bottom:20px">
            <Label for="email" align="top">Email:</Label>
            <TextBox inputId="email" name="email" v-model="user.email" v-Tooltip="getTipOpts('email')"></TextBox>
        </div>
        <div style="margin-bottom:20px">
            <Label for="hero" align="top">Select a hero:</Label>
            <ComboBox inputId=hero name="hero" :data="heroes" v-model="user.hero" v-Tooltip="getTipOpts('hero')"></ComboBox>
        </div>
        <div style="margin-bottom:20px">
            <CheckBox inputId="accept" name="accept" v-model="user.accept"></CheckBox>
            <Label for="accept">Accept Me</Label>
        </div>
        <div style="margin-bottom:20px">
            <LinkButton :disabled="false" @click="submitForm()">Submit</LinkButton>
        </div>
        </Form>
    </Panel>
    <Panel title="验证表单" :collapsible="false" :bodyStyle="{padding:'20px'}" >
      <Form ref="form" :model="user" :rules="rules" @validate="errors=$event">
      <div style="margin-bottom:20px">
        <Label for="name" align="top">Name:</Label>
        <TextBox inputId="name" name="name" v-model="user.name"></TextBox>
        <div class="error">{{getError('name')}}</div>
      </div>
      <div style="margin-bottom:20px">
        <Label for="email" align="top">Email:</Label>
        <TextBox inputId="email" name="email" v-model="user.email"></TextBox>
        <div class="error">{{getError('email')}}</div>
      </div>
      <div style="margin-bottom:20px">
        <Label for="hero" align="top">Select a hero:</Label>
        <ComboBox inputId=hero name="hero" :data="heroes" v-model="user.hero"></ComboBox>
        <div class="error">{{getError('hero')}}</div>
      </div>
      <div style="margin-bottom:20px">
        <CheckBox inputId="accept" name="accept" v-model="user.accept"></CheckBox>
        <Label for="accept">Accept Me</Label>
      </div>
      <div style="margin-bottom:20px">
        <LinkButton :disabled="false" @click="submitForm()">Submit</LinkButton>
      </div>
    </Form>
    </Panel>
     <Panel title="基本表单" :collapsible="false" :bodyStyle="{padding:'20px'}" >
       <Form :model="user">
			<div style="margin-bottom:20px">
				<Label for="name" align="top">Name:</Label>
				<TextBox inputId="name" v-model="user.name"></TextBox>
			</div>
			<div style="margin-bottom:20px">
				<Label for="email" align="top">Email:</Label>
				<TextBox inputId="email" v-model="user.email"></TextBox>
			</div>
			<div style="margin-bottom:20px">
				<Label for="hero" align="top">Select a hero:</Label>
				<ComboBox inputId=hero :data="heroes" v-model="user.hero"></ComboBox>
			</div>
			<div style="margin-bottom:20px">
				<CheckBox inputId="accept" v-model="user.accept"></CheckBox>
				<Label for="accept">Accept Me</Label>
			</div>
			<div style="margin-bottom:20px">
				<LinkButton :disabled="false" @click="submitForm()">Submit</LinkButton>
			</div>
		</Form>
     </Panel>
</div>
</template>

<script>

export default {
name: 'INPUTS',
components: {},
data() {
return {
 user: {
        name: null,
        email: null,
        hero: null,
        accept: false
      },
      rules: {
        name: ["required", "length[5,10]"],
        email: "email",
        hero: "required"
      },
      errors: {},
      heroes: [
        { value: 11, text: "Mr. Nice" },
        { value: 12, text: "Narco" },
        { value: 13, text: "Bombasto" },
        { value: 14, text: "Celeritas" },
        { value: 15, text: "Magneta" },
        { value: 16, text: "RubberMan" },
        { value: 17, text: "Dynama" },
        { value: 18, text: "Dr IQ" },
        { value: 19, text: "Magma" },
        { value: 20, text: "Tornado" }
      ]
};
},
methods: {
getError(name) {
      return this.errors[name] && this.errors[name].length
        ? this.errors[name][0]
        : null;
    },
    hasError(name) {
      return this.getError(name) != null;
    },
    getTipOpts(name) {
      return {
        content: this.getError(name),
        closed: !this.hasError(name),
        position: "right"
      };
    },
    submitForm() {
      this.$refs.form.validate(valid => {});
    }
},
mounted() {
this.$refs.form.validate();
},
}
</script>
<style lang='less' scoped>
.error {
  color: red;
  font-size: 12px;
  margin: 4px 0;
}
.panel{
    margin: 10px;
}
</style>