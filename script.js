document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.view-more');
    const seeMoreContainer = document.getElementById('see-more-container');
    const closeButton = document.getElementById('close-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const discord = button.getAttribute('data-discord');
            const id = button.getAttribute('data-id');
            const lastUpdated = button.getAttribute('data-last-updated');
            const moreInfo = button.getAttribute('data-more-info');
            const proofImages = JSON.parse(button.getAttribute('data-proof-images'));

            document.getElementById('user-discord').textContent = `Discord: ${discord}`;
            document.getElementById('user-id').textContent = `ID: ${id}`;
            document.getElementById('user-last-updated').textContent = `Last updated: ${lastUpdated}`;
            document.getElementById('user-more-info').textContent = moreInfo;


            proofImages.forEach((src, index) => {
                document.getElementById(`proof${index + 1}`).src = src; 
            });

            seeMoreContainer.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        seeMoreContainer.style.display = 'none';
    });
});
