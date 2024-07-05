<template>
  <div class="login-container">
    <div class="login-box">
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Email</label>
          <InputComponent v-model="email" type="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <InputComponent v-model="password" type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" class="login-button">Sign In</button>
      </form>
      <p class="create-account-text">Don't have an account? <router-link to="/signup">Register</router-link></p>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'

export default {
  components: {
    InputComponent: Input
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      console.log('Email:', this.email, 'Password:', this.password)
    }
  }
}
</script>

<style scoped>
.login-container {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-box {
  background-color: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  text-align: left;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.login-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.create-account-text {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}
</style>
