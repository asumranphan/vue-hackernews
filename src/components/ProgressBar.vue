<template>
  <div
    class="progress-bar"
    :style="{
      width: `${percent}%`,
      height: height,
      backgroundColor: success ? color : failedColor,
      opacity: show ? 1 : 0
    }"
  >
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false,
      success: true,
      percent: 0,
      duration: 3000,
      height: '2px',
      color: '#efc14e',
      failedColor: '#ff0000'
    }
  },

  methods: {
    start: function () {
      this.show = true
      this.success = true
      this._cut = 10000 / this.duration
      this._progressing = setInterval(() => {
        if (this.percent > 95) {
          this.percent = 100
          return
        }
        this.increase(this._cut * Math.random())
      }, 200)
    },

    increase: function (percent) {
      this.percent += Math.floor(percent)
    },

    hide: function () {
      clearInterval(this._progressing)
      this.percent = 100
      setTimeout(() => {
        this.show = false
        this.percent = 0
      }, 500)
    },

    finish: function () {
      this.hide()
    },

    fail: function () {
      this.success = false
      this.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 0%;
  transition: width .2s, opacity .5s;
  z-index: 999999;
}
</style>
