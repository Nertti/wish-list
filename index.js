// Функция для загрузки данных из Google Sheets API
function loadSheet() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/1pslr6o4Njz_iw8CG5hWPJgbMz0vrwM3fD1nOtYYzvNY/values/list!A1:E100?key=AIzaSyDdbzIbTmHDq4ebypj6Efo4jZ3Zsm-p6Wk`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rows = data.values;

            const container = document.getElementById('wish-list');

            rows.forEach(rowData => {
                const card = document.createElement('div');
                card.classList.add('card');

                const top = document.createElement('div');
                top.classList.add('top');

                const title = document.createElement('div');
                title.classList.add('title');
                title.textContent = rowData[0] || '';

                const whom = document.createElement('div');
                whom.classList.add('whom');
                whom.textContent = rowData[1] || '';

                top.appendChild(title);
                top.appendChild(whom);

                const img = document.createElement('img');
                img.src = rowData[2] || '';
                img.alt = rowData[0] || '';

                const bottom = document.createElement('div');
                bottom.classList.add('bottom');

                const link = document.createElement('a');
                link.classList.add('link');
                link.href = rowData[3] || '';
                link.textContent = 'В магазин';

                const arrowIcon = document.createElement('img');
                arrowIcon.src = '/images/up-right.png';
                arrowIcon.alt = 'Стрелка';

                const price = document.createElement('div');
                price.classList.add('price');
                price.textContent = rowData[4] || '';

                link.appendChild(arrowIcon);
                bottom.appendChild(link);
                bottom.appendChild(price);

                card.appendChild(top);
                card.appendChild(img);
                card.appendChild(bottom);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading Google Sheet:', error));
}

// Загрузка данных при загрузке страницы
window.onload = loadSheet;
