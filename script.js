fetch('videos.json')
    .then(response => response.json())
    .then(videos => {
        const container = document.querySelector('.video-grid');
        videos.forEach(link => {
            const div = document.createElement('div');
            div.className = 'video-container';
            div.innerHTML = `<iframe src="${link}" allowfullscreen></iframe>`;
            container.appendChild(div);
        });
    });