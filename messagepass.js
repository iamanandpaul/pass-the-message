
(function() {
    //Select the input element
    var form = document.querySelector('#message-form');
    //Set up Submit Button
    form.addEventListener('submit', function(e){
        // prevent the form's default submission action
        e.preventDefault()
        //Get user's input from from
        var message = document.querySelector('#text');
        var feedback = document.querySelector('.msg');
        var messageContent = document.querySelector('#data');

        if (message.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            }, 2000)
        } else {
            //Change message content and clear the message input
            messageContent.textContent = message.value
            message.value = ''
        }
    })
})()




