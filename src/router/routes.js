import Router from "vue-router";
import QuizHome from "../components/QuizHome";
import QuizLogin from"../components/QuizLogin";
import QuizStart from "../components/QuizStart"


const router = new Router({
  mode:"history",
  routes:[

    {
      name:"",
      path:'/',
      component:QuizHome
    },
    {
        name:"login",
        path:'/login',
        component:QuizLogin
    },
    {
      name:"start-to-quiz",
      path:'/start-to-quiz',
      component:QuizStart
    }
   
   
    
  ]
})
export default router;