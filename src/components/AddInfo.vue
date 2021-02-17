<template>
  <div class="add-info-wrapper horizontal-padding">
    <div class="cards">
      <a href="#" class="card">
        <div class="title">Travel mani</div>
        <button class="green-btn btn">Перейти</button>
      </a>

      <a href="#" class="card">
        <div class="title">Банківські картки</div>
        <button class="blue-btn btn">Перейти</button>
      </a>

      <a href="#" class="card">
        <div class="title">Твої документи</div>
        <button class="green-btn btn">Перейти</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddInfo'
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }

  .add-info-wrapper {
    background-color: #1f1f1f;
  }

  .cards {
    border-top: 1px solid #fff;
    padding: 35px 120px;
    display: flex;
    justify-content: space-between;
    margin: -6px;
  }

  .card {
    width: calc(100% / 12 * 4 - 12px);
    margin: 6px;
    border-radius: 10px;
    background-color: #bfbfbf;
    color: #d43149;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 15px 0;

    &:first-child, &:last-child {
      color: #fff;
    }

    &:first-child {
      background-color: #009efa;
    }

    &:last-child {
      background-color: #3b3b3b;
    }
  }

  .btn {
    padding: 3px 40px;
  }
</style>
