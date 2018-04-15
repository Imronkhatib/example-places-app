/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      places: []
      // ,
      // newPlace: 
      // {
      //   name: "",
      //   address:""
      // }
    };
  },
  created: function() {
    axios.get("/places").then(function(response) {
      console.log(response.data);
      this.place = response.data;
    }.bind(this));
  },
  methods: {
    // addPlace: function() {
    //   console.log("The Button is Functioning");

    // }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});


