require 'Unirest'

response = Unirest.post("http://localhost:3000/places", parameters: 
  {
    name: "America",
    address: "Somewhere on the map of the world"
  }
  )

p response.body 