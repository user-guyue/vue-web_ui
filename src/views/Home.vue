<!--
 * @Author: your name
 * @Date: 2020-11-11 21:41:57
 * @LastEditTime: 2020-12-01 01:44:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\views\Home.vue
-->
<template>
  <div id="app" style="padding: 20px">
    <a-card title="搜索条件" :bordered="false">
      <div slot="extra">
        <a-button type="primary">查询</a-button>
      </div>
      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-row :gutter="16">
          <a-col :span="12" style="text-align: left">
            <a-form-model-item label="入库时间" :label-col="{ span: 3 }" :wrapper-col="{ span: 14 }">
              <a-range-picker
                @change="onChangeDate"
                format="YYYY-MM-DD"
                v-model="startdatedAt"
                :placeholder="['开始日期', '结束日期']"
                style="display: inline-block; width: 55%"
              />
              <a-radio-group v-model="form.radioTime" @change="onChangeRadio" button-style="solid">
                <a-radio-button :value="item.value" v-for="(item, index) in dateRadioList" :key="index"> {{ item.name }} </a-radio-button>
              </a-radio-group>
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="作业编号">
              <a-input v-model="form.jobNo" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="进仓编号">
              <a-input v-model="form.enterNo" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="客户委托">
              <a-input v-model="form.customer" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="内部编号">
              <a-input v-model="form.interNo" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6">
            <a-form-model-item label="箱号">
              <a-input v-model="form.contrNo" />
            </a-form-model-item>
          </a-col>
          <a-col :span="6" style="text-align: left">
            <a-form-model-item label="业务类型">
              <a-switch v-model="form.delivery" />
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
    </a-card>
    <a-card title="搜索结果">
      <div slot="extra">
        <a-button type="primary" ghost class="marginRight10"
        @click="newRecord"><a-icon type="plus" />新建</a-button>
        <a-button type="danger" class="marginRight10" :disabled="!hasSelected"
        @click="delList"><a-icon type="delete" />批量删除</a-button>
        <a-button type="primary" :disabled="!hasSelected">出场</a-button>
      </div>
      <a-table
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columnTitle"
        :data-source="dataInfo"
      >
        <a slot="name" slot-scope="text">{{ text }}</a>
        <div slot="action" slot-scope="text, record, index">
          <a class="marginRight10" @click="editRecord(record, index)">编辑</a>
          <a class="error-color" @click="delRecord(record, index)">删除</a>
        </div>
      </a-table>
      <a-modal :title="modelTitle" :visible="visible" okText = "保存" cancelText = "取消" @ok="handleOk" @cancel="handleCancel">
        <a-form-model ref="ruleForm" :rules="rules" :model="formModel" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="进仓编号" prop="enterNo">
            <a-input v-model="formModel.enterNo" />
          </a-form-model-item>
          <a-form-model-item label="委托客户" prop="customer">
            <a-input v-model="formModel.customer" />
          </a-form-model-item>
          <a-form-model-item label="状态" prop="status">
            <a-input v-model="formModel.status" />
          </a-form-model-item>
          <a-form-model-item label="入库时间" prop="storageTime">
            <a-input v-model="formModel.storageTime" />
          </a-form-model-item>
          <a-form-model-item label="进场时间" prop="enterDate">
            <a-input v-model="formModel.enterDate" />
          </a-form-model-item>
        </a-form-model>
      </a-modal>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      form: {
        radioTime: '2',
        jobNo:'',
        enterNo:'',
        customer:'',
        interNo: '',
        contrNo: '',
        delivery: true,
      },
      formModel: {
        enterNo:'',
        customer: '',
        status: '',
        storageTime:'',
        enterDate:''
      },
       rules: {
        enterNo: [{ required: true, message: '请填写进仓编号', trigger: 'blur' }],
        customer: [{ required: true, message: '请填写委托客户', trigger: 'blur' }],
        status: [{ required: true, message: '请填写状态', trigger: 'blur' }],
        storageTime: [{ required: true, message: '请选择入库时间', trigger: 'blur' }],
        enterDate: [{ required: true, message: '请选择进场时间', trigger: 'blur' }]
       },
      startdatedAt:[],
      dateRadioList: [
        {
          name: "昨天",
          value: "1",
        },
        {
          name: "今天",
          value: "2",
        },
        {
          name: "明天",
          value: "3",
        },
      ],
      // 标题
      columnTitle: [
        {
          title: "#",
          dataIndex: "num",
        },
        {
          title: "作业编号",
          dataIndex: "jobNo",
        },
        {
          title: "进仓编号",
          dataIndex: "enterNo",
        },
        {
          title: "委托客户",
          dataIndex: "customer",
        },
        {
          title: "状态",
          dataIndex: "status",
        },
        {
          title: "入库时间",
          dataIndex: "storageTime",
        },
        {
          title: "进场时间",
          dataIndex: "enterDate",
        },
        {
          title: "出场时间",
          dataIndex: "leaveDate",
        },
        {
          title: "箱号",
          dataIndex: "contrNo",
        },
        {
          title: "客户编号",
          dataIndex: "customerNo",
        },
        {
          title: "应收费用状态",
          dataIndex: "receivable",
        },
        {
          title: "应付费用状态",
          dataIndex: "payable",
        },
        {
          title: "操作",
          dataIndex: "action",
          scopedSlots: { customRender: "action" },
        },
      ],
      dataInfo: [],
      // table选中项
      selectedRowKeys: [],
      modelTitle:'',
      visible: false,
      modelKey: null
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  created() {
    this.getDataInfo()
  },
  methods: {
    // 日期选择
    onChangeRadio(e) {
      console.log(`checked = ${e.target.value}`);
    },
    // 开始时间-结束时间
    onChangeDate(date, dateString) {
      console.log(date, dateString);
      console.log(this.startdatedAt)
    },
    // table选中项
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    // 获取到table数据
    getDataInfo() {
      const items = [
        {
          num: '1',
          jobNo: 'job1',
          enterNo: '',
          customer: 'xiaohong',
          status: '已完成',
          storageTime: '',
          enterDate: '',
          leaveDate: '',
          contrNo: '',
          customerNo: '',
          receivable: '',
          payable: ''
        },
        {
          num: '2',
          jobNo: 'job2',
          enterNo: '',
          customer: 'xiaohong',
          status: '已完成',
          storageTime: '',
          enterDate: '',
          leaveDate: '',
          contrNo: '',
          customerNo: '',
          receivable: '',
          payable: ''
        },
        {
          num: '3',
          jobNo: 'job3',
          enterNo: '',
          customer: 'xiaohong',
          status: '已完成',
          storageTime: '',
          enterDate: '',
          leaveDate: '',
          contrNo: '',
          customerNo: '',
          receivable: '',
          payable: ''
        }
      ]
      const dataTable = []
      items.forEach((item, index) => {
        const data = {
          key:index,
          num:index+1,
          jobNo: item.jobNo,
          enterNo: item.enterNo,
          customer: item.customer,
          status: item.status,
          storageTime: item.storageTime,
          enterDate: item.enterDate,
          leaveDate:item.leaveDate,
          contrNo:item.contrNo,
          customerNo:item.customerNo,
          receivable: item.receivable,
          payable: item.payable
        }
        dataTable.push(data)
      })
      // 将数据赋值给页面
      this.dataInfo = dataTable
    },
    // 新建
    newRecord() {
      this.modelTitle = '新增'
      this.modelKey = null
      this.visible = true
    },
    // 批量删除
    delList() {},
    // 编辑
    editRecord(record, index) {
      this.modelTitle = '编辑'
      this.modelKey = index
      this.visible = true
      const param = this.formModel
      const item = this.dataInfo[index]
      param.enterNo = item.enterNo
      param.customer = item.customer
      param.status = item.status
      param.storageTime = item.storageTime
      param.enterDate = item.enterDate
    },
    // 删除
    delRecord(record, index) {
      this.$confirm({
        title: '提示',
        content: '确定要删除此条数据吗?',
        okType: 'danger',
        type:'error',
        okText: '删除',
        cancelText: '取消',
        onOk:() => {
          this.dataInfo.splice(index,1)
        },
        onCancel: ()=> {
        }
      })
    },
    // model框保存
    handleOk() {
      const key = this.modelKey
      if(typeof key === 'number'){
        // 编辑
        const param = this.formModel
        const item = this.dataInfo[key]
        item.enterNo = param.enterNo
        item.customer = param.customer
        item.status = param.status
        item.storageTime = param.storageTime
        item.enterDate = param.enterDate
        this.visible = false
      } else {
        // 新增
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            const record = Object.assign({}, this.formModel)
            this.dataInfo.push(record)
            this.visible = false
          } else {
            return false;
          }
        })
      }
    },
    // model框取消
    handleCancel() {
      // 取消验证规则
      this.$refs.ruleForm.resetFields();
      this.visible = false
    }
  },
};
</script>
<style lang="less" scoped>
.ant-form-item {
  margin-bottom: 4px;
}
</style>
