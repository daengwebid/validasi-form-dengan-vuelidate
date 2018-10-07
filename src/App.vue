<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <img alt="Vue logo" class="img-fluid" src="./assets/logo.png">
      </div>
      <div class="col-md-6">
        <register/>
      </div>
    </div>
  </div>
</template>

<script>
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    Register
  }
}
</script>
