<template>
  <div class="refundDetail">
    <!--头部-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">退款管理</el-breadcrumb-item>
      <el-breadcrumb-item>退款详情</el-breadcrumb-item>
    </el-breadcrumb>
    <!--审核过程-->
    <p>{{this.$route.params.statusId}}</p>
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
          <a href="#refundRecord"><el-button plain @click="agreeRefund()">同意退款</el-button></a>
          <a href="#refundInfo"><el-button plain @click="rejectRefund()">拒绝退款</el-button></a>
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
      <div id="refundRecord">
        <!--标题-->
        <div>
          <el-row>
            <el-col :span="20"><h3>退款协议记录</h3></el-col>
            <el-col :span="4"><el-button @click="hideTable()" v-if="hideProInfo">收起</el-button></el-col>
            <el-col :span="4"><el-button @click="showTable()" v-if="!hideProInfo">展开</el-button></el-col>
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
      <div>
        <!--标题信息-->
        <div><h3>订单信息</h3></div>
        <!--具体信息-->
        <div>
          <p>订单编号：{{orderInfo.id}}</p>
          <p>下单时间: {{orderInfo.date}}</p>
          <p>订单状态:{{orderInfo.status}}</p>
          <p>支付方式: {{orderInfo.pay}}</p>
          <p>买家昵称:{{orderInfo.buyer}}</p>
        </div>
        <!--订单表格-->
        <el-table
                :data="orderData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%; margin-top: 20px">
          <el-table-column
                  prop="id"
                  label="包裹"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="proImage"
                  label="商品图片">
          </el-table-column>
          <el-table-column
                  prop="proName"
                  label="商品名称">
          </el-table-column>
          <el-table-column
                  prop="size"
                  label="商品规格">
          </el-table-column>
          <el-table-column
                  prop="price"
                  label="单价">
          </el-table-column>
          <el-table-column
                  prop="count"
                  label="数量">
          </el-table-column>
          <el-table-column
                  prop="sendWay"
                  label="配送方式">
          </el-table-column>
          <el-table-column
                  prop="totalPrice"
                  label="总价">
          </el-table-column>
          <el-table-column
                  prop="discount"
                  label="优惠">
          </el-table-column>
        </el-table>
      </div>
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
        rowSpan:0,//记录合并的行
        refundInfo:{
          id:1,
          opertor:'运营后台申请退款',
          date:'2016-09-14 16:04:05',
          status:'退款成功',
          money:'25. 00元',
          result:'卖家缺货 ',
          msg:'vvv'


        },
        orderInfo:{
          id:1,
          date:'2016-09-14 16:04:05',
          status:'退款成功',
          pay:'微信支付',
          buyer:'YOYO '
        },//订单信息
        processData:[
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'},
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'},
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'},
          {date: '2016-09-14 16:04:05',info:'订单退款申请已提交，等待受理',operter:'天道客户'}
        ],
        hideProInfo:true,//退款协议记录是否隐藏
        orderData: [{
          id: '12987122',
          proImage: '王小虎',
          proName: '234',
          size: '3.2',
          price: 10,
          count:10,
          discount:10,
          totalPrice:100,
          sendWay:'同城配送'
        }, {
          id: '12987122',
          proImage: '王小虎',
          proName: '234',
          size: '3.2',
          price: 10,
          count:10,
          discount:10,
          totalPrice:100,
          sendWay:'同城配送'
        }, {
          id: '12987122',
          proImage: '王小虎',
          proName: '234',
          size: '3.2',
          price: 10,
          count:10,
          discount:10,
          totalPrice:100,
          sendWay:'同城配送'
        }, {
          id: '12987122',
          proImage: '王小虎',
          proName: '234',
          size: '3.2',
          price: 10,
          count:10,
          discount:10,
          totalPrice:100,
          sendWay:'快递物流'
        },{
          id: '12987122',
          proImage: '王小虎',
          proName: '234',
          size: '3.2',
          price: 10,
          count:10,
          discount:10,
          totalPrice:100,
          sendWay:'快递物流'
        }]
      }
    },
    methods: {
      hideTable() {
        console.log('hideTable')
        this.hideProInfo = false
      },
      showTable() {
        this.hideProInfo = true
      },
      // 同意退款
      agreeRefund() {
        // 改变状态
      },
      // 拒绝退款
      rejectRefund() {},
      // 表格行或列的合并
      getRowSpan() {
        let rowSpan = 5
        this.orderData.forEach((item, index) => {
          if (item.sendWay === this.orderData[index + 1]) {
            rowSpan++
          }
        })
        return rowSpan
      },
      // objectSpanMethod() {
      //   console.log(this.getRowSpan())
      //   if (columnIndex === 6) {
      //     return {
      //       rowspan: this.getRowSpan(),
      //       colspan: 1
      //     }
      //   }
      // }
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