<!--  -->
<template>
<div class=''>
    <Panel title="多行排序" :collapsible="false" :bodyStyle="{padding:'20px'}" >
        <DataGrid :data="data" :multiSort="true" style="height:250px">
			<GridColumn field="itemid" title="Item ID" :sortable="true"></GridColumn>
			<GridColumn field="name" title="Name" :sortable="true"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right" :sortable="true"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right" :sortable="true"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
    </Panel>
 <Panel title="数据表格选择" :collapsible="false" :bodyStyle="{padding:'20px'}" >
     <div style="margin-bottom:10px">
			<ComboBox placeholder="Select a Selection Mode"
					:data="selectionOptions" 
					v-model="selectionMode" 
					:editable="false"
					:panelStyle="{height:'auto'}"
					@valueChange="selection=null">
			</ComboBox>
		</div>
		<DataGrid style="height:250px"
				:data="data"
				:selectionMode="selectionMode"
				@selectionChange="selection=$event">
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
		<p v-if="selection">You selected: {{selectionInfo}}</p>
 </Panel>
  <Panel title="过滤" :collapsible="false" :bodyStyle="{padding:'20px'}" >
      <DataGrid ref="dg" :data="data" :filterable="true" style="min-width:700px;height:250px">
      <GridColumn field="itemid" title="Item ID"></GridColumn>
      <GridColumn field="name" title="Name"></GridColumn>
      <GridColumn field="listprice" title="List Price" align="right" :filterOperators="operators">
        <template slot="filter" slot-scope="scope">
          <NumberBox v-model="scope.column.filterValue" :precision="1" class="f-full">
          </NumberBox>
        </template>
      </GridColumn>
      <GridColumn field="unitcost" title="Unit Cost" align="right" :filterOperators="operators">
        <template slot="filter" slot-scope="scope">
          <NumberBox v-model="scope.column.filterValue" class="f-full">
          </NumberBox>
        </template>
      </GridColumn>
      <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
      <GridColumn field="status" title="Status" align="center">
        <template slot="filter">
          <ComboBox class="f-full"
              :data="status" 
              :editable="false"
              :inputStyle="{textAlign:'center'}"
              @valueChange="$refs.dg.doFilter({field:'status',op:'equal',value:$event.currentValue})">
          </ComboBox>
        </template>
      </GridColumn>
    </DataGrid>
  </Panel>
  <Panel title="分页" :collapsible="false" :bodyStyle="{padding:'20px'}" >
      <DataGrid style="height:250px"
				:pagination="true"
				:data="data"
				:total="total"
				:pageSize="pageSize"
				:pagePosition="pagePosition">
			<GridColumn field="inv" title="Inv No"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="amount" title="Amount" align="right"></GridColumn>
			<GridColumn field="price" title="Price" align="right"></GridColumn>
			<GridColumn field="cost" title="Cost" align="right"></GridColumn>
			<GridColumn field="note" title="Note"></GridColumn>
		</DataGrid>
  </Panel>
   <Panel title="数据表格样式" :collapsible="false" :bodyStyle="{padding:'20px'}" >
       <DataGrid :data="data" :rowCss="getRowCss" style="height:250px">
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right" :cellCss="getCellCss"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
   </Panel>
   <Panel title="数据表格排序" :collapsible="false" :bodyStyle="{padding:'20px'}" >
       	<DataGrid style="height:250px"
				:virtualScroll="true"
				:data="data"
				:total="total"
				:pageSize="pageSize">
			<GridColumn field="inv" title="Inv No" :sortable="true"></GridColumn>
			<GridColumn field="name" title="Name" :sortable="true"></GridColumn>
			<GridColumn field="amount" title="Amount" align="right" :sortable="true"></GridColumn>
			<GridColumn field="price" title="Price" align="right" :sortable="true"></GridColumn>
			<GridColumn field="cost" title="Cost" align="right" :sortable="true"></GridColumn>
			<GridColumn field="note" title="Note"></GridColumn>
		</DataGrid>
   </Panel>
    <Panel title="单元格编辑" :collapsible="false" :bodyStyle="{padding:'20px'}" >
        <DataGrid :data="data" :clickToEdit="true" selectionMode="cell" editMode="cell" style="height:250px">
			<GridColumn field="itemid" title="Item ID" :editable="true"></GridColumn>
			<GridColumn field="name" title="Name" :editable="true"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right" :editable="true">
				<template slot="edit" slot-scope="scope">
					<NumberBox v-model="scope.row.listprice" :precision="1"></NumberBox>
				</template>
			</GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right" :editable="true">
				<template slot="edit" slot-scope="scope">
					<NumberBox v-model="scope.row.unitcost"></NumberBox>
				</template>
			</GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%" :editable="true"></GridColumn>
			<GridColumn field="status" title="Status" align="center" :editable="true">
        <template slot="body" slot-scope="scope">
          {{scope.row.status ? 'true' : 'false'}}
        </template>
				<template slot="edit" slot-scope="scope">
					<SwitchButton v-model="scope.row.status" style="max-width:80px" onText="true" offText="false"></SwitchButton>
				</template>
			</GridColumn>
		</DataGrid>
    </Panel>
      <Panel title="行组" :collapsible="false" :bodyStyle="{padding:'20px'}" >
          <DataGrid :data="data" groupField="code" style="height:250px">
			<GridColumn :cellCss="headerStyle" width="30"></GridColumn>
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
			<template slot="group" slot-scope="scope" >
				<span style="font-weight:bold">
					{{scope.value}} - <span style="color:red">{{scope.rows.length}}</span> Item(s)
				</span>
			</template>
		</DataGrid>
      </Panel>
       <Panel title="虚拟滚动" :collapsible="false" :bodyStyle="{padding:'20px'}" >
            <DataGrid style="height:250px"
        :virtualScroll="true"
        :loading="loading"
        :data="data"
        :total="total"
        :pageSize="pageSize">
      <GridColumn field="inv" title="Inv No"></GridColumn>
      <GridColumn field="name" title="Name"></GridColumn>
      <GridColumn field="amount" title="Amount" align="right"></GridColumn>
      <GridColumn field="price" title="Price" align="right"></GridColumn>
      <GridColumn field="cost" title="Cost" align="right"></GridColumn>
      <GridColumn field="note" title="Note"></GridColumn>
    </DataGrid>
       </Panel>
        <Panel title="模板" :collapsible="false" :bodyStyle="{padding:'20px'}" >
            <DataGrid :data="data" style="height:250px">
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name" width="30%">
				<template slot="header">
					<div class="item">
						<div class="title">[Name]</div>
					</div>
				</template>
				<template slot="body" slot-scope="scope">
					<div class="item">
						<div class="title">{{scope.row.name}}</div>
						<div>{{scope.row.attr}}</div>
					</div>
				</template>
			</GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
        </Panel>
          <Panel title="行编辑" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid :data="data" :clickToEdit="true" editMode="row" style="height:250px">
			<GridColumn field="itemid" title="Item ID" :editable="true"></GridColumn>
			<GridColumn field="name" title="Name" :editable="true"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right" :editable="true">
				<template slot="edit" slot-scope="scope">
					<NumberBox v-model="scope.row.listprice" :precision="1"></NumberBox>
				</template>
			</GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right" :editable="true">
				<template slot="edit" slot-scope="scope">
					<NumberBox v-model="scope.row.unitcost"></NumberBox>
				</template>
			</GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%" :editable="true"></GridColumn>
			<GridColumn field="status" title="Status" align="center" :editable="true">
				<template slot="body" slot-scope="scope">
          {{scope.row.status ? 'T' : 'F'}}
				</template>
        <template slot="edit" slot-scope="scope">
					<CheckBox v-model="scope.row.status" style="width:20px;height:20px"></CheckBox>
				</template>
			</GridColumn>
		</DataGrid>
        </Panel>
          <Panel title="冻结数据表格中的列 - 高级" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid :data="data" style="width:600px;height:250px">
			<GridColumnGroup :frozen="true" align="left" width="200">
				<GridHeaderRow>
					<GridColumn field="itemid" title="Item ID" :frozen="true"></GridColumn>
					<GridColumn field="name" title="Name" :frozen="true"></GridColumn>
				</GridHeaderRow>
			</GridColumnGroup>
			<GridColumnGroup>
				<GridHeaderRow>
					<GridColumn field="listprice" title="List Price" align="right" width="100"></GridColumn>
					<GridColumn field="unitcost" title="Unit Cost" align="right" width="100"></GridColumn>
					<GridColumn field="attr" title="Attribute" width="200"></GridColumn>
				</GridHeaderRow>
			</GridColumnGroup>
			<GridColumnGroup :frozen="true" align="right" width="100">
				<GridHeaderRow>
					<GridColumn field="status" title="Status" align="center"></GridColumn>
				</GridHeaderRow>
			</GridColumnGroup>
		</DataGrid>
        </Panel>
          <Panel title="行组-分页" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid style="height:250px"
        groupField="group"
				:pagination="true"
				:data="data"
				:total="total"
				:pageSize="pageSize"
        :pageLayout="pageLayout"
    >
			<GridColumn field="inv" title="Inv No"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="amount" title="Amount" align="right"></GridColumn>
			<GridColumn field="price" title="Price" align="right"></GridColumn>
			<GridColumn field="cost" title="Cost" align="right"></GridColumn>
			<GridColumn field="note" title="Note"></GridColumn>
		</DataGrid>
        </Panel>
          <Panel title="列组" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid :data="data" style="height:250px">
			<GridColumnGroup>
				<GridHeaderRow>
					<GridColumn :rowspan="2" field="itemid" title="Item ID"></GridColumn>
					<GridColumn :rowspan="2" field="name" title="Name"></GridColumn>
					<GridColumn :colspan="4" title="Item Details"></GridColumn>
				</GridHeaderRow>
				<GridHeaderRow>
					<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
					<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
					<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
					<GridColumn field="status" title="Status" align="center"></GridColumn>
				</GridHeaderRow>
			</GridColumnGroup>
		</DataGrid>
        </Panel>
          <Panel title="基本数据表格" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid :data="data" style="height:250px">
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
        </Panel>
          <Panel title="冻结数据表格中的列" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              	<DataGrid :data="data" style="width:600px;height:250px">
			<GridColumn field="itemid" title="Item ID" :frozen="true"></GridColumn>
			<GridColumn field="name" title="Name" :frozen="true"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right" width="100"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right" width="100"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="200"></GridColumn>
			<GridColumn field="status" title="Status" width="100"></GridColumn>
		</DataGrid>
        </Panel>
          <Panel title="行细节" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid :data="data" style="height:250px">
			<GridColumn :expander="true" width="30"></GridColumn>
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
			<template slot="detail" slot-scope="scope">
				<div class="item f-row">
					<div><img class="item-img" :src="'https://www.jeasyui.com/tutorial/datagrid/images/'+scope.row.itemid+'.png'"></div>
					<div class="f-column">
						<div class="item-desp f-full">Attribute: {{scope.row.attr}}</div>
						<div class="item-desp f-full">Status: {{scope.row.status}}</div>
					</div>
				</div>
			</template>
		</DataGrid>
        </Panel>
          <Panel title="分页—延迟加载" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid style="height:250px"
				:pagination="true"
        :lazy="true"
				:data="data"
				:total="total"
        :loading="loading"
        :pageNumber="pageNumber"
				:pageSize="pageSize"
				:pagePosition="pagePosition"
        @pageChange="onPageChange($event)">
			<GridColumn field="inv" title="Inv No"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="amount" title="Amount" align="right"></GridColumn>
			<GridColumn field="price" title="Price" align="right"></GridColumn>
			<GridColumn field="cost" title="Cost" align="right"></GridColumn>
			<GridColumn field="note" title="Note"></GridColumn>
		</DataGrid>
        </Panel>
          <Panel title="行号" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid :data="data" style="height:250px">
      <GridColumn align="center" cellCss="datagrid-td-rownumber" width="30">
				<template slot="body" slot-scope="scope">
					{{scope.rowIndex + 1}}
				</template>
			</GridColumn>
      <GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
        </Panel>
          <Panel title="虚拟滚动-延迟加载" :collapsible="false" :bodyStyle="{padding:'20px'}" >
              <DataGrid style="height:250px"
        :virtualScroll="true"
        :lazy="true"
        :loading="loading"
        :data="data"
        :total="total"
        :pageNumber="pageNumber"
        :pageSize="pageSize"
        @pageChange="onPageChange($event)">
      <GridColumn field="inv" title="Inv No"></GridColumn>
      <GridColumn field="name" title="Name"></GridColumn>
      <GridColumn field="amount" title="Amount" align="right"></GridColumn>
      <GridColumn field="price" title="Price" align="right"></GridColumn>
      <GridColumn field="cost" title="Cost" align="right"></GridColumn>
      <GridColumn field="note" title="Note"></GridColumn>
    </DataGrid>
        </Panel>
        <Panel title="页脚的行" :collapsible="false" :bodyStyle="{padding:'20px'}" >
            <DataGrid :data="data" :footerData="footerData" :showFooter="true" style="height:250px">
			<GridColumn field="itemid" title="Item ID"></GridColumn>
			<GridColumn field="name" title="Name"></GridColumn>
			<GridColumn field="listprice" title="List Price" align="right"></GridColumn>
			<GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
			<GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
			<GridColumn field="status" title="Status" align="center"></GridColumn>
		</DataGrid>
        </Panel>
