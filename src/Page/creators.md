---
title: Creators
icon: fas fa-user-friends
tags: pages
layout: page.njk
show: true
---
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-[4rem] p-4">{% for creator in collections.creators %}{% if creator.data.show %}
    <div class="group backdrop-blur-sm bg-[color:var(--c-2)] rounded-lg shadow-lg shadow-violet-500/50 flex flex-col items-center justify-between relative">
        <div class="relative rounded-full h-20 w-20 -mt-10 md:h-24 md:w-24 md:-mt-12 shadow-lg
        group-hover:translate-y-4 transition duration-[400ms] ease-in-out">
            <img src="{{creator.data.thumbnail}}" class="absolute rounded-3xl h-full w-full ring-2 ring-[color:var(--c-3)]" alt="{{creator.data.name}}" />
            <div class="absolute rounded-3xl group-hover:opacity-0 group-hover:shadow-md opacity-50 h-full w-full bg-[color:var(--c-1)] transition duration-[400ms] shadow-lg"></div>
        </div>
        <h1 class="bg-clip-text text-transparent bg-gradient-to-t from-violet-900 to-violet-300 drop-shadow-0_1px_1px_rgba(0,0,0,0.75) text-xl md:text-2xl lg:text-3xl m-4 p-4 lg:p-6 xl:p-8 text-center">{{creator.data.name}}
<div class="h-[2px] transition-all duration-[1000ms] bg-gradient-to-r from-transparent md:group-hover:opacity-100 md:opacity-0 via-[color:var(--c-3)] to-transparent inset-0"></div>
</h1>
        <a href="{{creator.url}}" class="w-full text-md md:text-lg bg-violet-900 text-white py-1 px-3 md:py-2 md:px-8 text-center rounded-b-lg border-t-2 border-violet-300 group-hover:bg-violet-600 transition duration-300 ease-in-out">Learn more</a>
    </div>    {%endif%}{%endfor%}
</div>
