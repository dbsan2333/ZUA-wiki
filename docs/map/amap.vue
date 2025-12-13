<template>
    <div class="box">
        <div class="full-screen" @click="changeScreen($event)">{{(fullScreen?"退出全屏":"全屏")}}</div>
        <div class="amap-container" ref="container"></div>
    </div>
</template>


<script setup>
import { ref,onMounted, onUnmounted } from "vue";
// import AMapLoader from "@amap/amap-jsapi-loader";

const props = defineProps(["center-x","center-y","zoom"])

let map = null;
let layer = null;

const fullScreen = ref(false);
const container = ref(null); // 模板引用

function changeScreen() {
    if (fullScreen.value) {
        // 退出全屏
        document.exitFullscreen();
        map.setZoom(15);
        fullScreen.value = false;
    } else {
        // 进入全屏
        event.target.parentElement.requestFullscreen();
        map.setZoom(16);
        fullScreen.value = true;
    }
    
}

onMounted(() => {
    // 需要改为动态引入，否则会在构建时访问window对象而报错
    // https://github.com/ChaiMayor/hview-ui/issues/6
    import("@amap/amap-jsapi-loader").then((AMapLoader) => {
        window._AMapSecurityConfig = {
    securityJsCode: "",
    };
    AMapLoader.load({
    key: "04eea3ea5270ac576dfb49125988131d", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
    })
    .then((AMap) => {
        map = new AMap.Map(container.value, {
            // 设置地图容器id
            viewMode: "3D", // 是否为3D地图模式
            zoom: props.zoom||15, // 初始化地图级别
            center: [props.centerX||113.78893, props.centerY||34.788308], // 初始化地图中心点位置
        });
        // layer = new AMap.MapboxVectorTileLayer({
        //     zIndex: 100,
        //     opacity: 0.8,
        //     dataZooms: [1, 18],
        //     tileSize: 256,
        //     url: 'amap://mvt/5ca46c39-5714-4b6d-af3d-684eae70b523',
        //     styles: {
        //         point: {
        //             sourceLayer: 'default',
        //             radius: 6,
        //             color: '#66CCFF',
        //             borderColor: '#FFFFFF',
        //             borderWidth: 0,
        //             visible: 1
        //         }
        //     }
        // });
        // map.add(layer);
    })
    .catch((e) => {
        console.log(e);
    });
    })
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<style scoped>
.box{
    width: 100%;
    height: 100%;
    position: relative;
}
.amap-container {
  width: 100%;
  height: 100%;
}

.full-screen{
    position: absolute;
    top: 0.4em;
    right: 0.4em;
    padding: 0.4em 1.2em;
    background-color: rgba(80, 80, 80, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 5px;
    user-select: none;
    cursor: pointer;
    z-index: 1;
}
</style>
