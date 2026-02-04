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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.resource-card {
  border-left: 3px solid #2c3e50;
  padding: 1.5rem;
  background: #f8f9fa;
  transition: transform 0.2s;
}

.resource-card:hover {
  transform: translateX(5px);
  border-left-color: #3498db;
}

.resource-name {
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.resource-title {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.resource-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.resource-link {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-decoration: none;
  color: #2c3e50;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.resource-link:hover {
  background: #3498db;
  color: white;
  border-color: #3498db;
  text-decoration: none;
}

.resource-year {
  color: #999;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.section-header {
  border-bottom: 2px solid #2c3e50;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 3rem;
}

.intro-text {
  color: #555;
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 2rem 0;
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

<h2 class="section-header">Datasets</h2>

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
          <span class="resource-link">📄 {{ dataset.paper }}</span>
        {% endif %}
      {% endif %}
      {% if dataset.dataset %}
        <a href="{{ dataset.dataset }}" class="resource-link" target="_blank">💾 Dataset</a>
      {% endif %}
      {% if dataset.demo %}
        <a href="{{ dataset.demo }}" class="resource-link" target="_blank">🚀 Demo</a>
      {% endif %}
    </div>
    
    <div class="resource-year">{{ dataset.year }}</div>
  </div>
{% endfor %}
</div>

<h2 class="section-header">Models</h2>

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
    </div>
    
    <div class="resource-year">{{ model.year }}</div>
  </div>
{% endfor %}
</div>

<h2 class="section-header">Tools & Code</h2>

<div class="intro-text">
Many of our projects include open-source code repositories. Visit our <a href="https://github.com/ut-iislab" target="_blank">GitHub organization</a> for implementation details and tools.
</div>

<h2 class="section-header">How to Cite</h2>

<div class="intro-text">
If you use our resources in your research, please cite the relevant papers. See individual resource pages for specific citation information.
</div>