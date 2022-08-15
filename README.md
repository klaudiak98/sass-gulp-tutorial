# SASS with gulp.js
_SASS with gulp.js - based on YT tutorial: "SASS Tutorial (build your own CSS library)" by The Net Ninja_

Source: [YouTube, The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jxJX7vojNVK-o8ubDZEcNb)

## Run the project
> npm init -y

> npm i gulp gulp-sass sass --save-dev

> npm run gulp

## SASS - notes
**variables**
```
$primary: #326dee;
$secondary: #1ac888;
$base-margin: 0.75rem;

h1 {
    color: $primary;
    margin-bottom: $base-margin;
}

a {
    color: $secondary;
}
```
**partials & @import**

1. create new file: _variables.scss

2. add to main.scss:
```
@import 'variables';
```

**nested rules**

.scss:
```
.card {
    display: block;

    .card-title {
        padding-bottom: $base-padding;
    }

    .card-body {
        font-size: $base-font-size;

        a {
            text-decoration: underline;
        }
    }
}
```

.css:
```
.card {
  display: block;
}
.card .card-title {
  padding-bottom: 0.75rem;
}
.card .card-body {
  font-size: 1rem;
}
.card .card-body a {
  text-decoration: underline;
}
```
