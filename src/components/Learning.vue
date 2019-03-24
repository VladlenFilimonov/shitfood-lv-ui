<template>
  <div class="holder">

    <form @submit.prevent="addSkill">
      <input autocomplete="off"
             name="skill"
             placeholder="Enter a skill you have.."
             type="text"
             v-model="skills.skill"
             v-validate="'min:5'"/>
      <transition
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
        name="alert-in">
        <p v-if="errors.has('skill')">{{ errors.first('skill')}}</p>
      </transition>
    </form>

    <ul>
      <transition-group
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutDown"
        name="list">
        <li v-bind:key="index" v-for="(data, index) in skills">
          {{ data.skill }}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>
      </transition-group>
    </ul>

  </div>
</template>

<script>
  export default {
    componentName: 'Skills',
    data() {
      return {
        skills: [
          {skill: 'Vue.js'},
          {skill: 'Java'},
          {skill: 'C++'}
        ]
      }
    },
    methods: {
      addSkill() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.skills.push({skill: this.skills.skill})
            this.skills.skill = ''
          } else {
            alert('Not valid')
          }
        })
      },
      remove(id) {
        this.skills.splice(id, 1)
      }
    }
  }
</script>

<style scoped>
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
    width: 100%;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }

  .alert-in-leave-active {
    animation: bounce-in reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
    cursor: pointer;
  }
</style>
