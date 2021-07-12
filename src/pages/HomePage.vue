<template>
  <div>
    <b-list-group>
      <div class="text-center mt-2" v-if="loading">
        <b-spinner label="Spinning"></b-spinner>
      </div>
      <b-list-group-item
        href="#"
        class="flex-column align-items-start"
        v-for="(person, index) in randomPeople"
        :key="'person_' + index"
        @click="detailedInformation(person.id)"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ person.firstName }} {{ person.lastName }}</h5>
          <p class="mb-1">
            <b-badge pill variant="success" v-if="person.isActive"
              >Aktiv</b-badge
            >
            <b-badge pill variant="danger" v-if="!person.isActive"
              >Inaktiv</b-badge
            >
          </p>
        </div>
        <div>
          <small class="text-muted">{{ person.city }}</small>
        </div>
      </b-list-group-item>
    </b-list-group>

    <sidebar></sidebar>
  </div>
</template>

<script>
import PeopleService from "../services/people.service";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "HomePage",
  data() {
    return {
      randomPeople: [],
      loading: false,
    };
  },

  components: {
    sidebar: Sidebar,
  },

  created() {
    this.loading = true;

    PeopleService.getRandomPeople().then(
      (response) => {
        this.loading = false;
        this.randomPeople = response.data;
      },
      (err) => {
        console.log("Error from the server: ", err);
      }
    );
  },

  methods: {
    detailedInformation: function (id) {
      console.log(id);
    },
  },
};
</script>

<style>
</style>
