<template>
    <div ref="text">{{ writing }}<span>{{ showEndChar }}</span></div>
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
        },
        autoscroll: {
            type: Boolean,
            default: false,
        }
    },
    created() {
        this.typeWriter()
    },
    data() {
        return {
            showEndChar: this.endChar,
            writing: "",
            index: 0
        }
    },
    methods: {
        typeWriter() {
            if (this.index < this.text.length) {
                this.writing += this.text.charAt(this.index);
                this.index++;

                if (this.autoscroll && this.$refs["text"])
                    this.$refs.text.scrollIntoView(false);

                setTimeout(() => { this.typeWriter() }, this.timeout);
            }
            else {
                this.showEndChar = "";
                this.$emit("finished");
            }

        }
    }
}
</script>

<style>
</style>
