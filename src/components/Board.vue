<script setup>
import { useProjectStore } from '@/stores/project'
import Item from './Item.vue';

let dragSrcEl = null;

function handleDragStart(e) {
  e.target.style.opacity = 0.4;
  if (Math.floor(Math.random() * 2) == 1) {
    e.target.style.setProperty('rotate', '4deg');
  } else {
    e.target.style.setProperty('rotate', '-4deg');
  }

  e.target.style.transform = 'translateX(50px)';
  // dragSrcEl = e.target;

  // e.dataTransfer.effectAllowed = 'move';
  // e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragEnd(e) {
  e.target.style.removeProperty('rotate');
  e.target.style.removeProperty('opacity');
  e.target.style.removeProperty('transform');

  // items.forEach(function (item) {
  //   item.classList.remove('over');
  // });
}
function handleDragOver(e) {
  console.log(e);
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

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
        <div v-for="item in store.newBoard" v-if="store.newBoard.length" class="each__title" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd" @dragover="handleDragOver">
          <Item :each="item" />
        </div>
      </div>
    </div>
    <div class="status_board">
      <div class="header">
        <h5>In Progress</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.progressBoard" v-if="store.progressBoard.length" class="each__title" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd" @dragover="handleDragOver">
          <Item :each="item" />
        </div>
      </div>
    </div>
    <div class="status_board">
      <div class="header">
        <h5>Released</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.releasedBoard" v-if="store.releasedBoard.length" class="each__title" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd" @dragover="handleDragOver">
          <Item :each="item" />
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
    border: 2px dotted rgb(196, 196, 196);
    border-radius: 1em;
    padding: 1em;
    background-color: hsl(220, 16%, 96%);
    box-shadow:
      0.8px 1px 1.2px -1px rgba(0, 0, 0, 0.034),
      1.9px 2.3px 2.9px -1px rgba(0, 0, 0, 0.048),
      3.6px 4.4px 5.4px -1px rgba(0, 0, 0, 0.06),
      6.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072);

    .header {
      display: flex;
      justify-content: space-between;

      button {
        padding: .5em 1.5em;
        border-radius: .5em;
        background-color: rgb(94, 92, 92);
        color: #fff;
        border: 0;
        transition: ease-in-out 100ms;
        font-weight: bolder;
        box-shadow:
          0.8px 1px 1.2px -1px rgba(0, 0, 0, 0.034),
          1.9px 2.3px 2.9px -1px rgba(0, 0, 0, 0.048),
          3.6px 4.4px 5.4px -1px rgba(0, 0, 0, 0.06),
          6.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072);

        &:hover {
          transform: translateY(-2px);
          background-color: #BEDCFE;
          color: #666;
          border-radius: 5em;
          box-shadow:
            0.8px 1px 1.2px -1px rgba(0, 0, 0, 0.034),
            1.9px 2.3px 2.9px -1px rgba(0, 0, 0, 0.048),
            3.6px 4.4px 5.4px -1px rgba(0, 0, 0, 0.06),
            6.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072),
            12.1px 14.6px 18px -1px rgba(0, 0, 0, 0.086),
            29px 35px 43px -1px rgba(0, 0, 0, 0.12);
        }
      }

    }

    .items {
      margin-top: 1em;

      .each__title {
        font-size: x-large;
        background-color: #fff;
        padding: .5em;
        margin: .25em 0px;
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

        &.over {
          border: 3px dotted #666;
        }
      }
    }
  }
}
</style>