<template>

    <div class="Company">
        <!-- second nav -->
        <div class="pageHeader pageheadercta">
            <div class="secondary-nav">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-9 col-lg-9 snav_left">
                          <h2>{{ProductionName}}</h2>
                          <ul>
                              <li v-for="(Menu,Idx) in OverviewList">
                              <a  :data-element-name="Menu.name" data-element-type="tab" :href="Menu.tabNo">{{Menu.name}}</a>
                              </li>
                          </ul>
                      </div>
                      
                  </div>
              </div>
            </div>
        </div>
        <!-- content -->
        <div class="content-container" style="padding-top: 0px;">
            <div class="parcontainer parsys">
                <!--对应描文本-->
                <div class="anchortarget section">
                    <a id="overview" class="navSelecter"></a>
                </div>
                <!--概述-->
                <div class="section stylizedpageheader">
                    <div class="stylized-header section-custom">
                        <div class="container-fluid ">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1>{{ProductionName}}</h1>
                                    <p>{{ProductionInfo.Summary}}</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <!--//概述-->
                <!-- picture -->
               <!--  <Row type="flex" justify="space-between" class="code-row-bg" :gutter="16">
                    <Col :xs="24" :sm="24" :md="12" :lg="12" v-for="(Block,Idx) in BlockInfo"  :key="Idx" class="marginB_10">
                      <div class="thumb-container  singleLineEllipse">
                          <div class="thumb-img"  :style="{'background-image':'url(' + Block.img +')'}">
                                      </div>
                          <div class="thumb-details showHam" >
                              <div class="col-xs-1 col-md-1 col-sm-1" style="height: 86px;">
                                  <i :class="[Block.icon]"></i>
                              </div>
                              <div class="col-xs-10 col-md-10 col-sm-10" style="height: 86px;">
                                  <div class="detail-content clamp">
                                      <h3 class="clampingDetail" data-id="randomId7643" style="">
                                      <span class="asianLang" style="width: 100%">{{Block.title}}</span>
                                      </h3>
                                      <p class="clampingDetail" data-id="randomId9455" style="">
                                      <span class="asianLang" style="width: 200px">{{Block.content}}</span>
                                      </p>
                                  </div>
                              </div>
                              <div class="col-xs-1 col-md-1 col-sm-1 cntClk" style="height: 86px;">   <i class="fa fa-bars detail-toggle"></i>
                              </div>
                              <div class="social-block">
                              </div>
                          </div>
                      </div>
                    </Col>
                </Row> -->
                <!-- picture -->
                <div class="horizontalline parbase section">
                    <div class="hr thick gradient-corporate"></div>
                </div>        
                <!--anchore-->
                <div class="anchortarget section">
                    <a id="introduction" class="navSelecter"></a>
                </div>
                </div>
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">化学名称/组成</h2>
                                    <p>{{ProductionInfo.ChemicalName}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">技术数据/特性（不作为产品规格）</h2>
                                    <p>{{ProductionInfo.Characteristic}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">推荐及使用</h2>
                                    <p v-for="(Use, idx) in ProductionInfo.Use">{{Use}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn --> 
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">杀菌特性</h2>
                                    <p v-for="(Sterilization, idx) in ProductionInfo.sterilization">{{Sterilization}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn -->
                <div class="featurelistcontainer section" v-if="ProductionInfo.function">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">功能和活性</h2>
                                    <p>{{ProductionInfo.function.recommend}}</p>
                                    <p v-for="(FnContent, idx) in ProductionInfo.function.content">{{FnContent}}</p>
                                    <p v-for="(FnTips, idx) in ProductionInfo.function.tips">{{FnTips}}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">配方注意</h2>
                                    <p v-for="(Formula, idx) in ProductionInfo.formula">{{Formula}}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">标签和运输</h2>
                                    <p>{{ProductionInfo.transport}}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">使用、储存、安全和健康 </h2>
                                    <p v-for="(Storage, idx) in ProductionInfo.storage">{{Storage}}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn -->
                <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit marginB_10">包装 </h2>
                                    <p>产品包装如下</p>
                                    <div class="col-md-12">
                                      <div class="row">
                                        <div class="col-md-12" v-for="(Packing, idx) in ProductionInfo.Packing">
                                          <span class="col-md-4" >{{Packing.kind}}</span>
                                          <span class="col-md-4" >{{Packing.weight}}</span>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fn -->
                <!-- fn --> 
                <!-- <div class="featurelistcontainer section">
                    <div class="section-custom mb-0">
                        <div class="container-fluid " id="features11">
                            <div class="row" id="featurelistcontainer">
                                <div class="col-md-12">
                                    <h2 class="columnTit">技术数据/特性（不作为产品规格）</h2>
                                    <p>水性体系和金属加工液后处理用速效、广谱罐内保护剂 (In-can preservative 杀细菌、真菌、酵母)</p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="section-custom">
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="features-block1">
                                                              <h3><i class="fa fa-tags"></i>强大的调度功能</h3>
                                                                  <p>按线路配载：系统以线路为依据生成调度建议，有利于后续的人工调度。按照干线和配送设置连续送达的线路设置配送顺序的序号、支持干线甩货，支持室内多点配送、调度作业时实现自动化，降低调度工作量 。</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="col-md-6">
                                            <div class="section-custom">
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="features-block1">
                                                              <h3><i class="fa fa-tags"></i>强大的调度功能</h3>
                                                                  <p>按线路配载：系统以线路为依据生成调度建议，有利于后续的人工调度。按照干线和配送设置连续送达的线路设置配送顺序的序号、支持干线甩货，支持室内多点配送、调度作业时实现自动化，降低调度工作量 。</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="col-md-6">
                                            <div class="section-custom">
                                                <div class="container-fluid">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="features-block1">
                                                              <h3><i class="fa fa-tags"></i>强大的调度功能</h3>
                                                                  <p>按线路配载：系统以线路为依据生成调度建议，有利于后续的人工调度。按照干线和配送设置连续送达的线路设置配送顺序的序号、支持干线甩货，支持室内多点配送、调度作业时实现自动化，降低调度工作量 。</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- fn -->








            </div>
        </div>

    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import Company from '../../components/SmartHox/Tab/Company/Company'

  export default{
    data: function () {
      return {
        ProductionName:'',
        OverviewList:[
          {'name':'产品','tabNo':'#overview'},
          {'name':'简介','tabNo':'#introduction'}
        ],
        BlockInfo:[
          {'title':'构建设备','content':'物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。','img':'static/img/SmartHox/picture/upper-half-promo-4-workspaceone.jpg','icon':'fa fa-gears'},
          {'title':'控制您的设备','content':'部署控制、监控和管理您的设备的 IoT 解决方案，从而允许您捕获实时数据。','img':'static/img/SmartHox/picture/1511945768395.jpg','icon':'fa fa-laptop'}
        ],
        ProductionInfo:{}
      }
    },
    mounted: function () {
      let ProductionName = this.$router.history.current.params.name
      this.ProductionName = ProductionName
      axios.get('static/json/productionDetail.json',
      ).then((res)=> {
          res.data.Products.map((item,idx)=>{
            if(item.name == ProductionName){
              this.ProductionInfo = item
              console.log(item.function.recommend)
            }
          })
      }).catch((error)=> {
          console.log(error)
      })
      
    },
    created() {
      
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
        Company

    },
    methods: {
        ChangeTab(tab){
            this.CurTab = tab
        }
     

    }
  }
</script>
<style lang="scss" scoped>
$TabHeight: 30px;
.Company{
    .TabHead{
        width: 100%;
        overflow: visible;
        height: $TabHeight;
        background-color: #fff;
        span{
            width: 25%;
            height: 100%;
            display: inline-block;
            border-right: 2px solid #eee;
            background-color: rgb(0,0,0);
            color: #fff;
            text-align: center;
            line-height: $TabHeight;
            position: relative;
            z-index: 9;
        }
        span:last-child{
            border-right: 0px solid #eee;
        }
        .tabActive{
            background-color: #3E4095;
        }
        
    }
    .tabActive:after{
        display: block;
        position: absolute;
        background-color: #3E4095;
        width: 30px;
        height: 30px;
        top: 0px;
        left: 50%;
        content: "";
        transform:rotate(-45deg) translateX(-15px);
        -ms-transform:rotate(-45deg) translateX(-15px);   /* IE 9 */
        -moz-transform:rotate(-45deg) translateX(-15px);  /* Firefox */
        -webkit-transform:rotate(-45deg) translateX(-15px); /* Safari 和 Chrome */
        -o-transform:rotate(-45deg) translateX(-15px);
        z-index: -9;
    }
    .marginT_10{
      margin-top: 10px;
    }
    .marginB_10{
      margin-bottom: 10px;
    }
    .columnTit{
      color: #1aad16;
    }
    p{
      margin: 10px auto;
    }
}
</style>
