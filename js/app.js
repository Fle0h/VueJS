const vm = new Vue ({
  el: '#app',

  data: {
    units: ['Zergling', 'Marine', 'Zealot'],
    success : false,
    title : 'Bienvenue jeune StarCraftien !',
    input : 'Insérez une nouvelle unité',
  },

  methods: {
    addUnit: function() {
      this.units.push(this.input);
      this.input = '';
      this.success = true;
      console.log(this.success);
    }
  },

  watch: {
    units: function(value) {
      console.log('units', value);
    }
  },

  mounted: function () {
    console.log("Init");
    console.log(this.success);
  },
})