<template>
  <div v-if="value" class="requirements">
    <span
      class="requirements__title"
      style="color: #a782e9;"
    >CẤU HÌNH TỐI THIỂU:</span>
    <ul class="requirements__list">
      <li>
        <span style="color: #a782e9;">OS:</span> {{ value.minimum.minimumOs }}
      </li>
      <li>
        <span style="color: #a782e9;">Processor:</span> {{ value.minimum.minimumProcessor }}
      </li>
      <li><span style="color: #a782e9;">Memory:</span> {{ value.minimum.minimumMemory }}</li>
      <li>
        <span style="color: #a782e9;">Graphics:</span> {{ value.minimum.minimumGraphics }}
      </li>
      <li>
        <span style="color: #a782e9;">Disk Space:</span> {{ value.minimum.minimumDisk }}
      </li>
      <li><span style="color: #a782e9;">Architecture:</span> {{ value.minimum.minimumArchitecture }}</li>
      <li><span style="color: #a782e9;">API:</span> {{ value.minimum.minimumAPI }}</li>
      <li>
        <span style="color: #a782e9;">Miscellaneous:</span> {{ value.minimum.minimumMiscellaneous }}
      </li>
    </ul>
    <hr class="hr__filter">

    <span
      class="requirements__title"
      style="color: #a782e9;"
    >CẤU HÌNH ĐỀ NGHỊ:</span>
    <ul class="requirements__list">
      <li>
        <span style="color: #a782e9;">OS:</span> {{ value.recommended.recommendedOs }}
      </li>
      <li>
        <span style="color: #a782e9;">Processor:</span> {{ value.recommended.recommendedProcessor }}
      </li>
      <li><span style="color: #a782e9;">Memory:</span> {{ value.recommended.recommendedMemory }}</li>
      <li>
        <span style="color: #a782e9;">Graphics:</span> {{ value.recommended.recommendedGraphics }}
      </li>
      <li>
        <span style="color: #a782e9;">Disk Space:</span> {{ value.recommended.recommendedDisk }}
      </li>
      <li><span style="color: #a782e9;">Architecture:</span> {{ value.recommended.recommendedArchitecture }}</li>
      <li><span style="color: #a782e9;">API:</span> {{ value.recommended.recommendedAPI }}</li>
      <li>
        <span style="color: #a782e9;">Miscellaneous:</span> {{ value.recommended.recommendedMiscellaneous }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => null
    }
  }
}
</script>
<style></style>
