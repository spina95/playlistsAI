<template>
    <div
      class="dropzone-container"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        name="file"
        id="fileInput"
        class="hidden-input"
        @change="onChange"
        ref="file"
        accept=".jpg,.jpeg,.png"
      />

      <label for="fileInput" class="file-label">
        <div v-if="isDragging">Release to drop files here.</div>
        <div v-if="!file">Cover</div>
      </label>
      <div class="preview-container" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
          <div>
            <img class="preview-img" :src="generateURL(file)" />
          </div>
          <div>
            <button
              class="ml-2"
              type="button"
              @click="remove(files.indexOf(file))"
              title="Remove file"
            >
              <b>×</b>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
    return {
      isDragging: false,
      files: [],
    };
  },
  methods: {
    onChange() {
      this.files = [...this.$refs.file.files];
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    remove(i) {
    this.files.splice(i, 1);
    },
    generateURL(file) {
    let fileSrc = URL.createObjectURL(file);
    setTimeout(() => {
        URL.revokeObjectURL(fileSrc);
    }, 1000);
    return fileSrc;
},
  },
}
  
</script>
<style scoped>
.dropzone-container {
    background: #1d1d1d;
    border: 1px solid #787878;
    height:0;
    width:60%;
    padding-bottom:60%;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

.preview-container {
    height: 100%;
    width: 100%;
}

.preview-card {
    height: 100%;
    width: 100%;
}

.preview-img {
    width: 100%;
    height: 100%;
    background-color: #a2a2a2;
}
</style>