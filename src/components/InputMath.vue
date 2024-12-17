<script setup lang="ts">
import "mathlive";
import { MathfieldElement } from "mathlive";
import { onMounted, ref, watch } from "vue";

export type InputMathFieldProps = {
  id: string;
  value: string | undefined;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
};

export type InputMathFieldEmit = {
  id: string;
  value: string;
};

const { value, disabled = false, id, readOnly = false, autoFocus } = defineProps<InputMathFieldProps>();

// an emit is a method that is called to send data to the parent component
const emit = defineEmits<{
  (event: "onInput", payload: InputMathFieldEmit): void;
  (event: "onBeforeInput", payload: InputMathFieldEmit): void;
}>();

const mathFieldRef = ref<MathfieldElement | null>(null);

onMounted(() => {
  if (!mathFieldRef.value) return;
  mathFieldRef.value.readOnly = readOnly;

  if (autoFocus === true) {
    mathFieldRef.value.focus();
  }
});

// similar to reacts 'useEffect' hook
// looks for changes to value and updates the mathfield
watch(
  () => value,
  newValue => {
    if (!mathFieldRef.value) return;
    mathFieldRef.value.setValue(newValue, { format: "auto" });
  }
);

const handleOnInput = (event: InputEvent): void => {
  // this method is called by the math-field component when the value changes
  const target = event.target as MathfieldElement;
  const value = target.getValue();

  // emit the value to the parent component
  // the id could be used to identify the input field
  emit("onInput", { id, value });
};

const handleOnBeforeInput = (event: InputEvent): void => {
  // this method intercepts the event from the window.mathVirtualKeyboard before it is passed to the mathfield
  const target = event.target as MathfieldElement;
  const value = target.getValue();
  emit("onBeforeInput", { id, value });
};
</script>

<template>
  <math-field style="width: 200px" :id="id" :disabled="disabled" @beforeInput="handleOnBeforeInput" @input="handleOnInput" ref="mathFieldRef" />
</template>

<style lang="css">
/* hide the menu toggle */
math-field::part(menu-toggle) {
  display: none;
}

/* hide the virtual keyboard */
/* math-field::part(virtual-keyboard-toggle) {
  display: none;
} */
</style>
