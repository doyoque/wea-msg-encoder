<template>
  <FormKit
    type="text"
    label="Phone Number"
    placeholder="xxx-xxx-xxx-xxxx"
    validation-visibility="live"
    :validation="[['required'], ['matches', /^\d{3}-\d{3}-\d{3}-\d{4}$/]]"
    :validation-messages="{
      matches: 'Phone number must be formatted: xxx-xxx-xxxx',
    }"
    label-class="block mb-1 font-bold text-sm formkit-invalid:text-red-500"
    inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500 formkit-invalid:text-red-500"
    input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
    message-class="text-xs text-red-500"
  />
</template>
