<script setup lang="ts">
import { onMounted, ref } from "vue";
import { initializeVirtualKeyboard } from "../initialize-virtual-keyboard";
import { InputMath } from "../components";
import { InputMathFieldEmit } from "../components/InputMath";
import { ComputeEngine } from "@cortex-js/compute-engine";

const computeEngine = new ComputeEngine();

const mathFieldValue = ref<string>("");
const computedValue = ref<string | undefined>(undefined);

onMounted(() => {
  // called once when the component is mounted. Think of it as sort of a "contructor" for the component
  initializeVirtualKeyboard();
});

const handleOnInputChange = (input: InputMathFieldEmit) => {
  const { value } = input;

  mathFieldValue.value = value;

  const expr = computeEngine.parse(value); // parse the input value into a expression
  console.log("expression", expr); // print the expression to the console

  const solution = expr.N(); // get a numerical value from the expression
  computedValue.value = solution;
};
</script>

<template>
  <div
    style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100vw; background-color: white"
  >
    <InputMath
      :disabled="false"
      :auto-focus="true"
      :read-only="false"
      :id="'my-math-field-input'"
      :value="mathFieldValue"
      v-on:on-input="handleOnInputChange"
    />

    <p>
      Mathfield value: <span :style="{ fontWeight: 'bold' }"> {{ mathFieldValue }} </span>
    </p>

    <p>
      Computed value: <span :style="{ fontWeight: 'bold' }"> {{ computedValue }} </span>
    </p>
  </div>
</template>
