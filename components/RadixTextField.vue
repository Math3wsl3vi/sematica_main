<template>
  <div>
    <label class="block text-gray-700 text-sm font-medium mb-1">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String,
  type: { type: String, default: "text" },
  placeholder: String
});
defineEmits(["update:modelValue"]);
</script>
