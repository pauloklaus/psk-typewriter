import Vue from "vue";
import TypeWriter from "@/components/TypeWriter";

function install(Vue, options = {}) {
    Vue.component(options.TypeWriterName || "TypeWriter", TypeWriter);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue)
    install(window.Vue);

export { TypeWriter };
