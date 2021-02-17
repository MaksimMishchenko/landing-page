<template>
  <div>
    <ul class="list nav">
      <li class="list-item">
        <a href="#" class="link">Сучасний факторинг</a>
      </li>
      <li class="list-item">
        <a href="#" class="link active">Правова інформація</a>
      </li>
      <li class="list-item">
        <a href="#" class="link">Контакти</a>
      </li>
    </ul>

    <div class="footer">
      <img src="https://static.tildacdn.com/tild6336-6238-4161-a662-666332383062/shutterstock_1119953.png" alt="" class="logo">
      <p class="text">
        © 2021. Всі права захищені | Created
        <a href="https://d3dstudio.biz/">D3D.studio</a>
      </p>
      <p class="text">
        ТОВ «Сучасний факторинг»- Свідоцтво №13102578 ФК №270 про реєстрацію фінансової установи,
        видане Нацкомфінпослуг 20.01.2011 р.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  a {
    color: #fff;
    text-decoration: none;
  }

  .list {
    background-color: #171717;
    padding: 15px 0;
    justify-content: center;
    text-transform: uppercase;
    display: flex;
  }

  .list-item {
    color: #fff;
    font-size: 14px;
    margin: 0 20px;
    text-transform: initial;
    font-weight: 600;

    &:first-child {
      text-transform: capitalize;
    }
  }

  .footer {
    background-color: #111111;
    padding: 30px 0 15px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: rgb(191, 191, 191);
    }
  }

  .logo {
    max-width: 100px;
  }

  .text {
    color: rgb(191, 191, 191);
    font-size: 10px;
    line-height: 2.5;

    &:first-of-type {
      margin-top: 28px;
    }
  }
</style>
