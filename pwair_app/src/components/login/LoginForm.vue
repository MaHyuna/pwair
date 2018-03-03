<template>
  <div>
    <md-card class="md-primary bg-white">
      <md-card-content>
        <form action="">
          <input v-model="id" type="email" name="email">
          <input v-model="pw" type="password" name="password">
        </form>
        <md-button class="md-raised" v-on:click="loginWithEmail">LOGIN</md-button>
      </md-card-content>
    </md-card>
    
  </div>
</template>

<script>
import router from 'vue-router'

export default {
	data() {
		return {
			id: '',
			pw: ''
		}
	},
  methods: {
    loginWithEmail() {
			var self = this;
			firebase.auth().signInWithEmailAndPassword(this.id, this.pw).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
			}).then(function(user){
				console.log(user);
				self.$router.push({ path: '/home' });
			});
		},
  },
}
</script>


<style scoped>
.bg-white { margin: 0 10%; background: #fff; }
.bg-white input { margin-bottom: 10px; display: block; width: 100%; height: 30px; background: rgb(251, 228, 150); border:none; }
</style>

