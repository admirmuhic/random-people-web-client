<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">RandomPeople</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Vakant</b-nav-item>
          <b-nav-item href="#">Vakant</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Sök"
              v-model="searchTerm"
            ></b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              v-b-toggle.sidebar-right
              @click="search(searchTerm)"
              :disabled="!searchTerm"
              >Sök</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import PeopleService from "../services/people.service";

export default {
  name: "Navbar",
  data() {
    return {
      searchTerm: "",
    };
  },

  methods: {
    search(searchTerm) {
      PeopleService.search(searchTerm).then(
        (response) => {
          this.$store.commit("filterPeople", response.data);
        },
        (err) => {
          console.log("Error from the server: ", err);
        }
      );
    },
  },
};
</script>

<style>
</style>
