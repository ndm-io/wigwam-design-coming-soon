# Issue Tracking

Use this file to track the issues that arise with the coming soon website

## issue-12 - 13/04/18

### Problem

Performance tune up time

### Fix

Improve the build phase

## issue-11 - 07/02/18

### Problem

Google finds an error with hreflang international targeting tag

### Fix 

Remove tags. No internationalization required. Welsh version available

## issue-10 - 26/01/18

### Problem

Security vulnerability found in jquery dependency

### Fix

Update package.json with latest version

## issue-9 - 19/01/18

### Problem

Update website footer with new Houzz award badge

###

Add the badge

## issue-8 - 10/12/17

### Problem

The testimonials in the about page are static html and therefore require
copy paste to update

### Fix

Add render code to app

## issue-7 - 01/09/17

### Problem

Valid messages can be very long to be forwarded on by Twilio SMS.
So it can become an unnecessary expense

### Fix

Validate on typing that the message length remains below set limit. 
Also set this limit on server side validation.

Use validation on forms to indicated this to user.

## issue-6 - 11/08/17

### Problem

A user can send a contact message then continue to click the submit
button and more messages are sent.

Add logic to only allow one successful send then disable the button

Also updated Contact page image

## issue-5 - 05/08/17

### Problem

Start a fork to allow for english language and welsh language
versions.

### Fix

All displayed strings in views to be rendered from central
string repository which returns the string in a given language

## issue-4 - 26/05/17

### Problem

Environment vars need to be loaded from .env file which is
not tracked by git

### Fix

Update to use dotenv package

## issue-3 - 21/05/17

### Problem

Minor update of coming soon website with new images for index page

### Fix

Collect suitable new images and add as portfolio items
to index page

<hr/>

## issue-2 - 22/04/17

### Problem

Minor issue. Wording to about page only includes North Wales/

### Fix

Update to include wording also for the North of England

<hr/>

## issue-1 - 21/04/17

### Problem

Recently a number of people have left messages on the contact page
that have been truncated at the current limit of 200 chars.

This was to prevent excessively long messages being being sent
via SMS

### Fix

1. Implement some extra validation client side. This way if a
genuine user attempts to send a very long message they
will be informed that it has been truncated, as at the moment
the user would have no idea

2. Implement extra server side checking and allow longer
messages

<hr/>