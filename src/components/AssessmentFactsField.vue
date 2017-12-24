<template>
  <input
    v-if="question.dataType === 'string'"
    type="text"
    class="form-control"
    :id="question.slug"
    value="">
  <input
    v-else-if="question.dataType === 'integer'"
    type="number"
    class="form-control"
    min="0"
    :id="question.slug"
    value="0">
  <input
    v-else-if="question.dataType === 'currency'"
    type="number"
    class="form-control"
    min="0"
    step="0.01"
    :id="question.slug"
    value="0">
  <textarea
    v-else-if="question.dataType === 'text'"
    class="form-control"
    :id="question.slug"
    :rows="question.options.rows || 3"
    :placeholder="question.options.placeholder || ''" />
  <select
    v-else-if="question.dataType === 'select'"
    class="form-control"
    :id="question.slug">
    <option v-for="choice in question.options.choices" value="choice[0]">
      {{ choice[1] }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'assessment-facts-field',
  props: ['question']
}
</script>

<style scoped>
</style>
