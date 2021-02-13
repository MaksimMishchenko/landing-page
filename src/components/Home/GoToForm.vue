<template>
  <div class="go-to-form">
    <p class="header">Заповни анкету та отримай</p>
    <div class="content-wrapper">
      <img src="https://static.tildacdn.com/tild3966-3733-4131-b233-396530396435/image33.svg" alt="" class="icon">
      <div class="content">
        <div class="title">Cash на картку!</div>
        <button class="blue-btn">Заповнити анкету</button>
      </div>
    </div>
    <Form  />
  </div>
</template>

<script>
export default {
  name: 'GoToForm'
}
</script>

<style lang="scss" scoped>
  .header {
    color: #d43149;
  }

  .content {
    display: flex;
  }

  .content {
    background-color: #d43149;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 35px 0;
  }

  .title {
    color: #fff;
  }
</style>
