# P3_travel_app_

## A web-based single page app to share and discuss travel stories and photos.

### Team members: aFreeman dLee jKim Tchiriga

#Johns edit

#API Docs

User + Session are all done the 'old fashioned way' via server-rendered erb.

ROOT (/): Renders the Sign In/ Sign Up forms.
<!-- POST /users will create a new user, redirect to ROOT -->
POST /session will create a new session, redirect to SPA

#JSON

GET /session will return JSON object containing currently logged in user

GET /trips will return array of trips complete with confessions subarray

```json
  {
    trips: [
      {
        id: 1,
        title: "Went to Peru",
        destination: "Huaraz, Peru",
        description: "Went to the mountains",
        start_date: "03/03/2015",
        end_date: "02/02/2016",
        tags: "Honeymoon",
        notes: "Great trip. good food"
        comments: [
          {
            entry: "I've been there"
          }
        ]
      }
    ]
  }
```

POST /trips will take a JSON object as such:

```json
  {
    authenticity_token: "sdlfkjsdlkq4lqwlkj",
    trip: {
        id: 1,
        title: "Went to Peru",
        destination: "Huaraz, Peru",
        description: "Went to the mountains",
        start_date: "03/03/2015",
        end_date: "02/02/2016",
        tags: "Honeymoon",
        notes: "Great trip. good food"
    }
  }
```
  And return the created trip as an object.

POST /trips/:id/comments will take a JSON object as such:

```json
{
  authenticity_token: "sdfljk23lkj34ljk",
  trips: {
      entry: "Great place to visit"
  }
}
```
