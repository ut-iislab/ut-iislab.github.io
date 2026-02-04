---
title: "UT IIS - Team"
layout: gridlay
excerpt: "UT IIS: Team members"
sitemap: true
permalink: /team/
---

# Group Members


<!-- Jump to [faculty](#faculty), [PhD students](#phd-students), [master students](#master-(research)-students), [alumni](#alumni). -->
 <!-- [administrative support](#administrative-support), [lab visitors](#lab-visitors). -->

## Faculty
{% assign number_printed = 0 %}
{% for member in site.data.faculty_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="avatar_img" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>
    {{ member.info }} 
    <br>
    {{ member.affiliate }} 
    <br>
    {{ member.role }} 
    <!-- email: <{{ member.email }}> -->
  </i>
  <br>
  {% if member.url.personal_site != nil %}
  <a href="{{ member.url.personal_site }}" target="_blank"><i class="fa-solid fa-house"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.google_scholar != nil %}
  <a href="{{ member.url.google_scholar }}" target="_blank"><i class="fa-brands fa-google"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.github != nil %}
  <a href="{{ member.url.github }}" target="_blank"><i class="fa-brands fa-github"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.linkedin != nil %}
  <a href="{{ member.url.linkedin }}" target="_blank"><i class="fa-brands fa-linkedin"></i></a> &nbsp;
  {%- endif -%}
  <!-- <i class="fa fa-envelope"></i> -->
  
  <!-- <ul style="overflow: hidden">
  </ul> -->
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


<br>

## Postdoc Researchers
{% assign number_printed = 0 %}
{% for member in site.data.postdoc_students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="avatar_img"  style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>
    since {{ member.duration }} 
    <br>
    topic: {{ member.topic }}
    <!-- <br>
    co-supervised with {{ member.cosupervision }} -->
  </i>
  <br>
  {% if member.url.personal_site != nil %}
  <a href="{{ member.url.personal_site }}" target="_blank"><i class="fa-solid fa-house"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.google_scholar != nil %}
  <a href="{{ member.url.google_scholar }}" target="_blank"><i class="fa-brands fa-google"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.github != nil %}
  <a href="{{ member.url.github }}" target="_blank"><i class="fa-brands fa-github"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.linkedin != nil %}
  <a href="{{ member.url.linkedin }}" target="_blank"><i class="fa-brands fa-linkedin"></i></a> &nbsp;
  {%- endif -%}
  <!-- <i class="fa fa-envelope"></i> -->
  <!-- <ul style="overflow: hidden">
  </ul> -->

</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

 
<br>

## PhD Students
{% assign number_printed = 0 %}
{% for member in site.data.phd_students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="avatar_img"  style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>
    since {{ member.duration }} 
    <br>
    topic: {{ member.topic }}
    <!-- <br>
    co-supervised with {{ member.cosupervision }} -->
  </i>
  <br>
  {% if member.url.personal_site != nil %}
  <a href="{{ member.url.personal_site }}" target="_blank"><i class="fa-solid fa-house"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.google_scholar != nil %}
  <a href="{{ member.url.google_scholar }}" target="_blank"><i class="fa-brands fa-google"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.github != nil %}
  <a href="{{ member.url.github }}" target="_blank"><i class="fa-brands fa-github"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.linkedin != nil %}
  <a href="{{ member.url.linkedin }}" target="_blank"><i class="fa-brands fa-linkedin"></i></a> &nbsp;
  {%- endif -%}
  <!-- <i class="fa fa-envelope"></i> -->
  <!-- <ul style="overflow: hidden">
  </ul> -->

</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<br>

## Master (Research) Students
{% assign number_printed = 0 %}
{% for member in site.data.master_students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="avatar_img"  style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>
    since {{ member.duration }} 
    <br>
    topic: {{ member.topic }}
    <!-- <br>
    co-supervised with {{ member.cosupervision }} -->
  </i>
  <br>
  {% if member.url.personal_site != nil %}
  <a href="{{ member.url.personal_site }}" target="_blank"><i class="fa-solid fa-house"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.google_scholar != nil %}
  <a href="{{ member.url.google_scholar }}" target="_blank"><i class="fa-brands fa-google"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.github != nil %}
  <a href="{{ member.url.github }}" target="_blank"><i class="fa-brands fa-github"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.linkedin != nil %}
  <a href="{{ member.url.linkedin }}" target="_blank"><i class="fa-brands fa-linkedin"></i></a> &nbsp;
  {%- endif -%}
  <!-- <ul style="overflow: hidden">
  </ul> -->

</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<br>

## Bachelor (Honours) Students
{% assign number_printed = 0 %}
{% for member in site.data.bachelor_students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="avatar_img"  style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>
    since {{ member.duration }} 
    <!-- co-supervised with {{ member.cosupervision }} -->
  </i>
  <br>
  {% if member.url.personal_site != nil %}
  <a href="{{ member.url.personal_site }}" target="_blank"><i class="fa-solid fa-house"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.google_scholar != nil %}
  <a href="{{ member.url.google_scholar }}" target="_blank"><i class="fa-brands fa-google"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.github != nil %}
  <a href="{{ member.url.github }}" target="_blank"><i class="fa-brands fa-github"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.linkedin != nil %}
  <a href="{{ member.url.linkedin }}" target="_blank"><i class="fa-brands fa-linkedin"></i></a> &nbsp;
  {%- endif -%}
  <!-- <ul style="overflow: hidden">
  </ul> -->

</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<br>

## Alumni

{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="avatar_img"  style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>
    {{ member.duration }}
    {% if member.current_position != nil and member.current_position != "" %}
    <br>
    Current: {{ member.current_position }}
    {% endif %}
    {% if member.info != nil and member.info != "" %}
    <br>
    {{ member.info }}
    {% endif %}
  </i>
  <br>
  {% if member.url.personal_site != nil %}
  <a href="{{ member.url.personal_site }}" target="_blank"><i class="fa-solid fa-house"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.google_scholar != nil %}
  <a href="{{ member.url.google_scholar }}" target="_blank"><i class="fa-brands fa-google"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.github != nil %}
  <a href="{{ member.url.github }}" target="_blank"><i class="fa-brands fa-github"></i></a> &nbsp;
  {%- endif -%}
  {% if member.url.linkedin != nil %}
  <a href="{{ member.url.linkedin }}" target="_blank"><i class="fa-brands fa-linkedin"></i></a> &nbsp;
  {%- endif -%}
  
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<!-- ## Former visitors, BSc/ MSc students
<div class="row">

<div class="col-sm-4 clearfix">
<h4>Visitors</h4>
{% for member in site.data.alumni_visitors %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Master students</h4>
{% for member in site.data.alumni_msc %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Bachelor Students</h4>
{% for member in site.data.alumni_bsc %}
{{ member.name }}
{% endfor %}
</div>

</div> -->

<br>

<!-- ## Administrative Support
<a href="mailto:Rijsewijk@Physics.LeidenUniv.nl">Ellie van Rijsewijk</a> is helping us (and other groups) with administration. -->
