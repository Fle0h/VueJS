new Vue({
  el: '#app',

  data: {
    message: 'Salut les gens',
    title: 'Lien',
    link: 'https://www.google.com',
    success : true,
    persons: ['Jon', 'Marion', 'Marine', 'David'],
  },

  methods: {
    close: function () {
      this.success = false;
      console.log('close');
      event.preventDefault();
    }
  },
})