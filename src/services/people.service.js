import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const API_URL = process.env.VUE_APP_ROOT_API;

class PeopleService {
    /**
     * This function returns all random people in the database
     * @returns A list of random people
     */
    getRandomPeople() {
        return axios.get(API_URL + "person");
    }

    /**
     * This functions makes a person search filtering using first or last name
     * @param {*} searchTerm A string search term
     * @returns Random people filtered on their first or last name
     */
    search(searchTerm) {
        return axios.get(API_URL + "person/search?searchTerm=" + searchTerm);
    }
}

export default new PeopleService();

