'use strict';

function ToggleLessonsList() {
    const triangleToggle = document.getElementById('triangle_toggle'),
        triangle = document.getElementById('triangle'),
        lessonsContainer = document.querySelector('.lessons_container'),
        lessonTitle = document.getElementById('lessons_title'),
        lessonsInfoBlock = document.getElementById('lessons_info_block');

    try {
        triangleToggle.addEventListener('click', (e) => {
            e.preventDefault();
            if (triangle.style.transform === 'rotate(180deg)') {
                triangle.style.transform = 'rotate(0deg)';
                lessonsContainer.style.flexDirection = 'column';
                lessonTitle.style.order = '-2';
                lessonsInfoBlock.style.order = '-1'
            } else {
                triangle.style.transform = 'rotate(180deg)';
                lessonsContainer.style.flexDirection = 'column-reverse';
                lessonTitle.style.order = '2';
                lessonsInfoBlock.style.order = '1'
            }
        })
    } catch (e) {

    }

}

ToggleLessonsList();
