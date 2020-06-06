<template>
    <div>
        <div id="">
            <p>
                ask:
                <input v-model="question">
            </p>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>>

<script>

export default {
    data() {
        return {
            question: '',
            answer: '未提问。'
        }
    },
    watch: {
        question: function() {
            this.answer = '等待提问。'
            this.getAnswer()
        }
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') !== -1) {
                this.answer = '思考中...'
                this.$axios.get('/api/sug?code=utf-8&q=卫')
                .then(function (response) {
                    console.log(response)
                    this.answer = response.data.result[0][0]
                }.bind(this))
            } else {
                this.answer = "问题以？结尾哈~"
                return 0
            }
        }
    },
    name: "RobotTest"
}
</script>

<style scoped>

</style>>