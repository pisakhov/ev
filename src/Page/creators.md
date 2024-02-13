---
title: Creators
icon: fas fa-user-friends
tags: pages
layout: page.njk
show: true
---

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-[2rem] p-2">{% for creator in collections.creators %}{% if creator.data.show %}
    <div class="group backdrop-blur-sm bg-white/60 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 flex flex-col items-center justify-between relative">
        <div class="relative rounded-full h-12 w-12 -mt-6 md:h-22 md:w-22 md:-mt-22 lg:h-24 lg:w-24 lg:-mt-12 shadow-lg">
            <img src="{{creator.data.thumbnail}}" class="absolute rounded-full h-full w-full" alt="{{creator.data.name}}" />
            <div class="absolute rounded-full opacity-30 h-full w-full bg-violet-900"></div>
        </div>
        <h1 class="bg-clip-text text-transparent bg-gradient-to-t from-violet-900 to-violet-300 drop-shadow-0_1px_1px_rgba(0,0,0,0.75) text-xl md:text-2xl lg:text-3xl m-4 p-4 lg:p-6 xl:p-8 text-center">{{creator.data.name}}</h1>
        <a href="{{creator.url}}" class="w-full text-md md:text-lg bg-violet-900 text-white py-1 px-3 md:py-2 md:px-8 text-center rounded-b-lg border-t-2 border-violet-300 group-hover:bg-violet-600 transition duration-300 ease-in-out">Learn more</a>
    </div>    {%endif%}{%endfor%}
</div>
