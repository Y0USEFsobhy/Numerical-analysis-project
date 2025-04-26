/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',  './bisection.html' ,'./falsePosition.html','./newton.html','./src/bisection.js','./src/falsePosition.js','./src/newton.js','./simpleFixedPoint.html','./src/simpleFixedPoint.js','./secant.html','./src/secant.js','./Gauss-Elimination.html','./src/Gauss-Elimination.js','./cramer.html','./src/cramer.js','./Gauss-Jordan.html','./src/Gauss-Jordan.js'],
  theme: {
    extend: {
      fontFamily: {
        Parkinsans : ['Parkinsans','serif'],
        Readex: ["Readex Pro", 'sans-serif'],
        test : ["Comic Relief",],
      }
    },
  },
  plugins: [],
}

