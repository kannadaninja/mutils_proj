import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/utils.ts',  // Your entry file
      name: 'Utils',  // The global variable name in UMD format
      fileName: 'utils',  // This will be used in the output (but handled by `entryFileNames` for UMD)
    },
    rollupOptions: {
      output: {
        format: 'umd',  // Specify the UMD output format
        dir: '.',  // Specify the output directory
        entryFileNames: 'utils.umd.js',  // This ensures the output file is named `utils.umd.js`
        globals: {},  // Optionally define global variables if needed for external libraries
      },
      external: [],  // Add any external dependencies if needed
    },
  },
});
