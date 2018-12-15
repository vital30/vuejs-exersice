<template>
  <div class="LeftNav">
        <div class="App">
            <div class="wrapper">
                <div class="workspace" ref="workspace">
                    <FreeTransform
                          v-for="element in elements"
                            :key="element.id"
                            :x="element.x"
                            :y="element.y"
                            :scale-x="element.scaleX"
                            :scale-y="element.scaleY"
                            :width="element.width"
                            :height="element.height"
                            :angle="element.angle"
                            :offset-x="offsetX"
                            :offset-y="offsetY"
                            :disable-scale="element.disableScale === true"
                            @update="update(element.id,$event)"
                    >
                        <div class="element"
                             :style="getElementStyles(element)">
                            {{element.text}}
                        </div>

                    </FreeTransform>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
import Vue from 'vue';
import FreeTransform from 'vue-free-transform'



export default {
  name: 'LeftNav',
  components: {
    FreeTransform,
  },
   data() {
      return {
        elements: [
          {
            id: "el-1",
            x: 35,
            y: 135,
            scaleX: 1,
            scaleY: 1,
            width: 50,
            height: 50,
            angle: 0,
            classPrefix: "tr",
            styles:{
              border: "1px solid",
              transform:" matrix(1, 1, 2, 0, 35, 24)",
            }
          },
          {
            id: "el-2",
            x: 35,
            y: 250,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 35,
            classPrefix: "tr2",
            styles: {
               margin: "1px -6px",
              position: "relative",
              display: "block",
              width: 0,
              height: 0,
              "border-right": "28px  solid red",
              "border-bottom": "82px  solid red",
              "border-left": "88px  solid red",
            },
          },
          {
            id: "el-3",
            x: 35,
            y: 375,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 100,
            angle: 0,
            classPrefix: "tr2",
            styles: {
              padding: 5,
              width: "100%",
              height: "100%",
              border: "1px solid",
            },
            disableScale: true
          },
          {
            id: "el-4",
            x: 35,
            y: 525,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 50,
            angle: 45,
            classPrefix: "tr3",
            styles:{
              border: "1px solid",
            }
          },
          {
            id: "el-5",
            x: 35,
            y: 625,
            scaleX: 1,
            scaleY: 1,
            width: 100,
            height: 25,
            angle: 0,
            classPrefix: "tr3",
            styles:{
              border: "1px solid",
            }
          }
        ],
        offsetX: 0,
        offsetY: 0
      }
    },
    mounted() {
      this.offsetX = this.$refs.workspace.offsetLeft
      this.offsetY = this.$refs.workspace.offsetTop
    },
    methods: {
      update(id, payload) {
        this.elements = this.elements.map(item => {
          if (item.id === id) {
            return {
              ...item,
              ...payload
            }
          }
          return item
        })
      },
      getElementStyles(element) {
        const styles = element.styles ? element.styles : {}
        return {
          width: `${element.width}px`,
          height: `${element.height}px`,
          ...styles
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .LeftNav {
        width: 174px;
        border-right: 1px solid;
        display: inline-block;
    }

    .wrapper {
        flex: 1;
    }

    .workspace {
        width: 1024px;
         height: 802px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.10);
        border: 1px solid rgba(0, 0, 0, 0.10);
        background: #fff;

    }

    * {
        box-sizing: border-box;
    }

    .tr-transform__content {
        user-select: none;
    }

    .tr-transform__rotator {
        top: -45px;
        left: calc(50% - 7px);
    }

    .tr-transform__rotator,
    .tr-transform__scale-point {
        background: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .tr-transform__rotator:hover,
    .tr-transform__scale-point:hover {
        background: #F1F5F8;
    }

    .tr-transform__rotator:active,
    .tr-transform__scale-point:active {
        background: #DAE1E7;
    }

    .tr-transform__scale-point {

    }

    .tr-transform__scale-point--tl {
        top: -7px;
        left: -7px;
    }

    .tr-transform__scale-point--ml {
        top: calc(50% - 7px);
        left: -7px;
    }

    .tr-transform__scale-point--tr {
        left: calc(100% - 7px);
        top: -7px;
    }

    .tr-transform__scale-point--tm {
        left: calc(50% - 7px);
        top: -7px;
    }

    .tr-transform__scale-point--mr {
        left: calc(100% - 7px);
        top: calc(50% - 7px);
    }

    .tr-transform__scale-point--bl {
        left: -7px;
        top: calc(100% - 7px);
    }

    .tr-transform__scale-point--bm {
        left: calc(50% - 7px);
        top: calc(100% - 7px);
    }

    .tr-transform__scale-point--br {
        left: calc(100% - 7px);
        top: calc(100% - 7px);
    }

</style>