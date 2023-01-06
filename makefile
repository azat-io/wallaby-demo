start:
	pnpm exec vite --open --host

build:
	pnpm exec vite build

test:
	pnpm exec vitest run --dom --coverage
