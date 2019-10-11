<template>
  <div class="stories-view">
    <div class="stories-container">
      <div class="stories-list">
        <item
          v-for="item in items"
          :key="item.id"
          :item="item"
        >
        </item>
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
      page: 1,
      items: []
    }
  },

  components: { Item },

  methods: {
    loadItems () {
      this.$store.dispatch('FETCH_LIST_DATA', {
        type: this.type,
        page: this.page
      }).then(() => {
        const items = this.$store.getters.activeItems(this.page)
        this.items.push(...items)
      })
    }
  },

  mounted () {
    this.loadItems()
  }
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
