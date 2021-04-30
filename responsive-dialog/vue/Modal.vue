<template functional>
  <transition name="modal">
    <div class="modal-mask" v-if="props.isModalVisible">
      <div class="modal-wrapper">
        <div class="modal-container rounded-t-2xl xl:rounded-xl xl:shadow-2xl">
          <button class="w-full text-center xl:hidden" @click="listeners['update:isModalVisible'](false)">
            <span class="bg-gray-200 w-8 h-1 rounded-2xl inline-block"></span>
          </button>
          <div class="modal-header">
            <slot name="header">
                <button class="modal-default-button hidden xl:block" @click="listeners['update:isModalVisible'](false)">
                    x
                </button>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(252 186 116 / 90%);
  display: table;
  transition: opacity 0.3s ease;
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: bottom;
}

.modal-container {
  margin: 0 auto;
  background-color: #fff;
  transition: all 0.5s ease;
  max-height: calc(100vh);
  overflow-y: auto;
  padding: 20px 20px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0
}

.modal-leave-to {
  opacity: 0
}

.modal-leave-active,
.modal-enter-active {
  transition:  1s;
}


.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: translate(0, 100%);
}

@media screen and (min-width: 1280px){
  .modal-wrapper {
    vertical-align: middle;
  }
  .modal-body {
    margin: 20px 0;
  }
  .modal-container {
    max-width: 800px;
    transition: all 0.5s ease;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
