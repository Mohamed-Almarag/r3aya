<template>
  <header class="navbar_wrapper">
    <b-navbar toggleable="lg" fixed="top" :class="{ is_auth: isAuthRoute }">
      <div class="container">
        <b-navbar-brand class="navbar_brand" :to="localePath('/')">
          <img src="@/assets/images/global/logo.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse">
          <template #default>
            <span>hello</span>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav
            class="text-capitalize links_list"
            :class="{ 'd-none': isAuthRoute }"
          >
            <b-nav-item active :to="localePath('/')">Home</b-nav-item>
            <b-nav-item :to="localePath('/services')">our services</b-nav-item>
            <b-nav-item :to="localePath('/screening')">screening</b-nav-item>
            <b-nav-item :to="localePath('/latest-offers')"
              >latest offers</b-nav-item
            >
            <b-nav-item :to="localePath('/about-us')">about us</b-nav-item>
            <b-nav-item :to="localePath('/blogs')">blogs</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto auth_wrapper">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <SharedAppButton
              :isLink="true"
              :toRoute="localePath(`/auth/login`)"
              :class="{ 'd-none': isAuthRoute }"
            >
              <template #link>
                <span>login</span>
              </template>
            </SharedAppButton>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    isAuthRoute() {
      return this.$route.path.includes('/auth')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar_wrapper {
  .navbar_brand {
    padding: 0;
  }
  .navbar {
    padding: 20px 0;
    background-color: $white-color;
    box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.2);

    &.is_auth {
      background-color: transparent;
      box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2);
      background: rgba(147, 147, 147, 0.38);
    }
  }
  .links_list {
    flex-grow: 1;
    justify-content: center;
    .nav-item {
      padding: 0 8px;
      .nav-link {
        color: $black-color;
        &.nuxt-link-exact-active {
          color: $second-color;
        }
      }
    }
  }
  .auth_wrapper {
    gap: 15px;
  }
}
</style>
