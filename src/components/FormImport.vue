<template>
<div class="backdrop">
   <div class="list__import">

            <LoadingInfo v-if="isloadinginfo" @closeloadinginfo="closeloadinginfo">
                <span class="progress-value__about">всего строк {{rez_data.count_all}}</span>
               <span class="progress-value__about">новых {{rez_data.row_new}}</span>
              <span class="progress-value__about">обновленных {{rez_data.row_updata}}</span>
              <span class="progress-value__about">ошибок {{rez_data.row_error}}</span>
            </LoadingInfo>


             <ProgressCircle v-if="isOpenCircle">
                 <h1>Идет обработка и анализ данных</h1>
             </ProgressCircle>

            <div class="list__import__header">

              <div class="list__import__header__list">

                <input  type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>

                <button class="list__import__header__btn _btn" v-on:click="submitFile()" style="margin-top: 10px"  >Импорт из Excel</button>

              </div>
               <div class="list__import__header__list">
                  <a href="#" class="list__import__header__list__item">Общая информация</a>
                  <a href="#" class="list__import__header__list__item">Финансовая информация</a>
                  <a href="#" class="list__import__header__list__item">Общая информация</a>
                  <a href="#" class="list__import__header__list__item">Общая информация</a>
                  <a href="#" class="list__import__header__list__item">Общая информация</a>
               </div>
            </div>

            <div class="list__import__content">
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Сводный код объекта ремонта (X/Y/Z)</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">рег. № договора с ГИ-ГР</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Принципиал</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Подразделение Принципиала<br>(ЛПУ.УПХГ, УГПГ, Завод и
                     т.д.)</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Наименование объекта диагностирования согласно
                     карточке учета ОС</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Наименование объекта Диагностирования</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Наименование объекта диагностирования согласно
                     карточке учета ОС</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Вид работ</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Содержание работ</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Инв. Номер</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
               <div class="list__import__content__item">
                  <span class="list__import__content__item__text">Ед. измерения</span>
                  <div class="list__import__content__item__block">
                     <input type="text" class="input">
                  </div>
               </div>
            </div>

             <div class="list__import__header">

               <button class="list__import__header__btn _btn pos" @click="closeModalf" style="margin-top: 10px" >Закрыть</button>

            </div>

         </div>
</div>
</template>

<script>
import axios from "axios";
import ProgressCircle from "@/components/ProgressCircle.vue";
import LoadingInfo from "@/components/LoadingInfo.vue";
export default {
  name: "FormImport",
  components: {
    LoadingInfo,
    ProgressCircle,},
  data(){
    return {
          file: '',
          isOpenCircle: false,
          rez_data: {},
          isloadinginfo: false,
        }
  },
  methods: {
            closeloadinginfo: function () {
            this.isloadinginfo = false
           },

          closeModalf: function () {
              this.$emit('closeModalf');
          },

        submitFile: function () {
        if (this.file !== ''){
        let formData = new FormData();
        formData.append('file', this.file);
        this.isOpenCircle = true
        axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/v1/excel-import',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data', Authorization: 'Token ' + this.getCookie("auth_token")}
          }).then(response => {
               this.rez_data = response.data
              console.log('SUCCESS!!');
              this.isOpenCircle = false
               this.isloadinginfo = true
          }).catch(error => {
             console.log('FAILURE!!');
             this.isOpenCircle = false
            if (error.response.status === 400 || error.response.status === 401) {
            this.$router.push({name: "login"})}
          });
        }else {
          alert('Файл не выбран')
        }
        },

        handleFileUpload(){
          this.file = this.$refs.file.files[0];
        },

        getCookie: function (name) {
      let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
        },

}
</script>

<style scoped>

   .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.37);
  z-index: 100;
}

   .list__import{
    position: absolute;
    left: 10%;
    top: 10%;
    outline: 2px solid #000; /* Чёрная рамка */
    border-radius: 10px; /* Радиус скругления */

    }

   .pos{
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
    }

</style>