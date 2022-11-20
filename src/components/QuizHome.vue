<template>
  <div>
    <section class="home-cont">
      <div class="left-cont">
        <div class="text-cont">
       <div class="title-name"><strong><h2>Quizzy<span>.</span></h2></strong></div>
        <div class="para-text">Learn New Concepts Each Minute</div>
        <div class="auth-info">signup or login to start</div>
        <div class="btn-cont">
          <router-link to="/login"><button class="login-btn">Login or Signup</button></router-link>
        </div>
      </div>
      </div>
      <div class="right-cont sm-none">
         <div class="img-cont">
          <img v-bind:src= "quizimg"/>
         </div>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  name: 'QuizHome',
  data(){
    return{
      quizimg:require("../assets/quizimg.jpg")
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  display: flex;
  justify-content: space-between;
}
.left-cont{
  width: 50%;

}
.text-cont{
  width: 70%;
  margin: 1em auto;

}
.title-name{
  font-size: 20px;
}
span{
  color:  #0075ff;
  font-weight: bold;
}
.para-text{
  font-size: 40px;
  font-weight: bold;
  margin-top: 4em;
}
.auth-info{
  margin-top: 1.5em;
}
.btn-cont{
  margin-top: 1.5em;
  display: flex;
}
.login-btn{
   background-color: #0075ff;
   color: white;
   padding: 10px;
  border: none;
  border-radius: 20px;
  width: 120%;
  font-weight:500;
}
.login-btn:hover{
  background-color: #2af926 ;
}


.right-cont{
 width:50% ;
 }
img{
 width: 100%;
 height:610px;
}



@media(max-width:600px){
 section{
  display: block;
 }
 .sm-none{
  display: none;
 }
 .left-cont{
  width: 100%;
 }
 .text-cont{
  width: 80%;
  margin: 0.5em auto;
}
.para-text{
  font-size: 35px;
  margin-top: 3em;
}


}
</style>
