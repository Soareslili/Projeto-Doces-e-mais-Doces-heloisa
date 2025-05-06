const buttons = document.querySelectorAll('#categoryButtons .category-btn');
const cards = document.querySelectorAll('#productsContainer > div');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');

       
        buttons.forEach(button => {
            button.classList.remove('bg-[#ffe0ef]', 'text-[#FF3385]', 'font-semibold');
            button.classList.add('bg-white', 'text-gray-700', 'font-medium');
        });
        btn.classList.remove('bg-white', 'text-gray-700', 'font-medium');
        btn.classList.add('bg-[#ffe0ef]', 'text-[#FF3385]', 'font-semibold');

     
        cards.forEach(card => {
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
