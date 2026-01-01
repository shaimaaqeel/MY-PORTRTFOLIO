document.addEventListener('DOMContentLoaded', () => {
    // إضافة تأثير "Hover" بسيط عند المرور على البطاقات
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateX(10px)';
            card.style.transition = '0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateX(0)';
        });
    });

    // رسالة ترحيبية بالكونسول
    console.log("Portfolio Loaded Successfully! ✨");
});