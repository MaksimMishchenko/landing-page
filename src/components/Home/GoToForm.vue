<template>
  <div class="go-to-form" data-app>
    <p class="header">Заповни анкету та отримай</p>
    <div class="content-wrapper">
      <img src="https://static.tildacdn.com/tild3966-3733-4131-b233-396530396435/image33.svg" alt="" class="icon">
      <div class="content">
        <div class="title">Cash на картку!</div>
        <v-row justify="center">
          <v-btn
            class="blue-btn"
            @click.stop="questionnaire = true">
            Заповнити анкету
          </v-btn>

          <v-dialog
            max-width="660"
            v-model="questionnaire">
            <v-card>
              <v-card-title class="headline">
                <div v-if="step <= 16" class="header-wrapper">
                  <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
                        <rect x="27.5" y="4.1" class="st61" width="56.5" height="73.5"></rect>
                    <line class="st61" x1="41.5" y1="22.1" x2="70.6" y2="22.1"></line>
                    <line class="st61" x1="41.5" y1="38.8" x2="70.6" y2="38.8"></line>
                    <line class="st61" x1="41.5" y1="55.5" x2="70.6" y2="55.5"></line>
                    <polyline class="st61" points="66.4,77.6 66.4,95.6 9.8,95.6 9.8,22.1 27.5,22.1 "></polyline>
                        </svg>
                  <span>Cash на картку!</span>
                </div>
                <span v-if="step === 17">Ура! Анкету заповнено</span>
                <span v-if="step <= 16">{{ step }}/16</span>
              </v-card-title>

              <v-progress-linear v-bind:value="progressbarValue"></v-progress-linear>

              <v-card-text>
                <form>
                  <div class="step" v-show="step === 1">
                    <p class="title">Дані про кредит</p>
                    <p class="subtitle">Сума кредиту</p>
                    <v-text-field label="Вкажіть бажану суму кредиту" v-model.trim="$v.controls.control1.$model"></v-text-field>
                    <p class="error" v-if="!$v.controls.control1.required && $v.controls.control1.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control1.numeric && $v.controls.control1.$dirty">
                      Ви ввели недопустиме значення. Поле допускає тільки числа
                    </p>
                  </div>

                  <div class="step" v-show="step === 2">
                    <p class="title">Дані про кредит</p>
                    <p class="subtitle">Строк кредиту</p>
                    <v-text-field label="Вкажіть строк кредиту, місяців" v-model.trim="$v.controls.control2.$model">
                    </v-text-field>
                    <p class="error" v-if="!$v.controls.control2.required && $v.controls.control2.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control2.numeric && $v.controls.control2.$dirty">
                      Ви ввели недопустиме значення. Введіть числове значення
                    </p>
                  </div>

                  <div class="step" v-show="step === 3">
                    <p class="title">Вибiр банкiвської карти</p>
                    <p class="subtitle">Оберіть свою банківську картку</p>
                    <v-select
                      v-model="$v.controls.control3.$model"
                      :items="['VISA - PRIVAT BANK 9999-9999-9999-9999', 'VISA - ALFA BANK 9999-9999-9999-9999']">
                    </v-select>
                    <p class="error" v-if="!$v.controls.control3.required && $v.controls.control3.$dirty">
                      Це поле обов'язкове
                    </p>
                  </div>

                  <div class="step" v-show="step === 4">
                    <p class="title">Персональні дані</p>
                    <p class="subtitle">Вкажіть своє прізвище</p>
                    <v-text-field label="Прізвище" v-model.trim="$v.controls.control4.$model"></v-text-field>
                    <p class="error" v-if="!$v.controls.control4.required && $v.controls.control4.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control4.alpha && $v.controls.control4.$dirty">
                      Ви ввели недопустиме значення. Поле допускає тільки букви
                    </p>
                  </div>

                  <div class="step" v-show="step === 5">
                    <p class="title">Персональні дані</p>
                    <p class="subtitle">Вкажіть своє ім'я</p>
                    <v-text-field label="Ім'я" v-model.trim="$v.controls.control5.$model"></v-text-field>
                    <p class="error" v-if="!$v.controls.control5.required && $v.controls.control5.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control5.alpha && $v.controls.control5.$dirty">
                      Ви ввели недопустиме значення. Поле допускає тільки букви
                    </p>
                  </div>

                  <div class="step" v-show="step === 6">
                    <p class="title">Персональні дані</p>
                    <p class="subtitle">Вкажіть своє ім'я по батькові</p>
                    <v-text-field label="По батькові" v-model.trim="$v.controls.control6.$model"></v-text-field>
                    <p class="error" v-if="!$v.controls.control6.required && $v.controls.control6.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control6.alpha && $v.controls.control6.$dirty">
                      Ви ввели недопустиме значення. Поле допускає тільки букви
                    </p>
                  </div>

                  <div class="step" v-show="step === 7">
                    <p class="title">Персональні дані</p>
                    <p class="subtitle">Вкажіть дату народження</p>
                    <v-menu
                      ref="calendar"
                      v-model="calendar"
                      :close-on-content-click="false"
                      :return-value.sync="$v.controls.control7.$model"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          class="calendar-field"
                          v-model="date"
                          placeholder="Дата народження"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="calendar = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.calendar.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                    <p class="error" v-if="!$v.controls.control7.required && $v.controls.control7.$dirty">
                      Це поле обов'язкове
                    </p>
                  </div>

                  <div class="step" v-show="step === 8">
                    <p class="title">Персональні дані</p>
                    <p class="subtitle">Укажіть стать</p>
                    <v-radio-group
                      class="gender"
                      v-model="$v.controls.control8.$model">
                      <v-radio
                        :value="'Man'"
                        :label="'Чоловіча'"
                      ></v-radio>
                      <v-radio
                        :value="'Woman'"
                        :label="'Жіноча'"
                      ></v-radio>
                    </v-radio-group>
                    <p class="error" v-if="!$v.controls.control8.required && $v.controls.control8.$dirty">
                      Ви не вибрали Вашу стать
                    </p>
                  </div>

                  <div class="step" v-show="step === 9">
                    <p class="title">Персональні дані</p>
                    <p class="subtitle">Вкажіть email</p>
                    <v-text-field label="Example@site.com" v-model.trim="$v.controls.control9.$model"></v-text-field>
                    <p class="error" v-if="!$v.controls.control9.required && $v.controls.control9.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control9.email && $v.controls.control9.$dirty">
                      Ви ввели недопустиме значення. Перевірте Ваш email
                    </p>
                  </div>

                  <div class="step" v-show="step === 10">
                    <p class="title">Вкажіть документ</p>
                    <p class="subtitle">Дані про документ</p>
                    <v-radio-group
                      class="document"
                      v-model="$v.controls.control10.$model">
                      <v-radio
                        :value="'Passport'"
                        :label="'Паспорт'"
                      ></v-radio>
                      <v-radio
                        :value="'ID Card'"
                        :label="'ID картка'"
                      ></v-radio>
                      <v-radio
                        :value="'Driver\'s license'"
                        :label="'Водійське посвідчення'"
                      ></v-radio>
                    </v-radio-group>
                    <p class="error" v-if="!$v.controls.control10.required && $v.controls.control10.$dirty">
                      Ви не вибрали документ
                    </p>
                  </div>

                  <div class="step" v-show="step === 11">
                    <p class="title">Завантажте скани документа</p>
                    <p class="subtitle">
                      Паспорт (сторінки паспорта - 0-1 › 2-3 › 10-11 › 12-13) ID картка та
                      Водійське посвідчення (лицьова і зворотня сторона)
                    </p>
                    <v-file-input
                      @change="controls.control11 = $event"
                      class="file"
                      accept="image/*"
                      label="File input"
                    ></v-file-input>
                    <p class="error" v-if="!$v.controls.control11.required && $v.controls.control11.$dirty">
                      Ви не прикріпили файл
                    </p>
                  </div>

                  <div class="step" v-show="step === 12">
                    <p class="title">Додаткова інформація про рівень освіти</p>
                    <p class="subtitle">Вкажіть додаткову інформацію про свою освіту</p>
                    <v-radio-group
                      class="education"
                      v-model="$v.controls.control12.$model">
                      <v-radio
                        :value="'Secondary education'"
                        :label="'Середня освіта'"
                      ></v-radio>
                      <v-radio
                        :value="'Higher education'"
                        :label="'Вища освіта'"
                      ></v-radio>
                    </v-radio-group>
                    <p class="error" v-if="!$v.controls.control12.required && $v.controls.control12.$dirty">
                      Ви не вказали Вашу освіту
                    </p>
                  </div>

                  <div class="step" v-show="step === 13">
                    <p class="title">Додаткова інформація про сімейний стан</p>
                    <p class="subtitle">Вкажіть додаткову інформацію про сімейний стан</p>
                    <v-radio-group
                      class="marital-status"
                      v-model="$v.controls.control13.$model">
                      <v-radio
                        :value="'Unmarried'"
                        :label="'Неодружений (-а)'"
                      ></v-radio>
                      <v-radio
                        :value="'Married'"
                        :label="'Одружений (-а)'"
                      ></v-radio>
                    </v-radio-group>
                    <p class="error" v-if="!$v.controls.control13.required && $v.controls.control13.$dirty">
                      Ви не вказали Ваш сімейний стан
                    </p>
                  </div>

                  <div class="step" v-show="step === 14">
                    <p class="title mb">Вкажіть ПІБ дружини (чоловіка)</p>
                    <v-text-field label="Прізвище Ім`я По батькові" v-model.trim="$v.controls.control14.$model">
                    </v-text-field>
                    <p class="error" v-if="!$v.controls.control14.required && $v.controls.control14.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control14.alpha && $v.controls.control14.$dirty">
                      Ви ввели недопустиме значення. Поле допускає тільки букви
                    </p>
                  </div>

                  <div class="step" v-show="step === 15">
                    <p class="title">Виберіть контактну особу</p>
                    <p class="subtitle">Контактна особа</p>
                    <v-radio-group
                      class="contact-person"
                      v-model="$v.controls.control15.$model">
                      <v-radio
                        :value="'Colleague'"
                        :label="'Колега'"
                      ></v-radio>
                      <v-radio
                        :value="'Friend'"
                        :label="'Друг'"
                      ></v-radio>
                      <v-radio
                        :value="'Relative'"
                        :label="'Родич'"
                      ></v-radio>
                    </v-radio-group>
                    <p class="error" v-if="!$v.controls.control15.required && $v.controls.control15.$dirty">
                      Ви не вказали контактну особу
                    </p>
                  </div>

                  <div class="step" v-show="step === 16">
                    <p class="title mb">Вкажіть дані про контактну особу</p>
                    <v-text-field label="Прізвище Ім`я По батькові" v-model.trim="$v.controls.control16.$model">
                    </v-text-field>
                    <p class="error" v-if="!$v.controls.control16.required && $v.controls.control16.$dirty">
                      Це поле обов'язкове
                    </p>
                    <p class="error" v-if="!$v.controls.control16.alpha && $v.controls.control16.$dirty">
                      Ви ввели недопустиме значення. Поле допускає тільки букви
                    </p>
                  </div>

                  <div class="step" v-show="step === 17">
                    <p class="title mb">Вкажіть телефон контактної особи</p>
                    <vue-tel-input v-model="$v.controls.control17.$model"></vue-tel-input>
                    <p v-if="!$v.controls.control17.required && $v.controls.control17.$dirty" class="error mt">
                      Це поле обов'язкове
                    </p>
                    <p class="error mt" v-if="!$v.controls.control17.numeric && $v.controls.control17.$dirty">
                      Ви ввели недопустиме значення. Введіть числове значення
                    </p>
                  </div>
                </form>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  @click="decreaseStep"
                  :disabled="step === 1"
                  text>
                  Назад
                </v-btn>
                <v-btn
                  v-if="step <= 16"
                  color="blue darken-1"
                  @click="increaseStep"
                  text>
                  Далі
                </v-btn>
                <v-btn
                  v-if="step === 17"
                  color="blue darken-1"
                  @click="increaseStep"
                  text>
                  Закрити
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { required, numeric, helpers, email, requiredIf } from 'vuelidate/lib/validators'
import { VueTelInput } from 'vue-tel-input'

