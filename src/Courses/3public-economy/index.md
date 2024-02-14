---
tags: index
title: Public Economy
layout: page.njk
tag: public-economy
color: teal
show: true
---
<ul class="[&_li]:bg-slate-600 hover:[&_li]:bg-slate-700 [&_li]:rounded-md hover:[&_li]:shadow-lg hover:[&_li]:shadow-slate-500/50 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:p-8 p-4 md:gap-4 gap-2 w-full">
{% for model in collections.public-economy %}{% if model.data.show %}
<li class="relative group h-64">
<img src="{{ model.data.thumbnail }}" alt="{{ model.data.title }}" class="w-full h-full object-cover rounded-md transform transition-all duration-500" />
<div class="shadow-md absolute inset-0 bg-gradient-to-t from-50% group-hover:from-0% from-slate-800/40 to-transparent p-4 rounded-md transition-colors transition-all duration-1000">
<h2 class="text-violet-50 font-extralight p-2 rounded-md bg-violet-600 saturate-200 group-hover:saturate-100 group-hover:bg-violet-700 md:text-md text-xs transition-colors duration-200 group-hover:text-violet-50 transition-all duration-1000">{{ model.data.title }}</h2>
</div>
<a href="{{ model.url }}" class="absolute inset-0"></a>
</li>
{% endif %}{% endfor %}
</ul>