

$(document).ready(function() {
    

    // header animation

    var date = new Date();
    var hours = date.getHours();
    var dateStatus = "";
    if(hours < 12) {
        dateStatus = "Morning";
        $(".content-header").css("background-image", "url('../../assets/header/morning.jpg')");
    } else if(hours < 18) {
        dateStatus = "Afternoon";
        $(".content-header").css("background-image", "url('../../assets/header/afternoon.jpg')");
    } else {
        dateStatus = "Evening";
        $(".content-header").css("background-image", "url('../../assets/header/night.jpg')");
    }      

    // Tag cloud

    var text = [
        'HTML', 'CSS 3', 'BOOTSTRAP 5', 'JAVASCRIPT', 'JQUERY',
        'MYSQL', 'PHP', 'JAVA', 'C++'
    ];
    
    var options = {
        maxSpeed: 'fast',
        radius: 150
    }
    
    TagCloud('.tag-cloud', text, options);
   
    
    var name = $("input#name");
    var email = $("input#email");


    // Key up animation contacts

    $(name).keyup(function(e) {
        if(name.val() != "") {
            $("label.name-label").addClass("animate");
        } else {
            $("label.name-label").removeClass("animate");
        }
    });

    $(email).keyup(function(e) {
        if(email.val() != "") {
            $("label.email-label").addClass("animate");
        } else {
            $("label.email-label").removeClass("animate");
        }
    });

    var i = 0;

    loading();

    function loading() {

        // Typing animation

        var options = {
            strings: ['Good '+dateStatus+'!', 'Welcome to my Portfolio!'],
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 700,
            loop: false,
        };

        var width = $(".loading-progress").width();
        
        $.get('/libraries/trivia.txt', function(txt) {
            var lines = txt.split("\n");
            var randLineNum = Math.floor(Math.random() * lines.length);
            $(".loading-trivia p").text(lines[randLineNum]);
        });

        if (i == 0) {
            i = 1;
            var elem =  $(".loading-progress").width();   
            var width = 1;
            var id = setInterval(animate, 50);
            function animate() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                    $(".loading-screen").addClass("hide");
                    setTimeout(function() {
                        $(".loading-screen").remove();
                    }, 500);
                    var typed = new Typed('.typing-text', options);
                } else {
                    width++;
                    $(".loading-progress").width(width + "%");
                    $(".loading-count").text(width + "%");
                }
            }
        }
    }

});