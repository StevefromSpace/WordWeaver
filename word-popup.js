document.addEventListener('DOMContentLoaded', () => 
    {
    const tooltip = document.getElementById('vocab-tooltip');
    if (!tooltip) {
        console.error('CRITICAL ERROR: Could not find #vocab-tooltip element. Tooltips will not work.');
        return;
    }
    const allVocabWords = document.querySelectorAll('.vocab-word');

    allVocabWords.forEach(word => {
        word.addEventListener('mouseenter', () => 
            {
            const definition = word.dataset.definition || "No definition found.";
            tooltip.textContent = definition;
            const rect = word.getBoundingClientRect();
            tooltip.style.top = `${rect.top + window.scrollY - 15}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2) + window.scrollX}px`;
            tooltip.classList.remove('hidden');
        });
        word.addEventListener('mouseleave', () => 
            {
            tooltip.classList.add('hidden');
        });
    });

});