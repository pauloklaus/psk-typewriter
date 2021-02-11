# psk-typewriter

Vue component to simulate typing text.

* Report bugs: https://github.com/pauloklaus/psk-typewriter/issues
* Live test: https://pauloklaus.com.br/playground

## Install

Create a new vue project:
```
vue create
```

Install component:
```
npm install --save psk-typewriter
```

## Environment setting

Make a src/resources folder at the root:
```
mkdir src/resources
```

### Configure the psk-typewriter

Create the src/resources/psk-typewriter.js:
```
import Vue from "vue";
import TypeWriter from "psk-typewriter";
import "psk-typewriter/dist/TypeWriter.css";

Vue.use(TypeWriter, { TypeWriterName: "MyTypeWriter" });
```

### Import psk-typewriter and dependencies

The "src/main.js" file should look like this:
```
import Vue from "vue";
import App from "./App.vue";

import "./resources/psk-typewriter";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

## How to use (example in App.vue)
```
<template>
    <div>
        <my-type-writer text="And now?" @finished="playExplore = true" />
        <my-type-writer :text="explore" v-if="playExplore" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            playExplore: false,
            explore: "How about we explore the universe?"
        }
    }
}
</script>
```

## Properties

Property | Description | Required | Default
-|-|-|-
text | Text to display | yes | :)
timeout | Time to display the next character | no | 15

## Events

Event | Description
-|-
finished | When the message is all displayed

## Using in the browser

To use directly in the browser, import psk-typewriter:
```
<script src="https://unpkg.com/psk-typewriter" />
```
