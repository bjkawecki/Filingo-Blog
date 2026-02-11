---
layout: default
title: Start
pagination:
  enabled: true
  sort_field: date
  sort_reverse: true
---

# {{ site.title }}

{{ site.description }}

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
<nav class="pagination post-list-wrapper" aria-label="Seiten">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="pagination__btn" aria-label="Neuere Beiträge">
      {% include icons/arrow-left.html %}
    </a>
  {% endif %}
  <span class="pagination__info">Seite {{ paginator.page }} von {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="pagination__btn" aria-label="Ältere Beiträge">
      {% include icons/arrow-right.html %}
    </a>
  {% endif %}
</nav>
{% endif %}
