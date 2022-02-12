new Vue({
    el: '#app',
    data: {
        list: ['赤パジャマ', '青パジャマ', '黄パジャマ']
    },
    methods: {
        onPush: function () {
            this.list.push('ABCD')
        },
        onPop: function () {
            this.list.pop('ABCD')
        },
        onShift: function () {
            this.list.shift('ABCD')
        },
        onUnshift: function () {
            this.list.unshift('ABCD')
        },
        onSort: function () {
            this.list.sort()
        },
        onReverse: function () {
            this.list.reverse()
        },
        onSplice: function () {
            this.list.splice(1,1,'ABCD')
        }
    }
})