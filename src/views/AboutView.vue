<template>
  <div class="about">
    <h1>This is an about page</h1>
     <RouterLink to="/">Home</RouterLink>
    
  </div>
   <div><br><br><br><br><br><br>
    <button
    @click="storeCounters.increaseCount"
    >
      
      {{ storeCounters.count }}
    
    </button>
   </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter';
const storeCounters = useCounterStore()



</script>
<style>

button{
  padding: 50px;
}
</style>

