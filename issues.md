# Issue Tracking

Use this file to track the issues that arise with the coming soon website

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