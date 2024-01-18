# Feedback

I like what you've done so far. Below are is some feedback. You can also find comments in the source files as I also left comments there.

#### App.js

You could remove line 1 since App.css is not being used.\
You are passing in a src parameter into component ImageDisplay even though you are not expecting any parameters for that component.

#### ImageDisplay.js

If you are looking to pass image src from various components, you should add a src parameter or props.\
You used classNames for html elements, but you used id selectors in your css. Whatever you have in imageDisplay.css is not being shown. You can test that by adding obvious css changes to one of the elements.

#### Footer.js

You can change footer-container into an id instead of a class name since this container will likely be unique.

#### HeaderDisplay.js and SplashText.js

Assigning className to SplashText will not be like a normal html element's className. Rather you are passing a parameter named className assigned as "splash-text". You would be able to access the parameter through props.className. This does not look like your intended usage.\

Any css changing SplashTxt as a class should be put in a css file in the SplashText directory. If you want to change this specific SplashText and not all of it you should create a wrapper. An example is shown below:\
\<div id="splash-text-container">\
    \<SplashTxt/>\
\</div>

#### TextSection.js

There is no need to assign a class name if you are not going to use it for anything.
