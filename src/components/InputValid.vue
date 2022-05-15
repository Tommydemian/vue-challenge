<template>
    <form @submit.prevent="handleSubmit" >
      <label>Email:</label>
        <input
        type="email"
        placeholder="Enter your email direction"
        required
        maxlength="25"
        v-model="email"
        @blur="handleEmailFocus"
        @keyup.enter="handleEmailFocus"
      />
    <Span
      message="Not valid email direction"
      v-if="emailfocused"
     />
    
    <label>Number:</label>
      <input
        type="number"
        placeholder="Enter a number beetwen 4 and 7 please, it should be an integer"
        required
        max="7"
        min="4"
        maxlength="1"
        v-model="number"
        @blur="handleNumberFocus"
        @keyup.enter="handleNumberFocus"
       />
    <Span 
      message="Not valid due to requirements: only one integer, between 4 and 7"
      v-if="numberfocused"
     />
    
    <label>Code:</label>
      <input 
        type="text"
        placeholder="enter a code using only vowels and numbers..."
        required
        maxlength="5"
        minlength="1"
        pattern="^([aeiouy0-9]*[^zrtpqsdfghjklmwxcvbn \r\n])$"
        v-model="code"
        @blur="handleCodeFocus"
        @keyup.enter="handleCodeFocus"
       />
    <Span 
      message="You should only enter vowels and numbers" 
      v-if="codefocused"
     />
      <Button
      type="submit"
       btnText="Show Results" />
    </form>

    <h3 v-if="results" class="results" >your email is {{email}}, you selected the number {{number}} and your code is {{code}}</h3>
    </template>

<script lang="ts" >
import { defineComponent, ref } from 'vue'
import Span from './WarningSpan.vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'InputValidations',
  setup() {
    const email = ref<string>('')
    const number = ref<number>(0)
    const code = ref<String | Number>('')
    const emailfocused = false
    const numberfocused = false
    const codefocused = false
    /*  const focusedrefs = ref(
        {emailfocused: false},
        {numberfocused: false},
        {codefocused: false}
    ) */ 
    const results = ref(false)
    return {email, number, code, emailfocused, numberfocused, codefocused, results}
  }, 
  methods:{
      handleEmailFocus() {
          this.emailfocused = true;
      },
      handleNumberFocus() {
          this.numberfocused = true;
      },
      handleCodeFocus() {
          this.codefocused = true;
      },
      handleSubmit(){
        this.results = true
      }
  },
  components: {
    Span,
    Button
  }
})
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: .5em;
  width: 30%;
  margin: 2em auto;
  padding: 2em;
  border: 1px solid black;
  border-radius:6px;
}
label {
  font-weight: 600;
}
input {
    width: 80%;
    padding: .5em
}
 
.submit-btn {
  cursor: pointer;
  margin-top: .5em;
  padding: .5em;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--accent-clr)
}
.submit-btn:hover {
  background-color: var(--accent-clr-pseudo)  
}

span {
  color: red;
  display: none;
  font-weight: 600;
}

input:invalid ~ span{
  display: block
}

.results{
  text-align: center;
  font-weight: 400;
}



</style>