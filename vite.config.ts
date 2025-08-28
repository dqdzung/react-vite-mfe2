import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, "./src/environments");

	return {
		plugins: [
			react(),
			tailwindcss(),
			federation({
				name: "mfe2",
				filename: "remoteEntry.js",
				remotes: {
					host:
						env.VITE_HOST_URL || "http://localhost:3000/assets/remoteEntry.js",
				},
				exposes: {
					"./App": "./src/App.tsx",
				},
				shared: ["react", "react-dom", "tailwindcss"],
			}),
		],
		resolve: {
			alias: {
				"@": "./src",
			},
		},
		envDir: "./src/environments",
		build: {
			target: "esnext",
			minify: true,
			cssCodeSplit: false,
		},
		server: {
			port: Number(env.VITE_APP_PORT) || 3002,
			strictPort: true,
			cors: true,
		},
		preview: {
			port: Number(env.VITE_APP_PORT) || 3002,
			strictPort: true,
			cors: true,
		},
	};
});

