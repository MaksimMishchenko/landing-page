<template>
  <div>
    <ul class="list nav">
      <li class="list-item">
        <a href="#" class="link">&lt; Початок</a>
      </li>
      <li class="list-item">
        <a href="#" class="link active">Cash на картку!</a>
      </li>
      <li class="list-item">
        <a href="#" class="link">Travel mani</a>
      </li>
      <li class="list-item">
        <a href="#" class="link">Твої банківські картки</a>
      </li>
      <li class="list-item">
        <a href="#" class="link">Твої документи</a>
      </li>
    </ul>

    <div class="page-header horizontal-padding">
      <a class="logo-wrapper" href="#">
        <img src="https://static.tildacdn.com/tild6336-6238-4161-a662-666332383062/shutterstock_1119953.png" alt="" class="logo">
      </a>

      <div class="greeting-wrapper">
        <ul class="list greeting">
          <li class="list-item">Підтримка 0 800 000 000</li>
          <li class="list-item">ВІТАЄМО, {first_name} {mid_name}</li>
          <li class="list-item">iD кліента: 1234567890</li>
          <li class="list-item">Mail: maximkirilovich@gmail.com</li>
        </ul>

        <button class="exit-btn">Вихід</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .list.nav, .page-header, .greeting-wrapper {
    display: flex;
  }

  .list.nav {
    background-color: #000;
    padding: 15px 0;
    justify-content: center;
    text-transform: uppercase;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;

    .list-item {
      margin: 0 20px;
    }

    .link {
      color: #fff;
      text-decoration: none;
      font-weight: 700;

      &.active {
        opacity: .7;
      }
    }
  }

  .list.greeting {
    text-align: end;
    line-height: 1.3;
  }

  .list-item {
    color: #fff;
    font-size: 13px;
  }

  .page-header {
    background-color: #111111;
    align-items: center;
    justify-content: space-between;
    margin-top: 45.2px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .logo-wrapper {
    margin-left: 75px;
  }

  .logo {
    width: 170px;
  }

  .greeting-wrapper {
    align-items: center;
    margin-right: 75px;
  }

  .exit-btn {
    color: #12b422;
    border: 1px solid #12b422;
    border-radius: 5px;
    background-color: transparent;
    padding: 10px 30px;
    cursor: pointer;
    margin-left: 40px;
    font-weight: bold;
  }
</style>
