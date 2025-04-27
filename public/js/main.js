function init() {
    console.log('제휴 마케팅 웹사이트가 로드되었습니다.');

    highlightAdPlaceholders();
}

function highlightAdPlaceholders() {
    const adPlaceholders = document.querySelectorAll('.ad-placeholder');

    adPlaceholders.forEach(placeholder => {
        if (placeholder.children.length === 1 && placeholder.querySelector('.ad-instruction')) {
            placeholder.style.transition = 'all 0.3s ease';

            placeholder.addEventListener('mouseover', () => {
                placeholder.style.backgroundColor = '#e9ecef';
                placeholder.style.borderColor = '#6E57E0';
            });

            placeholder.addEventListener('mouseout', () => {
                placeholder.style.backgroundColor = '';
                placeholder.style.borderColor = '';
            });

            placeholder.addEventListener('click', () => {
                alert('이 영역에 광고 HTML 코드를 붙여넣으세요. 코드를 붙여넣은 후에는 이 안내 문구와 테두리가 사라집니다.');
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', init);