---
tags: index
title: Principles of Economics
layout: page.njk
tag: principles-of-economics
color: cyan
show: true
---
<ul class="relative [&_li]:bg-[color:var(--c-2)] hover:[&_li]:bg-[color:var(--c-1)] [&_li]:rounded-md [&_li]:flex-auto hover:[&_li]:shadow-lg grid lg:grid-cols-1 grid-cols-1 gap-4 items-center flex p-8 w-full">
{% for model in collections.principal-economics %}{% if model.data.show %}
<li class="w-full accordion-item">
<div class="accordion-header bg-[color:var(--c-2)] hover:bg-[color:var(--c-1)] rounded-md flex flex-col">
<div class="group accordion-title text-[color:var(--c-3)] hover:text-[color:var(--c-2)] font-semibold text-[clamp(0.875rem,2vw,1rem)] p-2 transition duration-200 flex justify-between items-center cursor-pointer">
<span class="model-title group-hover:text-[color:var(--c-2)]">{{ model.data.title }}</span>
<i class="accordion-arrow fas fa-chevron-down text-[color:var(--c-3)] group-hover:text-[color:var(--c-2)]"></i></div>
<div class="accordion-content shadow-md bg-gradient-to-t from-10% backdrop-blur-sm from-violet-300/10 to-slate-100/10 p-2 rounded-md transition-colors transition-all duration-1000 hidden">
<p class="translate-y-0 opacity-100 text-[color:var(--c-2)] h-full relative w-full line-clamp-4 p-1 text-sm">{{ model.data.description }}</p>
<div class="relative group">
<img src="{{ model.data.thumbnail }}" alt="{{ model.data.title }}" class="opacity-100 w-full md:h-24 h-12 object-cover rounded-md transform transition-all duration-500 group-hover:blur  group-hover:scale-[0.9]">
<a href="{{ model.url }}" class="ring-2 ring-[color:var(--c-1)] py-2 px-4 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-400 delay-200 text-[color:var(--c-1)] opacity-0 group-hover:opacity-100 hover:bg-[color:var(--c-1)] hover:text-[color:var(--c-2)]">Open</a>
</div>
</div>
</div>
</li>
{% endif %}{% endfor %}
</ul>
<script>
// JavaScript code for the accordion functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    let openAccordion = null;
    accordionHeaders.forEach((header) => {
        const title = header.querySelector('.accordion-title');
        const modelTitle = header.querySelector('.model-title');
        const arrow = header.querySelector('.accordion-arrow');
        title.addEventListener('click', () => {
            const content = header.querySelector('.accordion-content');
            closeAllAccordions();
            content.classList.toggle('hidden');
            arrow.classList.toggle('fa-chevron-down');
            arrow.classList.toggle('fa-chevron-up');
            if (!content.classList.contains('hidden')) {
                header.classList.add('bg-[color:var(--c-1)]');
                header.classList.remove('bg-[color:var(--c-2)]');
                modelTitle.classList.remove('text-[color:var(--c-3)]');
                modelTitle.classList.add('text-[color:var(--c-2)]');
                arrow.classList.remove('text-[color:var(--c-3)]');
                arrow.classList.add('text-[color:var(--c-2)]');
                openAccordion = header;
            } else {
                header.classList.remove('bg-[color:var(--c-1)]');
                header.classList.add('bg-[color:var(--c-2)]');
                modelTitle.classList.remove('text-[color:var(--c-2)]');
                modelTitle.classList.add('text-[color:var(--c-3)]');
                arrow.classList.remove('text-[color:var(--c-2)]');
                arrow.classList.add('text-[color:var(--c-3)]');
                openAccordion = null;
            }
        });
    });
    function closeAllAccordions() {
        const accordionContents = document.querySelectorAll('.accordion-content');
        const accordionArrows = document.querySelectorAll('.accordion-arrow');
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        const modelTitles = document.querySelectorAll('.model-title');
        accordionContents.forEach((content) => {
            content.classList.add('hidden');
        });
        accordionArrows.forEach((arrow) => {
            arrow.classList.remove('fa-chevron-up');
            arrow.classList.add('fa-chevron-down');
            arrow.classList.remove('text-[color:var(--c-2)]');
            arrow.classList.add('text-[color:var(--c-3)]');
        });
        accordionHeaders.forEach((header) => {
            header.classList.remove('bg-[color:var(--c-1)]');
            header.classList.add('bg-[color:var(--c-2)]');
        });
        modelTitles.forEach((title) => {
            title.classList.remove('text-[color:var(--c-2)]');
            title.classList.add('text-[color:var(--c-3)]');
        });
    }
});
</script>
