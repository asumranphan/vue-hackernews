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

      <infinite-loading
        @infinite="loadItems"
        spinner="waveDots"
      >
        <span slot="no-more"></span>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
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

  components: {
    InfiniteLoading,
    Item
  },

  methods: {
    loadItems ($state) {
      this.$bar.start()
      this.$store.dispatch('FETCH_LIST_DATA', {
        type: this.type,
        page: this.page
      }).then(() => {
        const items = this.$store.getters.activeItems(this.page)

        if (items.length) {
          this.page += 1;
          this.items.push(...items)
          $state.loaded()
        } else {
          $state.complete()
        }

        this.$bar.finish()
      }).catch(() => {
        this.$bar.fail()
      })
    }
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

    @media (max-width: 480px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .stories-list {
    background: $white;
    margin-bottom: $spacer;
  }
}
</style>
