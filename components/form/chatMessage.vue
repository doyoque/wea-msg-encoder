<template>
  <FormKit
    type="textarea"
    label="Messages"
    validation-visibility="live"
    validation="required|string"
    :validation-messages="{
      required: 'Please input messages'
    }"
  />
</template>
