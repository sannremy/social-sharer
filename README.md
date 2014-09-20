Social Sharer Web Component
===========================

A basic Social Sharer Web component using [Polymer](https://www.polymer-project.org/).

Live demo
---------

![3 different styles of <social-sharer>](http://i.imgur.com/lAqhBr1.png "3 different styles of <social-sharer>")

See a [live demo](http://srchea.com/apps/web-component-social-sharer/) on [http://srchea.com/apps/web-component-social-sharer/](http://srchea.com/apps/web-component-social-sharer/)

Usage
-----

First, import social-sharer package in `<head>`:

```html
<!-- import Web components and Polymer -->
<script src="components/platform/platform.js"></script>
<link rel="import" href="components/social-sharer/social-sharer.html">
```

Then, you can place the Web component wherever you want :)

```html
<social-sharer show="twitter googleplus facebook"></social-sharer>
```

Parameters
----------

`show` (string) a list of social sharers (separated by a space)

Dependancies
------------

 * Polymer: https://github.com/polymer/polymer
 * Platform: https://github.com/polymer/platform

