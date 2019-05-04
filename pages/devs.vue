<template lang="pug">
body
  header
    div.title
      h1 {{developer.fullName}}
    div#rectangle
      p Web developer
  div.main
    div#column1
      span.mdi.mdi-arrow-right-bold-outline.icon-style.mdi-24px
      h2
        span Profile
      p
    div#column2
      img(src='../assets/img/uli.png', alt='lorem' class="round")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IDeveloper, IExperience, IEducation } from '~/types/developer' // eslint-disable-line
import { developer, experience, education } from '~/assets/jsonData/uliana.json' // eslint-disable-line
@Component({
  components: {
    // Logo: () => import('~/components/Logo'),
    // VuetifyLogo: () => import('~/components/VuetifyLogo')
  }
})
export default class IndexPage extends Vue {
  developer: IDeveloper = developer
  experience: IExperience = experience
  education: IEducation = education
}
</script>
<style>
  body {
    margin: 0;
    font-family: Georgia;
  }
  header {
    background: rgb(243, 80, 4);
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    justify-content: center;
  }
  .main {
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
  }
  footer {
    background: #DCCEC8;
    height: 70px;
    width: 100%;
  }

  div.title {
    border-width: 1px;
    border-color:white;
    text-align: center;
    border: 1px solid white;
    padding: 15px;
    color:white;
  }
  div#rectangle {
    text-align: center;
    background:white; /* Цвет фона */
    margin-top: -10px;
    text-transform: uppercase;
  }
  #rectangle p {
    padding: 0px 2px; /* Поля вокруг текста */
    margin: 0;
    color: rgb(243, 80, 4);
  }
  p {
    font-family: sans-serif;
  }
  #column1 {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
    box-shadow: inset -1px 0 0 rgb(243, 80, 4)
  }
  .icon-style{
    color: rgb(243, 80, 4);
  }
  h2 {
   width: 100%;
   text-align: left;
   border-bottom: 1px solid rgb(243, 80, 4);
   line-height: 0.1em;
   margin: 16px 0 20px;
  }

  h2 span {
      padding:0 10px;
      background:rgb(255, 255, 255);
      color: rgb(243, 80, 4)
  }
  hr {
    align-content:center;
    size: 1;
    color: rgb(243, 80, 4);
  }
  #column2 {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .round {
    border-radius: 100px; /* Радиус скругления */
    border: 1px solid white; /* Параметры рамки */
    box-shadow: 0 0 2px white; /* Параметры тени */
   }
  img {
    text-align: center;
    width: 62%;
    height: 88%;
  }
</style>
