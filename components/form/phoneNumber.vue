<script setup>
  const props = defineProps({
    context: Object,
  })

  let tmp = ref(props.context.value)

  function addDash(e) {
    let inputPhone = e.target.value
    if ((inputPhone.length === 3 || inputPhone.length === 7) || inputPhone.length === 11){
      inputPhone += '-'
    }

    props.context.node.input(inputPhone)
  }
</script>

<template>
  <input 
    @input="addDash" 
    :value="props.context._value"
    placeholder="xxx-xxx-xxx-xxxx"
    class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
    maxlength="16"
  />
</template>
