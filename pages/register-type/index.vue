<template>
  <div class="register_type">
    <div class="container">
      <div class="title_wrapping">
        <SharedSectionTitle title="regsiter as"></SharedSectionTitle>
      </div>
      <div class="wrapper">
        <div class="patient">
          <nuxt-link
            class="link_wrapper"
            :to="localePath('/auth/register/patient')"
          >
            <img
              class="img d-block"
              draggable="false"
              src="@/assets/images/auth/doctor.png"
              alt="img"
            />
            <span class="d-block name text-capitalize">patient</span>
          </nuxt-link>
        </div>
        <div class="patient">
          <nuxt-link
            class="link_wrapper"
            :to="localePath('/auth/register/doctor')"
          >
            <img
              class="img d-block"
              draggable="false"
              src="@/assets/images/auth/patient.png"
              alt="img"
            />
            <span class="d-block name text-capitalize">doctor</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RegisterType',
}
</script>

<style lang="scss" scoped>
.register_type {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .title_wrapping {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  .wrapper {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    .patient {
      border-radius: 10px;
      overflow: hidden;
      .link_wrapper {
        text-align: center;
        text-decoration: none;
        color: $black-color;
        font-size: 30px;
        font-weight: 700;
      }
      .name {
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.08) 42.39%
        );
        padding: 10px 0;
      }
    }
  }
}
</style>
