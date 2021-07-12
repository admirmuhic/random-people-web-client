<template>
  <div>
    <b-sidebar id="sidebar-right" title="Sök" right shadow>
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item
            id="cursor"
            v-for="person in getFilteredPeople"
            :key="person.id"
            @click="detailedInformation(person.id)"
          >
            <b-avatar
              button
              variant="primary"
              :text="getInitials(person.firstName, person.lastName)"
              class="align-baseline"
            ></b-avatar>
            {{ person.firstName }} {{ person.lastName }}
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  },

  computed: {
    getFilteredPeople() {
      return JSON.parse(JSON.stringify(this.$store.state.filteredPeople));
    },
  },

  methods: {
    getInitials: function (firstName, lastName) {
      if (firstName && lastName)
        return firstName.charAt(0) + lastName.charAt(0);
    },

    detailedInformation: function (id) {
      console.log(id);
    },
  },
};
</script>

<style>
</style>
