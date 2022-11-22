<template>
  <div>
    <div class="quiz-cont">
      <h2> Quizzy</h2>
      <section class="quiz" v-if= "!quizCompleted" >
        <div class="quiz-info">
          <span class="question">{{ getCurrentQuestion.question }}</span>
          <span class="score">Score {{ score }}/ {{ questions.length }}</span>
        </div>

        <div class="options">
          <label 
          v-for= "(option,index) in getCurrentQuestion.options" 
          :key= "index"
          :class= "`option ${
            getCurrentQuestion.selected == index 
							? index == getCurrentQuestion.answer 
								? 'correct' 
								: 'wrong'
							: ''
					} ${
						getCurrentQuestion.selected != null &&
						index != getCurrentQuestion.selected
							? 'disabled'
							: ''
              
            }`">
            <input
                type="radio" 
                :id=" 'option' + index"
                :name="getCurrentQuestion.index" 
                :value="index"
                v-model="getCurrentQuestion.selected"
                :disabled="getCurrentQuestion.selected"
                @change="setAnswer" 
            />
            <span class="answer-options">{{ option }}</span>
          </label>
        </div>
        <button 
				@click= "nextQuestion" 
				:disabled= "!getCurrentQuestion.selected">
				{{ 
					getCurrentQuestion.index == questions.length - 1 
						? 'Finish' 
						: getCurrentQuestion.selected == null
							? 'Select an option'
							: 'Next question'
				}}
			</button>

      </section>
      <section v-else>
        <h1><span style='font-size:35px;'>&#127882;</span> Congrats <span style='font-size:35px;'>&#127882;</span></h1>
			<h2>You have finished the quiz!</h2>
			<p class="final-score">Your score is :{{ score }}/{{ questions.length }}</p>
		</section>
    </div>
    
  </div>
</template>

<script setup>
import { ref , computed } from 'vue';
const questions = ref([
   {
     question: '1.Which of the following data binding interpolation is also known as "Mustache" syntax ?',
     answer: 2,
     options:[
          'v-on',
          'v-model',
           '{{}}',
           '[]'
     ],
     selected:null
   },
    {
     question: '2.Which of the following is the correct syntax to use for loop in Vue.js ?',
     answer: 1,
     options:[
          'vFor',
          'v-for',
           '*v-for',
           'None of the above'
     ],
     selected:null
   },
   {
     question: '3.Which of the following is the advantage of using Vue.js ?',
     answer: 3,
     options:[
          'Vue.js is very small in size',
          'The documentation of Vue.js is very easy and comprehensive',
           'Vue.js is flexible in nature',
           'All of the above'
     ],
     selected:null
   },
   {
     question: '4.Which of the following directive is used for two-way binding in Vue.js ?',
     answer: 1,
     options:[
          'v-on',
          'v-model',
           'no-one',
           'v-bind'
     ],
     selected:null
   },
   {
     question: '5.How many ways are there to define a filter in Vue.js ?',
     answer: 1,
     options:[
          '1',
          '2',
           '3',
           '4'
     ],
     selected:null
   },
   {
    question:'6.What is Vue Js ?',
    answer:3,
    options:[
      'programming language',
      'directives',
      'scripting langauge',
      'a framework'
    ],
    selected:null
   },
    {
    question:'7.How to define constant in vue ?',
    answer:2,
    options:[
      'constant',
      'int',
      'const',
      'define'
    ],
    selected:null
   }
])
  
  const quizCompleted = ref(false);
  const currentQuestion = ref(0);
  const score = computed (()=>{
    let value = 0;
    questions.value.map(q => {
      if(q.selected == q.answer){
        value++;
        }
    })
    return value;
  })

  const getCurrentQuestion = computed(()=>{
    let question = questions.value[currentQuestion.value];
    question.index = currentQuestion.value;
    return question;
  })

const setAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value;
  e.target.value=null
}

const nextQuestion = () =>{
  if(currentQuestion.value < questions.value.length - 1){
    currentQuestion.value++;
  }
  else{
    quizCompleted.value = true;
  }
}
</script>

<style scoped>
.quiz-cont{
  width: 68%;
  margin: 4em auto;
}
h2{
  text-align: center;
  margin-bottom: 10px;
}
h1{
  text-align: center;
}
.quiz{
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
}
.question{
  padding: 8px 0 8px 0;
}
.score{
  float: right;
  color:#0075ff;
}
.options{
display: flex;
flex-direction: column;
}
label{
  padding: 8px;
  background-color:#eef2f8;
  border-radius: 20px;
  margin: 4px 0;
}
.option.correct{
  background-color: #2af926;
}
.option.wrong{
  background-color: red;
}
.answer-options{
  margin-left: 10px;
}
button{
  background-color: #0075ff;
   color: white;
   padding: 10px;
  border: none;
  border-radius: 20px;
  width: 25%;
  font-weight:500;
  cursor: pointer;
  margin-top: 5px;
}
.final-score{
  text-align: center;
}
@media(max-width:600px){
.quiz-cont{
 width: 90%;
}
button{
  width: 50%;
}

}
</style>