<template>
        <div class="backdrop">
<div class="centr">
             <ProgressCircle v-if="isOpenCircle">
                 <h1>{{ textinfo }}</h1>
             </ProgressCircle>
<div class="progress__card" v-show="isOpenthis">

            <span class="progress__card__title">Сопоставление<br>и анализ задач</span>
            <div class="circular-progress">
               <div class="progress-value">
                 <slot></slot>
               </div>
            </div>
                <div class="container2">

               <button class="buttonred" @click="closeloadinginfo" >отмена</button>
               <button class="buttongreen" @click="save" >сохранить</button>

                </div>

         </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import ProgressCircle from "@/components/ProgressCircle.vue";

export default {
  name: "LoadingInfo",
  components: {ProgressCircle},
  data(){
    return {
          isOpenCircle: false,
          isOpenthis: true,
          textinfo: 'Идет сохранение данных в БД',
        }
   },
  methods: {
    save: function () {
      this.getsave('ok')

    },
    closeloadinginfo(){
      this.getcancel()
      this.$emit('closeloadinginfo');
    },

      getsave: function (rez) {
       this.isOpenCircle = true
       this.isOpenthis = false
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/excel-save',
        params: { save: rez },
        headers: {Authorization: 'Token ' + this.getCookie("auth_token")}
      }).then(response => {
        this.textinfo = 'Данные успешно сохранены в БД'
        setTimeout(() => {
          this.isOpenCircle = false;
          this.$emit('closeloadinginfo');}, 1000);
      }).catch(error => {
        if (error.response.status === 400 || error.response.status === 401) {
          this.$router.push({name: "login"})
        }
         this.textinfo = 'ошибка'
         setTimeout(() => {
          this.isOpenCircle = false;
          this.$emit('closeloadinginfo');}, 1000);
      });
    },

      getcancel: function () {
         axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/v1/excel-save',
        params: { save: 'dell' },
        headers: {Authorization: 'Token ' + this.getCookie("auth_token")}
      }).then(response => {
         console.log('dell')
      }).catch(error => {
        console.log('error dell')
      });
    },

      getCookie: function (name) {
      let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    }

  }
</script>

<style scoped>

.centr{
position: absolute;
left: 40%;
top: 30%;

}


img.rot {
  animation: 2s linear 0s normal none infinite running rot;
  -webkit-animation: 2s linear 0s normal none infinite running rot;
  width: 100px;
}
@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.50);
  z-index: 100;
}

.container2{

    display: flex;

    flex-direction: row;

    justify-content: flex-start;

    padding: 20px;
}

.buttonred {
    background-color: #f44336;
  border-radius: 4px;
    border: none;
    color: white;
    padding: 15px 32px;
    margin-right: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.buttongreen {
    background-color: #4CAF50; /* Green */
  border-radius: 4px;
    border: none;
    color: white;
    padding: 10px  30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}


</style>