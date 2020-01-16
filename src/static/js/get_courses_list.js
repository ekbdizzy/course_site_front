'use strict';
import axios from 'axios'

const HOST = 'http://167.172.145.174:8001',
    COURSES_LIST_URL = `${HOST}/api/course/list`,
    PAGE_TITLE = 'Список курсов';

document.addEventListener("DOMContentLoaded", () => {
    function getCoursesList() {

        const title = document.querySelector('title'),
            courses = document.querySelector('.courses');
        if (title.innerText === PAGE_TITLE) {

            try {
                axios.get(COURSES_LIST_URL, {}
                ).then(response => {
                    response['data'].forEach(function (item) {
                        const id = item.id,
                            title = item.title,
                            description = item.description,
                            start_date = item.start_date,
                            price = item.price,
                            duration = item.duration,
                            icon = `${HOST}${item.icon}`;

                        courses.innerHTML += `
                            <div class="course_item">
                                <div class="course_item__info">
                                    <h3 class="title title__course">${title}</h3>
                                    <p class="course_item__text">${description}</p>
                                    <a href="" class="main_page__button main_page__button-info">Перейти к курсу</a>
                                    <div class="course_item__text">
                                        <span>Старт: ${start_date}</span>
                                        <span>Продолжительность: ${duration}</span>
                                    </div>
                                </div>
                                <img src="${icon}" alt="${title}">
                            </div>`
                    });
                }).catch((err) => {
                    console.log("AXIOS: " + err);
                    courses.innerHTML += `<h1>Ошибка загрузки с сервера, возможно проблема с CORS</h1>`
                });
            } catch (err) {
                console.log("AXIOS: " + err);
            }
        }
    }
    getCoursesList();
});

