<template>
  <!-- Results Box -->
  <div class="max-w-3xl mx-auto p-4 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800 my-5">
    <h1 class="text-white">ពិន្ទុសរុប : {{ Results }}</h1>
    <h1 class="text-white">និទ្ទេស : {{ Result1 }}</h1>
    <h1 class="text-white">និទ្ទេស : {{ average }}</h1>
  </div>

  <!-- Input Form -->
  <form @submit.prevent="submit" class="max-w-3xl mx-auto p-4 space-y-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <!-- Dropdown -->
    <div>
      <label for="underline_select" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ជ្រើសរើសមុខវិជ្ជា</label>
      <select v-model="selectedSubject" @change="updateSubject" id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option value="" disabled>ជ្រើសរើសមុខវិជ្ជា</option>
        <option value="room1">ថ្នាក់វិទ្យាសាស្រ្ត</option>
        <option value="room2">ថ្នាក់សង្គម</option>
      </select>
    </div>

    <!-- Input Fields -->
    <div v-if="subject.length" v-for="item in subject" :key="item.Number1" class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label :for="'number1'" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{item.Number1}}</label>
        <input v-model.number="Number1" type="number" :id="'number1'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required />
      </div>
      <div>
        <label :for="'number2'" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{item.Number2}}</label>
        <input v-model.number="Number2" type="number" :id="'number2'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required />
      </div>
      <div>
        <label :for="'number3'" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{item.Number3}}</label>
        <input v-model.number="Number3" type="number" :id="'number3'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required />
      </div>
      <div>
        <label :for="'number4'" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{item.Number4}}</label>
        <input v-model.number="Number4" type="number" :id="'number4'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required />
      </div>
      <div>
        <label :for="'number5'" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{item.Number5}}</label>
        <input v-model.number="Number5" type="number" :id="'number5'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required />
      </div>
      <div>
        <label :for="'number6'" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{item.Number6}}</label>
        <input v-model.number="Number6" type="number" :id="'number6'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required />
      </div>
      <div>
        <label :for="'number7'" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{item.Number7}}</label>
        <input v-model.number="Number7" type="number" :id="'number7'" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter number" required />
      </div>
      <!-- Repeat for other numbers -->
    </div>

    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

// Use the store
const storeCounters = useCounterStore();

// Define reactive variables for input fields and results
const Number1 = ref(0);
const Number2 = ref(0);
const Number3 = ref(0);
const Number4 = ref(0);
const Number5 = ref(0);
const Number6 = ref(0);
const Number7 = ref(0);
const Results = ref(0);
const Result1 = ref('គ្មានទិន្នន័យ'); // Default value in Khmer
const average = ref(0);
const selectedSubject = ref('');

const changename = [
  {
    Number1: "រូបវិទ្យា",
    Number2: "ភាសាខ្មែរ",
    Number3: "គណិតវិទ្យា",
    Number4: "រូបវិទ្យា",
    Number5: "ប្រវិត្តិវិទ្យា",
    Number6: "គីមីវិទ្យា",
    Number7: "ភាសាបរទេស",
  },
];

const changename1 = [
  {
    Number1: "ភូមិវិទ្យា",
    Number2: "ភាសាខ្មែរ",
    Number3: "គណិតវិទ្យា",
    Number4: "ផេនដីវិទ្យា",
    Number5: "ប្រវិត្តិវិទ្យា",
    Number6: "សីលធម៏ ពលរដ្ធ",
    Number7: "ភាសាបរទេស",
  },
];

const subject = ref([]);

const updateSubject = () => {
  if (selectedSubject.value === 'room1') {
    subject.value = changename;
  } else if (selectedSubject.value === 'room2') {
    subject.value = changename1;
  } else {
    subject.value = [];
  }
};

// Function to calculate the sum and set the result
const submit = () => {
  Results.value = Number1.value + Number2.value + Number3.value + Number4.value + Number5.value + Number6.value + Number7.value;
  average.value = Results.value / 7;
  // Set Result1 based on the condition
  if (Results.value === 0) {
    Result1.value = 'F';
  } else if (Results.value < 237) {
    Result1.value = 'F';
  } else if (Results.value <= 285) {
    Result1.value = 'D';
  } else if (Results.value <= 332) {
    Result1.value = 'C';
  } else if (Results.value <= 380) {
    Result1.value = 'B';
  } else if (Results.value <= 427) {
    Result1.value = 'A';
  }
};

// Fetch todos when the component is mounted
onMounted(async () => {
  await storeCounters.fetchData();
});
</script>
