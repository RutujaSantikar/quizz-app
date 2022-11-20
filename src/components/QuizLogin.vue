<template>
  <div>
    <section  v-if= "!userLoggedIn"   class="login-cont">
         <h1>Login or Signup</h1>
         <p v-if= "error">{{ error }}</p>
       <div class="auth-form"> 
        <div><input type="text" placeholder="email" v-model= "email"/></div>
        <div><input type="password" placeholder="password" v-model= "password"/></div>
        <div><input v-if= "!loginView" type="password" placeholder="confirm password"  v-model= "confirmPassword"/></div>
        <div><button :disabled= "!onSubmit" @click= "authenticate" class="auth-btns"> {{ loginView ? 'Login' : "Signup" }}</button> 
         <button class="auth-btns"><a class="toggle" @click= "toggleView">{{ !loginView ? 'Login' : "Signup" }}</a> </button>
        </div>
       </div>
    </section>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
export default {
name:"QuizLogin",
data(){
    return{
        auth,
        loginView:true,
        email:null,
        password:null,
        confirmPassword:null,
        error:null
    }
    
},

methods:{
    toggleView(){
     this.loginView = !this.loginView;
    },
    authenticate(){
        
       
        if(this.loginView){
            this.login()
           
        }
        else{
            this.signup()
        }
        

    },
    async login(){
        const auth = getAuth();
        try{
         await signInWithEmailAndPassword(auth,this.email,this.password).then((userCredential)=>{
            // console.log(userCredential.user);
            const { email, emailVerified, uid} = userCredential.user;
            this.$store.dispatch('setUser',{email, emailVerified, uid});
            this.$router.push('start-to-quiz');
         })
        }catch (error) 
        {
          this.error =error.message
        }
        
      

    },
    async signup(){
        const auth = getAuth();
        try{
            await createUserWithEmailAndPassword(auth,this.email,this.password).then((userCredential)=>{
            // console.log(userCredential.user);
            const { email, emailVerified, uid} = userCredential.user;
            this.$store.dispatch('setUser',{email, emailVerified, uid});
            this.$router.push('start-to-quiz');
         })
        }
         catch(error){
            this.error = error.message
         }
       
    }

},
computed:{
    
    emailValid(){
        if(this.email ?.includes('@') && this.email ?.includes('.') && this.email ?.length > 5 ){
         return true;
        }

        else{
            return false;
        }

    },
    passwordMatch(){
        if(this.password === this.confirmPassword && !!this.password){
         return true;
        }
        else{
            return false;
        }
    },
    onSubmit(){
        if(this.loginView){
        return this.emailValid && !!this.password;
        }
        else{
          return this.emailValid && this.passwordMatch;
        }
    },
    userLoogedIn(){
        return this.$store.getters.currentUserLoggedIn;
    }

}

}
</script>

<style scoped>
h1{
    text-align: center;
    margin-bottom: 1em;
}
section{
    width: 30%;
    margin: 6em auto;
   
}
input{
    width: 100%;
    padding: 10px;
    margin: 1em 0;
    outline: none;
    border: none;
    border-radius: 10px;
}
.auth-form{
     background-color: #2af926;
     padding: 20px;
     border-radius: 20px;
}
.auth-btns{
     background-color: #0075ff;
   color: white;
   padding: 10px;
  border: none;
  border-radius: 20px;
  width: 30%;
  font-weight:500;
  cursor: pointer;
  margin-right: 10px;
}

@media(max-width:600px){
    section{
        width: 70%;
    }

}
</style>