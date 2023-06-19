<template>
<div class="backdrop">
     <div class="list__import">
    <div class="list__who__content__item">
      <button class="modal__remove"  @click="closeModalc"></button>
    </div>
            <div class="list__who__content">
               <div class="list__who__content__item">
                  <div class="checkbox" v-for="collum in collums_list" >
                     <input  v-bind:id="collum.collum" type="checkbox" v-bind:value="collum.collum" class="ckeck"  v-model="checkedcollums"  >
                     <label v-bind:for="collum.collum" class="ckeck-label">{{collum.descript}}</label>
                  </div>
               </div>
            </div>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "ColumnSelect",
      data() {
    return {
      checkedcollums : [],
      collums_list: [],

    }
  },
      methods: {

       closeModalc: function () {
                 this.setcollum(this.checkedcollums)
            },
       setcollum: function (rez) {

       axios({
        method: 'get',
        url: this.$store.state.backendUrl+'set-collum',
        params: { collums: rez },
        headers: {Authorization: 'Token ' + this.getCookie("auth_token")}
         // eslint-disable-next-line no-unused-vars
      }).then(response => {

        this.$emit('closeModalc');
        console.log('set-collum ok')

      }).catch(error => {
        if (error.response.status === 400 || error.response.status === 401) {
          this.$router.push({name: "login"})
        }
         console.log('set-collum error')
      });
    },
       getcollum: function () {

       axios({
        method: 'get',
        url: this.$store.state.backendUrl+'get-collum',
        headers: {Authorization: 'Token ' + this.getCookie("auth_token")}
      }).then(response => {
            this.collums_list = response.data
             for (const element of this.collums_list) {
               if(element.checked){
              this.checkedcollums.push(element.collum);
               }}
        console.log('getcollum ok')

      }).catch(error => {
        if (error.response.status === 400 || error.response.status === 401) {
          this.$router.push({name: "login"})
        }
        console.log('getcollum error')
      });
    },

       getCookie: function (name) {
      let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    },

    created() {
    this.getcollum()
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
    left: 70%;
    top: 10%;
    outline: 2px solid #000; /* Чёрная рамка */
    border-radius: 10px; /* Радиус скругления */
    width: 350px;

    }

</style>