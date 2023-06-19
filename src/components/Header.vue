<template>
 <header class="header">
       <div class="header__content">
      <div class="header__content__logo">
         <img src= "../assets/images/logo.svg" alt="logotype" class="img-con">
      </div>
      <nav class="header__content__nav">
         <ul class="header__content__nav__list">
            <li class="header__content__nav__list__item active">
               <a href="#" class="header__content__nav__list__item__link">Планы работ</a>
            </li>
            <li class="header__content__nav__list__item">
               <a href="#" class="header__content__nav__list__item__link">Транспорт</a>
            </li>
            <li class="header__content__nav__list__item">
               <a href="#" class="header__content__nav__list__item__link">Оборудование</a>
            </li>
            <li class="header__content__nav__list__item">
               <a href="#" class="header__content__nav__list__item__link">Управление пользователями</a>
            </li>
            <li class="header__content__nav__list__item">
               <a href="#" class="header__content__nav__list__item__link">Контакты</a>
            </li>
            <li class="header__content__nav__list__item">
               <a href="#" class="header__content__nav__list__item__link">Сотрудники</a>
            </li>
            <li class="header__content__nav__list__item">
               <a href="#" class="header__content__nav__list__item__link">Отчеты</a>
            </li>
            <li class="header__content__nav__list__item__points __select">
               <span class="header__content__nav__list__item__link __select__header">...</span>
               <div class="header__content__user__info__role__header__content __select__body">
                  <a href="#"
                     class="header__content__user__info__role__header__content__item __select__body__item">Отчеты</a>
                  <a href="#"
                     class="header__content__user__info__role__header__content__item __select__body__item">Сотрудники</a>
                  <a href="#"
                     class="header__content__user__info__role__header__content__item __select__body__item">Контакты</a>
                  <a href="#"
                     class="header__content__user__info__role__header__content__item __select__body__item">Управление
                     пользователями</a>
                  <a href="#"
                     class="header__content__user__info__role__header__content__item __select__body__item">Оборудование</a>
               </div>
            </li>
         </ul>
      </nav>
      <div class="header__content__user">
         <div class="burger">
            <div class="burger__line"></div>
            <div class="burger__line"></div>
            <div class="burger__line"></div>
            <div class="burger__line"></div>
         </div>
         <div class="header__content__user__message">
            <img src="../assets/images/mes.svg" alt="message" class="img-con">
         </div>
         <div class="header__content__user__info">
            <div class="header__content__user__info__avatar">
               <picture><source srcset="#" type="image/webp"><img src="#" alt="userprewi" class="img-ab"></picture>
            </div>
            <div class="header__content__user__info__text">
               <span class="header__content__user__info__name">Имя Фамилия</span>
               <div class="header__content__user__info__role __select">
                  <div class="header__content__user__info__role__header __select__header">
                     <span class="header__content__user__info__role__header__text __selectText">Должность</span>
                     <div class="header__content__user__info__role__header__arrow">
                        <img src="../assets/images/arrow.svg" alt="arrow" class="img-con">
                     </div>
                  </div>
                  <div class="header__content__user__info__role__header__content __select__body">
                     <span
                        class="header__content__user__info__role__header__content__item __select__body__item">должность1</span>
                     <span
                        class="header__content__user__info__role__header__content__item __select__body__item">должность1</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>