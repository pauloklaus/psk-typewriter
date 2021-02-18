<template>
    <div ref="text">{{ writing }}<span>{{ endChar }}</span></div>
</template>

<script>
export default {
    props: {
        endChar: {
            type: String,
            default: "_"
        },
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

                if (this.$refs["text"])
                    this.$refs.text.scrollIntoView(false);

                setTimeout(() => { this.typeWriter() }, this.timeout);
                return;
            }

            this.endChar = "";
            this.$emit("finished");
        }
    }
}
</script>

<style>
</style>
