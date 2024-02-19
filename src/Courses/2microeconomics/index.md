---
tags: index
title: Intermediate Microeconomics
layout: page.njk
tag: microeconomics
color: violet
show: true
---
<ul class="relative [&_li]:bg-[color:var(--c-2)] hover:[&_li]:bg-[color:var(--c-1)] [&_li]:rounded-md [&_li]:flex-auto hover:[&_li]:shadow-lg grid lg:grid-cols-3 grid-cols-1 gap-4 items-center flex p-8 w-full">
{% for model in collections.microeconomics %}{% if model.data.show %}
<li class="relative group">
<img src="{{ model.data.thumbnail }}" alt="{{ model.data.title }}" class="w-full h-64 object-cover rounded-md transform transition-all duration-500" />
<div class="shadow-md absolute inset-0 bg-gradient-to-t from-10% group-hover:from-10% backdrop-blur-sm from-violet-300/70 to-slate-100/10 p-4 rounded-md transition-colors transition-all duration-1000">
<h2 class="group-hover:translate-y-56 transition duration-300
absolute z-20 w-full left-0 top-0 text-[color:var(--c-2)] font-extralight p-2 rounded-md bg-[color:var(--c-3)] group-hover:bg-[color:var(--c-4)] md:text-md text-xs transition-colors duration-200 group-hover:text-[color:var(--c-2)] font-semibold shadow-sm transition-transform duration-400">{{ model.data.title }}</h2>
<a href="{{ model.url }}" class="shadow-[inset_-1px_-1px_0px_rgba(255,255,255,0.3),inset_1px_1px_0px_rgba(150,150,150,0.9)]
absolute z-10 inset-0 bg-gradient-to-b opacity-90 from-[color:var(--c-3)] to-[color:var(--c-4)] rounded-md group-hover:opacity-0 transition duration-400 delay-200"></a>
</div>
</li>
{% endif %}{% endfor %}
</ul>
