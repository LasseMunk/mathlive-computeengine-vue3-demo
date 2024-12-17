import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	linkExactActiveClass: "text-primary",
	routes: [
		{
			path: "/",
			name: "home",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/MainView.vue"),
		},
	],
});

export default router;
