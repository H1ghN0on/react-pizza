import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'react-router-dom'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'
import { setCategory, setSortBy }  from '../redux/actions/filters'
import { setPizzas, fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart} from '../redux/actions/cart';
function Home() {
  const dispatch = useDispatch();
  const isLoaded = useSelector (({ pizzas }) => {
    return pizzas.isLoaded;
  });

  const { category, sortBy, order } = useSelector (({ filters }) => {
    return filters;
  });
  const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  React.useEffect(() => {
      dispatch(fetchPizzas(sortBy, category, order));
  }, [sortBy, category]);
  const sortItems = [
    {
      name: "популярности",
      type: "popular",
      order: 'desc',
    },
    {
     name: "цене",
     type: "price",
     order: 'desc',
    },
    {
     name: "алфавиту",
     type: "name",
     order: 'asc',
    },
  ]
  const items  = useSelector(({ pizzas }) => {
    return pizzas.items;
  })

  const cartItems  = useSelector(({ cart }) => {
    return cart.items;
  })
  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type));
  }, [])

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj));
  }
  return (
        <div className="container">
          <div className="content__top">
           <Categories activeCategory={category} onClickCategory = {onSelectCategory} items={categoryNames} />
            <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoaded ? items && items.map((obj) => (
            <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={obj.id} isLoaded = {true} {...obj}/>
            )) : Array(12).fill(0).map((_, index) => (<PizzaLoadingBlock key={index} />))}
          </div>
        </div>
    )
}

export default Home
