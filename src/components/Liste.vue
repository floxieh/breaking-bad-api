<template>
  <div id="app">
    <v-app>
      <v-container class="py-3">
        <h1 class="display-2 my-5 text-center">Characters of Breaking Bad</h1>
        <h5>
          <span v-text="visiblePersonnages"></span> of
          <span v-text="personnages.length"></span> characters are shown
        </h5>
        <v-row class="fill-height overflow-y-auto" v-if="personnages.length">
          <v-col
            lg="3"
            md="4"
            sm="6"
            cols="12"
            :key="personnage.char_id"
            v-for="personnage in personnages"
          >
            <v-sheet min-height="450" class="fill-height" color="transparent">
              <v-lazy
                v-model="personnage.isActive"
                :options="{
                  threshold: 0.5,
                }"
                class="fill-height"
              >
                <v-hover v-slot:default="{ hover }" open-delay="50">
                  <v-card
                    class="transition-swing fill-height hoverimg"
                    :class="`elevation-${hover ? 8 : 4}`"
                  >
                    <v-img
                      class="white--text align-end hover-effect"
                      height="450px"
                      position="top center"
                      :src="personnage.img"
                      :lazy-src="personnage.img"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                      <v-card-title>{{ personnage.name }}</v-card-title>
                    </v-img>

                    <v-card-subtitle
                      v-if="personnage.birthday == 'Unknown'"
                      class="pb-0"
                      >Date of birth: Unknown</v-card-subtitle
                    >

                    <v-card-subtitle v-else class="pb-0"
                      >Date of birth: {{ personnage.birthday }}
                      <span>- ({{ getAge(personnage.birthday) }} yo)</span>
                    </v-card-subtitle>

                    <v-card-text class="text--primary d-flex flex-wrap">
                      <span class="occupations__title">Occupation(s):</span>
                      <div
                        class="text-center"
                        :key="personnage.id + '-' + value"
                        v-for="value in personnage.occupation.slice(0, 2)"
                      >
                        <v-chip class="ma-2" text-color="black">
                          {{ value }}
                        </v-chip>
                      </div>
                    </v-card-text>

                    <div class="d-flex justify-center mb-2">
                      <v-btn
                        large
                        color="error"
                        @click="getId(personnage.char_id)"
                        >Spoiler Alert: Am i dead ?</v-btn
                      >
                    </div>
                  </v-card>
                </v-hover>
              </v-lazy>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <transition
        leave-active-class="animate__animated animate__fadeOut animate__faster"
        mode="out-in"
        :duration="1000"
        appear
      >
        <DeathDetail
          :apiUrl="apiUrl"
          :personnages="personnages"
          :charID="charID"
          @closeDeathDetail="closeDeathDetail"
          v-if="show"
        />
      </transition>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
import DeathDetail from "./DeathDetail";

export default {
  data() {
    return {
      apiUrl: "https://www.breakingbadapi.com/api/",
      personnages: [],
      dialog: false,
      charID: "",
      show: false,
    };
  },
  computed: {
    visiblePersonnages() {
      return this.personnages.filter((p) => p.isActive).length;
    },
  },
  methods: {
    fetchData() {
      axios
        .get(this.apiUrl + "characters?limit=12&offset=0")
        .then((resp) => {
          resp.data.forEach((personnage) => {
            this.personnages.push(personnage);
          });

          console.log(resp);
          console.log(this.personnages);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAge(DOB) {
      var today = new Date();
      var birthDate = new Date(DOB);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
      }

      return age;
    },
    getId(char_id) {
      this.charID = char_id;
      this.show = true;
    },
    closeDeathDetail() {
      this.show = false;
    },
  },
  components: {
    DeathDetail,
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped lang="scss">
.liste {
  width: 1180px;
  max-width: 100%;
}

.v-card {
  //   cursor: pointer;

  &__title {
    background: rgba(14, 83, 52, 0.7) !important;
  }
}

.occupations {
  &__title {
    width: 100%;
  }
}

.hoverimg:hover .hover-effect {
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
}
</style>
