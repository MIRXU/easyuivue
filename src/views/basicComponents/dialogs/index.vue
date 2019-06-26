<!--  -->
<template>
<div class='dialogs'>
     <Panel title="基础弹框" :collapsible="false" :bodyStyle="{padding:'20px'}" >
         <LinkButton :toggle="false" :selected="false" @click="showDialog()">对话框弹框</LinkButton>
          <LinkButton  :toggle="false" :selected="false" @click="showDialog1()">带输入框的自定义弹框</LinkButton>
          <LinkButton  :toggle="false" :selected="false" @click="showDialog2()">消息弹框</LinkButton>
          <LinkButton  :toggle="false" :selected="false" @click="showDialog3()">带输入框的消息弹框</LinkButton>
         <Dialog ref="d1"
            :title="'对话框标题'"
            :dialogStyle="{width:'400px',height:'200px'}"
            :modal="false"
            :draggable="false"
            :closed="isClosed"
            :resizable="false">
            <p style="text-align:center;margin:50px 0;font-size:16px">对话框内容。</p>
        </Dialog>
        <Dialog 
				borderType="none"
				:dialogStyle="{width:'400px'}"
                :closed="isClosed1"
				:modal="true">
			    <div style="padding:0 20px">
				<div class="mytitle">提示</div>
				<div class="mytext">
					<p>请输入你的邮箱.</p>
				</div>
				<TextBox placeholder="请输入你的邮箱" style="width:100%"></TextBox>
				<LinkButton btnCls="c5" style="width:100%;height:34px;margin:40px 0" @click="showDialog1">点击!</LinkButton>
			</div>
		</Dialog>

     </Panel>
      <Panel title="弹出消息框" :collapsible="false" :bodyStyle="{padding:'20px'}" >
          <LinkButton @click="alert1()">弹框</LinkButton>
            <LinkButton @click="alert2()">错误</LinkButton>
            <LinkButton @click="alert3()">消息</LinkButton>
            <LinkButton @click="alert4()">问题</LinkButton>
            <LinkButton @click="alert5()">警告</LinkButton>
      </Panel>
      <Panel title="自定义消息框" :collapsible="false" :bodyStyle="{padding:'20px'}" >
          <LinkButton @click="alert()">自定义弹框</LinkButton>
		<LinkButton @click="confirm()">自定义确认</LinkButton>
      </Panel>
</div>
</template>

<script>

export default {
name: 'DIALOGS',
components: {},
data() {
return {
    isClosed:true,
    isClosed1:true
};
},
methods: {
showDialog(){
   this.isClosed=!this.isClosed
},
showDialog1(){
 this.isClosed1=!this.isClosed1
},
showDialog2(){
    this.$messager.confirm({
        title: "Confirm",
        msg: "Are you confirm this?",
        result: r => {
          if (r) {
            alert("confirmed: " + r);
          }
        }
      });
},
showDialog3(){
    this.$messager.prompt({
        title: "Prompt",
        msg: "Please type something",
        result: r => {
          if (r) {
            alert("you type: " + r);
          }
        }
      });
},
alert1() {
      this.$messager.alert({
        title: "Alert",
        msg: "Here is a message!"
      });
    },
    alert2() {
      this.$messager.alert({
        title: "Error",
        icon: "error",
        msg: "Here is an error message!"
      });
    },
    alert3() {
      this.$messager.alert({
        title: "Info",
        icon: "info",
        msg: "Here is a info message!"
      });
    },
    alert4() {
      this.$messager.alert({
        title: "Question",
        icon: "question",
        msg: "Here is a question message!"
      });
    },
    alert5() {
      this.$messager.alert({
        title: "Warning",
        icon: "warning",
        msg: "Here is a warning message!"
      });
    },
     alert() {
      this.$messager.alert({
        showHeader: false,
        borderType: "none",
        title: "Alert",
        msg: "Here is a message!"
      });
    },
    confirm() {
      this.$messager.confirm({
        showHeader: false,
        borderType: "none",
        title: "Confirm",
        msg: "Are you confirm this?",
        result: r => {
          if (r) {
            alert("confirmed: " + r);
          }
        }
      });
    }
},
mounted() {

},
}
</script>
<style lang='less' scoped>
.panel{
    margin: 10px;
}
.mytitle {
  font-size: 27px;
  margin-top: 50px;
  text-align: center;
}
.mytext {
  font-size: 16px;
  text-align: center;
  margin: 20px 0;
}
//自定义消息弹框
.m-content {
  padding: 10px 10px;
  text-align: center;
}
.m-content h2 {
  font-size: 24px;
  margin: 10px 0;
}
.m-content p {
  font-size: 16px;
  color: #464646;
}
.m-buttons {
  margin: 25px 0 15px 0;
}
.m-buttons .l-btn {
  width: 80px;
  margin: 0 8px;
}
</style>