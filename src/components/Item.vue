<script setup>
const props = defineProps({
  each: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="title">
    <span class="info">
      {{ each.title }}
    </span>
    <span>
      ⚙️
    </span>
  </div>
  <div class="details">
    {{ each.details }}
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin-bottom: .5em;
  display: flex;
  justify-content: space-between;

  span.info {
    border-bottom: 1px solid rgb(197, 197, 197);
  }

  span:not(.info) {
    font-size: medium;
    cursor: context-menu;
  }
}

.details {
  font-size: calc(.5em + .5vw);
}
</style>