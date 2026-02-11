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
      <article class="post-card card">
        <p class="post-card__meta">
          {{ post.date | date: "%d.%m.%Y" }}{% if post.category %} · {{ post.category }}{% endif %}
        </p>
        <h2 class="post-card__title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <p class="post-card__description">{{ post.excerpt | strip_html | normalize_whitespace }}</p>
      </article>
    </li>
    {% endfor %}
  </ul>
</div>

{% if paginator.total_pages > 1 %}
<nav class="pagination post-list-wrapper" aria-label="Seiten">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">← Neuere Beiträge</a>
  {% endif %}
  <span>Seite {{ paginator.page }} von {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}">Ältere Beiträge →</a>
  {% endif %}
</nav>
{% endif %}
