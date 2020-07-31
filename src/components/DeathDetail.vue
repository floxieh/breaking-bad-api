<template>
  <div class="modal-mask">
    <transition
      enter-active-class="animate__animated animate__bounceIn"
      mode="out-in"
      appear
    >
      <div class="modal-wrapper" @click="$emit('closeDeathDetail')">
        <div class="modal-container" @click.stop>
          <v-card>
            <v-card-text
              class="d-flex flex-column justify-center align-center"
              v-if="personnages[this.charID - 1].status == 'Alive'"
            >
              <svg style="width:200px;height:200px" viewBox="0 0 24 24">
                <path
                  fill="green"
                  d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
                />
              </svg>
              <p class="display-1">
                {{ personnages[this.charID - 1].name }} is
                <span class="text-decoration-underline">ALIVE</span>.
              </p>
            </v-card-text>

            <v-card-text
              class="d-flex flex-column justify-center align-center"
              v-else-if="personnages[this.charID - 1].status == 'Deceased'"
            >
              <svg style="width:200px;height:200px" viewBox="0 0 24 24">
                <path
                  fill="red"
                  d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z"
                />
              </svg>
              <p class="display-1">
                {{ personnages[this.charID - 1].name }} is
                <span class="text-decoration-underline">DEAD</span>.
              </p>
            </v-card-text>

            <v-card-text
              class="d-flex flex-column justify-center align-center"
              v-else
            >
              <p class="display-1 text-center">
                <v-img
                  src="../assets/walter-white.jpg"
                  aspect-ratio="1"
                  height="200"
                  width="200"
                  class="ma-auto"
                ></v-img>
                {{ personnages[this.charID - 1].name }} is presumed dead but who
                knows...
              </p>
            </v-card-text>

            <v-card-actions class="d-flex justify-center ">
              <div class="my-2">
                <v-btn color="error" @click="$emit('closeDeathDetail')"
                  >Close</v-btn
                >
              </div>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["apiUrl", "personnages", "charID", "show"],
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  max-width: 100%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
