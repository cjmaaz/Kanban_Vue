import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const newBoard = ref([
    { title: 'New Idea', details: 'Building my own Jira board', id: 77382, assigned: 'Utkarsh Banwar', board: 'newBoard' },
    { title: 'Cost Saving', details: 'Using our own board will help us save money.', id: 77383, assigned: 'Riya Chauhan', board: 'newBoard' },
    { title: 'Superior Reporting', details: 'Manager can get details on ticket closure, hours spent on each tickets', id: 77384, assigned: 'Riya Chauhan', board: 'newBoard' },
    { title: 'Assign', details: 'Assign each ticket to respective teammate.', id: 77385, assigned: 'Utkarsh Banwar', board: 'newBoard' }
  ]);
  const progressBoard = ref([
    { title: 'Not Responsive', details: 'We are not looking to make it responsive as of now.', id: 77392, assigned: 'Utkarsh Banwar', board: 'progressBoard' }
  ]);
  const releasedBoard = ref([]);

  function mutateBoard(boardName, dataId, toBoardName) {
    if (boardName === 'newBoard') { // FROM CONDITION
      if (toBoardName === 'progressBoard') {
        let filteredData = newBoard.value.filter((each, idx, arr) => {
          if (each.id == dataId) {
            arr.splice(idx, 1);
            return true;
          }
          return false;
        });
        filteredData[0].board = 'progressBoard';
        progressBoard.value.push(filteredData[0]);
      } else if (toBoardName === 'releasedBoard') {
        let filteredData = newBoard.value.filter((each, idx, arr) => {
          if (each.id == dataId) {
            arr.splice(idx, 1);
            return true;
          }
          return false;
        });
        filteredData[0].board = 'releasedBoard';
        releasedBoard.value.push(filteredData[0]);
      }
    } else if (boardName === 'progressBoard') { // FROM CONDITION
      if (toBoardName === 'newBoard') {
        let filteredData = progressBoard.value.filter((each, idx, arr) => {
          if (each.id == dataId) {
            arr.splice(idx, 1);
            return true;
          }
          return false;
        });
        filteredData[0].board = 'newBoard';
        newBoard.value.push(filteredData[0]);
      } else if (toBoardName === 'releasedBoard') {
        let filteredData = progressBoard.value.filter((each, idx, arr) => {
          if (each.id == dataId) {
            arr.splice(idx, 1);
            return true;
          }
          return false;
        });
        filteredData[0].board = 'releasedBoard';
        releasedBoard.value.push(filteredData[0]);
      }
    } else if (boardName === 'releasedBoard') { // FROM CONDITION
      if (toBoardName === 'newBoard') {
        let filteredData = releasedBoard.value.filter((each, idx, arr) => {
          if (each.id == dataId) {
            arr.splice(idx, 1);
            return true;
          }
          return false;
        });
        filteredData[0].board = 'newBoard';
        newBoard.value.push(filteredData[0]);
      } else if (toBoardName === 'progressBoard') {
        let filteredData = releasedBoard.value.filter((each, idx, arr) => {
          if (each.id == dataId) {
            arr.splice(idx, 1);
            return true;
          }
          return false;
        });
        filteredData[0].board = 'progressBoard';
        progressBoard.value.push(filteredData[0]);
      }
    } // FROM CONDITION
  }
  return { newBoard, progressBoard, releasedBoard, mutateBoard }
})