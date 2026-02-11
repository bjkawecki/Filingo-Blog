---
layout: default
title: Start
pagination:
  enabled: true
  sort_field: date
  sort_reverse: true
---

<header class="home-intro post-list-wrapper">
  <h2 class="home-intro__heading">{{ site.data[site.active_lang].strings.home.welcome }}</h2>
  <p class="home-intro__text">{{ site.data[site.active_lang].strings.home.welcome_text }}</p>
</header>

<div class="post-list-wrapper">
  <ul class="post-list">
    {% for post in paginator.posts %}
    <li>
      <a href="{{ post.url | relative_url }}" class="post-card card">
        <p class="post-card__meta">
          {% if site.active_lang == "en" %}{{ post.date | date: "%b %d, %Y" }}{% else %}{{ post.date | date: "%d.%m.%Y" }}{% endif %}{% if post.category %} · {{ post.category }}{% endif %}
        </p>
        <h2 class="post-card__title">{{ post.title }}</h2>
        <p class="post-card__description">{{ post.excerpt | strip_html | normalize_whitespace }}</p>
      </a>
    </li>
    {% endfor %}
  </ul>
</div>

{% if paginator.total_pages > 1 %}
{% assign s = site.data[site.active_lang].strings.pagination %}
<nav class="pagination post-list-wrapper" aria-label="{{ s.aria_label }}">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination__btn" aria-label="{{ s.newer_posts }}">
      {% include icons/arrow-left.html %}
    </a>
  {% endif %}
  <span class="pagination__info">{{ s.page }} {{ paginator.page }} {{ s.of }} {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="pagination__btn" aria-label="{{ s.older_posts }}">
      {% include icons/arrow-right.html %}
    </a>
  {% endif %}
</nav>
{% endif %}
