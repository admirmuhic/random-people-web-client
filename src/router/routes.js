import HomePage from '../pages/HomePage.vue'
import PersonPage from '../pages/PersonPage.vue'

export default [
    { path: '*', component: HomePage },
    { path: '/person', component: PersonPage },
]