const MyNameApp = {
    data() {
        return {
            name: "Neto",
            age: 22,
            input_name:""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;

            console.log('Caiu aqui!')
        }
    }

}

Vue.createApp(MyNameApp).mount("#app")
