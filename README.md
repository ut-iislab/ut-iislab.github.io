# UT IIS Lab Website
This is the website of our academic research group at the [University of Tehran](https://ut.ac.ir/en). You can access our research group at [ut-iislab.github.io](https://ut-iislab.github.io/)

<p align=center>
    <img src="./images/logopic/ut_logo.png" width="25%" height="25%" alt="University of Tehran Logo"/>
</p>

The website template is powered by [Jekyll](https://jekyllrb.com/) and is easy to use. You don't need much front-end knowledge to maintain the website. You can update information by only writing `markdown` and `yml` files.

## How to Maintain the Website

### Update Locally
If you want to make changes to the website and test it locally first, you need to install the necessary environment. 

First, clone this repository: 
```bash
git clone https://github.com/ut-iislab/ut-iislab.github.io.git
cd ut-iislab.github.io
```

Then checkout to the `dev` branch. We recommend making changes and testing on this branch before merging to the `main` branch:
```bash
git checkout dev
```

This website is powered by [Jekyll](https://jekyllrb.com/). Install Jekyll and its prerequisites (e.g., Ruby, GEM) by following the [documentation](https://jekyllrb.com/docs/). 

Then, in the project folder, run: 
```bash
bundle exec jekyll serve
```

Open your browser and review the website at: http://localhost:4000. 

When the server is running, make your changes and refresh the website to review them.

Once you have finished updating, commit your changes and push them to Github on the `dev` branch.

Raise a **pull request** and merge from `dev` to `main`. Github [actions](https://github.com/ut-iislab/ut-iislab.github.io/actions) will handle the deployment. Now you can review the live site at [ut-iislab.github.io](https://ut-iislab.github.io/).

### Update Directly
If you don't want to install the local environment, you can directly make changes by updating the **.md** or **.yml** files (see below), pushing the commits to Github, and reviewing the changes online. Note that this will directly update the live site.

## Where to Maintain the Website

### Update Information
If you only want to update information (e.g., add recent news, add new publications) without modifying the website structure, you can update relevant information by following the table below.

| What to update             | Where to update             |
| :------------------------- | :-------------------------- |
| home page text & images    | `_pages/home.md`            |
| news                       | `_data/news.yml`            |
| team member info - faculty | `_data/faculty_members.yml` |
| team member info - phd     | `_data/phd_students.yml`    |
| team member info - master  | `_data/master_students.yml` |
| team member info - alumni  | `_data/alumni_members.yml`  |
| publications               | `_data/publist.yml`         |
| projects                   | `_data/projects.yml`        |
| vacancies                  | `_pages/openings.md`        |

### Update Website Structure
If you want to change the website structure (e.g., rearrange image position, team member display, etc.), you can go through the following files and update them.

| What to update | Where to update                                  |
| :------------- | :----------------------------------------------- |
| home page      | `_layouts/default.html`, `_layouts/homelay.html` |
| news           | `_pages/allnews.md`, `_includes/news.html`       |
| team           | `_pages/team.md`                                 |
| publications   | `_pages/publications.md`                         |
| projects       | `_pages/projects.md`                             |
| header         | `_includes/header.html`                          |
| footer         | `_includes/footer.html`                          |

## About the Lab

The Intelligent Information Systems Lab is led by Associate Professor Azadeh Shakery at the University of Tehran. Our research focuses on:
- Natural Language Processing
- Information Retrieval
- Machine Learning
- Text Mining

For more information about our research and publications, please visit our website.

## Acknowledgement
This website template is adapted from [Allan Lab](http://www.allanlab.org/aboutwebsite.html). 
Thanks for open-sourcing the template.
