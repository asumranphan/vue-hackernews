<template>
  <div class="stories-view">
    <div class="stories-container">
      <div class="stories-list">
        <article class="stories-item">
          <span class="item-score">{{ item.score }}</span>
          <h5 class="item-title">
            {{ item.title }}
          </h5>
          <div class="item-meta">
            <span class="posted-by">
              by {{ item.by }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
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

  .stories-item {
    position: relative;
    padding: $story-item-padding-y $story-item-padding-x;
    padding-left: $story-item-padding-x * 4;
    border-bottom: 1px solid $story-item-border-color;

    .item-score {
      position: absolute;
      color: $story-item-score-color;
      font-size: $story-item-score-font-size;
      font-weight: 700;
      top: 50%;
      left: 0;
      width: 80px;
      text-align: center;
      transform: translateY(-50%);
    }

    .item-title {
      font-size: $story-item-title-font-size;
      line-height: 24px;
      margin: 0;
    }

    .item-meta {
      font-size: $story-item-meta-font-size;
      color: $story-item-meta-color;
    }
  }
}
</style>
