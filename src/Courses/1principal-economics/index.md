---
tags: index
title: Principals of Economics
layout: page.njk
tag: principal-economics
color: cyan
show: true
---
<ul class="[&_li]:bg-{{color}}-600 hover:[&_li]:bg-{{color}}-700 [&_li]:rounded-md hover:[&_li]:shadow-lg hover:[&_li]:shadow-{{color}}-500/50 grid grid-cols-1 md:p-8 p-4 gap-2 w-full">
               {% for model in collections.principal-economics %}{% if model.data.show %}
            <li class="relative group h-64">
                <img src="{{ model.data.thumbnail }}" alt="{{ model.data.title }}" class="w-full h-full object-cover rounded-md transform transition-all duration-500" />
                <div class="shadow-md absolute inset-0 bg-gradient-to-t from-50% group-hover:from-0% from-{{color}}-800/40 to-transparent p-4 rounded-md transition-colors transition-all duration-1000">
                <h2 class="text-{{color}}-50 font-extralight p-2 rounded-md bg-{{color}}-600 saturate-200 group-hover:saturate-100 group-hover:bg-{{color}}-700 md:text-md text-xs transition-colors duration-200 group-hover:text-{{color}}-50 transition-transform duration-400">{{ model.data.title }}</h2>
                </div>
                <a href="{{ model.url }}" class="absolute inset-0"></a>
              </li>
            
            {% endif %}{% endfor %}
</ul>
