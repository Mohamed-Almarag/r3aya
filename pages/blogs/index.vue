<template>
  <div class="pages_padding_top blogs_page_wrapper">
    <div class="container">
      <div class="all_tags">
        <SharedSectionTitle title="lates categories"></SharedSectionTitle>
        <div class="tags_wrapper">
          <SharedAppButton
            v-for="(item, i) in tagsData"
            :key="i"
            class="blog_tag"
          >
            <span>{{ item }}</span>
          </SharedAppButton>
        </div>
      </div>
      <div class="articles_wrapper">
        <SharedSectionTitle title="articles"></SharedSectionTitle>
        <div class="row">
          <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
            <div class="every_article">
              <div class="blog_img">
                <img
                  class="d-block"
                  draggable="false"
                  :src="blog.img_src"
                  :alt="blog.title"
                />
              </div>
              <div class="blog_details">
                <div class="blog_doctor">
                  <div class="doctor">
                    <img
                      class="d-block"
                      :src="blog.doctor_img"
                      :alt="blog.doctor_name"
                      draggable="false"
                    />
                    <span class="d-block text-capitalize">{{
                      blog.doctor_name
                    }}</span>
                  </div>
                  <span class="d-block">{{ blog.date }}</span>
                </div>
                <div class="content">
                  <h5>{{ blog.title }}</h5>
                  <p>{{ blog.description }}</p>
                </div>
                <div class="item_button">
                  <SharedAppButton
                    class="solid"
                    :isLink="true"
                    :toRoute="localePath(`/blogs/${blog.id}`)"
                  >
                    <template #link>
                      <span>read all</span>
                    </template>
                  </SharedAppButton>
                </div>
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
  name: 'Blogs',
  data() {
    return {
      tagsData: [
        'category1',
        'example category2',
        'example mentioned',
        'category1',
        'example category2',
        'example ',
        'category1',
      ],
      blogs: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet, consectetur',
          img_src: require('@/assets/images/blogs/01.png'),
          description:
            'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt ',
          date: '22/3/2022',
          doctor_name: 'doctor name',
          doctor_img: require('@/assets/images/blogs/doctor.png'),
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet, consectetur',
          img_src: require('@/assets/images/blogs/02.png'),
          description:
            'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt ',
          date: '22/3/2022',
          doctor_name: 'doctor name',
          doctor_img: require('@/assets/images/blogs/doctor.png'),
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet, consectetur',
          img_src: require('@/assets/images/blogs/03.png'),
          description:
            'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt ',
          date: '22/3/2022',
          doctor_name: 'doctor name',
          doctor_img: require('@/assets/images/blogs/doctor.png'),
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet, consectetur',
          img_src: require('@/assets/images/blogs/04.png'),
          description:
            'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt ',
          date: '22/3/2022',
          doctor_name: 'doctor name',
          doctor_img: require('@/assets/images/blogs/doctor.png'),
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet, consectetur',
          img_src: require('@/assets/images/blogs/05.png'),
          description:
            'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt ',
          date: '22/3/2022',
          doctor_name: 'doctor name',
          doctor_img: require('@/assets/images/blogs/doctor.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blogs_page_wrapper {
  .all_tags {
    padding: $main-padding 0;
    .tags_wrapper {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 20px;
    }
  }
  .articles_wrapper {
    padding-bottom: $main-padding;
    .every_article {
      margin-top: 30px;
      border-radius: 20px;
      .blog_img {
        img {
          max-width: 100%;
          border-radius: 20px 20px 0 0;
        }
      }
      .blog_details {
        padding: 10px;
        border: 1px solid rgba(0, 167, 147, 0.4);
        border-top: 0;
        border-radius: 0 0 20px 20px;
        .blog_doctor {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          .doctor {
            display: flex;
            gap: 10px;
            align-items: center;
          }
        }
        .content {
          margin: 20px 0;
          h5 {
            font-size: 16px;
          }
          p {
            line-height: $line-height-text;
            font-size: 16px;
            margin: 0;
          }
        }
        .item_button {
          display: flex;
          justify-content: end;
        }
      }
    }
  }
}
</style>
