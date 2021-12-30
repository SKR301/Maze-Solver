
for (var i = 0; i < 6; i++) {
    (function(a) {
        setTimeout(function() {
            document.getElementById('menuBtn_'+a).classList.add('growIn');
        }, i * 250);
    })(i)
}

function loadCommandButton(){
    commandBtn = ['wallBtn','startBtn','endBtn','solveBtn','resetBtn'];
    
    for (var i = 0; i < 5; i++) {
        (function(a) {
            setTimeout(function() {
                document.getElementById(commandBtn[a]).classList.add('fadeIn');
            }, i * 500);
        })(i)
    }
}