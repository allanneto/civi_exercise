<h1 align="center">
  Civi App Exercise
</h1>

<h2 align="center">
  💻🚛 Simple Message Application
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/allanneto/civi_exercise">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/allanneto/civi_exercise">

  <a href="https://github.com/allanneto/civi_exercise/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/allanneto/civi_exercise">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pushpin-projeto">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-instalacao">Install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-como-contribuir">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">License</a>
</p>

<br>

## :rocket: Tecnologias

This project have this technologies:

- [React-Native](https://reactnative.dev/)
- [NodeJS](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)

Extras:

- Main Libs
  - [Axios](https://github.com/axios/axios)
  - [Express](https://expressjs.com/pt-br/)
- Styles
  - [React-Native-Vector-Icons](https://oblador.github.io/react-native-vector-icons/)
  - [Styled-Components](https://styled-components.com/)
  - [EditorConfig](https://editorconfig.org/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- Softwares
  - [VSCode](https://code.visualstudio.com/)

## Project

**Civi App Exercise** is a project to an React Native job opening.

This project was developed according to instructions of exercise.

## :computer: Install

The **Backend** was developed in NodeJS with PostgreSQL database.
<br>
Getting started backend: <br>

First you need to create the PostgreSQL docker container:

```bash
docker run --name civi_app -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Seconde step, create database named as civii and install all dependencies:

```bash
npm install / yarn install
```

Third step, run migrations to create table in datable and run server:

```bash
  yarn typeorm migration:run
  npm run dev:server / yarn dev:server
```

Keep server runnin and let's start Mobile!

Starting **Mobile** in **React Native**:
<br>

Open an Android emulator to use the mobile app.

```bash
npm install / yarn install
npm run android / yarn android
```

After proccess finish Civi exercise is open in your device and use the application.

You need to fill the input and click on the send button to create a new message.

Clicking on the message you see the detail about this message and update your read status (message icon).

## :memo: Licença

This project is under the MIT license.

---

Feito com 💜 by **Allan Neto**
