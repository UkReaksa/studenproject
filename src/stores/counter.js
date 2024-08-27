import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 10,
    todos: [], // Add a property to store fetched data
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count--;
    },
    // Fetch data from API
    async fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        todos.value = response.data; // Store fetched data in the state
        console.log(this.todos); // Log the stored data
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    oddOrEven: (state) => {
      // Use triple equals for comparison
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
});
