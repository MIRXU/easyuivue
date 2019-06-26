<!--  -->
<template>
<div class=''>
   
     <Panel title="日历" :collapsible="false" :bodyStyle="{padding:'20px'}" >
         <ul>
             <li>
                  <p>每周第一天</p>
  
         <Calendar :selection="value" :firstDay="firstDay" @selectionChange="value=$event" style="width:250px;height:250px"></Calendar>
             <ComboBox :data="data" v-model="firstDay" :editable="false"></ComboBox>
             </li>
             <li>
                 <p>日历周号</p>
<Calendar :selection="value" :showWeek="true" weekNumberHeader="Wk" @selectionChange="value=$event" style="width:250px;height:250px"></Calendar>
             </li>
             <li>
                 <p>模板</p>
                   <Calendar :selection="value" @selectionChange="value=$event" style="width:250px;height:250px">
			<template slot-scope="{date}">
				<span :class="{'sdc':isSpecialDate(date)}">{{date.getDate()}}</span>
			</template>
		</Calendar>
             </li>
             <li>
                 <p>基本日历</p>
                  <Calendar :selection="value" @selectionChange="value=$event" style="width:250px;height:250px"></Calendar>
             </li>
             <li>
                 <p>禁用日程表日期</p>
                  <Calendar :selection="value" :validator="validator" @selectionChange="value=$event" style="width:250px;height:250px"></Calendar>
             </li>
         </ul>
        

        
     </Panel>
      
</div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      value: new Date(),
      firstDay: 0,
      data: [
        { value: 0, text: "Sunday" },
        { value: 1, text: "Monday" },
        { value: 2, text: "Tuesday" },
        { value: 3, text: "Wednesday" },
        { value: 4, text: "Thursday" },
        { value: 5, text: "Friday" },
        { value: 6, text: "Saturday" }
      ]
    };
  },
  methods: {
    isSpecialDate(date) {
      let day = date.getDate();
      if (day == 10 || day == 20 || day == 30) {
        return true;
      } else {
        return false;
      }
    }
  },
  filters: {
    formatDate(date) {
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      return [m, d, y].join("/");
    }
  },
  mounted() {}
};
</script>
<style lang='less' scoped>
.panel {
  margin: 10px;
}
ul {
  li {
    float: left;
    margin-left: 30px;
  }
}
.sdc {
  background: red;
  color: #fff;
  padding: 5px;
  border-radius: 50%;
}
</style>