<template>
  <div>
    <div class="desktop">
      <Menu :theme="theme3" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu">
          <MenuGroup title="">
              <MenuItem v-for="(Menu,Idx) in sliderMenu" :key="Idx" :name="Menu.F_menu" class="marginB_20">
                  <Icon size="22" :type="Menu.Icon"></Icon>
                  <h5>{{Menu.F_menu}}</h5>
              </MenuItem>
          </MenuGroup>
      </Menu>
    </div>
    <!-- <div :class="{'OverLay_show':IfShowOverLay,'OverLay_close': !IfShowOverLay,'overLay':true}"  style="background:#464547;">
      <h4 @click="ToggleOverLay"><Icon type="close" /></h4>
      <div v-if="CurSiderMenu == Menu.F_menu" v-for="(Menu,Idx) in sliderMenu">
        <h5 v-for="(S_Menu,Idx) in Menu.S_menu" @click="ToDetailProduction(Menu.F_menu)">{{S_Menu}}</h5>
      </div>
    </div> -->
  </div>
</template>
<script>

  export default{
    data: function () {
      return {
        theme3: 'light',
        IfShowOverLay: false
      }
    },
    mounted: function () {
      
    },
    created() {
      
    },
    computed: {
      CurSiderMenu(){
        return this.$store.state.CurSiderMenu
      },
      sliderMenu(){
        return this.$store.state.sliderMenu
      }
      
    },
    watch: {
      
    },
    components: {
      

    },
    methods: {
      ChangeSiderMenu(Menu){
        this.$store.state.CurSiderMenu = Menu
        //this.IfShowOverLay = true
        this.$router.push({name:Menu})
        //this.ToggleSider()
      },
      ToDetailProduction(Menu){
        this.ToggleOverLay()
        this.$router.push({name:Menu})
      },
      ToggleOverLay(){
        alert('hahah')
        this.IfShowOverLay = false
      },
      ToggleSider (flag) {
          this.$store.state.open = !this.$store.state.open
      },
     

    }
  }
</script>
<style lang="scss">
.F_24{
  font-size: 22px;
}
.desktop, .overLay{
  position: relative;
  display: none;
}
.tablet{
  width: 100%;
  display: inline-block;
}

@media (min-width: 769px) {
  .desktop{
    display: inline-block;
  }
  .tablet{
    width: 100%;
    display: none;
  }
  .overLay{
    width: 300%;
    height: 100vh;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 90px;
    padding-left:20px;
    text-align: center;
    color: #fff;
    h4{
      margin-top: 10px;
      margin-bottom: 40px;
      text-align: right;
      padding-right:10px;
      &:hover{
        cursor: pointer;
      }
    }
    h5{
      width: 100%;
      margin-top: 10px;
      &:hover{
        color:#39f;
        cursor: pointer;
      }
    }
  }
  .OverLay_show{
    animation:Toggle_show 1.5s  forwards; 
    -webkit-animation:Toggle_show 1.5s  forwards;
  }
  .OverLay_close{
    animation:Toggle_close 1s  forwards; 
    -webkit-animation:Toggle_close 1s  forwards;
  }
}
@keyframes Toggle_show /*Safari and Chrome*/
{
  from {width:0px;}
  to {width:300%}
}
@keyframes Toggle_close /*Safari and Chrome*/
{
  0% {
      opacity: 1;
      width:300%
  }
  50% {
      opacity: 0.1;
  }
  100% {
      opacity: 0;
      width:0px;
      margin-left:-200px;
  }
}

.ivu-menu-item h5{
  margin-top: 8px;
}
.ivu-menu-item-group-title{
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url('http://www.btzoon.com/SmartHox/static/img/logo.png');
  background-size: contain;
  padding: 0 5px;
}
.ivu-menu-light{
  width: 95px !important;
  background-color: #464547 !important;
}
.ivu-menu{
  color: #fff !important; 
}
.ivu-menu-dark{
  background-color: #464547 !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title{
  text-align: left;
  color: #fff !important;
}
</style>
