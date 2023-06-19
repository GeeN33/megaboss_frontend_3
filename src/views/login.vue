<template>
  <main class="login">
      <div class="login__logo">
         <img src="../assets/images/logo.svg" alt="logo" class="img-con">
      </div>
      <div class="login__content">
         <span class="login__content__title">Добро пожаловать</span>
         <div class="login__content__modal">
            <div class="login__content__modal__logo">
               <img src="../assets/images/logo.svg" alt="logo" class="img-con">
            </div>
            <sapn class="login__content__modal__title">Авторизоваться</sapn>
            <div class="login__content__modal__item">
               <input v-model="login" type="text" class="input" placeholder="Логин">
            </div>
            <div class="login__content__modal__item">
               <input v-model="password" type="password" class="input" placeholder="Пароль">
            </div>
            <button @click="setLogin" class="login__content__modal__btn _btn">Войти</button>

         </div>
      </div>
   </main>
</template>

<script>
import axios from 'axios';
export default {
  name: "login",
  data(){
    return{
      login: '',
      password: '',
    }
  },
  methods:{
    setLogin: function (){
      if( this.login !== '' && this.password  !== '' ){
       axios({
            method: 'post',
            url: "http://127.0.0.1:8000/api/v1/auth/token/login/",
            data: {
            username: this.login,
            password: this.password
           }}).then(response => {
           if(response.status === 200) {
              this.setCookie("auth_token", response.data.auth_token)}
              this.$router.push({name: "index"})
            })
        .catch(error => {
          if(error.response.status === 400 || error.response.status === 401){
             alert('Логин или пароль не верен');
          }
            });

      }else {alert('пожалуйста заполните поля')}
    },

   setCookie: function(cook, vol) {
        let date = new Date(Date.now() + 1209600e3);
        document.cookie = cook+"="+ vol +"; expires=" + date;
     }

  }
}
</script>

<style scoped>

</style>