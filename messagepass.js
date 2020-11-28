//
//document.getElementById("button").onclick = function() {lastValue(); };
//
//var input = document.getElementById("text");
//input.addEventListener("keyup", function(event) {
//    if (event.keyCode === 13) {
//        event.preventDefault();
//        document.getElementById("button").click();
//    }
//});
//
//
////setTimeout(function () {document.getElementById('msg').style.display='none'}, 2000);
//
//function lastValue(){
//
//    var x = document.getElementById("text").value;
//
//    if( x === ""){
//        setTimeout(function () {
//            document.getElementById('msg').style.display='none';
//        }, 1000);
//
//        document.getElementById("msg").textContent = "Enter something";
//        document.getElementById("data").textContent = "This is what you have entered";
//    }else{
//        document.getElementById("msg").textContent = "";
//        document.getElementById("data").textContent = x;
//
//        setTimeout(function () {document.getElementById('msg').style.display='none'}, 2000);
//    }
//
//}


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




