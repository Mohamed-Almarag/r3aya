import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters({
    //   userToken: ['localStorage/userToken'],
    //   userData: ['localStorage/userData'],
    // }),
  },
  methods: {
    productPrice(num) {
      const number = parseFloat(num)
      return number.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })
    },
  },
}
