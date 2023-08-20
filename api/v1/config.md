---
title: Config API
---

{% capture site_data %}
{
  "title": "{{ site.title }}",
  "logo": "{{ site.logo }}"
}
{% endcapture %}

<pre>{{ site_data | json }}</pre>