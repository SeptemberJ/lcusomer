<template>

    <div class="Company">
        <!-- second nav -->
        <div class="pageHeader pageheadercta">
            <div class="secondary-nav">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-9 col-lg-9 snav_left">
                          <h2>公司</h2>
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
                                        <h1></h1>
                                            <p style="font-size:18px">Ztnet基于十多年的企业级信息系统开发经验，逐步研发了一系列专业化产品，并不断提升产品的成熟度和应用价值，以此来保障客户服务水平和产品卓越品质!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--//概述-->
                <div class="horizontalline parbase section">
                    <div class="hr thick gradient-corporate"></div>
                </div>
                
                <div v-for="(ProductMain,Idx) in productsList" :key="Idx">
                    <!--anchore-->
                    <div class="anchortarget section">
                        <a id="class1" class="navSelecter"></a>
                    </div>
                    <!--产品列表-->
                    <div class="columncontainer section hideonclick">
                        <div class="section-custom two-col-container mb-0">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h2 style="margin-bottom:15px;">{{ProductMain.F_kind}}</h2>
                                        <div class="row-fluid">
                                            <!-- <div class="col-md-6"> -->
                                               <!--  <div> -->
                                                    <div class="parsys columncontainer1">
                                                        <div class="brieftext section col-md-6" v-for="(ProductSKind,Idx) in ProductMain.S_kind" :key="Idx">
                                                            <div class="section-custom">
                                                                <div class="container-fluid">
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <div class="features-block1" data-heading="vsphere">
                                                                                <h4 style="color:#0094d2">{{ProductSKind.kind}}</h4>
                                                                                <p class="vmtxtarea" v-for="(Product,Idx) in ProductSKind.products" :key="Idx" @click="GoProductDeatil(Product)">{{Product}}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <!-- </div> -->
                                           <!--  </div> -->
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
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import Company from '../../components/SmartHox/Tab/Company/Company'

  export default{
    data: function () {
      return {
        CurTab:'公司',
        TabHeadList:['公司'],
        OverviewList:[
          {'name':'概述','tabNo':'#overview'},
          {'name':'发展历程','tabNo':'#developmentHistory'},
          {'name':'团队','tabNo':'#team'}
        ],
        productsList:[
            {
                F_kind:'地坪涂料',
                S_kind:[
                    {
                        kind:'防腐防霉剂',
                        products:['防腐剂 Antiseptic TR K59N','防腐剂 Antiseptic TR K514','防腐剂 Antiseptic TR K520','防腐剂Antiseptic TR MV 5105','防霉剂 Fungicide TR K5678','防霉剂Fungicide  OIT 530','防霉剂Fungicide  OIT 545','防霉剂Fungicide BR LV 5660','防霉剂Fungicide BR LV 5661','防霉剂Fungicide TR AF 5003','粉末防霉剂 Fungicide BR F580P','干膜防霉剂Fungicide BR 5554','广谱高效防腐剂 Antiseptic BR LV5503','广谱型防腐剂 Antiseptic BR LV5521','硅藻泥专用防霉剂Fungicide  BR TBH 5500','硅藻泥专用环保型防霉剂 Fungicide BR TBH 5600','环保型防腐防霉剂Fungicide BR LV 5618','气相防腐剂 Antiseptic BR 5506F','气相防腐剂Antiseptic BR 5502F']
                    },
                    {
                        kind:'分散润湿剂',
                        products:['低泡环保润湿剂Wet BN 2410','分散剂Dispersant LO 2101D','高效分散剂High Efficient Dispersant BR 2212','溶剂型分散润湿剂 Dispersant 2826','疏水改性分散剂 Modified Hydrophobic Dispersant BR 2747','疏水改性分散剂Dispersant JD 2312','展色润湿剂Wet BN 2408']
                    },
                    {
                        kind:'功能助剂',
                        products:['多功能PH调节剂 695','多功能杂化硅分散体 MHSPD BR 6511','附着力促进剂 Adhesion Promoter BR 6186','抗划伤柔感剂 Scratch Resistance and Softening Agent 2872','抗碱助剂Alkalinity Resistance BR 6600']
                    },
                    {
                        kind:'消泡剂',
                        products:['Defoamer CW 119','Defoamer CW 126','Defoamer CW 195','Defoamer CW 1389','粉末消泡剂 Defoamer BR 1710P','溶剂型消泡剂Defoamer 1254']
                    },
                    {
                        kind:'增稠流变剂',
                        products:['HASE 3380替换HEC的添加量参考','Levelling Agent BN PU 3202','Thickener AK HASE 3344 en','Thickener AK HASE 3920','Thickener BN HASE 3105','Thickener BN HASE 3935','Thickener BN PU 3220','Thickener BN PU 3240','Thickener BN PU 3250','Thickener BN PU 3258','缔合性增稠剂Thickener JD HASE 3380','流平剂 Levelling Agent LO 3100']
                    }
                ]
            },
            {
                F_kind:'防水涂料',
                S_kind:[]
            },
            {
                F_kind:'非金属涂料',
                S_kind:[]
            },
            {
                F_kind:'建筑涂料',
                S_kind:[]
            },
            {
                F_kind:'皮革',
                S_kind:[]
            },
            {
                F_kind:'水性金属漆',
                S_kind:[]
            },
            {
                F_kind:'水性木器漆',
                S_kind:[]
            },
            {
                F_kind:'特殊领域',
                S_kind:[]
            },
            {
                F_kind:'油墨',
                S_kind:[]
            },
            {
                F_kind:'造纸',
                S_kind:[]
            },
            {
                F_kind:'粘合剂',
                S_kind:[]
            }

        ]
      }
    },
    mounted: function () {
      
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
        },
        GoProductDeatil(productionName){
            this.$router.push({name:'产品详情',params: {name:productionName}})
        }
     

    }
  }
</script>
<style lang="scss">
$TabHeight: 30px;
.Products{
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
            background: rgb(68,114,196);
        }
        
    }
    .tabActive:after{
        display: block;
        position: absolute;
        background: rgb(68,114,196);
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
}
.Company{
    margin: 52px 0px;
    .SingleImg img{
        max-width: 100%;
    }
    .Gradient{
        padding: 40px 20px;
        background-color: #21D4FD;
        background-image: -ms-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: -moz-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: -webkit-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: -o-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: linear-gradient(to bottom left, #21D4FD 0%, #B721FF 100%);
    }
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
    .BlueBorder{
        width: 80px;
        height: 1px;
        margin: 0px auto;
        display: block;
        border-bottom: 2px solid #4091EF;
    }
    .DotAfter:after{
        content:'.';
        color: #4091EF;
        font-size: 55px;

    }
    .IfShow{
        opacity: 0;
    }
    .IfShow:hover{
        opacity: 1;
    }
}
</style>
