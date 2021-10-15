<template>
  <div>
    <v-data-table
      color="yellow"
      :headers="headers"
      :items="categoryList2"
      :items-per-page="5"
      class="v-table">
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>New table</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">formTitle</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.date"
                        label="date"
                        prepend-icon="mdi-calendar"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.category"
                        label="category"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.value"
                        label="value"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// import ContextMenu from '@/components/ContextMenu'
import { mapState } from 'vuex'
export default {
  name: 'VTable',
  data () {
    return {
      dialog: false,
      dialogDelete: false,
      activeID: null,
      editedIndex: -1,
      editedItem: {
      },
      defaultItem: {
      },
      headers: [
        {
          text: 'id',
          align: 'start',
          sortable: false,
          value: 'id'
        },
        { text: 'Date', value: 'date' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'value' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  components: {
    // ContextMenu
  },
  props: ['list'],
  computed: {
    ...mapState(['activeList', 'activeList2', 'categoryList2'])
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },
  mounted () {
    this.$modal.EventBus.$on('shown', this.onShown)
    this.$modal.EventBus.$on('hide', this.onHide)
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.categoryList2.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.categoryList2.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.categoryList2.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      this.editedItem.id = this.categoryList2.length + 1
      if (this.editedIndex > -1) {
        Object.assign(this.categoryList2[this.editedIndex], this.editedItem)
      } else {
        this.categoryList2.push(this.editedItem)
      }
      this.close()
    },
    onShown (params) {
      this.activeID = params.id
      // this.activeID = null
    },
    onHide () {
      this.activeID = null
    },
    settingHandler (params) {
      // this.$modal.show(params)
      this.activeID = params.id
    }
  }
}
</script>

<style lang="scss">
.v-table{
  min-height: 300px;
  max-width: 1024px;
  margin: 50px auto;
  color: rgba(0, 163, 255, 0.9);
  font-family: sans-serif;
  transition: 0.3s;
  &:hover{
    transition: 0.3s;
    transform: scale(1.01);
    box-shadow: 1px 2px 10px rgba(0, 163, 255, 0.2);
  }
  &__container{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  &__row{
    padding: 15px 5px;
    display: flex;
    width: 100%;
    //border-bottom: 1px solid #000;
  }
  &__col{
    position: relative;
    width: 25%;
    &_dark {
      font-weight: bold;
    }
  }
  &__points {
    cursor: pointer;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
