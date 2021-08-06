<template>
  <div class="device">
    <div class="device-info">
      <div class="btn">
        <el-button type="primary" @click="init">获取设备信息</el-button>
      </div>
      <el-form ref="form" label-width="140px">
        <template v-if="info">
          <template v-for="(val, key, index) in info">
            <el-form-item :label="noKeys.includes(key) ? key : infoKeys[key]" :key="index">
              <el-input v-if="key === 'UserAgent'" type="textarea" :value="val"></el-input>
              <el-input v-else :value="val"></el-input>
            </el-form-item>
          </template>
        </template>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getDeviceInfo } from "static/getDeviceInfo.js"
export default {
  data () {
    return {
      infoKeys: {
        "DeviceType": "设备类型",
        "OS": "操作系统",
        "OSVersion": "操作系统版本",
        "ScreenHeight": "屏幕高",
        "ScreenWidth": "屏幕宽",
        "Language": "当前使用语言(国家)",
        "NetWork": "联网类型",
        "Orientation": "横竖屏",
        "BrowserInfo": "浏览器信息",
        "Fingerprint": "浏览器指纹",
        "UserAgent": "包含 appCodeName,appName,appVersion,language,platform 等",
        "GeoPosition": "地理位置",
        "Date": "系统时间",
        "UUID": "通用唯一标识 Universally Unique Identifier",
      },
      noKeys: ["UserAgent", "UUID"],
      info: {}
    }
  },
  created () {},
  methods: {
    init () {
      getDeviceInfo({
        domain: 'https://dukanglyb.github.io/',
      }, (infoResult) => {
        this.info = infoResult;
      })
    }
  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
  width: 100%;
}
.device {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  .device-info {
    height: 100%;
    position: relative;
    width: 800px;
    display: flex;
    justify-content: center;
    .btn {
      flex: 0 0 130px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-form {
      flex: 1;
      margin: 15px 0;
    }
    textarea {
      resize: none;
    }
  }
}
</style>
