import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'

import btn from '@/views/basicComponents/btn'
import inputs from '@/views/basicComponents/inputs'
import words from '@/views/basicComponents/words'
import dialogs from '@/views/basicComponents/dialogs'
import calendars from '@/views/basicComponents/calendars'
import tables from '@/views/basicComponents/tables'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/btn',
          name:'BTN',
          component:btn,
        },
        {
          path:'/inputs',
          name:'INPUTS',
          component:inputs,
        },
        {
          path:'/words',
          name:'WORDS',
          component:words,
        },
        {
          path:'/dialogs',
          name:'DIALOGS',
          component:dialogs,
        },
        {
          path:'/calendars',
          name:'CALENDARS',
          component:calendars,
        },
        {
          path:'/tables',
          name:'TABLES',
          component:tables,
        }
      ]
    }
  ]
})
