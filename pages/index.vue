<template>
  <div class="flex items-center justify-center h-screen w-full bg-blue-500">
    <div class="bg-white text-black font-bold rounded-lg border shadow-lg p-10">
      <h1 class="font-bold text-gray-600 text-lg">WhatsApp Message URL encoder</h1>
      <br/>
      <LazyFormPhoneNumber />
      <LazyFormChatMessage />
      <!-- <linkGenerateUrl /> -->
    </div>
  </div>
</template>

<script setup>
</script>