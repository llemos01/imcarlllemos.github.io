$(document).ready(function() {

    var date = new Date();
    var hours = date.getHours();
    var dateStatus = "";
    if(hours < 12) {
        $(".banner-content").css("background-image", "url('../../assets/banner/morning.jpg')");
    } else if(hours < 18) {
        dateStatus = "Afternoon";
        $(".banner-content").css("background-image", "url('../../assets/banner/afternoon.jpg')");
    } else {
        dateStatus = "Evening";
        $(".banner-content").css("background-image", "url('../../assets/banner/night.jpg')");
    }      

    // scroll to top

    $(document).on("click", ".scroll-top", function() {
        $(".inner-wrapper").animate({ 
            scrollTop: 0 
        });
    });

    $(".bubble-container").hover(function() {
        var id = this.id;
        $.get("/assets/embed-yt/"+id+".txt", function(e) {
            var lines = e.split("\n");
            var randomLine  = Math.floor(Math.random() * lines.length);
            $(".embed-wrapper").html(`
                <div class="embed-content">
                    <iframe class="content" src="https://www.youtube.com/embed/`+lines[randomLine]+`?autoplay=1&controls=0"></iframe>
                </div>
            `);
        });
       
    });

    $(".embed-wrapper").mouseout(function() {
        $(".embed-wrapper").empty();

    });

    $(document).on("click", "#send-message", function() {
        Swal.fire({
            title: 'Hi! How can I help you?',
            html:
              `
                <div class="message-sweet mt-3">
                    <div class="row">
                        <div class="col-md-12 mt-3">
                            <div class="form-group">
                                <input type="text" class="form-control mt-1" name="name" id="name" placeholder="Full Name" autocomplete="disable">
                                <label for="name" class="form-label">Full Name</label>
                            </div>
                        </div>
                        <div class="col-md-12 mt-3">
                            <div class="form-group">
                                <input type="text" class="form-control mt-1" name="email" id="email" placeholder="Email" autocomplete="disable">
                                <label for="email" class="form-label">Email</label>
                            </div>
                        </div>
                        <div class="col-md-12 mt-3">
                            <div class="form-group">
                                <textarea class="form-control mt-1" name="email" id="email" placeholder="Message" autocomplete="disable"></textarea>
                                <label for="email" class="form-label">Message</label>
                            </div>
                        </div>
                    </div>
                </div>
              `,
            allowOutsideClick: false,
            showCloseButton: true,
            confirmButtonText: 'Send',
          })
    });


})