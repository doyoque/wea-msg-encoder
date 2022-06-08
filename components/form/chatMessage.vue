<template>
  <FormKit
    type="textarea"
    label="Messages"
    validation-visibility="live"
    validation="required|string"
    :validation-messages="{
      required: 'Please input messages'
    }"
    label-class="block mb-1 font-bold text-sm formkit-invalid:text-red-500"
    inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
    input-class="block w-full h-32 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline"
    message-class="text-xs text-red-500"
  />
</template>
