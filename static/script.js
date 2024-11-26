const API_URL = "https://ichoyou.netlify.app/";

document.getElementById('start').addEventListener('click', () => {
    fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(`Найдено ${data.length} пользователей!`);
        })
        .catch(error => console.error('Ошибка:', error));
});