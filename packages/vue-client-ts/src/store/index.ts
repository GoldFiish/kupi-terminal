import Vue from 'vue'
import Vuex from 'vuex'
import AccountModule from '@/store/modules/account'
import AppModule from '@/store/modules/app'
import AsideModule from '@/store/modules/aside'
import CoinModule from '@/store/modules/coin'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    account: AccountModule,
    app: AppModule,
    aside: AsideModule,
    coin: CoinModule
  },
  strict: true
})

export default store
