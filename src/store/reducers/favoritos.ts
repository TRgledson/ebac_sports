import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  produtos: Produto[]
}

const initialState: FavoritosState = {
  produtos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.produtos.find((p) => p.id === action.payload.id)) {
        state.produtos = state.produtos.filter((p) => p.id !== produto.id)
      } else {
        state.produtos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
