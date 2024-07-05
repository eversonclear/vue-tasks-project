<template>
  <div class="input-container">
    <i :class=iconClasses></i>
    <input v-bind="$attrs" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>

import 'primeicons/primeicons.css'

export default {
  name: 'InputComponent',
  props: {
    icon: String,
  },
  computed: {
    iconClasses() {
      if (this.icon) {
        return this.icon;
      } else {
        const hasTypeAttribute = Object.prototype.hasOwnProperty.call(this.$attrs, 'type');
        
        if (hasTypeAttribute && this.$attrs.type === 'email') {
          return 'pi pi-envelope';
        } else if (hasTypeAttribute && this.$attrs.type === 'password') {
          return 'pi pi-eye';
        } else {
          return ''
        }
      }
    },
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
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
