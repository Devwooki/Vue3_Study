import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import myComp from "./components/MyComponent.vue";

createApp(App).mount("#app");
createApp(myComp).mount("#myComponent");
