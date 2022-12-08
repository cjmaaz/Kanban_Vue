<script setup>

</script>
<template>
  <div class="board">
    <div class="status_board">
      <div class="header">
        <h5>New</h5>
        <button>+</button>
      </div>
      <div class="items"></div>
    </div>
    <div class="status_board">
      <div class="header">
        <h5>In Progress</h5>
        <button>+</button>
      </div>
      <div class="items"></div>
    </div>
    <div class="status_board">
      <div class="header">
        <h5>Released</h5>
        <button>+</button>
      </div>
      <div class="items"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.board {
  padding: 1em 2em 0em 2em;
  display: grid;
  grid-template: 1fr/ repeat(3, 1fr);
  gap: 1em;

  .status_board {
    height: 70vh;
    border: 2px dotted rgb(196, 196, 196);
    border-radius: 1em;
    padding: 1em;

    .header {
      display: flex;
      justify-content: space-between;

      button {
        padding: .5em 1.5em;
        background-color: rgb(94, 92, 92);
        border: 0;
        border-radius: .5em;
        color: #fff;
        transition: ease-in 100ms;
        font-weight: bolder;

        &:hover {
          border-radius: 1em;
        }
      }
    }
  }
}
</style>