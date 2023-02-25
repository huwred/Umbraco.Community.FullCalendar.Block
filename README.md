# Umbraco.Community.FullCalendar.Block
[![Platform](https://img.shields.io/badge/Umbraco-10.4+-%233544B1?style=flat&logo=umbraco)](https://umbraco.com/products/umbraco-cms/)

**Umbraco.Community.FullCalendar.Block** easy to use rich HTML backoffice preview for the fullcalendar js component

## Usage
This package installs a custom Angular preview for the Block Grid editor in the backoffice.

When setting up a block to be part of the Grid, setting the 'Custom View' property to `fullcallendar.html` will generate preview HTML for the calendar.

How to select the custom view when creating a Block List/Grid:
![image](https://user-images.githubusercontent.com/4870243/221359142-d0213fc9-a42a-4e59-b9cc-f6d47c3fb915.png)
Before and after of how component looks within the Block Grid:
![image](https://user-images.githubusercontent.com/4870243/221359379-c999e260-bcf7-46e0-9a07-02ef6b2a7f6a.png)

The Calendar accepts a datasource string which is used as the fullcalendar event source, it should be a URL pointing to an api which returns a json array of events
![image](https://user-images.githubusercontent.com/4870243/221359623-265349b9-0412-40b9-b0bd-19abfd5495cb.png)

You can also set options for the header bar lef/center/right sections

![image](https://user-images.githubusercontent.com/4870243/221359706-3fba8332-ec06-44e9-9106-d48c04df1dfc.png)


## License
Copyright © 2023 Huw Reddick, and other contributors.

Licensed under the [MIT License](https://github.com/huwred/Umbraco.Community.FullCalendar.Block/blob/main/LICENSE.md).
