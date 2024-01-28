import React, { useEffect, useState } from 'react';
import styles from './ShoppingCart.module.scss';
import ProgressBar from '../progressBar/progressBar';
import State1 from './States/State1';
import State2 from './States/State2';
import State3 from './States/State3';
import { useSelector, useDispatch } from 'react-redux';
import Requests from '../../API/Requests';
import Empty from './States/Empty';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchInvoice = async () => {
    try {
      const res = await Requests().getInvoice();
      setCart(res.data.data.invoiceItems);
      setTotalPrice(res.data.data.totalPrice);

    } catch (error) {
      console.error('Error fetching invoice:', error);
    } finally {
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, []);

  const dispatch = useDispatch();
  const [activeStateId, setActiveStateId] = useState(1);
  const states = [
    { id: 1, title: 'سبد خرید', active: true, component: State1 },
    { id: 2, title: 'تایید و پرداخت ', active: false, component: State2 },
    { id: 3, title: 'ثبت نهایی ', active: false, component: State3 },
  ];
  const [total, setTotal] = React.useState()
  const [discount, setDiscount] = React.useState()

  const activeState = states.find((state) => state.id === activeStateId);

  const handleChangeState = (id) => {
    setActiveStateId(id);
  };

  return (
    <React.Fragment>
      {
        cart?.length == 0 ? <Empty/> : 
        activeState && React.createElement(activeState.component, { changeState: handleChangeState, Cart: cart, TotalPrice: totalPrice , total: total, setTotal: setTotal, discount: discount, setDiscount : setDiscount })
      }
    </React.Fragment>
  );
}
