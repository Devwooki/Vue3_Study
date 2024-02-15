import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import myComp from "./components/MyComponent.vue";
import basicSntx from "./components/BasicSyntax02.vue";

// createApp(App).mount("#app");
createApp(myComp).mount("#myComponent");
createApp(basicSntx).mount("#basicSyntax2");
