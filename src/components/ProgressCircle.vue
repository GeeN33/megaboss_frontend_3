<template>
      <div class="backdrop">

        <div class="centrh1">
        <slot></slot>
        </div>
<div class="centr">
       <img class="rot" src="../assets/images/settings.svg">
 </div>
      </div>
</template>

<script>
export default {
  name: "ProgressCircle"
}


</script>

<style scoped>

.centr{
position: absolute;
left: 45%;
top: 45%;

}

.centrh1{
color: rgb(255, 255, 255);
position: absolute;
left: 40%;
top: 40%;

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
  background-color: rgba(0, 0, 0, 0.70);
  z-index: 100;
}

</style>