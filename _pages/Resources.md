---
title: "Resources"
layout: textlay
excerpt: "UT IIS Lab -- Resources"
sitemap: false
permalink: /resources/
---

<style>
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.resource-card {
  border-left: 3px solid #002147;
  padding: 20px;
  background: #f8f9fa;
  transition: transform 0.2s, box-shadow 0.2s;
}

.resource-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.resource-name {
  font-size: 1.3em;
  font-weight: 600;
  color: #002147;
  margin-bottom: 8px;
}

.resource-title {
  font-size: 0.95em;
  color: #666;
  margin-bottom: 12px;
  font-style: italic;
}

.resource-description {
  font-size: 0.9em;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #444;
}

.resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 15px;
}

.resource-link {
  display: inline-block;
  padding: 6px 14px;
  background: #002147;
  color: white !important;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.85em;
  transition: background 0.2s;
}

.resource-link:hover {
  background: #003d82;
  color: white !important;
}

.resource-year {
  display: inline-block;
  padding: 4px 10px;
  background: #e9ecef;
  color: #495057;
  border-radius: 3px;
  font-size: 0.85em;
  font-weight: 500;
}

.section-header {
  font-size: 2em;
  font-weight: 600;
  color: #002147;
  margin: 40px 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #002147;
}

.intro-text {
  font-size: 1.05em;
  line-height: 1.7;
  color: #555;
  margin: 20px 0 40px 0;
  max-width: 900px;
}

@media (max-width: 768px) {
  .resource-grid {
    grid-template-columns: 1fr;
  }
}
</style>

# Resources

<div class="intro-text">
Our lab develops and releases datasets, models, and tools to support research in Natural Language Processing, Information Retrieval, and Speech Processing, with a particular focus on Persian and low-resource languages.
</div>

<div class="section-header">Datasets</div>

<div class="resource-grid">
{% for dataset in site.data.resources.datasets %}
  <div class="resource-card">
    <div class="resource-name">{{ dataset.name }}</div>
    <div class="resource-title">{{ dataset.title }}</div>
    <div class="resource-description">{{ dataset.description }}</div>
    <div class="resource-links">
      {% if dataset.paper %}
        {% if dataset.paper contains 'http' %}
          <a href="{{ dataset.paper }}" class="resource-link" target="_blank">📄 Paper</a>
        {% else %}
          <span class="resource-link" style="background: #6c757d; cursor: default;">📄 {{ dataset.paper }}</span>
        {% endif %}
      {% endif %}
      {% if dataset.dataset %}
        <a href="{{ dataset.dataset }}" class="resource-link" target="_blank">💾 Dataset</a>
      {% endif %}
      {% if dataset.demo %}
        <a href="{{ dataset.demo }}" class="resource-link" target="_blank">🚀 Demo</a>
      {% endif %}
      <span class="resource-year">{{ dataset.year }}</span>
    </div>
  </div>
{% endfor %}
</div>

<div class="section-header">Models</div>

<div class="resource-grid">
{% for model in site.data.resources.models %}
  <div class="resource-card">
    <div class="resource-name">{{ model.name }}</div>
    <div class="resource-title">{{ model.title }}</div>
    <div class="resource-description">{{ model.description }}</div>
    <div class="resource-links">
      {% if model.paper %}
        <a href="{{ model.paper }}" class="resource-link" target="_blank">📄 Paper</a>
      {% endif %}
      {% if model.code %}
        <a href="{{ model.code }}" class="resource-link" target="_blank">💻 Code</a>
      {% endif %}
      <span class="resource-year">{{ model.year }}</span>
    </div>
  </div>
{% endfor %}
</div>

<div class="section-header">Tools & Code</div>

<div class="intro-text">
Many of our projects include open-source code repositories. Visit our <a href="https://github.com/ut-iislab" target="_blank" style="color: #002147; font-weight: 500;">GitHub organization</a> for implementation details and tools.
</div>

---
