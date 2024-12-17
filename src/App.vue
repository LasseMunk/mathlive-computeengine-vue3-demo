<script setup lang="ts" />

<template>
	<div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', backgroundColor: 'white' }">
		<!-- <nav><RouterLink to="/">Home</RouterLink></nav> -->
		<RouterView />
	</div>
</template>
