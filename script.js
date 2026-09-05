gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline();

heroTimeline
    .from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        // ease: "power3.out"
    })

    .from(".eyebrow", {
        x: -80,
        opacity: 0,
        duration: .8,
        // ease: "power3.out"
    })

    .from(".hero h1", {
        y: 80,
        opacity: 0,
        duration: 1,
        // ease: "power4.out"
    })

    .from(".hero-line", {
        width: 0,
        duration: .7
    })

    .from(".hero-content > p", {
        y: 30,
        opacity: 0,
        // stagger: .15,
        duration: .7
    })

    .from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: .7
    });

gsap.from(".feature-card", {

    scrollTrigger: {
        trigger: ".features",
        start: "top 80%"
    },

    y: 80,
    opacity: 0,

    duration: .8,
    // ease: "power3.out"

});


gsap.utils.toArray(".reveal").forEach((element) => {

    gsap.from(element, {

        scrollTrigger: {
            trigger: element,
            start: "top 80%"
        },

        y: 80,
        opacity: 0,

        duration: 1,

    });

});



gsap.from(".image-card.large", {

    scrollTrigger: {
        trigger: ".history",
        start: "top 70%"
    },

    x: -120,
    rotation: -5,
    opacity: 0,
    duration: 1.2,
    // ease: "power4.out"

});


gsap.from(".image-card.small", {

    scrollTrigger: {
        trigger: ".history",
        start: "top 70%"
    },

    x: 120,
    rotation: 5,
    opacity: 0,

    duration: 1.2,

    delay: .2,

    // ease: "power4.out"

});

gsap.utils.toArray(".timeline-item").forEach((item, index) => {

    gsap.from(item, {

        scrollTrigger: {
            trigger: item,
            start: "top 85%"
        },

        x: index % 2 === 0 ? -80 : 80,

        opacity: 0,

        duration: 1,

        // ease: "power3.out"

    });

});


gsap.from(".hero-card", {

    scrollTrigger: {
        trigger: ".hero-grid",
        start: "top 80%"
    },

    y: 100,

    opacity: 0,

    scale: .9,

    duration: 1,

});


/* ================= FORCE CARDS ================= */

gsap.from(".force-card", {

    scrollTrigger: {
        trigger: ".force-grid",
        start: "top 80%"
    },

    y: 80,

    opacity: 0,

    duration: .9,

});


/* ================= GALLERY ================= */

gsap.from(".gallery-card", {

    scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top 80%"
    },

    scale: .75,

    opacity: 0,

    duration: 1,

});

gsap.to(".tribute::before", {
    yPercent: 20,

    scrollTrigger: {
        trigger: ".tribute",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.from(".tribute-content", {

    scrollTrigger: {
        trigger: ".tribute",
        start: "top 70%"
    },

});


document.querySelectorAll(".feature-card, .hero-card, .force-card")
.forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -10,
            duration: .3,
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            duration: .3,
        });

    });

});

ScrollTrigger.create({

    start: "top -80",

    onUpdate: self => {

        const navbar = document.querySelector(".navbar");

        if (self.direction === 1) {
            gsap.to(navbar, {
                backgroundColor: "rgba(3,12,7,.96)",
                duration: .3
            });
        }

    }

});