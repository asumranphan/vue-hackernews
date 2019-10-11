<template>
  <article class="stories-item">
    <span class="item-score">{{ item.score }}</span>

    <h5 class="item-title">
      {{ item.title }}
    </h5>

    <div class="item-meta">
      <span class="by">
        by {{ item.by }}
      </span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
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
</style>
