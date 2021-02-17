<template>
  <div class="home horizontal-padding">
    <GoToForm />
    <ActiveProducts />
  </div>
</template>

<script >
import GoToForm from './GoToForm'
import ActiveProducts from './ActiveProducts'
export default {
  name: 'Home',
  components: {
    GoToForm,
    ActiveProducts
  }
}
</script>

<style lang="scss">
  .home {
    background-color: #1f1f1f;
    padding-top: 50px;
    padding-bottom: 110px;
    display: flex;

    & > * {
      &:first-child {
        width: 33%;
      }

      &:last-child {
        width: 67%;
        margin-left: 20px;
      }
    }
  }

  .header {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .icon {
    width: 40px;
    margin-left: 10px;

    @media screen and (max-width: 950px) {
      display: none;
    }
  }

  .content-wrapper {
    display: flex;
    align-items: flex-start;
  }

  .content {
    border-radius: 10px;
    width: 100%;
    line-height: 1.55;
    margin: 7px 0 0 5px;

    @media screen and (max-width: 950px) {
      margin: 7px 0 0 50;
    }
  }

  .title {
    font-size: 25px;
  }
</style>
