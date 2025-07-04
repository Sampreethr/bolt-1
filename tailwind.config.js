/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enhanced content paths for comprehensive coverage
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    './index.html',
  ],
  
  // Enhanced dark mode configuration
  darkMode: ['class', '[data-theme="dark"]'],
  
  theme: {
    extend: {
      /**
       * ENHANCED FONT SYSTEM (MERGED)
       */
      fontFamily: {
        // Primary font family with CSS variable support
        sans: [
          'var(--font-inter)', 
          'Inter', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          '"Helvetica Neue"', 
          'Arial', 
          'sans-serif'
        ],
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        
        // Monospace font for code elements
        mono: [
          '"Fira Code"', 
          '"SF Mono"', 
          'Monaco', 
          'Consolas', 
          '"Liberation Mono"', 
          '"Courier New"', 
          'monospace'
        ],
        
        // Display fonts for headings
        display: [
          'var(--font-display)', 
          'Inter', 
          'system-ui', 
          'sans-serif'
        ],
      },
      
      /**
       * ENHANCED FONT WEIGHT SYSTEM (MERGED)
       */
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
        
        // Semantic weight names
        heading: '600',
        display: '700',
        hero: '700',
        body: '400',
        caption: '500',
      },
      
      /**
       * ENHANCED TYPOGRAPHY SCALE (MERGED)
       */
      fontSize: {
        // Base sizes with enhanced line heights
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.6rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.8rem', letterSpacing: '0' }],
        'xl': ['1.25rem', { lineHeight: '1.9rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2.1rem', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '2.4rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.7rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.3rem', letterSpacing: '-0.025em' }],
        '6xl': ['3.75rem', { lineHeight: '4rem', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '4.8rem', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '6.3rem', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '8.3rem', letterSpacing: '-0.025em' }],
        
        // Fluid responsive sizes
        'hero': [
          'clamp(2.5rem, 6vw, 4rem)', 
          { 
            lineHeight: '1.15', 
            letterSpacing: '-0.025em', 
            fontWeight: '700' 
          }
        ],
        'display': [
          'clamp(2rem, 5vw, 3rem)', 
          { 
            lineHeight: '1.2', 
            letterSpacing: '-0.02em', 
            fontWeight: '700' 
          }
        ],
        'headline': [
          'clamp(1.5rem, 4vw, 2rem)', 
          { 
            lineHeight: '1.25', 
            letterSpacing: '-0.02em', 
            fontWeight: '600' 
          }
        ],
        'title': [
          'clamp(1.25rem, 3vw, 1.5rem)', 
          { 
            lineHeight: '1.3', 
            letterSpacing: '-0.01em', 
            fontWeight: '600' 
          }
        ],
        'subtitle': [
          'clamp(1rem, 2.5vw, 1.125rem)', 
          { 
            lineHeight: '1.5', 
            letterSpacing: '0', 
            fontWeight: '500' 
          }
        ],
        
        // Content-specific typography
        'card-title': [
          'clamp(1rem, 2.5vw, 1.125rem)', 
          { 
            lineHeight: '1.4', 
            letterSpacing: '-0.005em', 
            fontWeight: '600' 
          }
        ],
        'section-title': [
          'clamp(1.125rem, 3vw, 1.375rem)', 
          { 
            lineHeight: '1.35', 
            letterSpacing: '-0.01em', 
            fontWeight: '600' 
          }
        ],
        'micro': ['0.625rem', { lineHeight: '0.75rem', letterSpacing: '0.05em' }],
      },
      
      /**
       * ENHANCED COLOR SYSTEM (MERGED WITH LOGIN MODAL SUPPORT)
       */
      colors: {
        // Primary brand colors (compatible with your existing primary usage)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Your existing primary-500
          600: '#2563eb', // Your existing primary-600
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        
        // Secondary colors (professional grays)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        
        // Enhanced gray system for consistency
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
          950: '#030712',
        },
        
        // Neutral colors for backgrounds and borders
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        
        // Semantic colors using CSS variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Status colors
        success: {
          DEFAULT: '#10b981',
          light: '#d1fae5',
          dark: '#065f46',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
          dark: '#92400e',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        
        error: {
          DEFAULT: '#ef4444',
          light: '#fecaca',
          dark: '#991b1b',
          50: '#fef2f2',
          100: '#fecaca',
          200: '#fca5a5',
          300: '#f87171',
          400: '#f56565',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        
        info: {
          DEFAULT: '#3b82f6',
          light: '#dbeafe',
          dark: '#1e40af',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      
      /**
       * ENHANCED SPACING SYSTEM (MERGED)
       */
      spacing: {
        '0': '0',
        '0.5': '0.125rem',    // 2px
        '1': '0.25rem',       // 4px
        '1.5': '0.375rem',    // 6px
        '2': '0.5rem',        // 8px
        '2.5': '0.625rem',    // 10px
        '3': '0.75rem',       // 12px
        '3.5': '0.875rem',    // 14px
        '4': '1rem',          // 16px
        '5': '1.25rem',       // 20px
        '6': '1.5rem',        // 24px
        '7': '1.75rem',       // 28px
        '8': '2rem',          // 32px
        '9': '2.25rem',       // 36px
        '10': '2.5rem',       // 40px
        '11': '2.75rem',      // 44px
        '12': '3rem',         // 48px
        '14': '3.5rem',       // 56px
        '16': '4rem',         // 64px
        '18': '4.5rem',       // 72px - ADDED FROM YOUR CONFIG
        '20': '5rem',         // 80px
        '24': '6rem',         // 96px
        '28': '7rem',         // 112px
        '32': '8rem',         // 128px
        '36': '9rem',         // 144px
        '40': '10rem',        // 160px
        '44': '11rem',        // 176px
        '48': '12rem',        // 192px
        '52': '13rem',        // 208px
        '56': '14rem',        // 224px
        '60': '15rem',        // 240px
        '64': '16rem',        // 256px
        '72': '18rem',        // 288px
        '80': '20rem',        // 320px
        '88': '22rem',        // 352px - ADDED FROM YOUR CONFIG
        '96': '24rem',        // 384px
        '128': '32rem',       // 512px - ADDED FROM YOUR CONFIG
        '144': '36rem',       // 576px - ADDED FROM YOUR CONFIG
        
        // Component-specific spacing
        'header': '4rem',     // 64px
        'navbar': '3.5rem',   // 56px
        'sidebar': '16rem',   // 256px
        'content': '48rem',   // 768px
      },
      
      /**
       * ENHANCED BREAKPOINT SYSTEM (MERGED)
       */
      screens: {
        'xs': '320px',          // iPhone SE and small phones - ENHANCED
        'sm': '640px',          // Large phones
        'md': '768px',          // Tablets
        'lg': '1024px',         // Laptops
        'xl': '1280px',         // Desktop
        '2xl': '1536px',        // Large desktop
        '3xl': '1600px',        // Ultra-wide - ADDED FROM YOUR CONFIG
        '4xl': '1920px',        // 4K - ADDED FROM YOUR CONFIG
        
        // Custom breakpoints for specific devices
        'fold': '280px',        // Samsung Galaxy Fold (folded)
        'unfold': '717px',      // Samsung Galaxy Fold (unfolded)
        'iphone-se': '375px',   // iPhone SE
        'iphone-pro': '414px',  // iPhone Pro Max
        'ipad': '768px',        // iPad
        'ipad-pro': '1024px',   // iPad Pro
        'desktop': '1280px',    // Desktop breakpoint
        
        // Max-width breakpoints
        'max-xs': {'max': '639px'},
        'max-sm': {'max': '767px'},
        'max-md': {'max': '1023px'},
        'max-lg': {'max': '1279px'},
      },
      
      /**
       * ENHANCED BOX SHADOW SYSTEM (MERGED)
       */
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'DEFAULT': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'md': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'lg': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
        
        // Enhanced shadows
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)', // FROM YOUR CONFIG
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)', // FROM YOUR CONFIG
        'large': '0 10px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 35px -8px rgba(0, 0, 0, 0.08)', // FROM YOUR CONFIG
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)', // FROM YOUR CONFIG
        
        // Professional card shadows
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'card-focus': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        
        // Button shadows
        'button': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'button-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        
        // Elevation system
        'elevation-1': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'elevation-2': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'elevation-3': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'elevation-4': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        
        // Colored shadows
        'primary': '0 4px 14px 0 rgb(59 130 246 / 0.15)',
        'success': '0 4px 14px 0 rgb(16 185 129 / 0.15)',
        'warning': '0 4px 14px 0 rgb(245 158 11 / 0.15)',
        'error': '0 4px 14px 0 rgb(239 68 68 / 0.15)',
      },
      
      /**
       * ENHANCED BORDER RADIUS SYSTEM (MERGED)
       */
      borderRadius: {
        'none': '0',
        'sm': '0.375rem',     // 6px
        'DEFAULT': '0.5rem',  // 8px
        'md': '0.75rem',      // 12px
        'lg': '1rem',         // 16px
        'xl': '1.5rem',       // 24px
        '2xl': '2rem',        // 32px
        '3xl': '3rem',        // 48px
        '4xl': '2rem',        // 32px - FROM YOUR CONFIG
        '5xl': '2.5rem',      // 40px - FROM YOUR CONFIG
        'full': '9999px',
        
        // Component-specific radius
        'card': '1rem',       // 16px for cards
        'button': '0.75rem',  // 12px for buttons
        'input': '0.75rem',   // 12px for inputs
        'badge': '0.5rem',    // 8px for badges
        'modal': '1.5rem',    // 24px for modals
        'avatar': '0.5rem',   // 8px for avatars
        'image': '0.75rem',   // 12px for images
      },
      
      /**
       * ENHANCED MAX WIDTH SYSTEM (MERGED)
       */
      maxWidth: {
        'none': 'none',
        '0': '0rem',
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '88rem',      // FROM YOUR CONFIG
        '9xl': '96rem',      // FROM YOUR CONFIG
        'full': '100%',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
        'prose': '65ch',
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },
      
      /**
       * ENHANCED ANIMATION SYSTEM (MERGED)
       */
      animation: {
        // Enhanced animations with better easing
        'fade-in': 'fadeIn 0.5s ease-in-out', // FROM YOUR CONFIG
        'fade-out': 'fadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 0.3s ease-out', // FROM YOUR CONFIG
        'slide-down': 'slideDown 0.3s ease-out', // FROM YOUR CONFIG
        'slide-left': 'slideLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scale-in': 'scaleIn 0.2s ease-out', // FROM YOUR CONFIG
        'scale-out': 'scaleOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s infinite', // FROM YOUR CONFIG
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        
        // Loading animations
        'loading': 'loading 1.5s infinite',
        'shimmer': 'shimmer 2s infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite alternate',
        'spin-slow': 'spin 3s linear infinite',
        
        // Micro-interactions
        'button-press': 'buttonPress 0.1s ease-in-out',
        'card-hover': 'cardHover 0.3s ease-out',
        'modal-enter': 'modalEnter 0.3s ease-out',
        'modal-exit': 'modalExit 0.2s ease-in',
        'drawer-enter': 'drawerEnter 0.3s ease-out',
        'drawer-exit': 'drawerExit 0.3s ease-in',
        'tooltip-enter': 'tooltipEnter 0.2s ease-out',
        'toast-enter': 'toastEnter 0.3s ease-out',
        'toast-exit': 'toastExit 0.2s ease-in',
      },
      
      /**
       * ENHANCED KEYFRAMES (MERGED)
       */
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' }, // FROM YOUR CONFIG
          '100%': { opacity: '1' }, // FROM YOUR CONFIG
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' }, // FROM YOUR CONFIG
          '100%': { transform: 'translateY(0)', opacity: '1' }, // FROM YOUR CONFIG
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' }, // FROM YOUR CONFIG
          '100%': { transform: 'translateY(0)', opacity: '1' }, // FROM YOUR CONFIG
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' }, // FROM YOUR CONFIG
          '100%': { transform: 'scale(1)', opacity: '1' }, // FROM YOUR CONFIG
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(59 130 246 / 0.5)' },
          '100%': { boxShadow: '0 0 20px rgb(59 130 246 / 0.8)' },
        },
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        skeleton: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.4' },
        },
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
        cardHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-4px) scale(1.02)' },
        },
        modalEnter: {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        modalExit: {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.95) translateY(20px)' },
        },
        drawerEnter: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        drawerExit: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        tooltipEnter: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        toastEnter: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        toastExit: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
      },
      
      /**
       * ENHANCED BACKDROP BLUR (MERGED)
       */
      backdropBlur: {
        'xs': '2px', // FROM YOUR CONFIG
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
        
        // Glass morphism effects
        'glass': '12px',
        'modal': '8px',
        'nav': '4px',
        'card': '6px',
      },
      
      /**
       * ENHANCED Z-INDEX SYSTEM (MERGED)
       */
      zIndex: {
        'auto': 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60', // FROM YOUR CONFIG
        '70': '70', // FROM YOUR CONFIG
        '80': '80', // FROM YOUR CONFIG
        '90': '90', // FROM YOUR CONFIG
        '100': '100', // FROM YOUR CONFIG
        
        // Component-specific z-index
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
        'overlay': '1090',
        'max': '9999',
      },
      
      /**
       * ENHANCED ASPECT RATIOS (MERGED)
       */
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        portrait: '3 / 4',
        landscape: '4 / 3',
        ultrawide: '18 / 5',
        
        // Component-specific ratios
        'card': '16 / 10',
        'hero': '21 / 9',
        'feature': '5 / 3',
        'thumbnail': '3 / 2',
      },
      
      /**
       * ENHANCED GRID SYSTEMS (MERGED)
       */
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
        'auto-fit-xs': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-md': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-lg': 'repeat(auto-fit, minmax(350px, 1fr))',
        'auto-fit-xl': 'repeat(auto-fit, minmax(400px, 1fr))',
        
        // Component-style grids
        'cards': 'repeat(auto-fit, minmax(280px, 1fr))',
        'features': 'repeat(auto-fit, minmax(320px, 1fr))',
        'testimonials': 'repeat(auto-fit, minmax(350px, 1fr))',
        'gallery': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      
      /**
       * ENHANCED LINE HEIGHT SYSTEM (MERGED)
       */
      lineHeight: {
        'none': '1',
        'tight': '1.15',
        'snug': '1.25',
        'normal': '1.6',
        'relaxed': '1.75',
        'loose': '2',
        
        // Typography-specific line heights
        'heading': '1.15',
        'display': '1.1',
        'body': '1.6',
        'caption': '1.4',
        'code': '1.5',
      },
      
      /**
       * ENHANCED LETTER SPACING SYSTEM (MERGED)
       */
      letterSpacing: {
        'tighter': '-0.025em',
        'tight': '-0.015em',
        'normal': '0em',
        'wide': '0.015em',
        'wider': '0.025em',
        'widest': '0.1em',
        
        // Typography-specific spacing
        'heading': '-0.02em',
        'display': '-0.025em',
        'body': '0em',
        'caption': '0.025em',
        'button': '0.01em',
        'label': '0.05em',
      },
      
      /**
       * ENHANCED TRANSITION SYSTEM (MERGED)
       */
      transitionTimingFunction: {
        'ease-out-cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-cubic': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-in-out-cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        
        // Enhanced easing
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'crisp': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'gentle': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'snappy': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        
        // Semantic durations
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '700ms',
      },
      
      /**
       * ENHANCED OPACITY SYSTEM (MERGED)
       */
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        '15': '0.15',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '35': '0.35',
        '40': '0.4',
        '45': '0.45',
        '50': '0.5',
        '55': '0.55',
        '60': '0.6',
        '65': '0.65',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '85': '0.85',
        '90': '0.9',
        '95': '0.95',
        '100': '1',
        
        // Semantic opacity values
        'disabled': '0.4',
        'muted': '0.6',
        'subtle': '0.8',
        'overlay': '0.8',
        'backdrop': '0.5',
      },
      
      /**
       * ENHANCED BLUR SYSTEM (MERGED)
       */
      blur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
        
        // Component-specific blur
        'card': '6px',
        'modal': '8px',
        'loading': '4px',
      },
      
      /**
       * ENHANCED SCALE SYSTEM (MERGED)
       */
      scale: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        
        // Micro-interaction scales
        'hover': '1.02',
        'active': '0.98',
        'focus': '1.05',
      },
      
      /**
       * ENHANCED BORDER WIDTH SYSTEM (MERGED)
       */
      borderWidth: {
        'DEFAULT': '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '8': '8px',
        
        // Component-specific borders
        'input': '1px',
        'card': '1px',
        'button': '2px',
        'focus': '2px',
      },
      
      /**
       * ENHANCED OUTLINE SYSTEM (MERGED)
       */
      outlineWidth: {
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '8': '8px',
        
        // Focus outline
        'focus': '2px',
      },
      
      outlineOffset: {
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        
        // Focus offset
        'focus': '2px',
      },
      
      /**
       * ENHANCED BACKGROUND IMAGES (MERGED)
       */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, theme(colors.primary.50) 0%, theme(colors.background) 50%, theme(colors.secondary.50) 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      },
      
      /**
       * ENHANCED CONTAINER SYSTEM (MERGED)
       */
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px', // Keep constraint for design consistency
        },
      },
    },
  },
  
  /**
   * ENHANCED PLUGINS CONFIGURATION (MERGED)
   */
  plugins: [
    // Core Tailwind plugins with enhanced configuration
    ...(function() {
      try {
        return [
          require('@tailwindcss/forms')({
            strategy: 'class',
          }),
          require('@tailwindcss/typography'),
          require('@tailwindcss/aspect-ratio'),
        ];
      } catch (e) {
        console.warn('Some Tailwind CSS plugins are not installed. Run: npm install @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio');
        return [];
      }
    })(),
    
    // Enhanced touch targets plugin
    function({ addUtilities }) {
      const touchTargets = {
        '.touch-target': {
          'min-height': '44px',
          'min-width': '44px',
          'touch-action': 'manipulation',
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.touch-target-sm': {
          'min-height': '36px',
          'min-width': '36px',
          'touch-action': 'manipulation',
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.touch-target-lg': {
          'min-height': '48px',
          'min-width': '48px',
          'touch-action': 'manipulation',
          '-webkit-tap-highlight-color': 'transparent',
        },
      }
      addUtilities(touchTargets)
    },
    
    // Enhanced safe areas plugin
    function({ addUtilities }) {
      const safeAreas = {
        '.safe-top': {
          'padding-top': 'env(safe-area-inset-top)',
        },
        '.safe-bottom': {
          'padding-bottom': 'env(safe-area-inset-bottom)',
        },
        '.safe-left': {
          'padding-left': 'env(safe-area-inset-left)',
        },
        '.safe-right': {
          'padding-right': 'env(safe-area-inset-right)',
        },
      }
      addUtilities(safeAreas)
    },
    
    // Enhanced component system plugin
    function({ addUtilities, addComponents, addBase, theme }) {
      // Enhanced base styles
      addBase({
        ':root': {
          '--background': '0 0% 100%',
          '--foreground': '222.2 84% 4.9%',
          '--card': '0 0% 100%',
          '--card-foreground': '222.2 84% 4.9%',
          '--popover': '0 0% 100%',
          '--popover-foreground': '222.2 84% 4.9%',
          '--primary': '221.2 83.2% 53.3%',
          '--primary-foreground': '210 40% 98%',
          '--secondary': '210 40% 96%',
          '--secondary-foreground': '222.2 84% 4.9%',
          '--muted': '210 40% 96%',
          '--muted-foreground': '215.4 16.3% 46.9%',
          '--accent': '210 40% 96%',
          '--accent-foreground': '222.2 84% 4.9%',
          '--destructive': '0 84.2% 60.2%',
          '--destructive-foreground': '210 40% 98%',
          '--border': '214.3 31.8% 91.4%',
          '--input': '214.3 31.8% 91.4%',
          '--ring': '221.2 83.2% 53.3%',
          '--radius': '0.5rem',
        },
        '.dark': {
          '--background': '222.2 84% 4.9%',
          '--foreground': '210 40% 98%',
          '--card': '222.2 84% 4.9%',
          '--card-foreground': '210 40% 98%',
          '--popover': '222.2 84% 4.9%',
          '--popover-foreground': '210 40% 98%',
          '--primary': '217.2 91.2% 59.8%',
          '--primary-foreground': '222.2 84% 4.9%',
          '--secondary': '217.2 32.6% 17.5%',
          '--secondary-foreground': '210 40% 98%',
          '--muted': '217.2 32.6% 17.5%',
          '--muted-foreground': '215 20.2% 65.1%',
          '--accent': '217.2 32.6% 17.5%',
          '--accent-foreground': '210 40% 98%',
          '--destructive': '0 62.8% 30.6%',
          '--destructive-foreground': '210 40% 98%',
          '--border': '217.2 32.6% 17.5%',
          '--input': '217.2 32.6% 17.5%',
          '--ring': '224.3 76.3% 94.1%',
        },
        '*': {
          borderColor: theme('colors.border'),
        },
        'html': {
          scrollBehavior: 'smooth',
          fontSize: '16px',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        'body': {
          fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
          textRendering: 'optimizeLegibility',
          fontFamily: theme('fontFamily.sans'),
          backgroundColor: theme('colors.background'),
          color: theme('colors.foreground'),
          lineHeight: theme('lineHeight.body'),
          overflowX: 'hidden',
        },
      });
      
      // Enhanced component utilities
      addComponents({
        // Base button component
        '.btn': {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.semibold'),
          fontSize: theme('fontSize.base')[0],
          lineHeight: theme('fontSize.base')[1].lineHeight,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.2'),
          minHeight: '44px',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.button'),
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          touchAction: 'manipulation',
          textDecoration: 'none',
          border: '1px solid transparent',
          outline: 'none',
          '&:focus-visible': {
            outline: `2px solid ${theme('colors.primary.500')}`,
            outlineOffset: '2px',
          },
          '&:disabled': {
            opacity: theme('opacity.disabled'),
            cursor: 'not-allowed',
            pointerEvents: 'none',
          },
        },
        
        // Primary button
        '.btn-primary': {
          background: `linear-gradient(135deg, ${theme('colors.primary.500')} 0%, ${theme('colors.primary.600')} 100%)`,
          color: 'white',
          boxShadow: theme('boxShadow.button'),
          border: `1px solid ${theme('colors.primary.600')}`,
          '&:hover:not(:disabled)': {
            background: `linear-gradient(135deg, ${theme('colors.primary.600')} 0%, ${theme('colors.primary.700')} 100%)`,
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.button-hover'),
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: theme('boxShadow.button'),
          },
        },
        
        // Base card component
        '.card': {
          backgroundColor: theme('colors.card'),
          border: `1px solid ${theme('colors.border')}`,
          borderRadius: theme('borderRadius.card'),
          boxShadow: theme('boxShadow.card'),
          padding: theme('spacing.6'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          color: theme('colors.card-foreground'),
          fontFamily: theme('fontFamily.sans'),
          '&:hover': {
            boxShadow: theme('boxShadow.card-hover'),
            borderColor: theme('colors.primary.300'),
            transform: 'translateY(-2px)',
          },
        },
        
        // Input component
        '.input': {
          fontFamily: theme('fontFamily.sans'),
          fontSize: theme('fontSize.base')[0],
          width: '100%',
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          border: `1px solid ${theme('colors.input')}`,
          borderRadius: theme('borderRadius.input'),
          backgroundColor: theme('colors.background'),
          color: theme('colors.foreground'),
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          minHeight: '44px',
          touchAction: 'manipulation',
          outline: 'none',
          '&:focus': {
            borderColor: theme('colors.ring'),
            boxShadow: `0 0 0 3px hsl(${theme('colors.ring')} / 0.2)`,
          },
          '&::placeholder': {
            color: theme('colors.muted-foreground'),
          },
          '&:disabled': {
            opacity: theme('opacity.disabled'),
            cursor: 'not-allowed',
          },
        },
      });
      
      // Enhanced utility classes
      addUtilities({
        // Responsive typography
        '.text-responsive': {
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          lineHeight: theme('lineHeight.normal'),
        },
        
        // Interactive states
        '.hover-lift': {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme('boxShadow.lg'),
          },
        },
        
        // Focus states
        '.focus-ring': {
          '&:focus-visible': {
            outline: `2px solid ${theme('colors.ring')}`,
            outlineOffset: theme('outlineOffset.focus'),
          },
        },
        
        // Glass morphism
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: `blur(${theme('backdropBlur.glass')})`,
          borderRadius: theme('borderRadius.lg'),
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        
        // Loading states
        '.loading': {
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            animation: 'loading 1.5s infinite',
          },
        },
        
        '.skeleton': {
          backgroundColor: theme('colors.muted'),
          borderRadius: theme('borderRadius.DEFAULT'),
          animation: 'skeleton 1.5s ease-in-out infinite alternate',
        },
        
        // Container utilities
        '.container-wrapper': {
          width: '100%',
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          [`@media (min-width: ${theme('screens.sm')})`]: {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          [`@media (min-width: ${theme('screens.lg')})`]: {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
        },
        
        // Section spacing
        '.section-spacing': {
          paddingTop: theme('spacing.16'),
          paddingBottom: theme('spacing.16'),
          [`@media (min-width: ${theme('screens.sm')})`]: {
            paddingTop: theme('spacing.20'),
            paddingBottom: theme('spacing.20'),
          },
          [`@media (min-width: ${theme('screens.lg')})`]: {
            paddingTop: theme('spacing.24'),
            paddingBottom: theme('spacing.24'),
          },
        },
        
        // Grid utilities
        '.grid-responsive': {
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: theme('spacing.6'),
          [`@media (min-width: ${theme('screens.sm')})`]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [`@media (min-width: ${theme('screens.lg')})`]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        },
        
        // Flex utilities
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        
        '.flex-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        
        // Device-specific optimizations
        [`@media (max-width: 374px)`]: {
          '.container-wrapper': {
            paddingLeft: theme('spacing.3'),
            paddingRight: theme('spacing.3'),
          },
          '.btn': {
            fontSize: theme('fontSize.sm')[0],
            padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
            minHeight: '48px',
          },
        },
        
        // Galaxy Fold optimization
        [`@media (max-width: 320px)`]: {
          '.container-wrapper': {
            paddingLeft: theme('spacing.2'),
            paddingRight: theme('spacing.2'),
          },
          '.btn': {
            width: '100%',
            marginBottom: theme('spacing.2'),
            minHeight: '48px',
          },
        },
      });
    },
    
    // Accessibility enhancements plugin
    function({ addUtilities, theme }) {
      addUtilities({
        // Screen reader utilities
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },
        
        '.not-sr-only': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: '0',
          margin: '0',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
        
        // Reduced motion support
        [`@media (prefers-reduced-motion: reduce)`]: {
          '*': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
        
        // High contrast support
        [`@media (prefers-contrast: high)`]: {
          '.btn-primary': {
            border: `2px solid ${theme('colors.primary.700')}`,
          },
          '.card': {
            borderWidth: '2px',
          },
          '.input': {
            borderWidth: '2px',
          },
        },
      });
    },
  ],
  
  /**
   * ENHANCED SAFELIST CONFIGURATION (MERGED)
   */
  safelist: [
    // Core utilities
    'container',
    'container-wrapper',
    
    // Typography
    'text-hero',
    'text-display',
    'text-headline',
    'text-title',
    'text-responsive',
    
    // Components
    'btn',
    'btn-primary',
    'card',
    'input',
    'touch-target',
    'focus-ring',
    'glass',
    'loading',
    'skeleton',
    
    // Layout
    'section-spacing',
    'grid-responsive',
    'flex-center',
    'flex-between',
    'hover-lift',
    
    // Colors - ensure these work with your login modal
    'bg-primary-500',
    'bg-primary-600',
    'text-primary-600',
    'text-white',
    'border-primary-500',
    'border-gray-200',
    'bg-white',
    'text-gray-900',
    'text-gray-600',
    'text-gray-500',
    'bg-gray-50',
    'bg-gray-100',
    'hover:bg-primary-600',
    'hover:bg-gray-100',
    'focus:ring-primary-500',
    'focus:border-primary-500',
    
    // Modal specific classes
    'fixed',
    'inset-0',
    'z-50',
    'backdrop-blur-sm',
    'bg-black/50',
    'rounded-2xl',
    'shadow-2xl',
    'max-w-md',
    'overflow-y-auto',
    'animate-fade-in',
    'animate-scale-in',
  ],
  
  /**
   * ENHANCED FUTURE CONFIGURATION
   */
  future: {
    hoverOnlyWhenSupported: true,
  },
  
  /**
   * CORE PLUGINS CONFIGURATION
   */
  corePlugins: {
    preflight: true,
    container: true,
  },
};