<template>
    <div ref="text">{{ writing }}</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "\"Follow the white rabbit.\""
        },
        timeout: {
            type: Number,
            default: 15
        }
    },
    created() {
        this.typeWriter()
    },
    data() {
        return {
            writing: "",
            index: 0
        }
    },
    methods: {
        typeWriter() {
            if (this.index < this.text.length) {
                this.writing += this.text.charAt(this.index);
                this.index++;
                setTimeout(() => { this.typeWriter() }, this.timeout);
            }

            this.$refs.text.scrollIntoView();
            this.$emit("finished");
        }
    }
}
</script>

<style>
</style>
