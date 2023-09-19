<template>
  <div class="our_services_container">
    <div class="container">
      <div class="part_one">
        <div class="row">
          <div class="col-md-8">
            <SharedSectionTitle
              title="Our Services"
              :withBullets="true"
            ></SharedSectionTitle>
            <p class="services_description mt-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede tellus. Aenean
              leo ligula, Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient
            </p>
          </div>
          <div class="col-md-4">
            <div class="service_card text-center">
              <img
                src="@/assets/images/home/services/medicine1.png"
                alt="service"
              />
              <h5>screening</h5>
              <p>Lorem ipsum dolor sit amet, Lore ipsum dolor sit amet,</p>
            </div>
          </div>
        </div>
        <div class="part_two mt-5">
          <div class="row">
            <div class="col-md-4" v-for="(item, i) in items" :key="i">
              <div class="service_card text-center">
                <img :src="item.img_src" :alt="item.title" />
                <h5>{{ item.title }}</h5>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurServices',
  data() {
    return {
      items: [
        {
          title: 'specialities',
          img_src: require('@/assets/images/home/services/medicine2.png'),
          desc: 'Lorem ipsum dolor sit amet, Lore ipsum dolor sit amet, ',
        },
        {
          title: 'wellness programs',
          img_src: require('@/assets/images/home/services/medicine3.png'),
          desc: 'Lorem ipsum dolor sit amet, Lore ipsum dolor sit amet, ',
        },
        {
          title: 'featured clinics',
          img_src: require('@/assets/images/home/services/medicine4.png'),
          desc: 'Lorem ipsum dolor sit amet, Lore ipsum dolor sit amet, ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.our_services_container {
  padding: $main-padding 0;

  .service_card {
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 20px;
    border-radius: 10px;
    h5 {
      margin: 15px 0;
      font-size: 1.2rem;
    }
  }
  p {
    line-height: $line-height-text;
    font-size: 1rem;
    margin: 0;
  }
}
</style>
