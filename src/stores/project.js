import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const newBoard = ref([
    { title: 'New Idea', details: 'Building my own Jira board', id: 77382, assigned: 'Utkarsh Banwar' },
    { title: 'Cost Saving', details: 'Using our own board will help us save money.', id: 77383, assigned: 'Riya Chauhan' },
    { title: 'Superior Reporting', details: 'Manager can get details on ticket closure, hours spent on each tickets', id: 77384, assigned: 'Riya Chauhan' },
    { title: 'Assign', details: 'Assign each ticket to respective teammate.', id: 77385, assigned: 'Utkarsh Banwar' }
  ]);
  const progressBoard = ref([
    { title: 'Not Responsive', details: 'We are not looking to make it responsive as of now.', id: 77392, assigned: 'Utkarsh Banwar' }
  ]);
  const releasedBoard = ref([]);
  return { newBoard, progressBoard, releasedBoard }
})
