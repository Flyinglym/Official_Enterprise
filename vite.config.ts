import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {join} from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    open:true,
  },
  resolve:{
    alias:{'@':join(__dirname,'./src','../src')}
  }
})
