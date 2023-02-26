/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-light': {
          200: '#F3F4F6',
          50: '#F9FAFB'
        },
        'neutral-grey': {
          900: '#1A202C',
          800: '#2D3748',
          700: '#4A5568',
          600: '#718096',
          500: '#CBD5E0',
          400: '#D1D5DB',
          300: '#E5E7EB',
        },
        'neutral-grey-alternate': {
          900: '#223555',
          800: '#354866',
          700: '#5A6E87',
          600: '#7F94A8',
          500: '#A0AEC0',
          400: '#CCD6E1',
          300: '#E6ECF0',
        },
        'primary-blue': {
          900: '#1E3A8A',
          800: '#1E40AF',
          750: '#003BD2',
          700: '#325FE5',
          600: '#1857F8',
          500: '#3B82F6',
          400: '#63B3ED',
          300: '#93C5FD',
          200: '#BFDBFE',
          100: '#DBEAFE',
          50: '#EFF6FF',

        },
        'secondary-indigo': {
          900: '#3C366B',
          800: '#434190',
          700: '#4C51BF',
          600: '#5A67D8',
          500: '#667EEA',
          400: '#7F9CF5',
          300: '#A3BFFA',
          200: '#C3DAFE',
          100: '#EBF4FF',
          50: '#EEF2FF',
        },
        'secondary-red': {
          900: '#742A2A',
          800: '#9B2C2C',
          700: '#C53030',
          600: '#E53E3E',
          500: '#F56565',
          400: '#FC8181',
          300: '#FEB2B2',
          200: '#FED7D7',
          100: '#FFF5F5',
          50: '#FEF2F2',
        },
        'secondary-yellow': {
          900: '#744210',
          800: '#975A16',
          700: '#B7791F',
          600: '#D69E2E',
          500: '#ECC94B',
          400: '#F6E05E',
          300: '#FAF089',
          200: '#FEFCBF',
          100: '#FFFFF0',
          50: '#FFFBEB',
        },
        'secondary-green': {
          900: '#22543D',
          800: '#276749',
          700: '#2F855A',
          600: '#38A169',
          500: '#48BB78',
          400: '#68D291',
          300: '#9AE6B4',
          200: '#C6F6D5',
          100: '#F0FFF4',
          50: '#ECFDF5',
        },
        'secondary-purple': {
          900: '#44337A',
          800: '#553C9A',
          700: '#6B46C1',
          600: '#805AD5',
          500: '#9F7AEA',
          400: '#B794F4',
          300: '#D6BCFA',
          200: '#E9D8FD',
          100: '#FAF5FF',
          50: '#F5F3FF',
        },
        'secondary-pink': {
          900: '#702459',
          800: '#97266D',
          700: '#B83280',
          600: '#D53F8C',
          500: '#ED64A6',
          400: '#F687B3',
          300: '#FBB6CE',
          200: '#FED7E2',
          100: '#FFF5F7',
          50: '#FDF2F8',
        },
        current: 'currentColor',
        bone: '#B1C2D0',
        loginBg: '#f7f9fb',
        loginText: '#5A616D',
        loginBlue: '#325FE5',
        current: 'currentColor',
        labelBlack: "#04111E"
      },
      boxShadow: {
        'inner_shadow': 'inset 0px 2px 4px rgba(43, 53, 116, 0.06)',
        'base_shadow': '0px 2px 4px rgba(43, 53, 116, 0.08)',
        'md_shadow': '0px 4px 8px rgba(43, 53, 116, 0.08)',
        'lg_shadow': '0px 8px 16px rgba(43, 53, 116, 0.09)',
        'l_shadow': '0px 16px 32px rgba(43, 53, 116, 0.1)',
        'xl_shadow': '0px 20px 25px rgba(43, 53, 116, 0.1), 0px 10px 10px rgba(43, 53, 116, 0.04)',
        'login_shadow': '2px 4px 15px rgba(200, 199, 204, 0.2);'
      },
      borderWidth: {
        '0.5px': '0.5px',
        '1px': '1px',
        '1.5px': '1.5px',
        '3px': '3px',
      },
      borderColor: {
        'waikawa-grey': '#6B729E',
        'bone': '#B1C2D0'
      },
      borderRadius: {
        'sm-round': '4px',
        'md-round': '8px',
        'lg-round': '16px',
        'l-round': '24px',
        'full-round': '9999px'
      },
      fontSize: {
        '108px': ['108px', '108px'],
        '86px': ['86px', '100%'],
        '56px': ['56px', '64px'],
        '48px': ['48px', '100%'],
        '32px': ['32px', '36px'],
        '24px': ['24px', '28px'],
        '20px': ['20px', '24px'],
        '18px': ['18px', '22px'],
        '16px': ['16px', '22px'],
        '18a': '18px',
        '16a': '16px',
        '14a': '14px',
        '13a': '13px',
        '12a': '12px',
        '10a': '10px'
      },
      lineHeight: {
        '150%': '150%',
        '24px': '24px',
        '18px': '18px',
        '16px': '16px',
        '14px': '14px',
      }
    },
  },
  plugins: [],
}