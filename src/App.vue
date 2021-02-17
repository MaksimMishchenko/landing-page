<template>
  <div id="app">
    <Header />
    <Home />
    <AddInfo />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './components/Home/Home'
import AddInfo from './components/AddInfo'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    AddInfo,
    Footer
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, sans-serif;
    line-height: 1.55;
  }
  ul {
    list-style: none;
  }
  .horizontal-padding {
    padding-right: 100px;
    padding-left: 100px;

    @media screen and (max-width: 1350px) {
      padding-right: 50px;
      padding-left: 50px;
    }
  }
  .base-btn {
    color: #ffffff;
    font-size: 15px;
    line-height: 1.55;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 1px 20px;
  }
  .blue-btn {
    @extend .base-btn;
    background-color: #009efa;
  }
  .green-btn {
    @extend .base-btn;
    background-color: #12b422;
  }
  .pink-btn {
    @extend .base-btn;
    background-color: #d43149;
  }
</style>
