<template>
  <div>
    Learning2 - Hello {{ parameterName }}
    <br/>
    <button v-on:click="clickButton">Simple button {{ buttonClicked ? 'Clicked' : 'Not clicked' }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Learning2',
    data() {
      return {
        parameterName: this.$route.params.name,
        buttonClicked: false
      }
    },
    methods: {
      clickButton() {
        this.buttonClicked = !this.buttonClicked;
      }
    }

  }
</script>

<style scoped>

</style>
