<template>
  <div class="thanks_for_registration pages_padding_top">
    <div class="container">
      <div class="img_wrapper">
        <img
          class="img d-block"
          draggable="false"
          src="@/assets/images/auth/patient.png"
          alt="img"
        />
      </div>
      <div class="title_wrapping">
        <SharedSectionTitle
          title="thanks for registration"
        ></SharedSectionTitle>
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit
      </p>
      <div class="button_wrapper">
        <SharedAppButton class="solid">
          <span>go back</span>
        </SharedAppButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doctor',
}
</script>

<style lang="scss" scoped>
.thanks_for_registration {
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .img_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .title_wrapping {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .text {
    text-align: center;
    margin-bottom: 15px;
  }
  .button_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
