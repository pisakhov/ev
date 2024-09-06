---
tags: index
title: Intermediate Microeconomics
layout: page.njk
tag: microeconomics
color: violet
show: true
---
<div x-data="{
  searchTerm: '',
  get filteredModels() {
    return this.getFilteredModels();
  },
  getFilteredModels() {
    return Array.from(this.$refs.modelGrid.children).filter(model => {
      if (this.searchTerm === '') return true;
      const title = model.querySelector('h2').textContent.toLowerCase();
      const description = model.querySelector('p').textContent.toLowerCase();
      return title.includes(this.searchTerm.toLowerCase()) || description.includes(this.searchTerm.toLowerCase());
    });
  }
}" x-init="$watch('searchTerm', value => { $nextTick(() => { filteredModels; }) })">
  <!-- Main container -->
  <main class="container px-4 md:px-6 py-8 space-y-8 dark:bg-gray-900">
      <!-- Search bar container -->
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <!-- Search bar -->
          <div class="relative flex items-center w-full max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search models in {{ title }}"
                x-model="searchTerm"
                :placeholder="window.innerWidth < 640 ? 'Search...' : 'Search models in {{ title }}'"
                @resize.window="$el.setAttribute('placeholder', window.innerWidth < 640 ? 'Search...' : 'Search models in {{ title }}')"
                class="w-full pl-12 pr-4 py-3 border-2 border-violet-300 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition duration-300 ease-in-out shadow-sm text-lg"
              >
            <!-- Search icon -->
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="fas fa-search text-violet-400 text-xl"></i>
            </div>
          </div>
      </div>
    <!-- Grid container for models -->
    <div x-ref="modelGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {%- for model in collections[tag] -%}
        {%- if model.data.show -%}
          <!-- Individual model card -->
          <div x-show="searchTerm === '' ||
                       '{{ model.data.title }}'.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       '{{ model.data.description }}'.toLowerCase().includes(searchTerm.toLowerCase())"
            class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:text-white flex flex-col h-full">            <!-- Model thumbnail with magnifying glass overlay -->
                <div class="relative group">
                  <img src="{{ model.data.thumbnail }}" alt="{{ model.data.title }}" class="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:opacity-75">
                  <a href="{{ model.url }}" class="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <i class="fas fa-search-plus text-white text-4xl hidden md:block"></i>
                  </a>
                </div>
            <!-- Model details -->
            <div class="p-4 flex-grow">
              <h2 class="text-lg font-semibold mb-2 line-clamp-2 h-14">{{ model.data.title }}</h2>
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 h-18">{{ model.data.description }}</p>
            </div>
            <!-- Learn More button -->
            <div class="p-4 pt-0 mt-auto">
                <a href="{{ model.url }}" class="inline-block text-center bg-[color:var(--c-1)] text-white text-sm px-3 py-1.5 rounded-md hover:bg-[color:var(--c-3)] transition shadow-sm">
                  Learn More
                </a>
            </div>
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>
    <!-- No results message -->
    <div x-show="filteredModels.length === 0" class="flex flex-col items-center justify-center py-16 px-4">
      <div class="mb-8">
        <i class="fas fa-search text-violet-500 dark:text-violet-300 text-6xl animate-pulse"></i>
      </div>
      <h3 class="text-4xl font-bold text-violet-700 dark:text-violet-300 mb-4 text-center">No results found</h3>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center max-w-lg">We couldn't find any models matching your search. Try different keywords or check your spelling.</p>
      <button @click="searchTerm = ''" class="bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl">
        Clear Search
      </button>
    </div>
  </main>
</div>
