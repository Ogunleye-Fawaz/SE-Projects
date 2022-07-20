var i = 0;
var txt = 'fawaz';
var speed = 50;

function typeWriter() {
    if(i <txt.length) {
        document.getElementById('gh').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

    }
}

let inputFirstName = document.getElementById('inputFirstName'); //the dom object getElementbyId  attaches the variable name to the element id
let inputLastName = document.getElementById('inputLastName');
let inputBtn = document.getElementById('sub-btn');
let name = document.getElementById('name');
const greeting = document.getElementById('greeting');
const time = document.getElementById('time');
const date = new Date(); //creates a date object
let hour = date.getHours(); //gets the hour in 24 hours
let minutes = date.getMinutes(); //gets the minutes in 24 hours
let AM;

inputBtn.onclick = () => {
    const firstName = inputFirstName.value; //gets the value of the first name
    const lastName = inputLastName.value; //gets the value of the second name
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    if(firstName && lastName) {
        localStorage.setItem('First Name', firstName); 
        localStorage.setItem('Last Name', lastName);  
        if(currentHour > 12) {
            currentHour = currentHour - 12; // converts 24hour to 12-hour time
        }
        if(currentHour < 10) {
            currentHour = '0' + currentHour; // adds 0 to hours < 10
        } 
        if(currentMinutes < 10) {
            currentMinutes = '0' + currentMinutes; //adds 0 to minutes < 10
        }
        if(hour > 11) {
            AM = 'PM';
        } 
        
        if(hour < 12) {
            AM = 'AM';
        }
        
        time.innerHTML = currentHour + ' : ' + currentMinutes + AM; 
        
        
        if(hour < 12) {
            greeting.innerHTML = 'Good Morning' + '  ' + localStorage.getItem('First Name') + ' ' + '<br/>' + 'Have a great day ahead!'; 
        
        }
        else if(hour > 11 && hour < 18 ) {
            greeting.innerHTML = 'Good Afternoon' + '  ' + localStorage.getItem('First Name') + ' ' + '<br/>' + 'Ensure you smash through your tasks!';
        
        
        }
        else{
            greeting.innerHTML = 'Good Evening' + localStorage.getItem('First Name') + ' ' + '<br/>' + 'Hope you had a nice day !';
        
        }
        if(localStorage.getItem('First Name')) {
           document.getElementById('container-1').style.display = 'none'; // hides the container-1  
         
            document.getElementById('container-2').style.display = 'flex';  //shows the container-2
           
            
        }
       
    
        
    }


    
    
}


