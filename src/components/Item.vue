<script setup>
const props = defineProps({
  each: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="each__title" :data-id="each.id" :data-board="each.board">
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
    <div class="profile">
      <div :name="each.assigned">{{ each.assigned.substring(0, 1) }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.each__title {
  font-size: x-large;
  background-color: #fff;
  padding: .5em;
  margin: .5em 0px;
  border-radius: .5em;
  cursor: grab;
  box-shadow:
    0.8px 1px 1.2px -1px rgba(0, 0, 0, 0.034),
    1.9px 2.3px 2.9px -1px rgba(0, 0, 0, 0.048),
    3.6px 4.4px 5.4px -1px rgba(0, 0, 0, 0.06),
    6.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072),
    12.1px 14.6px 18px -1px rgba(0, 0, 0, 0.086),
    29px 35px 43px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: translateY(-5px);
    box-shadow:
      0.8px 1px 1.2px -1px rgba(0, 0, 0, 0.034),
      1.9px 2.3px 2.9px -1px rgba(0, 0, 0, 0.048),
      3.6px 4.4px 5.4px -1px rgba(0, 0, 0, 0.06),
      6.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072),
      12.1px 14.6px 18px -1px rgba(0, 0, 0, 0.086),
      29px 35px 43px -1px rgba(0, 0, 0, 0.12),
      10.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072);
  }

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

  .profile {
    display: flex;
    justify-content: end;

    div {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      height: 35px;
      width: 35px;
      margin-right: .25em;
      border-radius: 50%;
      background-color: rgb(202, 31, 31);
      color: #fff;

      &:hover {
        &::after {
          display: block;
          position: absolute;
          top: 7px;
          right: 40px;
          content: attr(name);
          width: max-content;
          color: #3d3d3d;
          font-size: medium;
        }
      }
    }
  }
}
</style>