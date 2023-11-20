document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    const showTestimonial = index => {
        testimonials.forEach((node, idx) => {
            node.style.display = idx === index ? 'block' : 'none';
            node.classList.toggle('active', idx === index);
        });
        currentTestimonial = index;
    };

    document.getElementById('next').addEventListener('click', () => {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(prevIndex);
    });

    // Initialize first testimonial
    showTestimonial(0);
});
