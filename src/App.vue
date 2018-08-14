
<template>
  <div id="app" class="com-app">
     <div class="layout">
        <div class="content">
          <div class="content_left">
            <Sider/>
          </div>
          <div class="content_right">
          <div class="header" style="width: 100%">
              <Header/>
            </div>
            <div class="body">
              <transition>
                <router-view class="child-view"></router-view>
              </transition>
            </div>
            <div class="footer">
              <Footer/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import Sider from './components/Sider/Sider.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  data: function () {
    return {
      isCollapsed: false,
      LeftDistance:false,
    }
  },
  computed: {
      ...mapGetters([
        'getSpin'
      ]),
  },
  components: {
      Sider,
      Header,
      Footer
       
    },
}
</script>

<style lang="scss">
$width: 95px;


.layout{
}

.logo{
  font-size: 24px;
  color: white;
  text-align: center;
  color: #7e57c2;
  padding: 10px 20px;
}

.tab{
  margin: 0 auto;
  width: 400px;
}

.content{
  overflow: hidden;
}

.content_left{
  position: fixed;
  height: 100%;
  border-left: 1px solid #464547;
  background-color: #464547;
  border:0px solid blue;
  top: 0px;
  left: 0px;
  z-index: 999999;
}

.content_right{
  border: 0px solid blue;
  width: 100%;
  display: inline-block;
  float: right;
  background-color: rgb(236, 236, 236);
}
@media (min-width: 769px) {
  .content_left{
    position: fixed;
    top: 0;
    border:0px solid red;
    width: $width;
    float: left;
  }

  .content_right{
    border: 0px solid red;
    width: calc(100% - #{$width});
    display: inline-block;
    float: right;
    background-color: rgb(236, 236, 236);
  }
}

.header{
  position: fixed;
  top: 0;
  background-color: #000;
  height: 40px;
  z-index: 999;
}

.body{
  background-color: white;
  margin: 52px 0px 0px 0px;
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
}

.footer{
  margin: 0px;
  padding: 0;
  text-align: center;
}
</style>
