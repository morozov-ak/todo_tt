### `npm run docker_build`
Сборка образа докера

или:
docker build -t todo_tt .
    


### `npm run docker_run`
запуск контейнера
Проект запускается на порту 3000

или:
docker run -d -p 3000:3000 --name todo todo_tt