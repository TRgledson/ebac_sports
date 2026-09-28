import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useGetProdutosQuery as ProdutoType } from '../services/api'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = ProdutoType()
  const favoritos = useSelector((state: RootState) => state.favoritos.produtos)

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={favoritos.some((item) => item.id === produto.id)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
