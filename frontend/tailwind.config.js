/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            bodoni: ['"Bodoni Moda"', 'serif'],
          },
          colors: {
            heliotrope: {
              50: '#ede1f0',
              100: '#dec2e2',
              200: '#cfa4d5',
              300: '#c184ca',
              400: '#ae68b7',
              500: '#905697',
              600: '#724578',
              700: '#56345b',
              800: '#3c243f',
              900: '#231525',
            },
            raspberry: {
              50: '#f0e1e6',
              100: '#e2c3cd',
              200: '#d6a5b5',
              300: '#ca869e',
              400: '#ba6a87',
              500: '#995770',
              600: '#7a4559',
              700: '#5c3443',
              800: '#40242e',
              900: '#25151b',
            },
            tangelo: {
              50: '#eee2dd',
              100: '#dec6ba',
              200: '#d0ab96',
              300: '#c38f6f',
              400: '#a5795e',
              500: '#88644d',
              600: '#6c4f3e',
              700: '#523c2e',
              800: '#382920',
              900: '#211813',
            },
            apple_green: {
              50: '#e3e7ce',
              100: '#c8d097',
              200: '#aeb969',
              300: '#969f5b',
              400: '#7f874d',
              500: '#696f3f',
              600: '#545932',
              700: '#3f4326',
              800: '#2b2e1a',
              900: '#191b0f',
            },
            sap_green: {
              50: '#d6ead4',
              100: '#acd6a7',
              200: '#7ac370',
              300: '#69a960',
              400: '#598f51',
              500: '#497643',
              600: '#3a5e35',
              700: '#2c4728',
              800: '#1e311c',
              900: '#121c10',
            },
            aquamarine: {
              50: '#d4eae0',
              100: '#a5d6c2',
              200: '#6ec2a3',
              300: '#5fa88d',
              400: '#518e77',
              500: '#437563',
              600: '#355d4e',
              700: '#28463b',
              800: '#1c3029',
              900: '#101c18',
            },
            cornflower_blue: {
              50: '#dce6ee',
              100: '#b9cede',
              200: '#94b7cf',
              300: '#6da0c0',
              400: '#5c88a2',
              500: '#4c7086',
              600: '#3d596a',
              700: '#2e4350',
              800: '#1f2e37',
              900: '#121b20',
            },
            persian_blue: {
              50: '#e5e3f1',
              100: '#cbc8e4',
              200: '#b2add9',
              300: '#9a93cf',
              400: '#8279c6',
              500: '#6b62ac',
              600: '#554e89',
              700: '#403b67',
              800: '#2c2847',
              900: '#1a1829',
            },
          },
        },
      },
  plugins: [],
}

