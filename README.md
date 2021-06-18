# psk-typewriter

Vue component to simulate typing text.

* Report bugs: <https://github.com/pauloklaus/psk-typewriter/issues>
* Live test: <https://pauloklaus.com.br/playground>

## Install

Create a new vue project:

```shell
vue create
```

Install component:

```shell
npm install --save psk-typewriter
```

## Environment setting

Make a src/resources folder at the root:

```shell
mkdir src/resources
```

### Configure the psk-typewriter

Create the src/resources/psk-typewriter.js:

```javascript
import Vue from "vue";
import TypeWriter from "psk-typewriter";

Vue.use(TypeWriter, { TypeWriterName: "MyTypeWriter" });
```

### Import psk-typewriter

The "src/main.js" file should look like this:

```javascript
import Vue from "vue";
import App from "./App.vue";

import "./resources/psk-typewriter";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

## How to use (example in App.vue)

```vue
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
endChar | Character used at the end of the text while it is displayed. | no | _ (underline char)
text | Text to display | yes | :)
timeout | Time to display the next character | no | 15
autoscroll | Scroll the screen to the message | no | false

## Events

Event | Description
-|-
finished | When the message is all displayed

## Using in the browser

To use directly in the browser, import psk-typewriter:

```html
<script src="https://unpkg.com/psk-typewriter" />
```
