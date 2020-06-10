<template>
  <div class="FlowRecord">
      <!--头部-->
    <div id="headRecord"><h2>直营订单统计</h2></div>
    <!--内容-->
    <div id="containerRecord">
      <el-row ><el-col :span="24"><div class="grid-content bg-purple publicPadding titleRecord">今日关键指标</div></el-col></el-row>
      <!--关键指标-->
      <el-row class="keyIndex" >
        <el-col :span="6" class="rightBorder publicPadding">
          <p>下单数</p>
          <h2>256</h2>
        </el-col>
        <el-col :span="6" class="rightBorder publicPadding">
          <p>支付订单数</p>
          <h2>256</h2>
        </el-col>
        <el-col :span="6" class="rightBorder publicPadding">
          <p>下单总金额</p>
          <h2>256</h2>
        </el-col>
        <el-col :span="6" class="rightBorder publicPadding">
          <p>实际成交额</p>
          <h2>256</h2>
        </el-col>
      </el-row>
      <!--总成交-->
      <el-row >
        <!--echart图-->
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      </el-row>
      <!--经营状况-->
      <el-row class="operateConditions titleRecord">
        <div class="bg-purple">
          <span class="publicPadding">经营状况</span>
          <el-button plain @click="changeChart1()">最近一周</el-button>
          <el-button plain @click="changeChart2()">最近两周</el-button>
          <el-button plain @click="changeChart3()">最近30天</el-button>
        </div>
        <!--经营状况echart图-->
        <div id="operConChartWeek" :style="{width: '600px', height: '600px',margin:'0 auto'}"   v-if = "changeLine1" ref="chartWeek"></div>
        <div id="operConChartWeeks" :style="{width: '600px', height: '600px',margin:'0 auto'}"  v-if = "changeLine2" ref="chartWeeks"></div>
        <div id="operConChartMonth" :style="{width: '600px', height: '600px',margin:'0 auto'}"  v-if = "changeLine3" ref="chartMonth"></div>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    name: "FlowRecord",
    data(){
      return {
        // 点击按钮改变最近的经营状况
        changeLine1:true,
        changeLine2:false,
        changeLine3:false

      }
    },
    mounted(){
      // 总成交饼图
      this.drawPie();
      // 经营状况最近一周
      this.$nextTick(function () {
        this.drawWeek();
      })
      // 经营状况最近两周
      this.$nextTick(function () {
        this.drawWeeks();
      })
      // 经营状况最近30天
      this.$nextTick(function () {
        this.drawMonth()
      })


    },
    methods: {
      drawPie(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '总成交' },
          tooltip: {
            trigger:'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend:{
            orient:'vertical',
            left:'left',
            top:'bottom',
            data:['总订单数','总成交额']
          },
          series: [{
            name:'总成交',
            type:'pie',
            radius:'55%',
            center: ['50%', '60%'],
            data:[
              {value:156,name:'总订单数'},
              {value:256,name:'总成交额'},
            ]
          }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        })
      },
      drawWeek(){
        var bar1 = this.$refs.chartWeek
        if(bar1){
          let weekLine = this.$echarts.init(bar1)
          weekLine.setOption({
            title: {
              text: '最近一周经营状况'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['下单数', '下单总金额', '支付订单数', '实际成交额']
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '下单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: '下单总金额',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: '支付订单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: '实际成交额',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [320, 332, 301, 334, 390, 330, 320]
              },
            ]
          })
        }
      },
      // 最近两周
      drawWeeks(){
        var bar2 = this.$refs.chartWeeks
        if(bar2){
          let weeksLine = this.$echarts.init(bar2)
          weeksLine.setOption({
            title: {
              text: '最近两周经营状况'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['下单数', '下单总金额', '支付订单数', '实际成交额']
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: [
                  '2020/6/9', '2020/6/8', '2020/6/7', '2020/6/6', '2020/6/5', '2020/6/4', '2020/6/3',
                  '2020/6/2', '2020/6/1', '2020/5/7', '2020/5/6', '2020/5/5', '2020/5/4', '2020/5/3',
                ]
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '下单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210,127, 67, 101, 134, 90, 230, 210]
              },
              {
                name: '下单总金额',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: '支付订单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: '实际成交额',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320]
              },
            ]
          })
        }

      },
      // 最近30天
      drawMonth(){
        var bar3 = this.$refs.chartMonth
        if(bar3){
          let monthLine = this.$echarts.init(bar3)
          monthLine.setOption({
            title: {
              text: '最近30天经营状况'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data: ['下单数', '下单总金额', '支付订单数', '实际成交额']
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                data: [
                  '2020/6/9', '2020/6/8', '2020/6/7', '2020/6/6', '2020/6/5', '2020/6/4', '2020/6/3',
                  '2020/6/2', '2020/6/1', '2020/5/7', '2020/5/6', '2020/5/5', '2020/5/4', '2020/5/3',
                ]
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '下单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210,127, 67, 101, 134, 90, 230, 210]
              },
              {
                name: '下单总金额',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: '支付订单数',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: '实际成交额',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320]
              },
            ]
          })
        }

      },
      changeChart1(){
        console.log('changeChart1');
        this.changeLine1 = true
        this.changeLine2 = false
        this.changeLine3 = false
      },
      changeChart2(){
        console.log('changeChart2');
        this.changeLine1 = false
        this.changeLine2 = true
        this.changeLine3 = false
      },
      changeChart3(){
        console.log('changeChart3');
        this.changeLine1 = false
        this.changeLine2 = false
        this.changeLine3 = true
      }

    }
  }

</script>

<style scoped>
  /*流水记录页面公共padding*/
  .publicPadding{
    padding-left: 30px;
  }
  .titleRecord{
    height: 60px;
    line-height:60px;
  }
  /*右边框*/
  .rightBorder{
    border-right: 1px solid gainsboro;
  }
/*头部*/
  #headRecord{
    border-bottom: 1px solid gainsboro;
    margin-bottom: 20px;
  }
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
  /*紫色背景*/
.bg-purple{
  background-color: #90ADE5;
}
  /*今日关键指标开始*/
  .keyIndex el-col{
    border-right: 1px solid red;
  }
  .keyIndex{
    margin-top: 20px;
  }
  #myChart{
    margin: 0 auto;
  }
  /*经营状况*/
  .operateConditions{
    margin-top: 20px;
  }
  .operateConditions>div>span{
    display: inline-block;
    margin-right: 8px;
  }
</style>