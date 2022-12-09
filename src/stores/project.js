import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const newBoard = ref([{ title: 'New Idea', details: 'Building my own Jira board' }]);
  const progressBoard = ref([]);
  const releasedBoard = ref([]);
  return { newBoard, progressBoard, releasedBoard }
})
