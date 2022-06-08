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
  />
</template>
