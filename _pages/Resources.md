---
title: "Resources"
layout: textlay
excerpt: "UT IIS Lab -- Resources"
sitemap: true
permalink: /resources/
---

# Resources

Our lab develops and releases datasets, models, and tools to support research in Natural Language Processing, Information Retrieval, and Speech Processing, with a particular focus on Persian and low-resource languages.

---

## Datasets

{% for dataset in site.data.resources.datasets %}
### {{ dataset.name }}
**{{ dataset.title }}**

{{ dataset.description }}

{% if dataset.paper %}
- **Paper:** {% if dataset.paper contains 'http' %}[Link]({{ dataset.paper }}){% else %}{{ dataset.paper }}{% endif %}
{% endif %}
{% if dataset.dataset %}
- **Dataset:** [Download]({{ dataset.dataset }})
{% endif %}
{% if dataset.demo %}
- **Demo:** [Try it]({{ dataset.demo }})
{% endif %}
- **Year:** {{ dataset.year }}

---

{% endfor %}

## Models

{% for model in site.data.resources.models %}
### {{ model.name }}
**{{ model.title }}**

{{ model.description }}

{% if model.paper %}
- **Paper:** [Link]({{ model.paper }})
{% endif %}
{% if model.code %}
- **Code:** [GitHub]({{ model.code }})
{% endif %}
- **Year:** {{ model.year }}

---

{% endfor %}

## Tools & Code

Many of our projects include open-source code repositories. Visit our [GitHub organization](https://github.com/ut-iislab) for implementation details and tools.

---

## How to Cite

If you use our resources in your research, please cite the relevant papers. See individual resource pages for specific citation information.

---