</div>
</template>

<script>

export default {
name: '',
components: {},
data() {
return {
     headerStyle: {
        background: "#fafafa"
      },
   total: 1000,
      data: [],
      data1:[],
      pageSize: 20,
       selectionOptions: [
        { value: null, text: "None" },
        { value: "single", text: "Single Selection" },
        { value: "multiple", text: "Multiple Selection" },
        { value: "cell", text: "Cell Selection" },
        { value: "multicell", text: "Multiple Cells" }
      ],
      selectionMode: null,
      selection: null,
      operators: ["nofilter", "equal", "notequal", "less", "greater"],
      status: [
        { value: null, text: "All" },
        { value: "P", text: "P" },
        { value: "N", text: "N" }
      ]
};
},
computed: {
    selectionInfo() {
      if (!this.selection) {
        return null;
      }
      if (this.selectionMode == "single") {
        return this.selection.itemid;
      } else if (this.selectionMode == "multiple") {
        return this.selection.map(function(row){return row.itemid}).join(",");
      } else if (this.selectionMode == "cell") {
        return this.selection.row[this.selection.column.field];
      } else {
        return this.selection.map(function(c){return c.row[c.column.field]}).join(",");
      }
    }
  },
methods: {
 getData(total) {
      let data = [];
      for (let i = 1; i <= total; i++) {
        let amount = Math.floor(Math.random() * 1000);
        let price = Math.floor(Math.random() * 1000);
        data.push({
          inv: "Inv No " + i,
          name: "Name " + i,
          amount: amount,
          price: price,
          cost: amount * price,
          note: "Note " + i
        });
      }
      return data;
    },
    getRowCss(row) {
      if (row.itemid == "EST-11") {
        return { background: "#b8eecf", fontSize: "14px", fontStyle: "italic" };
      }
      return null;
    },
    getCellCss(row, value) {
      if (value > 30) {
        return { color: "red" };
      }
      return null;
    }
},
mounted() {

},
created() {
     this.data1 = this.getData(this.total);
    this.data = [
      {
        code: "FI-SW-01",
        name: "Koi",
        unitcost: 10.0,
        status: "P",
        listprice: 36.5,
        attr: "Large",
        itemid: "EST-1"
      },
      {
        code: "K9-DL-01",
        name: "Dalmation",
        unitcost: 12.0,
        status: "P",
        listprice: 18.5,
        attr: "Spotted Adult Female",
        itemid: "EST-10"
      },
      {
        code: "RP-SN-01",
        name: "Rattlesnake",
        unitcost: 12.0,
        status: "P",
        listprice: 38.5,
        attr: "Venomless",
        itemid: "EST-11"
      },
      {
        code: "RP-SN-01",
        name: "Rattlesnake",
        unitcost: 12.0,
        status: "P",
        listprice: 26.5,
        attr: "Rattleless",
        itemid: "EST-12"
      },
      {
        code: "RP-LI-02",
        name: "Iguana",
        unitcost: 12.0,
        status: "P",
        listprice: 35.5,
        attr: "Green Adult",
        itemid: "EST-13"
      },
      {
        code: "FL-DSH-01",
        name: "Manx",
        unitcost: 12.0,
        status: "P",
        listprice: 158.5,
        attr: "Tailless",
        itemid: "EST-14"
      },
      {
        code: "FL-DSH-01",
        name: "Manx",
        unitcost: 12.0,
        status: "P",
        listprice: 83.5,
        attr: "With tail",
        itemid: "EST-15"
      },
      {
        code: "FL-DLH-02",
        name: "Persian",
        unitcost: 12.0,
        status: "P",
        listprice: 23.5,
        attr: "Adult Female",
        itemid: "EST-16"
      },
      {
        code: "FL-DLH-02",
        name: "Persian",
        unitcost: 12.0,
        status: "P",
        listprice: 89.5,
        attr: "Adult Male",
        itemid: "EST-17"
      },
      {
        code: "AV-CB-01",
        name: "Amazon Parrot",
        unitcost: 92.0,
        status: "P",
        listprice: 63.5,
        attr: "Adult Male",
        itemid: "EST-18"
      }
    ];
}
}
</script>
<style lang='less' scoped>
.panel{
    margin: 10px;
}
</style>