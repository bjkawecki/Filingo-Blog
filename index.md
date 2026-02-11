---
layout: default
title: Start
pagination:
  enabled: true
---

# {{ site.title }}

{{ site.description }}

<ul class="post-list">
  {% for post in paginator.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="article__meta"> — {{ post.date | date: "%d.%m.%Y" }}{% if post.category %} · {{ post.category }}{% endif %}</span>
  </li>
  {% endfor %}
</ul>

{% if paginator.total_pages > 1 %}
<nav class="pagination" aria-label="Seiten">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}">← Neuere Beiträge</a>
  {% endif %}
  <span>Seite {{ paginator.page }} von {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}">Ältere Beiträge →</a>
  {% endif %}
</nav>
{% endif %}
