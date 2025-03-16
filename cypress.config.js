const { defineConfig } = require("cypress");

module.exports = defineConfig({
  includeShadowDom : true,
  //chromeWebSecurity : false, //for multi tab or multi-window
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //task1 (11.cytask)-------------------

      on('task', {
        myTask1() {
          console.log('hello')
          return null
        }
      })

      ////task2
      on('task', {
        myTask2(nm) {
          console.log(`hi ${nm} how are you?`)
          return null
        }
      })

      //task3 addition
      on('task', {
        addition({ a, b }) {
          c = a + b
          console.log(c)
          return c
        }
      })

      //tasks for revision  file 14
      //task1
      on('task', {
        msgPrint() {
          console.log('hello')
          return null
        }
      })
      //task2
      on('task', {
        msgwithPara(str1) {
          console.log(`hi ${str1} how are you?`)
          return null
        }
      })
      //task3
      on('task', {
        addition({a, b}) {
          c = a + b
          console.log(`addition = ${c}`)
          return c
        }
      })




    },
  },
});