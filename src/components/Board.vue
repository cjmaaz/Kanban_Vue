<script setup>
import { useProjectStore } from '@/stores/project'
import Item from './Item.vue';
const store = useProjectStore();

let dragSrcEl = null;

function handleDragStart(e) {
  e.target.style.opacity = 0.4;
  if (Math.floor(Math.random() * 2) == 1) {
    e.target.style.setProperty('rotate', '4deg');
  } else {
    e.target.style.setProperty('rotate', '-4deg');
  }
  if (e.target.firstChild.dataset.board === 'releasedBoard') {
    e.target.style.transform = 'translateX(-50px)';
  } else {
    e.target.style.transform = 'translateX(50px)';
  }

  dragSrcEl = e.target;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}
function handleDragEnd(e) {
  e.target.style.removeProperty('rotate');
  e.target.style.removeProperty('opacity');
  e.target.style.removeProperty('transform');

  let items = document.querySelectorAll('div.status_board');
  items.forEach(function (item) {
    item.classList.remove('over');
  });
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function handleDragEnter(e) {
  e.target.classList.add('over');
}

function handleDragLeave(e) {
  e.target.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }
  // console.log('From: Id: ', dragSrcEl.firstChild.dataset.id);
  // console.log('From: Board: ', dragSrcEl.firstChild.dataset.board);
  // console.log('To Board: ', e.currentTarget.dataset.stateid);
  store.mutateBoard(dragSrcEl.firstChild.dataset.board, dragSrcEl.firstChild.dataset.id, e.currentTarget.dataset.stateid)
}

</script>
<template>
  <div class="board">
    <div class="status_board" data-stateId="newBoard" @drop="handleDrop" @dragover="handleDragOver" @dragenter="handleDragEnter" @dragleave="handleDragLeave">
      <div class="header">
        <h5>New</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.newBoard" v-if="store.newBoard.length" :key="item.id" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd">
          <Item :each="item" />
        </div>
      </div>
    </div>
    <div class="status_board" data-stateId="progressBoard" @drop="handleDrop" @dragover="handleDragOver" @dragenter="handleDragEnter" @dragleave="handleDragLeave">
      <div class="header">
        <h5>In Progress</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.progressBoard" v-if="store.progressBoard.length" :key="item.id" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd">
          <Item :each="item" />
        </div>
      </div>
    </div>
    <div class="status_board" data-stateId="releasedBoard" @drop="handleDrop" @dragover="handleDragOver" @dragenter="handleDragEnter" @dragleave="handleDragLeave">
      <div class="header">
        <h5>Released</h5>
        <button>+</button>
      </div>
      <div class="items">
        <div v-for="item in store.releasedBoard" v-if="store.releasedBoard.length" :key="item.id" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd">
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
    border: 1px solid rgb(196, 196, 196);
    border-radius: .5em;
    padding: 1em;
    background-color: hsl(220, 16%, 96%);
    box-shadow:
      0.8px 1px 1.2px -1px rgba(0, 0, 0, 0.034),
      1.9px 2.3px 2.9px -1px rgba(0, 0, 0, 0.048),
      3.6px 4.4px 5.4px -1px rgba(0, 0, 0, 0.06),
      6.5px 7.8px 9.6px -1px rgba(0, 0, 0, 0.072);

    &:first-child {
      background: linear-gradient(45deg, rgb(243, 222, 215), #fff);
      //background-color: rgb(243, 215, 221);
    }

    &:nth-child(2) {
      background: linear-gradient(45deg, rgb(243, 243, 215), #fff);
      //background-color: rgb(243, 243, 215);
    }

    &:last-child {
      background: linear-gradient(45deg, rgb(224, 247, 226), #fff);
      //background-color: rgb(224, 247, 226);
    }

    &.over {
      border: 3px dotted #666;
    }

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
    }
  }
}
</style>