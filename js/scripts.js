
// Scroll Reveal for Template One
window.sr = ScrollReveal({ 
    reset: true 
});
sr.reveal('.blog-title');


//Template One
sr.reveal('#template1 #image1', { 
    afterReveal: function (domEl) {
        $('#one-one').css('display', 'block');
        $('#one-two').css('display', 'block');
    },
    afterReset: function (domEl) {
        $('#one-one').css('display', 'none');
        $('#one-two').css('display', 'none');
    }
});
sr.reveal('#template1 #image2', { 
    afterReveal: function (domEl) {
        $('#one-three').css('display', 'block');
        $('#one-four').css('display', 'block');
    },
    afterReset: function (domEl) {
        $('#one-three').css('display', 'none');
        $('#one-four').css('display', 'none');
    }
});
sr.reveal('#template1 #image3', { 
    afterReveal: function (domEl) {
        $('#one-five').css('display', 'block');
    },
    afterReset: function (domEl) {
        $('#one-five').css('display', 'none');
    }
});


//Template Two
$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5
});
/*
sr.reveal('#template2 #image1', { 
    afterReveal: function (domEl) {
        $('#two-one').css('display', 'block');
        $('#two-two').css('display', 'block');
    },
    afterReset: function (domEl) {
        $('#two-one').css('display', 'none');
        $('#two-two').css('display', 'none');
    }
});
sr.reveal('#template2 #image2', { 
    afterReveal: function (domEl) {
        $('#two-three').css('display', 'block');
        $('#two-four').css('display', 'block');
    },
    afterReset: function (domEl) {
        $('#two-three').css('display', 'none');
        $('#two-four').css('display', 'none');
    }
});
sr.reveal('#template2 #image3', { 
    afterReveal: function (domEl) {
        $('#two-five').css('display', 'block');
    },
    afterReset: function (domEl) {
        $('#two-five').css('display', 'none');
    }
});
*/