<template>
  <div class="signup-container">
    <div class="signup-box">
      <form @submit.prevent="handleSignup">
        <div class="input-group">
          <label for="first_name">First Name</label>
          <InputComponent required v-model="first_name" type="text" id="first_name" placeholder="Enter your first name" icon="pi pi-user" />
        </div>
        <div class="input-group">
          <label for="last_name">Last Name</label>
          <InputComponent required v-model="last_name" type="text" id="last_name" placeholder="Enter your last name" icon="pi pi-user"/>
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <InputComponent required v-model="email" type="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <InputComponent required v-model="password" type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" class="signup-button">Register</button>
      </form>
      <p class="create-account-text">Already have account? <router-link to="/login">Login</router-link></p>
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
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSignup() {
      try {
        const response = await this.$apiClient.post('/signup', {
          email: this.email,
          password: this.password
        })

        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
.signup-container {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.signup-box {
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

.signup-button {
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

.signup-button:hover {
  background-color: #0056b3;
}

.signup-text {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}
</style>
