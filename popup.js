// Select the close button and popup container
const closeBtn = document.querySelector('.close-btn');
const popup = document.getElementById('popup');

// Add event listener for the close button
closeBtn.addEventListener('click',function(){
    popup.style.display='none'; //Hide the popup container when the button is clicked
});
