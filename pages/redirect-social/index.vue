<template>
  <div class="loading">
    <div class="spinner">
      <div class="dot1" />
      <div class="dot2" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      token: this.$route.query.token || null
    }
  },
  async mounted () {
    if (!this.token) {
      this.$router.push({ name: 'signin' })
    }
    if (this.$auth.loggedIn) {
      this.$router.push({ name: 'profile' })
    }
    await this.$auth.setUserToken('Bearer ' + this.token)
    await this.$auth.setStrategy('local')
    await this.$auth
      .fetchUser()
      .then(() => {
        return this.$router.push({ name: 'profile' })
      })
      .catch((e) => {
        this.$auth.loguot()
        return this.$router.push('/') // bawts looix
      })
  }
}
</script>
<style>
.loading {
  position: fixed;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.47059);
  top: 0;
  z-index: 100;
  width: 100%;
}
.spinner {
  margin: 100px auto;
  text-align: center;

  -webkit-animation: sk-rotate 2s infinite linear;
  animation: sk-rotate 2s infinite linear;
  position: absolute;
  top: 35%;
  right: 50%;
  z-index: 1000;
  width: 100px;
  height: 100px;
}

.dot1,
.dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
