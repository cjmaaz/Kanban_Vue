import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const newBoard = ref([{ title: 'New Idea', details: 'Building my own Jira board' }, { title: 'Cost Saving', details: 'Using our own board will help us save money.' }, { title: 'Superior Reporting', details: 'Manager can get details on ticket closure, hours spent on each tickets' }, { title: 'Assign', details: 'Assign each ticket to respective teammate.' }]);
  const progressBoard = ref([{ title: 'Not Responsive', details: 'We are not looking to make it responsive as of now.' }]);
  const releasedBoard = ref([]);
  return { newBoard, progressBoard, releasedBoard }
})
