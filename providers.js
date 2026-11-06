'use client'

import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

// Create Emotion cache with compatibility for Next.js
const cache = createCache({
  key: 'css',
  prepend: true,
})

const theme = createTheme()

export default function Providers({ children }) {
  return (
    <CacheProvider value={cache}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </CacheProvider>
  )
}