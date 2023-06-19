<template>
  <main class="main">

    <Header/>
    <FormImport v-if="isformimport" @closeModalf="closeModalf"/>

    <ColumnSelect v-if="iscolumnselect" @closeModalc="closeModalc"/>

    <div class="main__container __Megaboss">
      <div class="main__header">



        <button class="main__header_btn _btn" @click="showModalf">Добавить обьект</button>
        <div class="main__header__select __select">
          <div class="main__header__select__header __select__header">
            <span class="main__header__select__header__text">Все-</span>
            <div class="main__header__select__header__arrow">
              <img src="../assets/images/arrow.svg" alt="arrow" class="img-con">
            </div>
          </div>
          <div class="main__header__select__body __select__body">
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-1" type="checkbox" class="ckeck">
                <label for="checkbox-1" class="ckeck-label">Все</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-2" type="checkbox" class="ckeck">
                <label for="checkbox-2" class="ckeck-label">В работе, полевой этап</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-3" type="checkbox" class="ckeck">
                <label for="checkbox-3" class="ckeck-label">В работе, камеральный этап</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-4" type="checkbox" class="ckeck">
                <label for="checkbox-4" class="ckeck-label">Завершен полевой этап</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-5" type="checkbox" class="ckeck">
                <label for="checkbox-5" class="ckeck-label">Завершен камеральный этап</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-6" type="checkbox" class="ckeck">
                <label for="checkbox-6" class="ckeck-label">Отложен</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-7" type="checkbox" class="ckeck">
                <label for="checkbox-7" class="ckeck-label">Ожидает отправки</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-8" type="checkbox" class="ckeck">
                <label for="checkbox-8" class="ckeck-label">Исключён из плана</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-9" type="checkbox" class="ckeck">
                <label for="checkbox-9" class="ckeck-label">Не выведен в ДО Принципалом</label>
              </div>
            </div>
            <div class="main__header__select__body__item">
              <div class="checkbox">
                <input id="checkbox-10" type="checkbox" class="ckeck">
                <label for="checkbox-10" class="ckeck-label">Нет</label>
              </div>
            </div>
          </div>
        </div>
        <div class="main__header__find">
          <div class="input__block">
            <span class="input__block__text">Поиск</span>
            <input class="input" type="text" placeholder="Александр Дременко">
          </div>
        </div>
        <div class="main__header__date">
          <div class="main__header__date__label">
            <span class="main__header__date__label__text">Дата начал факт</span>
            <div class="main__header__date__label__img">
              <img src="../assets/images/date.svg" alt="date" class="img-con">
            </div>
          </div>
          <div class="main__header__date__input__block">
            <div class="main__header__date__input">
              <input type="text" class="input data-picker" placeholder="00.00.0000">
            </div>
            <div class="main__header__date__input">
              <input type="text" class="input __time " placeholder="00:00">
            </div>
          </div>
        </div>
        <div class="main__header__date">
          <div class="main__header__date__label">
            <span class="main__header__date__label__text">Дата начал факт</span>
            <div class="main__header__date__label__img">
              <img src="../assets/images/date.svg" alt="date" class="img-con">
            </div>
          </div>
          <div class="main__header__date__input__block">
            <div class="main__header__date__input">
              <input type="text" class="input data-picker" placeholder="00.00.0000">
            </div>
            <div class="main__header__date__input">
              <input type="text" class="input __time" placeholder="00:00">
            </div>
          </div>
        </div>
        <div class="main__header__right">
          <div class="main__header__right__text">
            <div class="main__header__right__text__data">
              <input type="text" class="main__header__right__text__data__input data-picker">
            </div>
            Дата начала<br>с <span>09.02.2023 до 09.03.2023</span>
          </div>
          <div class="main__header__right__upload">
            <img src="../assets/images/upload.svg" alt="upload" class="img-con">
          </div>
          <div class="main__header__right__more" @click="showModalc">
            <img src="../assets/images/more.svg" alt="more" class="img-con">
          </div>
        </div>
      </div>
      <div class="main__scroll">
        <div class="main__content">
          <div class="row">
            <input id="check-0" type="checkbox" class="check">
            <label for="check-0" class="row__checked"> </label>

            <div class="row__content __header">

              <div  class="row__content__col" v-for="collum in excellist.collumlist" :key="collum.id">

                    {{collum}}
<!--                      <Filter/>-->
              </div>

            </div>

          </div>

          <div class="row" v-for="rows in excellist.planrows" :key="rows.id">
            <input id="check-0" type="checkbox" class="check">
            <label for="check-0" class="row__checked"> </label>
            <div class="row__content">

              <span class="row__content__col" v-for="row in rows" :key="row.id">{{ row }}</span>

            </div>
          </div>

        </div>
      </div>
    </div>

  </main>
</template>

<script>
import Header from "../components/Header.vue";
import FormImport from "../components/FormImport.vue";
import ColumnSelect from "../components/ColumnSelect.vue";
import axios from 'axios';


export default {
  name: "index",
  components: {
    FormImport,
    ColumnSelect,
    Header,
  },

  methods: {
    showModalf: function () {

      this.iscolumnselect = false
      this.isformimport = true
    },

    closeModalf: function () {

      this.isformimport = false
       this.getlist()
    },

    showModalc: function () {

      this.iscolumnselect = true
      this.isformimport = false
    },

    closeModalc: function () {
      this.iscolumnselect = false
      this.getlist()
    },

    getlist: function () {
      var loc = window.location
      let hh = loc.protocol+ '//' +loc.hostname+':8000/api/v1/excel-list'
      console.log(hh)
      axios({
        method: 'get',
        url: hh,
        headers: {Authorization: 'Token ' + this.getCookie("auth_token")}
      }).then(response => {
        this.excellist = response.data
        console.log('getlist')
      }).catch(error => {
        if (error.response.status === 400 || error.response.status === 401) {
          this.$router.push({name: "login"})
        }
        console.log('error getlist')
      });
    },

    getCookie: function (name) {
      let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },

  },

  data() {
    return {
      excellist: [],
      isformimport: false,
      iscolumnselect: false
    }
  },

  created() {
    this.getlist()
  },

}
</script>

<style scoped>
.modal-blur {
  filter: blur(3px);
}

</style>