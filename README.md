# Vue Draggable Input

> Input Number that increments / decrements value dragging up / down

![Demo](http://g.recordit.co/Z8j1NmOKRp.gif)

## Usage

### Directly in the browser

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app"><dragable-input></dragable-input></div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-draggable-input"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

Or, if you only want to use a small subset of components, drop them in individually:

```html
<div id="app"><dragable-input></dragable-input></div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-draggable-inut/dist/DraggableInput/index.umd.min.js"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

### In a module system (without Vue CLI)

Install the library with NPM:

```bash
npm install vue-draggable-input
```

Then register the library as a plugin to globally register the component:

```js
import DraggableInput from 'vue-draggable-input'

Vue.use(DraggableInput)
```

Or, import the component individually for local registration:

```js
import { DraggableInput } from 'vue-draggable-input'

export default {
  components: { DraggableInput }
}
```

Or, if you only want to use a small subset of components, import individually bundled components from the `dist` directory to reduce the size of your application:

```js
import DraggableInput from 'vue-draggable-input/dist/DraggableInput'
```

### In a module system (with Vue CLI)

> If using Vue CLI 3 with Babel or TypeScript, it's recommended that you import the library from its `src` directory. This will minimize the size of your application by preventing duplicate or unnecessary polyfills.

Install the library with NPM:

```bash
npm install vue-draggable-input
```

Then register the library as a plugin to globally install all components:

```js
import DraggableInput from 'vue-draggable-input/src'

Vue.use(DraggableInput)
```

Or, import components individually for local registration:

```js
import { DraggableInput } from 'vue-draggable-input/src'

export default {
  components: { DraggableInput }
}
```

Or, if you only want to use a small subset of components, import individually bundled components from the `src` directory to reduce the size of your application:

```js
import DraggableInput from 'hello-vue-components/src/DraggableInput'
```
