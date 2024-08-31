# GreenIT

## Скачивание

git clone -b FixFront https://github.com/TheZnat/GreenIT-V2

либо через интерфейс github:

code -> вкладка Local -> download zip

## Изменения ссылки к API

client -> src -> helper -> Api.js -> export const PREFIX = "https://домен/api/cases"; 

сейчас домен: export const PREFIX = "https://spbgit.ru/api/cases";

## Установка

```sh
npm i
```

### Быстрый запуск для Дев режима

```sh
npm dev
```

### Сборка проекта через vite для Деплоя 

```sh
npm build
```

### Сборка проекта через vite для Деплоя и запуск в режиме Превью

```sh
npm preview
```

### После сборки проекта (npm build или npm preview)

Собранный проект находится в папке client -> dist

