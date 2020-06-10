<template>
  <div class="refundDetail">
    <!--头部-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">退款管理</el-breadcrumb-item>
      <el-breadcrumb-item>退款详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!--审核过程-->
    <div class="steps">
      <el-steps :active="1"  simple>
        <el-step :title=" date+ ' 提交申请'">
        </el-step>
        <el-step :title=" date+' 受理申请'">
        </el-step>
        <el-step :title=" date+' 售后核查'">
        </el-step>
        <el-step :title=" date +' 成功退款'">
        </el-step>
      </el-steps>
    </div>
    <!--当前退款状态-->
    <div class="bg-refundStatus">
      <p>当前退款状态:{{refundStatus}}</p>
      <div v-if="rStatus" class="showDiffSta publicPadding">
        <ul>
          <li>请您在进行同意或拒绝操作前，尽量充分于买家沟通达成一致，避免误解。</li>
          <li>尽量在买家退还货物后，同意退款，避免钱货两空!</li>
        </ul>
        <!--按钮-->
        <div>
          <el-button plain>同意退款</el-button>
          <el-button plain>拒绝退款</el-button>
        </div>
      </div>
      <div v-if="isClose">
        <ul>
          <li>关闭原因: {{closeResult}}</li>
        </ul>
      </div>
    </div>
    <!--退款信息-->
    <div id="refundInfo" class="publicPadding">
      <!--退款信息-->
      <div>
        <!--标题-->
        <div><h3>退款信息</h3></div>
        <div>
          <p>退款编号：{{refundInfo.id}}</p>
          <p>退款发起:{{refundInfo.opertor}}</p>
          <p>申请退款时间: {{refundInfo.date}}</p>
          <p>退款状态:{{refundInfo.status}}</p>
          <p>退款金额: {{refundInfo.money}}</p>
          <p>退款原因:{{refundInfo.result}}</p>
          <p>退款说明：{{refundInfo.msg}}</p>
        </div>
      </div>
      <!--退款协议记录-->
      <div>
        <!--标题-->
        <div>
          <el-row>
            <el-col :span="20"><h3>退款协议记录</h3></el-col>
            <el-col :span="4"><el-button @click="hideTable()" v-if="hideProInfo">收起</el-button></el-col>
            <el-col :span="4"><el-button @click="showTable()">展开</el-button></el-col>
          </el-row>
        </div>
        <!--处理表-->
        <el-table
                :data="processData"
                v-if="hideProInfo"
                style="width: 100%">
          <el-table-column
                  prop="date"
                  label="处理时间"
                  width="380">
          </el-table-column>
          <el-table-column
                  prop="info"
                  label="处理信息"
                  width="380">
          </el-table-column>
          <el-table-column
                  prop="operter"
                  label="操作人">
          </el-table-column>
        </el-table>
      </div>
      <!--订单信息-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "refundDetail",
    data(){
      return{
        date:'2019/1/1',
        refundStatus:'运营后台申请退款，等待处理',
        rStatus:true,
        closeResult:'沟通不好',
        isClose:false,
        refundInfo:{
          id:1,
          opertor:'运营后台申请退款',
          date:'2016-09-14 16:04:05',
          status:'退款成功',
          money:'25. 00元',
          result:'卖家缺货 ',
          msg:'vvv'


        },
        processData:[
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'},
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'},
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'},
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'}
        ],
        hideProInfo:true//退款协议记录是否隐藏
      }
    },
    methods:{
      hideTable(){
        console.log('hideTable')
        this.hideProInfo = false
      },
      showTable(){
        this.hideProInfo = true
      }
    }
  }
</script>

<style scoped>
/*步骤条*/
  .steps{
    margin-top: 26px;
  }
  .bg-refundStatus{
    background-color: #F5F7FA;
  }
.publicPadding{
  padding-left: 30px;
}
  /*退款信息*/
  #refundInfo>div>div:nth-of-type(1){
    border-bottom: 1px solid #F5F7FA;
  }
</style>