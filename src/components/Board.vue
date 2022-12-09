<script setup>
import { useProjectStore } from '@/stores/project'
const store = useProjectStore();


</script>
<template>
  <div class="board">
    <div class="status_board">
      <div class="header">
        <h5>New</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.newBoard" v-if="store.newBoard.length" class="each__title">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="details">
            {{ item.details }}
          </div>
        </div>
      </div>
    </div>
    <div class="status_board">
      <div class="header">
        <h5>In Progress</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.newBoard" v-if="store.newBoard.length" class="each__title">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="details">
            {{ item.details }}
          </div>
        </div>
      </div>
    </div>
    <div class="status_board">
      <div class="header">
        <h5>Released</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.newBoard" v-if="store.newBoard.length" class="each__title">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="details">
            {{ item.details }}
          </div>
        </div>
      </div>
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

    .items {
      margin-top: 1em;

      .each__title {
        background-color: #fff;
        padding: .5em;
        border-radius: .5em;
        box-shadow:
          0.8px 1px 1.2px -1px rgba(0, 0, 0, 0.034),
          1.9px 2.3px 2.9px -1px rgba(0, 0, 0, 0.048),
          3.6px 4.4px 5.4px -1px rgba(0, 0, 0, 0.06),
          6.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072),
          12.1px 14.6px 18px -1px rgba(0, 0, 0, 0.086),
          29px 35px 43px -1px rgba(0, 0, 0, 0.12);

        .details {
          font-size: calc(.5em + .5vw);
        }
      }
    }
  }
}
</style>