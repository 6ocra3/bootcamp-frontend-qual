

# Начало работы

`git clone https://github.com/6ocra3/bootcamp-frontend-qual`\
`cd bootcamp-frontend-qual`\
`yarn`\
`yarn start`

# О реализации проекта
Стек: React, модульный css и sass, js
* Не использовал typescript из-за того, что он тут не нужен, он излишне усложнил бы проект
* Модульный css и sass использовал из-за "наслаивании" стилей друг на друга, он помог избежать ненужных повторов селекторов
* React использовал из-за того, что всегда работал с ним, также из-за возможности перетащить некоторые React компоненты из других проектов

# О структуре проекта

App.js состоит из двух React компонентов.\
 Первый - боковый элемент, с моими контактами и фотографией.\
 Второй - главный компонент с разделом "Обо мне" и моим timeline. Также использовал :hover для замены текста на картинку/"карусель", которые оборачиваются в тег "a" и являются ссылками на git-репозитории и други источники.
Использовал media запросы и относительные единицы измерения, чтобы была "резиновая верстка"\
В папке components хранятся все базовые компоненты, и сборные компоненты. В папке static хранятся все изображения\
Периоды в timeline я генерировал через .map из React, данные для .map я брал из timlineText.jsx