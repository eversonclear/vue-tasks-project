<template>
  <div class="input-container">
    <button @click="toggleSeePassword" v-if="typeIsPassword" class="button-toggle" type="button">
      <i :class="iconClasses"></i>
    </button>
    <i :class="iconClasses" v-else></i>

    <input 
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :type="inputType"
    >
  </div>
</template>

<script>
import 'primeicons/primeicons.css'

export default {
  name: 'InputComponent',
  props: {
    icon: String
  },
  data() {
    return {
      seePassword: false
    }
  },
  methods: {
    toggleSeePassword() {
      this.seePassword = !this.seePassword
    },
    hasAttr(attrName) {
      return Object.prototype.hasOwnProperty.call(this.$attrs, attrName);
    }
  },
  computed: {
    typeIsPassword() {
      return this.$attrs.type === 'password';
    },
    iconClasses() {
      if (this.icon) {
        return `${this.icon} icon`;
      } else if (this.hasAttr('type')) {
        if (this.$attrs.type === 'email') {
          return 'pi pi-envelope icon';
        } else if (this.$attrs.type === 'password') {
          return this.seePassword ? 'pi pi-eye icon' : 'pi pi-eye-slash icon';
        }
      }
      return '';
    },
    inputType() {
      if (this.$attrs.type === 'password') {
        return this.seePassword ? 'text' : 'password';
      }
      return this.$attrs.type || 'text';
    }
  }
};
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  gap: 10px;
}

.input-container input {
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
}

.icon {
  font-size: 16px;
}

.button-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}
</style>
