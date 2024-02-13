---
tags: index
title: Principals of Economics
layout: page.njk
tag: principal-economics
color: cyan
show: true
---
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">             {% for model in collections.principal-economics %}{% if model.data.show %}
                <div class="group lg:h-auto md:h-auto h-auto backdrop-blur-sm bg-white/60 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 flex flex-col justify-between">
                <h1 class="bg-clip-text text-transparent bg-gradient-to-t from-violet-900 to-violet-300 drop-shadow-0_1px_1px_rgba(0,0,0,0.75) text-sm md:text-md lg:text-lg my-4 mx-1 py-4 lg:py-6 xl:p-8 text-center truncate">{{ model.data.title }}</h1>
                <a href="{{ model.url }}" class="text-md md:text-lg bg-violet-900 text-white py-1 px-3 md:py-2 md:px-8 text-center rounded-b-lg border-t-2 border-violet-300 group-hover:bg-violet-600 transition duration-300 ease-in-out">Learn more</a>
                </div>              {% endif %}{% endfor %}
</div>
