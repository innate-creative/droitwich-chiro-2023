# Chiro Template

A template made to be deployed with [CloudCannonCMS](https://cloudcannon.com)

## Dependencies

This boilerplate uses the following dependencies & plugins:

- Jekyll (~>4.1)
- TailwindCSS (2.1.1)
- jekyll-sitemap
- jekyll-feed
- jekyll_picture_tag
- jekyll-postcss
- jekyll-purgecss
  
## Serving locally

```
$ npm i
$ bundle install
$ bundle exec jekyll s -l --trace
```
  
## Using the `settings.yml` file

The `settings.yml` file (a.k.a. **data** file)allows users to set up site-wide key values using the CloudCannon interface. It also provides the ability to inject additional scripts into `<head>` and `<body>` as well as custom `CSS` if wanted.

The data file is set up to optimize the site build and content provided: social icons can be rendered as chat bubble icons; address, phone number and else will be output throughout the project. This is done by referencing the file using Liquid. An example:

`{{site.data.settings.general.address}}` will output the address provided in the data file.

Another example:

```
{% for menu in site.data.settings.navigation.menus %}
  {% unless menu.is_dropdown %}
  <a href="{{menu.url}}" class="nav-bar-menu--item {% if menu.style_as_button %}btn{% endif %}">Menu</a>
    {% else %}
    <button class="nav-bar-menu--item dropdown {% if menu.style_as_button %}btn{% endif %}">
      Dropdown
      <div class="dropdown-menu">
      {% for submenu in menu.submenus %}
        <a href="#" class="dropdown-menu--item">Submenu</a>
      {% endfor %}
      </div>
    </button>
  {% endunless %}
{% endfor %}
```
