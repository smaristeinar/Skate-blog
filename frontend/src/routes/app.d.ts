/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
	}

	interface Platform {
			env: {
			POSTS: "POSTS";
			VIDEOS: "VIDEOS"
			TUMBNAILS: "TUMBNAILS"
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		}
	}

	// interface Session {}

	// interface Stuff {}
	
}
