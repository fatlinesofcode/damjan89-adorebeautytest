<template>
  <div>
    <template v-for="(item, ind) in $store.state.categories.categories">
      <span class="cursorPointer" @click="filterByCategory(item.id)"
            :key="ind" v-if="item.is_visible">{{item.name}}
        <span v-if="ind < $store.state.categories.categories.length-1"> | </span>
      </span>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ListCategories',
  data() {
    return {

    }
  },
  methods: {
    filterByCategory(categoryId) {
      this.$emit('changeCategory', categoryId)
    }
  }
}
</script>
