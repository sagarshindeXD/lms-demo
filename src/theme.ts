import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    text: {
      light: '#1a202c',  // Dark gray for light mode text
      dark: '#f8fafc',   // Light gray for dark mode text
    },
    bg: {
      light: '#ffffff',  // White background for light mode
      dark: '#0f172a',   // Darker background for dark mode
    },
    // High contrast colors
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  fonts: {
    heading: 'Inter, -apple-system, system-ui, sans-serif',
    body: 'Inter, -apple-system, system-ui, sans-serif',
  },
  styles: {
    global: (props: any) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
        fontSize: '16px',
        lineHeight: 'tall',
      },
      'h1, h2, h3, h4, h5, h6': {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        fontWeight: 'bold',
        letterSpacing: 'tight',
        mb: 4,
      },
      a: {
        color: 'brand.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
      '::selection': {
        bg: 'brand.500',
        color: 'white',
      },
      '::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
      },
      '::-webkit-scrollbar-track': {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
      },
      '::-webkit-scrollbar-thumb': {
        bg: 'brand.500',
        borderRadius: 'full',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
        _focus: {
          boxShadow: '0 0 0 3px var(--chakra-colors-brand-100)',
        },
      },
      sizes: {
        lg: {
          fontSize: 'md',
          px: 6,
          py: 4,
          h: 'auto',
        },
      },
      variants: {
        solid: (props: any) => ({
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            _disabled: {
              bg: 'brand.500',
            },
          },
          _active: {
            bg: 'brand.700',
          },
        }),
        outline: (props: any) => ({
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
          _dark: {
            color: 'brand.300',
            borderColor: 'brand.300',
            _hover: {
              bg: 'whiteAlpha.100',
            },
          },
        }),
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'lg',
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'xl',
          boxShadow: 'sm',
          _hover: {
            boxShadow: 'md',
          },
        },
      },
    },
  },
});
