<template>
  <div class="active-products">
    <p class="header">Діючі продукти</p>
    <div class="content-wrapper">
      <img src="https://static.tildacdn.com/tild3966-3733-4131-b233-396530396435/image33.svg" alt="" class="icon">
      <div class="content">
        <a href="#" class="info-wrapper">
          <p class="title">Cash на картку!</p>
          <div class="info">
            <div class="block">
              <div class="label blue-btn">0000935303</div>
              <p class="subtitle">Номер заявки</p>
            </div>
            <div class="block">
              <div class="label blue-btn">25.01.2021</div>
              <p class="subtitle">Дата</p>
            </div>
            <div class="block">
              <div class="label blue-btn">24</div>
              <p class="subtitle">Строк</p>
            </div>
            <div class="block">
              <div class="label green-btn">10,0000 грн.</div>
              <p class="subtitle">Сумма кредиту</p>
            </div>
            <div class="block">
              <div class="label pink-btn">NEW</div>
              <p class="subtitle">Статус</p>
            </div>
          </div>
        </a>

        <div class="cards-wrapper">
          <a href="#" class="card">
            <p class="title">Банківські картки</p>
            <button class="blue-btn">Додати</button>
            <span class="icons-wrapper">
              <img src="https://static.tildacdn.com/tild3464-6166-4463-a436-343035623264/1280px-Visa_2014_log.png" alt=""
                   class="icon">
              <img src="https://static.tildacdn.com/tild6262-3361-4434-b664-313231613139/mastercard_hrz_pos_3.png" alt=""
                   class="icon">
            </span>
          </a>
          <a href="#" class="card">
            <ul class="card-numbers">
              <li class="card-number">
                <span>VISA - PRIVAT BANK</span>
                <span class="blue-btn">Номер: 9999-9999-9999-9999</span>
                <span>Х</span>
              </li>
              <li class="card-number">
                <span>VISA - PRIVAT BANK</span>
                <span class="blue-btn">Номер: 9999-9999-9999-9999</span>
                <span>Х</span>
              </li>
            </ul>
            <button class="pink-btn add-btn">Додати</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActiveProducts'
}
</script>

<style lang="scss" scoped>
  .header {
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  .content-wrapper {
    .title {
      font-size: 20px;
      font-weight: 600;
      color: #d43149;
    }
  }

  .info-wrapper, .info, .cards-wrapper, .card, .card-number {
    display: flex;
  }

  .info-wrapper, .card {
    border-radius: 10px;
  }

  .info-wrapper {
    background-color: #ffd600;
    width: 100%;
    justify-content: space-between;
    padding: 20px 50px;

    .title {
      margin-top: 5px;
    }

    .block {
      text-align: center;

      &:first-child {
        width: 40%;
      }

      &:nth-child(2) {
        width: calc(40% - 10px);
      }

      &:nth-child(2), &:nth-child(3) {
        margin-left: 10px;
      }

      &:nth-child(3) {
        width: calc(20% - 10px);
      }

      &:nth-child(4) {
        width: 62%;
      }

      &:last-child {
        width: calc(38% - 10px);
        margin-left: 10px;
      }

      &:nth-child(4), &:last-child {
        margin-top: 10px;
      }
    }
  }

  .info {
    flex-wrap: wrap;
  }

  .subtitle {
    font-size: 12px;
    text-transform: uppercase;
    color: #1f1f1f;
    font-weight: 600;
    margin-top: 2px;
  }

  .card {
    position: relative;
    background-color: #bfbfbf;
    flex-direction: column;

    &:first-child {
      align-items: center;
      padding: 40px 20px;
      margin-top: 15px;
      width: 30%;

      .title {
        margin-bottom: 5px;
      }
    }

    &:last-child {
      width: calc(70% - 15px);
      margin: 15px 0 0 15px;
      justify-content: center;
      padding: 20px;
    }
  }

  .icons-wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 5px;
    right: 5px;
  }

  .icon {
    margin: 0;

    &:first-child {
      width: 30px;
    }

    &:last-child {
      width: 80px;
    }
  }

  .card-number {
    justify-content: space-between;

    &:first-child {
      margin-bottom: 10px;
    }

    span {
      &:first-child {
        color: #1f1f1f;
        border: 1px solid #1f1f1f;
        border-radius: 5px;
        font-size: 18px;
        padding: 1px 35px;
      }

      &:nth-child(2) {
        padding: 4px 15px;
      }

      &:last-child {
        border-radius: 5px;
        color: #fff;
        background-color: #d43149;
        padding: 3px 9px;
      }

      &:nth-child(2), &:last-child {
        margin-left: 10px;
      }
    }
  }

  .add-btn {
    align-self: flex-end;
    margin-top: 10px;
  }
</style>
