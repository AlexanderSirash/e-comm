"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var search = document.querySelector('.js-header-search');
  var searchInput = document.querySelector('.js-header-search__input');
  search.addEventListener('click', function (e) {
    handleSearchAction(e, search, searchInput);
  });
  document.addEventListener('keydown', function (e) {
    handleSearchKeyActions(e, search, searchInput);
  });
});

function handleSearchAction(e, searchEl, searchInput) {
  e.preventDefault();

  if (!e.target.classList.contains('js-header-search__control')) {
    return;
  }

  if (searchEl.classList.contains('js-expanded')) {
    if (!searchInput.value) {
      searchEl.classList.remove('js-expanded');
    } else {
      window.location.href = 'category-all.html';
    }
  } else {
    searchEl.classList.add('js-expanded');
    setTimeout(function () {
      searchInput.focus();
    }, 1000);
  }
}

function handleSearchKeyActions(e, searchEl, searchInput) {
  if (e.key === 'Escape' || e.key === 'Esc') {
    searchInput.value = '';
    searchEl.classList.remove('js-expanded');
  }
}