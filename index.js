
var quiz_data=[
    { 
        question :'which framework is related to js ?',
         a :'.net',
         b:'flask',
         c:'react',
         d:'django',
         crct:'c'
    },
    { 
        question :'which is not a programing language ?',
         a :'html',
         b:'python',
         c:'java',
         d:'c++',
         crct:'a'
    },
    { 
        question :'which is not a framework ?',
         a :'angular',
         b:'javascript',
         c:'react',
         d:'django',
         crct:'b'
    },
    { 
        question :'css stands for ...',
         a :'cascading style sheet',
         b:'cascading sheet of style',
         c:'coloring style sheet',
         d:'none of the above',
         crct:'a'
    },
    { 
        question :'what is ur name?',
         a :'sudarsan reddy',
         b:'settypalli',
         c:'kalyan',
         d:'none of the above',
         crct:'a'
    }
];

var quiz=document.getElementById('quiz-div');
var answer=document.querySelectorAll('.options');
var question=document.getElementById('question');
var option_a =document.getElementById('a_val');
var option_b=document.getElementById('b_val');
var option_c =document.getElementById('c_val');
var option_d =document.getElementById('d_val');

var submit_btn=document.getElementById('submit');

var cur=0;
var score=0;

loadQuiz();
function loadQuiz()
{
   deselect();

   question.innerHTML=quiz_data[cur].question;
   option_a.innerHTML=quiz_data[cur].a;
   option_b.innerHTML=quiz_data[cur].b;
   option_c.innerHTML=quiz_data[cur].c;
   option_d.innerHTML=quiz_data[cur].d;
}

function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}
var selectedoption;
submit_btn.addEventListener('click',()=>{
  
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption =answer.id;
        }
    })
    if(selectedoption==quiz_data[cur].crct)
    {
        score=score+1;
    }
    
    cur=cur+1;
    if(cur==quiz_data.length)
    {
       quiz.innerHTML=`<h1>you have answered ${score} correctly out of ${cur} .</h1>`
    }
    else
    loadQuiz();
})



 