var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// email form

formbutton("create", {
    action: "https://formspree.io/f/mrgjkodp",
    title: "How can we help?",
    fields: [{
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "your@email.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "What's on your mind?",
        },
        {
            type: "submit"
        }
    ],
    styles: {
        title: {
            backgroundColor: "gray"
        },
        button: {
            backgroundColor: "gray"
        }
    }
});

