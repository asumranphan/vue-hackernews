<template>
  <div class="stories-view">
    <div class="stories-container">
      <div class="stories-list">
        <item :item="item"></item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '../components/Item.vue'

export default {
  props: {
    type: String
  },

  data () {
    return {
      item: {
        id: 21190004,
        title: "Tech talks at sea: Join Flexport for a cruise of the Oakland port",
        score: 1,
        by: "thedogeye",
        type: "job",
        time: 1570523379,
        url: "https://techtalksatseavision.splashthat.com/"
      }
    }
  },

  components: { Item }
}
</script>

<style lang="scss" scoped>
.stories-view {
  .stories-container {
    padding-left: $spacer;
    padding-right: $spacer;
    margin: 0 auto;
    max-width: 800px;
  }

  .stories-list {
    background: $white;
  }
}
</style>
