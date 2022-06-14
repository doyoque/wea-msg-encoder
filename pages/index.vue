<template>
  <div class="h-screen flex flex-col items-center justify-center bg-blue-500">
    <div class="bg-white text-black font-bold rounded-lg border shadow-lg p-10">
      <h1 class="font-bold text-gray-600 text-lg text-center">WhatsApp Message Url encoder</h1>
      <br/>
      <FormKit
        type="group"
        v-model="formData"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <FormKit
          :type="PhoneNumber"
          :validation="[['required'], ['matches', /^\d{3}-\d{3}-\d{3}-\d{4}$/]]"
          validation-visibility="blur"
          :validation-messages="{
            matches: 'Phone number must be formatted: xxx-xxx-xxxx',
          }"
          :classes="{
            label: 'block mb-1 font-bold text-sm',
            inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
            message: 'text-xs text-red-500'
          }"
          name="phone"
          label="Phone Number"
        />
        <FormKit
          name="message"
          type="textarea"
          label="Messages"
          validation-visibility="blur"
          validation="required|string"
          :validation-messages="{
            required: 'Please input messages'
          }"
          rows="4"
          label-class="block mb-1 font-bold text-sm"
          inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden"
          input-class="block w-full h-32 px-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline"
          message-class="text-xs text-red-500"
        />
      </FormKit>
      <a 
        v-if="formData.message && formData.phone.length > 14" 
        :href="generateUrl(formData)"
        target="_blank"
        class="no-underline hover:underline"
      >
        Click to send message!
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createInput } from '@formkit/vue'
import phoneNumber from '@/components/form/phoneNumber'

const formData = ref({})
const PhoneNumber = createInput(phoneNumber)

const removeDash = (formData) =>  {
  return formData.phone 
    ? formData.phone.replace(/-/g, "")
    : ""
}

const messageEncode = (formData) => {
  return formData.message
    ? encodeURI(formData.message)
    : ""
}

const generateUrl = (formData) => {
  return `https://wa.me/${removeDash(formData)}?text=${messageEncode(formData)}`
}

formData,
generateUrl,
removeDash
</script>
