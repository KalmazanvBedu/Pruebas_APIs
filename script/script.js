const API_URL = "https://www.clarity.ms/export-data/api/v1/project-live-insights";

const ACCESS_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzNWI5N2UxMjIyMDRkNTM5ZmQ2ZGQ5OGJhYzQyMmYxIiwidHlwIjoiSldUIn0.eyJqdGkiOiI1OTY3MzYxYy1lYmFkLTQxMTUtODE0MS03YWUxNzUzMjM4YjAiLCJzdWIiOiIyMDAzMzkxMzYwNTYxNjE3Iiwic2NvcGUiOiJEYXRhLkV4cG9ydCIsIm5iZiI6MTcxMjg2MjUyNywiZXhwIjo0ODY2NDYyNTI3LCJpYXQiOjE3MTI4NjI1MjcsImlzcyI6ImNsYXJpdHkiLCJhdWQiOiJjbGFyaXR5LmRhdGEtZXhwb3J0ZXIifQ.GU3hc084WbLjrB2P2KZ-zjpDodEIHGhbJhQlkgUnY28ZPbLs2xZA122CB1WGcbjewFFOL7CAoJv7yKmnhuXqHIx50jvZUyGYb3zeHMcq6YTu_kSOD532yuVQw8WxxEVjuIL18lxBbzMClgcR5lyzOH1qrDjofUqevvsRyCeNEjsN29D3Nl8usEoWO5cSGHQ2UUDcQ2L_nDnNIavi88Dj6lTzJqWtm8I7L8PA967sBctuId2-RZpH03XYMOF_8F70uaXlO_jJ5wtXZL9Vz97ivd4NRo7c_nVKo7maRwBHQcCDyQPk0m1KfTpKkd3bXgvLLcJJlFNElh_E1OSFkzFJ7w"

const PARAMS = {"numOfDays": "1", "dimension1": "OS"}

const HEADERS = {
   "Authorization": "Bearer " + ACCESS_TOKEN,
   "Content-type": "application/json"
}

fetch(API_URL, {
        headers: HEADERS,
        params: PARAMS
}

)
.then((response) => response.json())
.then((users) =>{
    console.log();
})
