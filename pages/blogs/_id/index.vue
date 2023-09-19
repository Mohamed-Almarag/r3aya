<template>
  <div class="pages_padding_top details_blog_page_wrapper">
    <div class="container">
      <div class="blog_wrapper">
        <div class="row">
          <div class="blog_content col-md-8">
            <div class="titles">
              <SharedSectionTitle
                title="Lorem ipsum dolor sit amet, consectetur "
              ></SharedSectionTitle>
              <span class="d-block"> 22/3/2023 </span>
            </div>
            <p class="description">
              adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit,
              sed do eiusmod tempor incididunt
            </p>
            <div class="blog_img">
              <img
                class="img d-block"
                src="@/assets/images/blogs/details.png"
                alt="blog"
              />
            </div>
            <div class="information">
              <div class="doctor_info">
                <nuxt-link :to="localePath(`/our-doctors/1`)">
                  <img
                    src="@/assets/images/blogs/doctor-2.png"
                    alt="doctor"
                    class="d-block img_doctor"
                  />
                </nuxt-link>
                <div class="info">
                  <span class="d-block text-capitalize">doctor name</span>
                  <span class="specialist d-block">doctor specialist</span>
                  <div class="main_booking_wrapper">
                    <div class="d-block main_doctor_prices">
                      <span>$</span>
                      <span>360</span>
                    </div>
                    <div>
                      <SharedAppButton
                        class="solid"
                        :isLink="true"
                        :toRoute="localePath(`/our-doctors/1`)"
                      >
                        <template #link>
                          <span>book now</span>
                        </template>
                      </SharedAppButton>
                    </div>
                  </div>
                  <!-- <div class="salary_booking">
                  <SharedAppButton
                    class="solid"
                    :isLink="true"
                    :toRoute="localePath(`/our-doctors/1`)"
                  >
                    <template #link>
                      <span>book now</span>
                    </template>
                  </SharedAppButton>
                </div> -->
                </div>
              </div>
              <div class="share_like">buttons</div>
            </div>
            <div class="comments_wrapper">
              <p class="main_article_description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo. Nullam dictum felis eu pede mollis pretium.
                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies
              </p>
              <div class="add_comment">
                <h6 class="add_comment_title text-capitalize">add comment</h6>
                <div class="main_input_wrapper mb-4">
                  <textarea class="main_input with_textarea"></textarea>
                </div>
                <div class="button_wrapper">
                  <SharedAppButton>
                    <span>publish</span>
                  </SharedAppButton>
                </div>
              </div>
              <div class="all_users_comments">
                <div
                  class="evry_comment"
                  v-for="comment in comments"
                  :key="comment.id"
                >
                  <div class="user_info">
                    <img
                      draggable="false"
                      :src="comment.img_src"
                      :alt="comment.name"
                      class="comment_img"
                    />
                    <span class="text-capitalize">{{ comment.name }}</span>
                    <span class="comment_date">{{ comment.date }}</span>
                  </div>
                  <p class="user_opinion">
                    {{ comment.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="blog_tags_related col-md-4">
            <div class="blog_tags_wrapper">
              <div class="every_tag" v-for="(tag, i) in tags" :key="i">
                <img :src="tag.img_src" :alt="tag.title" />
                <span class="d-block">{{ tag.title }}</span>
              </div>
            </div>
            <div class="related_articles">
              <h6 class="related_title text-capitalize">related articles</h6>
              <div class="all_articls">
                <div
                  class="article_wrapper"
                  v-for="article in relatedArticles"
                  :key="article.id"
                >
                  <div class="part_one">
                    <div class="details">
                      <div class="one">
                        <img
                          :src="article.img_src"
                          alt="doctor"
                          class="d-block img_doctor"
                        />
                        <span class="text-capitalize">{{ article.name }}</span>
                      </div>

                      <span class="d-block title_two">{{ article.title }}</span>
                    </div>
                    <div class="article_img">
                      <img
                        class="ar_img d-block"
                        draggable="false"
                        :src="article.article_img_src"
                        alt="related article"
                      />
                    </div>
                  </div>
                  <p class="article_description">
                    {{ article.decription }}
                  </p>
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
  name: 'BlogDetails',
  data() {
    return {
      tags: [
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
        {
          title: 'tag 1',
          img_src: require('@/assets/images/blogs/tag.png'),
        },
      ],
      relatedArticles: [
        {
          id: 1,
          img_src: require('@/assets/images/blogs/doctor.png'),
          article_img_src: require('@/assets/images/blogs/06.png'),
          name: 'doctor name',
          title: 'Lorem ipsum dolor sit amet, consectetur',
          decription:
            'adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
          id: 2,
          img_src: require('@/assets/images/blogs/doctor.png'),
          article_img_src: require('@/assets/images/blogs/06.png'),
          name: 'doctor name',
          title: 'Lorem ipsum dolor sit amet, consectetur',
          decription:
            'adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
          id: 3,
          img_src: require('@/assets/images/blogs/doctor.png'),
          article_img_src: require('@/assets/images/blogs/06.png'),
          name: 'doctor name',
          title: 'Lorem ipsum dolor sit amet, consectetur',
          decription:
            'adipiscing elit, sed do eiusmod tempor incididunt adipiscing elit, sed do eiusmod tempor incididunt',
        },
      ],
      comments: [
        {
          id: 1,
          img_src: require('@/assets/images/blogs/comment.png'),
          name: 'user name',
          date: '17/07/2070',
          text: 'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
          id: 2,
          img_src: require('@/assets/images/blogs/comment.png'),
          name: 'user name',
          date: '17/07/2070',
          text: 'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt',
        },
        {
          id: 3,
          img_src: require('@/assets/images/blogs/comment.png'),
          name: 'user name',
          date: '17/07/2070',
          text: 'adipiscing elit, sed do eiusmod tempor incididunt  adipiscing elit, sed do eiusmod tempor incididunt',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.details_blog_page_wrapper {
  .blog_wrapper {
    padding: $main-padding 0;
    // display: flex;
    // justify-content: space-between;
    // gap: 20px;
    .blog_content {
      .titles {
        display: flex;
        justify-content: space-between;
      }
      .description {
        line-height: $line-height-text;
        font-size: 16px;
        margin: 20px 0;
      }
      .blog_img {
        .img {
          max-width: 100%;
        }
      }
      .information {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .doctor_info {
          display: flex;
          gap: 10px;
          .main_booking_wrapper {
            display: flex;
            gap: 10px;
            align-items: center;
            .main_doctor_prices {
              border-radius: 5px;
              border: 2px solid $second-color;
              color: $second-color;
              width: fit-content;
              font-size: 17px;
              font-weight: 500;
              padding: 10px;
            }
          }
          .img_doctor {
            width: 82px;
            height: 82px;
            border-radius: 50%;
          }
          .specialist {
            background-color: rgba(0, 167, 147, 0.23);
            padding: 8px;
            border-radius: 10px;
            margin: 8px 0;
            width: fit-content;
          }
        }
      }
      .comments_wrapper {
        .add_comment {
          margin: 50px 0;
          .add_comment_title {
            margin-bottom: 15px;
            font-size: 18px;
          }
          .button_wrapper {
            display: flex;
            justify-content: end;
          }
        }
        padding: $main-padding 0;
        .main_article_description {
          line-height: $line-height-text;
          font-size: 18px;
          margin: 0;
        }
        .all_users_comments {
          .evry_comment {
            margin-bottom: 25px;
            .user_info {
              display: flex;
              align-items: center;
              margin-bottom: 15px;
              gap: 10px;
              .comment_date {
                font-size: 12px;
              }
            }
            .user_opinion {
              line-height: $line-height-text;

              margin: 0;
            }
          }
        }
      }
    }
    .blog_tags_related {
      flex-grow: 1;
      .blog_tags_wrapper {
        border: 1px solid rgba(0, 167, 147, 0.4);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 10px 0;
        border-radius: 10px;
        margin-bottom: 20px;
        .every_tag {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          margin-bottom: 10px;
          min-width: 30%;
        }
      }
      .related_articles {
        border: 1px solid rgba(0, 167, 147, 0.4);
        padding: 10px 10px 0;
        border-radius: 10px;
        .related_title {
          font-size: 18px;
          margin-bottom: 30px;
        }
        .all_articls {
          .article_wrapper {
            border-bottom: 1px solid rgba(147, 147, 147, 0.24);
            margin-bottom: 20px;
            &:last-of-type {
              border: none;
            }
            .part_one {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
              .details {
                .one {
                  display: flex;
                  gap: 10px;
                }
                .title_two {
                  font-size: 17px;
                  margin: 10px 0;
                }
              }
              .article_description {
                margin: 0;
                line-height: $line-height-text;
              }
            }
          }
        }
      }
    }
  }
}
</style>
