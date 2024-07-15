<template>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  methods: {
    login() {
      this.$store.commit('login')
      this.$router.push('/teams')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 77px;
  background-image: url("/src/images/background.png");
  background-size: cover;
  height: 792px;
  z-index: -1;
}

.title {
  color: #0d2695;
}

.title2 {
  color: #9d88df;
}

.cards {
  margin: 70px auto auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 55%;
}
button {
  background-color: #0d2695;
  border: none;
  color: white;
  border-radius: 15px;
  height: 80px;
  width: 300px;
  margin: 70px 42.6%;
}
</style>
