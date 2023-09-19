import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas,faThList, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false

library.add(fas,faThList,faSearch, faWhatsapp, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
