import React from 'react';
import styles from './ShoppingCart.module.scss';
import ProgressBar from '../progressBar/progressBar';
import State1 from './States/State1';
import State2 from './States/State2';
import State3 from './States/State3';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeState } from '../../Slices/CartSlice';

export default function ShoppingCart() {
  const dispatch = useDispatch();

  // Use useSelector to access the relevant piece of state
  const activeStateId = useSelector((state) => state.Cart.State);
  const states = [
    { id: 1, title: 'سبد خرید', active: true, component: State1 },
    { id: 2, title: 'تایید و پرداخت ', active: false, component: State2 },
    { id: 3, title: 'ثبت نهایی ', active: false, component: State3 },
  ];

  // Find the active state using the activeStateId
  const activeState = states.find((state) => state.id === activeStateId);

  const handleChangeState = (id) => {
    // Dispatch the action to change the state
    dispatch(ChangeState(id));
  };

  return (
    <>
      <ProgressBar />
      {activeState && <activeState.component changeState={handleChangeState} />}
    </>
  );
}
