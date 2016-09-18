# Udacity Front-End Web Developer Nanodegree
## Project 4: Website Optimization

This repository contains my submisssion for Project 4: Website Optimization, branched from:
https://github.com/udacity/frontend-nanodegree-mobile-portfolio.

### Installation

* Copy all the files in the dist folder to your web server.

* I am including the gulpfile.js and package.json in this repository, but please note that the node_modules folder and all folders and files under it were not included. If you wish to use the same gulp packages I used to optimize certain files after editing, you will need to manually install the packages listed in the gulpfile.js before doing so - links to packages are at the bottom of this readme.

### Optimizations

Here are the optimizations I made to meet the [project rubrics](https://review.udacity.com/#!/rubrics/16/view).

#### 1. The [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) score for index.html has been optimized to a score of 99 for Mobile and 95 for Desktop.


* Minified HTML, CSS, and JS, using: gulp-minify, gulp-minify-html, gulp-cssnano (see bottom of readme) 

* Deferred loading of permatters.js, style.css, and Google Fonts (using suggestion from [https://www.giftofspeed.com/defer-loading-css/](https://www.giftofspeed.com/defer-loading-css/))

* print.css was given a media attribute of "print" so that it would no longer be loaded at all during normal browsing, only when printing.

* A .htaccess file was added that creates caching directives all file types in order to aid browser in caching files to minimize round-trips to the server. Also a gzip directive was added in order to compress content and thus speed up pulls from the server.

* The file was given an appcache manifest as a way to use the application cache to cache specific files on the server and external urls.

* pizzeria.jpg was copied for use seperately on index.html to pizzeria_small.jpg because it only exists as a 100px-wide thumbnail on this page. It was also optimized by converting to png, reducing color depth, resaving as jpg and compressing in Paint.Net. Finally it was minimized using gulp-imagemin (see bottom of readme).


#### 2. Optimizations made to views/js/main.js make views/pizza.html render with a consistent frame-rate at 60fps when scrolling.


(Please see the unminified version of main.js (in /apps/views/js/main.js or dist/views/js/main-debug.js) for extensive details)

* a call to requestAnimation frame for the updatePositions() function that creates the backgraound pizza animation was introduced, along with scroll "debouncing" (preventing rAF from happening before the last one has completed) via recommendation [here](http://www.html5rocks.com/en/tutorials/speed/animations/).

* within the updatePositions() function, there was a great deal of optimization via removing variable declarations and assignments as well as unecessary calculations and putting them, as needed, outside of the loop.

* within updatePositions() querySelector was replaced by getElementById or getElementsByClassname which incur less cost in terms of memory/speed especially when dealing with many elements.

* Instead of looping through all 200 pizza bakground images, it was determined that the max amount on screen at any one time is likely never more than 32, so this means less looping and no need to lookup the count.

* The pizza.png image as optimized using Paint.Net to deduce color depth, then was compressed using gulp-imagemin (see bottom of readme)


#### 3. Time to resize pizzas is less than 5 ms using the pizza size slider on the views/pizza.html page. Resize time is shown in the browser developer tools.


* variable assigments and caclulations were taken out of the loop for changePizzaSizes() as they were not needed to be assigned and/or recalculated for each image - all images had the same width.

* replaced querySelector with getElementsByClassName which incurs less cost in terms of memory/speed especially when dealing with many elements.

* Made some microoptimizations in the determineDx() function by removing variable declarations and combining any calculations in the return statement.

* While not specific to either of the two items above, as with index.html, the HTML, and related CSS and JavaScript files were minified, which potentially increased performance to less time being spent downloading these items.  Additionally, an application cache manifest was set up for pizza.html for related JS and CSS, and deferred loading of stylesheets were added, all of which allow for faster page loads.


### Packages Used

I am including the gulpfile.js and package.json in this repository, but please note that the node_modules folder and all folders and files under it were not included. used are included in this repository.  If you wish to use the gulpfile, the resources listed below must be installed.

* [npm](https://www.npmjs.com/) was used to install all packages used in this project.

* [gulp](https://www.npmjs.com/package/gulp): For workflow, project management, and building of distribution files separate from source files. The see gulpfile.js in the root of the project has the specific tasks that were created.  Note that I did not optimized them for the most efficient workflow - ie, I did not combine multiple tasks in one.

* [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano): used to minify css files

* [gulp-jshint](https://www.npmjs.com/package/gulp-jshint): used to troubleshoot javascript errors

* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin): used to compress images

* [gulp-minify](https://www.npmjs.com/package/gulp-minify): used to minify javascript files

* [gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html): used to minify html files

* [gulp-html-prettify](https://www.npmjs.com/package/gulp-html-prettify): used to format html files nicely (for app (source) folder)

* [gulp-jsbeautify](https://www.npmjs.com/package/gulp-jsbeautify): used to format javascript files nicely (for app (source) folder)

* [gulp-convert-newline](https://www.npmjs.com/package/gulp-convert-newline): used to convert LF's at the end of lines to CRLFs - not critical, just avoids annoyance when a plugin or editer changes your CRLF's to LF's.


