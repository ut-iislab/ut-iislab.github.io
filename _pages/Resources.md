---
title: "Resources"
layout: textlay
excerpt: "UT IIS Lab -- Resources"
sitemap: false
permalink: /resources/
---

<style>
.resource-card {
  background: #f8f9fa;
  border-left: 4px solid #0066cc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.resource-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.resource-title {
  color: #0066cc;
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 8px;
}

.resource-subtitle {
  color: #333;
  font-size: 1.1em;
  margin-bottom: 12px;
  font-style: italic;
}

.resource-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.resource-link {
  display: inline-block;
  padding: 6px 14px;
  background: #0066cc;
  color: white !important;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9em;
  transition: background 0.2s;
}

.resource-link:hover {
  background: #0052a3;
  color: white !important;
  text-decoration: none;
}

.resource-year {
  display: inline-block;
  padding: 4px 10px;
  background: #28a745;
  color: white;
  border-radius: 3px;
  font-size: 0.85em;
  font-weight: bold;
}

.section-header {
  color: #0066cc;
  border-bottom: 3px solid #0066cc;
  padding-bottom: 10px;
  margin-top: 40px;
  margin-bottom: 30px;
}

.intro-text {
  font-size: 1.1em;
  color: #555;
  line-height: 1.8;
  margin-bottom: 40px;
  padding: 20px;
  background: #f0f7ff;
  border-radius: 5px;
}

.two-column {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}

.contact-box {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 20px;
  margin-top: 30px;
  border-radius: 5px;
}

.github-section {
  background: #e7f3ff;
  border-left: 4px solid #0366d6;
  padding: 20px;
  margin: 30px 0;
  border-radius: 5px;
}
</style>

# Resources

<div class="intro-text">
Our lab develops and releases datasets, models, and tools to support research in Natural Language Processing, Information Retrieval, and Speech Processing, with a particular focus on Persian and low-resource languages.
</div>

<h2 class="section-header">📊 Datasets</h2>

<div class="two-column">
{% for dataset in site.data.resources.datasets %}
<div class="resource-card">
  <div class="resource-title">{{ dataset.name }}</div>
  <div class="resource-subtitle">{{ dataset.title }}</div>
  <div class="resource-description">{{ dataset.description }}</div>
  
  <div class="resource-links">
    {% if dataset.paper %}
      {% if dataset.paper contains 'http' %}
        <a href="{{ dataset.paper }}" class="resource-link" target="_blank">📄 Paper</a>
      {% else %}
        <span class="resource-link" style="background: #6c757d;">📄 {{ dataset.paper }}</span>
      {% endif %}
    {% endif %}
    {% if dataset.dataset %}
      <a href="{{ dataset.dataset }}" class="resource-link" target="_blank">💾 Dataset</a>
    {% endif %}
    {% if dataset.demo %}
      <a href="{{ dataset.demo }}" class="resource-link" target="_blank">🎮 Demo</a>
    {% endif %}
    <span class="resource-year">{{ dataset.year }}</span>
  </div>
</div>
{% endfor %}
</div>

<h2 class="section-header">🤖 Models</h2>

<div class="two-column">
{% for model in site.data.resources.models %}
<div class="resource-card">
  <div class="resource-title">{{ model.name }}</div>
  <div class="resource-subtitle">{{ model.title }}</div>
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

<h2 class="section-header">🛠️ Tools & Code</h2>

<div class="github-section">
  <strong>GitHub Organization:</strong> Many of our projects include open-source code repositories. Visit our <a href="https://github.com/ut-iislab" target="_blank">GitHub organization</a> for implementation details, tools, and reproducible research code.
</div>

<h2 class="section-header">📝 How to Cite</h2>

If you use our resources in your research, please cite the relevant papers. See individual resource pages for specific citation information.
