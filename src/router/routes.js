import Router from "vue-router";
import QuizHome from "../components/QuizHome";
import QuizLogin from"../components/QuizLogin";


const router = new Router({
  mode:"history",
  routes:[

    {
      name:"",
      path:'',
      component:QuizHome
    },
    {
        name:"login",
        path:'/login',
        component:QuizLogin
    },
   
   
    
  ]
})
export default router;