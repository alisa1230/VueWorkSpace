new Vue({
    el: '#app',
    data: {
        attrs: {
            size: 28,
            maxlength: 14,
            required: true,
            minlength: 10,
            pattern: '\d{3}-\d{4}',
            multiple: true,
            accept: 'image/png, image/jpeg',
            disable: true,
        },
        countNum: 0
    },
    methods: {
        count() {
            this.countNum++;
            console.log('count', this.countNum)
        }
    }
})