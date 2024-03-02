document.addEventListener('DOMContentLoaded', () => {
            const downloadButton1 = document.getElementById('download-button-1');
            const downloadButton2 = document.getElementById('download-button-2');
             const downloadButton2 = document.getElementById('download-button-3');
             const downloadButton2 = document.getElementById('download-button-4');

            function downloadImage(imageName) {
                const link = document.createElement('a');
                link.href = imageName;
                link.download = 'downloaded-image.png';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            downloadButton1.addEventListener('click', () => downloadImage('badge.png'));
            downloadButton2.addEventListener('click', () => downloadImage('kai.png'));
            downloadButton2.addEventListener('click', () => downloadImage('ldube.jpg'));
            downloadButton2.addEventListener('click', () => downloadImage('felix.jpg'));
        
        

        });