const alpha = helpers.regex('alpha', /^([а-я ]+|[a-z ]+|[А-Яа-яёЁЇїІіЄєҐґ ]+)$/i)

export default {
  name: 'GoToForm',
  components: {
    VueTelInput
  },
  data: () => {
    return {
      questionnaire: false,
      minStep: 1,
      maxStep: 17,
      step: 1,
      progressbarValue: 1.7,
      radioGroup: 1,
      date: '',
      calendar: false,
      controls: {
        control1: '',
        control2: '',
        control3: '',
        control4: '',
        control5: '',
        control6: '',
        control7: '',
        control8: '',
        control9: '',
        control10: '',
        control11: [],
        control12: '',
        control13: '',
        control14: '',
        control15: '',
        control16: '',
        control17: ''
      }
    }
  },
  validations: {
    controls: {
      control1: { required, numeric },
      control2: { required, numeric },
      control3: { required },
      control4: { required, alpha },
      control5: { required, alpha },
      control6: { required, alpha },
      control7: { required },
      control8: { required },
      control9: { required, email },
      control10: { required },
      control11: {
        required: requiredIf(function () {
          return this.controls.control11?.length === 0
        })
      },
      control12: { required },
      control13: { required },
      control14: { required, alpha },
      control15: { required },
      control16: { required, alpha },
      control17: { required, numeric }
    }
  },
  methods: {
    increaseStep: function () {
      if (this.step <= this.maxStep) {
        const currentControl = this.$v.controls[`control${this.step}`]
        if (!currentControl.$invalid) {
          if (this.step === this.maxStep) {
            this.submit()
          } else {
            this.step++
            this.progressbarValue += 5.8
          }
        } else {
          currentControl.$touch()
        }
      }
    },
    decreaseStep: function () {
      if (this.step > this.minStep) {
        this.step--
        this.progressbarValue -= 5.8
      }
    },
    submit: function () {
      this.questionnaire = false
      // eslint-disable-next-line no-unused-vars
      const creditInfo = {
        amount: this.$v.controls.$model.control1,
        term: this.$v.controls.$model.control2,
        card: this.$v.controls.$model.control3,
        surname: this.$v.controls.$model.control4,
        name: this.$v.controls.$model.control5,
        patronymic: this.$v.controls.$model.control6,
        dateOfBirth: this.$v.controls.$model.control7,
        gender: this.$v.controls.$model.control8,
        email: this.$v.controls.$model.control9,
        document: this.$v.controls.$model.control10,
        documentPhotos: this.$v.controls.$model.control11,
        education: this.$v.controls.$model.control12,
        maritalStatus: this.$v.controls.$model.control13,
        spouseFullName: this.$v.controls.$model.control14,
        contactPerson: this.$v.controls.$model.control15,
        contactPersonFullName: this.$v.controls.$model.control16,
        contactPersonPhone: this.$v.controls.$model.control17
      }
    }
  }
}
</script>

