import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type ProdutoState = {
  produtos: Produto[]
}

const initialState: ProdutoState = {
  produtos: []
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.produtos.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.produtos.push(produto)
      }
    }
  }
})

export const { adicionar } = produtoSlice.actions

export default produtoSlice.reducer
