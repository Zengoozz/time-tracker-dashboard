/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueCustom": "hsl(246, 80%, 60%)",
        "lightRedWorkCustom": "hsl(15, 100%, 70%)",
        "softBluePlayCustom": "hsl(195, 74%, 62%)",
        "lightRedStudyCustom": "hsl(348, 100%, 68%)",
        "limeGreenExerCustom": "hsl(145, 58%, 55%)",
        "violetSocialCustom": "hsl(264, 64%, 52%)",
        "softOrangeSCCustom": "hsl(43, 84%, 65%)",
        "veryDarkBlueCustom": "hsl(226, 43%, 10%)",
        "darkBlueCustom": "hsl(235, 46%, 20%)",
        "desaturatedBlueCustom": "hsl(235, 45%, 61%)",
        "paleBlueCustom": "hsl(236, 100%, 87%)",
      },
      backgroundImage:{
        'workImg':"url('./images/icon-work.svg')",
        'playImg':"url('./images/icon-play.svg')",
        'studyImg':"url('./images/icon-study.svg')",
        'exerciseImg':"url('./images/icon-exercise.svg')",
        'socialImg':"url('./images/icon-social.svg')",
        'selfCareImg':"url('./images/icon-self-care.svg')",
      },
      gridTemplateColumns: {
        'layout': 'repeat(4 ,minmax(0, 200px)) ',
      },
      gridTemplateRows: {
        'layout': 'repeat(2 ,minmax(0, 1fr)) ',
      }
    },
  },
  plugins: [],
}