<style lang="scss">
  .go-to-form {
    .header {
      color: #d43149;
    }

    .row.justify-center {
      margin: 0;
    }

    .blue-btn.v-btn {
      background-color: #009efa !important;
      color: #ffffff;
      font-size: 15px !important;
      padding: 4px 20px !important;
      height: auto !important;
      min-width: auto !important;
      text-transform: initial;
    }

    .content, .headline {
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

      &.mb {
        margin-bottom: 25px;
      }
    }

    .headline {
      justify-content: space-between;
      background-color: #f3f3f3;
      color: #1f1f1f;
      font-size: 20px;
      padding: 35px 45px 40px !important;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;

      .st61 {
        stroke: #12b422;
        fill: none;
        stroke-width: 5;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      }
    }

    .error {
      color: #ff0000;

      &.mt {
        margin-top: 7px;
      }
    }

    .v-dialog {

      .title {
        color: #000000;
      }

      .subtitle {
        margin: 10px 0 15px;
      }

      .v-card {
        min-height: 440px;
      }
    }

    .v-progress-linear {
      background: #cbcbcb;

      .v-progress-linear__determinate {
        background: rgb(18, 180, 34);
      }
    }

    .v-card__text {
      padding: 35px 45px 75px !important;
    }

    .v-input {
      padding: 0;
      margin: 0;

      &.v-text-field {

        .v-label {
          top: 0;
        }
      }
    }

    .v-card__text, .v-card__actions {
      background: #e9e9e9;
    }

    .v-card__text {
      .v-text-field__details {
        display: none;
      }
    }

    .v-card__actions {
      display: flex;
      justify-content: space-between;
      padding: 0 45px 45px 45px !important;

      .spacer {
        display: none;
      }

      .v-btn {
        color: #fff;
        background-color: #cbcbcb;
        border-radius: 10px;
        padding: 20px !important;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #009efa !important;
        }

        .v-btn__content {
          text-transform: capitalize;
        }

        &:nth-child(2) {
          &:before {
            content: '→';
            transform: rotate(180deg);
            margin-right: 2px;
            position: relative;
            background-color: inherit;
            opacity: 1;
          }
        }

        &:last-child {
          background-color: #12b422;

          &:after {
            content: '→';
            margin-left: 2px;
          }
        }
      }
    }

    .v-input {

      &.calendar-field {
        width: 40%;
        display: flex;
        flex-direction: row-reverse;
        position: relative;

        .v-input__prepend-outer {
          position: absolute;
        }
      }

      &.gender, &.document, &.education, &.marital-status, &.contact-person {
        .v-label {
          color: #000;
          margin-left: 7px;
        }

        .theme--light.v-icon {
          color: #009efa99;
        }
      }

      &.file {
        .v-input__prepend-outer, .v-input__append-inner {
          display: none;
        }
      }
    }

    .vue-tel-input {
      border: none;
      border-bottom: 1px solid #bbb;
    }
  }

  .v-date-picker-table .v-btn.v-btn--active {
    color: inherit !important;
  }
</style>
